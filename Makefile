

TAG=$(shell git describe --abbrev=0)
COMMIT=$(shell git rev-parse --short HEAD)
MOMENT=$(shell date +'%Y%m%d-%H%M')
VERSION=$(COMMIT)-$(MOMENT)

# for the functions emulator google apis / not related to firebase
# export GOOGLE_APPLICATION_CREDENTIALS=/Users/xfhg/Code/production/xpert/xpert.id/functions/nlpapi-xpert-id-c20ed255e9b4.json
# migrate to https://taskfile.dev/#/ someday


tag: 
	sed -i '' "s/version.*/version:'$(VERSION)'/g" src/config/xpert.js
	sed -i '' "s/const\ LATEST_VERSION\ \=\ \'.*/const\ LATEST_VERSION\ \=\ '$(VERSION)'/g" src/sw.js
	echo $(VERSION) > seed/production/latest

prod: tag getsystem setsystem
	yarn run build
	firebase deploy -m full

prod-minor:
	yarn run build
	firebase deploy -m full

prod-fast: 
	yarn run build
	firebase deploy --except=functions -m nofunctions

prod-functions: 
	firebase deploy --only=functions

cloudflare:
	cloudflared tunnel --hostname lab.maphia.net http://localhost:8080 

serve-app:
	yarn run serve --port 8080 

serve-functions:
	firebase serve --only functions

dapp:
	ipfs-deploy dist/ -d cloudflare

chan:
	yarn run build
	firebase hosting:channel:deploy temp

emu:
	firebase emulators:start --import=./seed/saved-data --export-on-exit

emu-kill:
	lsof -ti :4400 | xargs kill

wutversion:
	cat src/config/xpert.js
	LIVE=$(shell cat seed/production/live)
	LATEST=$(shell cat seed/production/latest)
	EMU=$(shell cat seed/production/emulator)

# https://github.com/jloosli/node-firestore-import-export

getsystem: wutversion
	firestore-export --accountCredentials credentials/xpert-id.json --backupFile seed/production/live.system.json -p --nodePath system/$(shell cat seed/production/live)

setsystem: 
	firestore-import --accountCredentials credentials/xpert-id.json --backupFile seed/production/latest.system.json --nodePath system/$(shell cat seed/production/latest)
	echo $(shell cat seed/production/latest) > seed/production/live


emugetsystem: wutversion
	FIRESTORE_EMULATOR_HOST="localhost:8088" firestore-export --accountCredentials credentials/xpert-id.json --backupFile seed/production/emulator.system.json -p --nodePath system/$(shell cat seed/production/emulator)

emusetsystem: 
	FIRESTORE_EMULATOR_HOST="localhost:8088" firestore-import --accountCredentials credentials/xpert-id.json --backupFile seed/production/latest.system.json --nodePath system/$(shell cat seed/production/latest)
	echo $(shell cat seed/production/latest) > seed/production/emulator




	
