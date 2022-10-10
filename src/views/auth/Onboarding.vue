<template>
  <div style="min-height: 500px">
    <v-row no-gutters>
      <v-col sm="12" md="12">
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="50px"
        ></v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="8" class="d-flex align-center justify-center">
        <div class="text-h3 mb-10">
          Welcome {{ xpert.data.profile.displayName }}
        </div>
      </v-col>
      <v-col cols="2"></v-col
    ></v-row>
    <v-expand-transition>
      <v-row no-gutters>
        <v-col cols="0" sm="2" md="3"></v-col>
        <v-col cols="12" sm="8" md="6" class="">
          <ValidationObserver
            ref="formInvite"
            v-slot="{ invalid, valid, handleSubmit }"
          >
            <v-form class="mt-5" ref="formInvite" v-on:submit.prevent>
              <div
                v-show="!onboardUnlocked"
                class="mb-5 text-overline text-center"
                style="color: gray"
              >
                Fill in your invite code
              </div>

              <v-row no-gutters>
                <v-col
                  class="d-flex align-center justify-center px-5"
                  cols="12"
                  sm="12"
                  md="2"
                ></v-col>
                <v-col
                  class="d-flex align-top justify-center px-5"
                  cols="12"
                  sm="12"
                  md="8"
                >
                  <ValidationProvider
                    name="XPERT INVITE"
                    rules="alpha_num|required"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      :disabled="onboardUnlocked"
                      v-model="system.temp.invite"
                      :error-messages="errors"
                      :valid="valid"
                      hint="Invite code is case sensitive"
                      class=""
                      maxlength="32"
                      :loading="checkingInvite"
                      color="#32e0c4"
                    ></v-text-field>
                  </ValidationProvider>

                  <v-btn
                    :disabled="invalid || !valid || onboardUnlocked"
                    color="#32e0c4"
                    @click="handleSubmit(validateInvite)"
                    x-large
                    :loading="checkingInvite"
                    elevation="5"
                    rounded
                    class=""
                  >
                    Verify
                    <v-icon dark right>mdi-check</v-icon>
                  </v-btn>
                </v-col>
                <v-col
                  class="d-flex align-center justify-center px-5"
                  cols="12"
                  sm="12"
                  md="2"
                ></v-col>
              </v-row>
            </v-form>
          </ValidationObserver>
        </v-col>
        <v-col cols="0" sm="2" md="3"></v-col>
      </v-row>
    </v-expand-transition>
    <v-sheet
      class="d-flex mb-10"
      color="transparent"
      min-height="20px"
    ></v-sheet>
    <!-- <v-row>
      <v-col cols="4"></v-col>
      <v-col cols="4" class="d-flex align-center justify-center">
        <finger-svg width="400px" style="margin-bottom: -75px"></finger-svg>
      </v-col>
      <v-col cols="4"></v-col
    ></v-row> -->
    <v-expand-transition>
      <v-sheet v-show="onboardUnlocked" color="#fff">
        <vue-diagonal :deg="-2" background="#f6f9fc" space-before>
          <v-sheet color="transparent" min-height="50px"></v-sheet>
          <v-row>
            <v-col cols="0" sm="2" md="3" xl="3"></v-col>
            <v-col cols="12" sm="8" md="6" xl="6">
              <ValidationObserver
                ref="formProfile"
                v-slot="{ invalid, valid, handleSubmit }"
              >
                <v-form
                  class="mt-1"
                  ref="formProfile"
                  v-model="validProfile"
                  v-on:submit.prevent
                >
                  <v-card
                    class="elevation-0 mx-auto mb-10 pa-5"
                    color="transparent"
                  >
                    <v-row no-gutters class="mb-10">
                      <v-col class cols="12" sm="12" md="12">
                        <div class="text-overline text-right">
                          You're looking great today !
                        </div>
                        <div class="mb-3 text-overline text-left">
                          Drop us your picture below :
                        </div>
                        <v-form
                          class="my-5"
                          ref="form"
                          v-model="fileform"
                          lazy-validation
                        >
                          <file-pond
                            name="test"
                            ref="pond"
                            class-name="my-pond"
                            label-idle="Drag and drop your profile picture here or click to browse.."
                            v-bind:allow-image-resize="true"
                            v-bind:allow-multiple="false"
                            v-bind:allow-replace="true"
                            imageResizeTargetWidth="500"
                            imageResizeTargetHeight="500"
                            max-file-size="5MB"
                            max-files="1"
                            imageCropAspectRatio="1:1"
                            imageResizeMode="contain"
                            imageTransformOutputMimeType="image/png"
                            accepted-file-types="image/jpeg, image/png"
                            v-bind:file-rename-function="fileRenameFunction"
                            v-bind:files="newProfilePic"
                            v-bind:server="fileUpload"
                          />
                        </v-form>
                      </v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="12">
                        <div class="mb-3 text-overline text-center">
                          how should we address you ?
                        </div>
                        <ValidationProvider
                          name="Profile Display Name"
                          rules="alpha_spaces|required"
                          v-slot="{ errors, valid }"
                        >
                          <v-text-field
                            class="mb-0"
                            v-model="xpert.data.profile.displayName"
                            label="Profile Display Name"
                            :disabled="!onboardUnlocked"
                            :error-messages="errors"
                            :valid="valid"
                            solo
                            maxlength="64"
                            color="#32e0c4"
                            append-icon="mdi-account-circle"
                          ></v-text-field>
                        </ValidationProvider>
                      </v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="12">
                        <div class="mb-3 text-overline text-center">
                          What is your current main profession ?
                        </div>

                        <ValidationProvider
                          name="Role"
                          rules="alpha_spaces|required"
                          v-slot="{ errors, valid }"
                        >
                          <v-text-field
                            class="mb-5"
                            v-model="xpert.data.profile.currentRole"
                            label="Profession"
                            :disabled="!onboardUnlocked"
                            :error-messages="errors"
                            :valid="valid"
                            maxlength="64"
                            solo
                            color="#32e0c4"
                            append-icon="mdi-briefcase"
                          ></v-text-field>
                        </ValidationProvider>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class cols="12" sm="12" md="6">
                        <div class="mb-3 text-overline text-center">
                          Your Location
                        </div>
                        <ValidationProvider
                          name="Location"
                          rules="required"
                          v-slot="{ errors, valid }"
                        >
                          <!-- <v-autocomplete
                        class="mb-0"
                        v-model="xpert.data.profile.location"
                        :items="system.location"
                        clearable
                        outlined
                        dark
                        :error-messages="errors"
                        :valid="valid"
                        label="Location"
                        color="#32e0c4"
                        prepend-inner-icon="mdi-map-marker"
                      ></v-autocomplete> -->
                          <v-autocomplete
                            class="mb-0"
                            v-model="xpert.data.profile.location"
                            :items="system.countries"
                            clearable
                            chips
                            solo
                            color="#32e0c4"
                            :disabled="!onboardUnlocked"
                            :error-messages="errors"
                            :valid="valid"
                            item-text="name"
                            return-object
                            prepend-inner-icon="mdi-earth"
                            label="Location"
                          >
                            <template v-slot:selection="data">
                              <v-chip
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                outlined
                              >
                                <v-avatar left>
                                  {{ data.item.emoji }}
                                </v-avatar>
                                {{ data.item.name }}
                              </v-chip>
                            </template>
                            <template v-slot:item="data">
                              <template>
                                <v-list-item-avatar>
                                  {{ data.item.emoji }}
                                </v-list-item-avatar>
                                <v-list-item-content>
                                  <v-list-item-title
                                    v-html="data.item.name"
                                  ></v-list-item-title>
                                  <v-list-item-subtitle
                                    v-html="data.item.native"
                                  ></v-list-item-subtitle>
                                </v-list-item-content>
                              </template>
                            </template>
                          </v-autocomplete>
                        </ValidationProvider>
                      </v-col>

                      <v-col class cols="12" sm="12" md="6">
                        <div class="mb-3 text-overline text-center">
                          fluent in
                        </div>
                        <ValidationProvider
                          name="Languages"
                          rules="required"
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            :items="system.languages"
                            v-model="xpert.data.profile.languages"
                            clearable
                            chips
                            multiple
                            :disabled="!onboardUnlocked"
                            :error-messages="errors"
                            :valid="valid"
                            item-text="name"
                            return-object
                            solo
                            :search-input.sync="searchInputlanguages"
                            @change="searchInputlanguages = ''"
                            prepend-inner-icon="mdi-translate"
                            label="Languages"
                          >
                            <template v-slot:selection="data">
                              <v-chip
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                outlined
                              >
                                {{ data.item.name }}
                              </v-chip>
                            </template>
                            <template v-slot:item="data">
                              <template>
                                <v-list-item-avatar>
                                  <language-icon
                                    stroke-width="1"
                                  ></language-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                  <v-list-item-title
                                    v-html="data.item.name"
                                  ></v-list-item-title>
                                  <v-list-item-subtitle
                                    v-html="data.item.native"
                                  ></v-list-item-subtitle>
                                </v-list-item-content>
                              </template>
                            </template>
                          </v-autocomplete>
                        </ValidationProvider>
                      </v-col>
                    </v-row>
                  </v-card>

                  <v-row no-gutters>
                    <v-col
                      class="d-flex align-center justify-center mb-5 px-5"
                      cols="12"
                      sm="12"
                      md="2"
                    ></v-col>
                    <v-col
                      class="d-flex align-center justify-center mb-5 px-5"
                      cols="12"
                      sm="12"
                      md="8"
                    >
                      <v-btn
                        :disabled="invalid || !valid || onboardSubmitted"
                        color="#32e0c4"
                        @click="handleSubmit(validateProfile)"
                        rounded
                        x-large
                        :loading="loading"
                        elevation="5"
                        class="mt-10"
                      >
                        Create my XPERT.ID
                        <fingerprint-icon class="ml-5"></fingerprint-icon>
                      </v-btn>
                    </v-col>
                    <v-col
                      class="d-flex align-center justify-center mb-5 px-5"
                      cols="12"
                      sm="12"
                      md="2"
                    ></v-col>
                  </v-row>
                </v-form>
              </ValidationObserver>
            </v-col>
            <v-col cols="0" sm="2" md="3" xl="3"></v-col>
          </v-row>

          <v-sheet
            class="d-flex mb-10"
            color="transparent"
            min-height="25px"
          ></v-sheet>

          <v-expand-transition>
            <v-sheet
              class="d-flex justify-center"
              color="transparent"
              v-show="onboardSubmitted"
            >
              <scroll-down v-show="onboardSubmitted"></scroll-down>
            </v-sheet>
          </v-expand-transition>
          <v-expand-transition>
            <v-sheet
              class="d-flex justify-center"
              color="transparent"
              v-show="onboardSubmitted"
            >
              <div
                v-show="onboardSubmitted"
                class="text-overline text-center mt-5"
                style="color: #39444b"
              >
                scroll down
              </div>
            </v-sheet>
          </v-expand-transition>

          <v-sheet
            class="d-flex mb-10"
            color="transparent"
            min-height="10px"
          ></v-sheet>
        </vue-diagonal>
      </v-sheet>
    </v-expand-transition>
    <vue-diagonal :deg="-2" background="#f9fbfd" space-after>
      <v-row no-gutters>
        <v-col cols="0" sm="0" md="3"></v-col>
        <v-col cols="0" sm="12" md="6" class="pa-5">
          <div
            v-show="!onboardUnlocked"
            class="my-5 text-button text-center"
            style="color: black"
          >
            XPERT.ID IS AN INVITE ONLY NETWORK
          </div>
        </v-col>

        <v-col cols="0" sm="0" md="3"></v-col>
      </v-row>
    </vue-diagonal>

    <v-row no-gutters>
      <v-col cols="0" sm="3" md="3"></v-col>
      <v-col cols="0" sm="6" md="6" class="pa-5 my-10">
        <div class="text-h4 mb-10 text-center">
          Growth Enablement Platform ?
        </div>

        <div class="text-body-2 text-justify">
          XPERT ID enables you to quickly brainstorm any bit of knowledge with
          fellow passionate humans. Explore knowledge chains and participate in
          private 1on1 insightful discussions without the common internet noise.
        </div>
      </v-col>
      <v-col cols="0" sm="3" md="3"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="0" sm="1" md="3"></v-col>
      <v-col cols="12" sm="5" md="3" class="pa-5 my-10">
        <div class="text-h5 mb-10">
          <activity-icon class="mr-1"></activity-icon> Knowledge Bits
        </div>
        <div class="text-body-2 text-justify">
          Now that there is the Tec-9, a crappy spray gun from South Miami. This
          gun is advertised as the most popular gun in American crime. Do you
          believe that shit? It actually says that in the little book that comes
          with it: the most popular gun in American crime. Like they're actually
          proud of that shit.
        </div>
      </v-col>
      <v-col cols="12" sm="5" md="3" class="pa-5 my-10"
        ><div class="text-h5 mb-10">
          <activity-icon class="mr-1"></activity-icon> Knowledge Chains
        </div>

        <div class="text-body-2 text-justify">
          Well, the way they make shows is, they make one show. That show's
          called a pilot. Then they show that show to the people who make shows,
          and on the strength of that one show they decide if they're going to
          make more shows. Some pilots get picked and become television
          programs. Some don't, become nothing. She starred in one of the ones
          that became nothing.
        </div>
      </v-col>
      <v-col cols="0" sm="1" md="3"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="0" sm="1" md="3"></v-col>
      <v-col cols="12" sm="5" md="3" class="pa-5 my-10">
        <div class="text-h5 mb-10">Collaborate</div>
        <div class="text-body-2 text-justify">
          Well, the way they make shows is, they make one show. That show's
          called a pilot. Then they show that show to the people who make shows,
          and on the strength of that one show they decide if they're going to
          make more shows. Some pilots get picked and become television
          programs. Some don't, become nothing. She starred in one of the ones
          that became nothing.
        </div>
      </v-col>
      <v-col cols="12" sm="5" md="3" class="pa-5 my-10"
        ><div class="text-h5 mb-10">Network</div>

        <div class="text-body-2 text-justify">
          Well, the way they make shows is, they make one show. That show's
          called a pilot. Then they show that show to the people who make shows,
          and on the strength of that one show they decide if they're going to
          make more shows. Some pilots get picked and become television
          programs. Some don't, become nothing. She starred in one of the ones
          that became nothing.
        </div>
      </v-col>
      <v-col cols="0" sm="1" md="3"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="0" sm="1" md="3"></v-col>
      <v-col cols="12" sm="5" md="3" class="pa-5 my-10">
        <div class="text-h5 mb-10">
          <v-icon left>mdi-plus</v-icon>Not Another
        </div>
        <div class="text-body-2 text-justify">
          This is not another Slack / Discord / Patreon / Clubhouse where value
          is ephemeral and Guru Spam is king.
        </div>
      </v-col>
      <v-col cols="12" sm="5" md="3" class="pa-5 my-10"
        ><div class="text-h5 mb-10"><v-icon left>mdi-plus</v-icon>Grow</div>

        <div class="text-body-2 text-justify">
          Now that there is the Tec-9, a crappy spray gun from South Miami. This
          gun is advertised as the most popular gun in American crime. Do you
          believe that shit? It actually says that in the little book that comes
          with it: the most popular gun in American crime. Like they're actually
          proud of that shit.
          <!-- <v-chip
            class="ma-2"
            color="pink"
            label
            text-color="white"
          >
            <v-icon left> mdi-twitter </v-icon>
            comming soon
          </v-chip> -->
        </div>
      </v-col>
      <v-col cols="0" sm="1" md="3"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="0" sm="1" md="3"></v-col>
      <v-col cols="12" sm="5" md="" class="pa-5 my-10">
        <div class="text-h5 mb-10"><v-icon left>mdi-plus</v-icon>Iterate</div>
        <div class="text-body-2 text-justify">
          Well, the way they make shows is, they make one show. That show's
          called a pilot. Then they show that show to the people who make shows,
          and on the strength of that one show they decide if they're going to
          make more shows. Some pilots get picked and become television
          programs. Some don't, become nothing. She starred in one of the ones
          that became nothing.
        </div>
      </v-col>
      <v-col cols="12" sm="5" md="3" class="pa-5 my-10"
        ><div class="text-h5 mb-10"><v-icon left>mdi-plus</v-icon>Succeed</div>

        <div class="text-body-2 text-justify">
          Well, the way they make shows is, they make one show. That show's
          called a pilot. Then they show that show to the people who make shows,
          and on the strength of that one show they decide if they're going to
          make more shows. Some pilots get picked and become television
          programs. Some don't, become nothing. She starred in one of the ones
          that became nothing.
        </div>
      </v-col>
      <v-col cols="0" sm="1" md="3"></v-col>
    </v-row>

    <v-sheet
      class="d-flex mb-10"
      color="transparent"
      min-height="50px"
    ></v-sheet>
    <v-row no-gutters>
      <v-col cols="0" sm="1" md="3"></v-col>
      <v-col cols="0" sm="10" md="6" class="px-5">
        <!-- <div class="text-h3 mb-10">My Dashboard</div> -->

        <div class="text-body-2 text-justify">
          Do you believe that shit? It actually says that in the little book
          that comes with it: the most popular gun in American crime. Like
          they're actually proud of that shit.
        </div>
      </v-col>
      <v-col cols="0" sm="1" md="3"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="0" sm="1" md="3"></v-col>
      <v-col
        cols="0"
        sm="10"
        md="6"
        class="d-flex align-center justify-center my-15 px-5"
      >
        <v-btn
          v-show="onboardSubmitted"
          elevation="5"
          color="#32e0c4"
          rounded
          x-large
          @click="completeOnboarding"
        >
          Take me to my Dashboard
          <checks-icon class="ml-5"></checks-icon>
        </v-btn>
      </v-col>
      <v-col cols="0" sm="1" md="3"></v-col>
    </v-row>

    <v-sheet
      class="d-flex mb-10"
      color="transparent"
      min-height="20px"
    ></v-sheet>

    <ValidationObserver
      ref="formSubscribe"
      v-slot="{ invalid, valid, handleSubmit }"
    >
      <v-form
        v-show="!onboardUnlocked"
        class="mt-5"
        ref="formSubscribe"
        v-on:submit.prevent
      >
        <div class="text-h3 mb-10 text-center">Looking for an Invite ?</div>

        <v-row no-gutters>
          <v-col class="mb-5" cols="12" sm="3" md="3"></v-col>
          <v-col class="mb-5" cols="12" sm="6" md="6">
            <div class="text-body-2 text-justify mb-5 px-5">
              Do you believe that shit? It actually says that in the little book
              that comes with it: the most popular gun in American crime. Like
              they're actually proud of that shit.
            </div>
            <ValidationProvider
              name="Onboarding Pitch"
              rules="required"
              v-slot="{ errors, valid }"
            >
              <v-textarea
                class="mb-0 px-5"
                solo
                auto-grow
                label="Your Elevator Pitch"
                placeholder="Be brief, persuasive and spark interest about yourself, your ideas, your projects, your goals..."
                hint="Your pitch will be peer reviewed and you'll be sent an invite after sparking the interest of 10 fellow xperts"
                persistent-hint
                :error-messages="errors"
                :valid="valid"
                maxlength="500"
                counter
                value=""
                v-model="system.data.template.user.onboarding.pitch"
              >
              </v-textarea>
            </ValidationProvider>
          </v-col>
          <v-col class="mb-5" cols="12" sm="3" md="3"></v-col>
        </v-row>

        <v-row no-gutters>
          <v-col class="mb-5" cols="12" sm="3" md="3"></v-col>
          <v-col class cols="12" sm="6" md="6">
            <ValidationProvider
              name="Sector"
              rules="required|array_maxlength_5"
              v-slot="{ errors, valid }"
            >
              <v-autocomplete
                v-model="system.data.template.user.onboarding.sectors"
                :items="system.data.internal.sectors"
                solo
                chips
                hide-no-data
                multiple
                persistent-hint
                hint="Sectors that define your experience"
                :error-messages="errors"
                :valid="valid"
                label="Your Industry Sectors"
                item-text="name"
                return-object
                clearable
                class="px-5 mb-5"
                :search-input.sync="searchInputsectors"
                @change="searchInputsectors = ''"
              >
                <template v-slot:selection="data">
                  <v-chip
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    outlined
                  >
                    <v-avatar left>
                      <chart-arcs-icon stroke-width="1" />
                    </v-avatar>
                    <span class="mx-2"> {{ data.item.name }}</span>
                  </v-chip>
                </template>
                <template v-slot:item="data">
                  <chart-arcs-icon class="mr-2" stroke-width="0.5" />

                  <v-list-item-content>
                    <v-list-item-title
                      v-html="data.item.name"
                    ></v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </ValidationProvider>
          </v-col>
          <v-col class="mb-5" cols="12" sm="3" md="3"></v-col>
        </v-row>
        <v-expand-transition>
          <div v-if="pitch">
            <v-row no-gutters>
              <v-col class="mb-5" cols="12" sm="3" md="3"></v-col>
              <v-col
                class="d-flex align-top justify-center px-5"
                cols="12"
                sm="6"
                md="6"
              >
                <v-btn
                  :disabled="invalid || !valid || onboardUnlocked"
                  color="#32e0c4"
                  @click="handleSubmit(validatePitch)"
                  x-large
                  elevation="5"
                  rounded
                  class=""
                  :loading="submittingPitch"
                >
                  Join the Lounge
                  <v-icon dark right>mdi-glass-cocktail</v-icon>
                </v-btn></v-col
              >
              <v-col class="mb-5" cols="12" sm="3" md="3"></v-col>
            </v-row>
          </div>
        </v-expand-transition>
      </v-form>
    </ValidationObserver>

    <v-sheet
      class="d-flex mb-10"
      color="transparent"
      min-height="200px"
    ></v-sheet>
  </div>
</template>
<script>
  import ScrollDown from '@/components/spare/ScrollDown'

  // import MindCleanSvg from '@/assets/svg/core/mind_clean.svg'
  // import MissionSvg from '@/assets/svg/core/mission.svg'

  import store from '@/store'
  import { mapState } from 'vuex'
  import { get } from 'vuex-pathify'

  import { DateTime } from 'luxon'

  import vueFilePond from 'vue-filepond'

  import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
  import FilePondPluginImageResize from 'filepond-plugin-image-resize'
  import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
  import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
  import FilePondPluginFileRename from 'filepond-plugin-file-rename'

  import 'filepond/dist/filepond.min.css'
  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
  // Create FilePond component
  const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize,
    FilePondPluginImageResize,
    FilePondPluginImageTransform,
    FilePondPluginFileRename,
    FilePondPluginImagePreview
  )

  export default {
    data: () => ({
      myZoneName: DateTime.local().zoneName,
      invitedBy: '',
      validProfile: false,
      infoProfile: true,
      onboardSubmitted: false,
      onboardUnlocked: false,
      checkingInvite: false,

      searchInputlanguages: null,
      searchInputsectors: null,

      submittingPitch: false,
      pitch: true,

      newProfilePic: [],
      fileform: null,
      fileUpload: {
        process: (field, file, metadata, load) => {
          store
            .dispatch('user/uploadProfilePictureAction', {
              file: file,
            })
            .then(function () {
              load()
            })
        },
        revert: () => {},
      },

      fileRenameFunction: (file) => {
        return `profile${file.extension}`
      },
    }),
    components: { FilePond, ScrollDown },

    computed: {
      error: get('status@error'),
      message: get('status@message'),
      loading: get('status@loading'),
      ...mapState(['auth', 'user', 'system', 'xpert']),
    },
    created() {
      // store.dispatch('system/bindData')
    },
    mounted() {
      this.$nextTick(function () {
        this.invitedBy = this.user.data.invitedBy || ''
        if (this.invitedBy.length > 0) {
          this.onboardUnlocked = true
        }
      })
    },

    methods: {
      reset() {
        this.$refs.form.reset()
      },
      validatePitch() {
        if (this.$refs.formSubscribe.validate()) {
          this.submittingPitch = !this.submittingPitch
          const inviteMe = {
            uuid: this.auth.uid,
            time: this.auth.time,
            votes: 0,
            invited: false,
            timezone: this.myZoneName,
            pitch: this.system.data.template.user.onboarding.pitch,
            sectors: this.system.data.template.user.onboarding.sectors,
          }
          store
            .dispatch('xpert/xpertInvitePitch', {
              data: inviteMe,
            })
            .then(() => {
              store.dispatch('triggerNotification', {
                type: 'success',
                message: 'Pitch submitted',
              })
              this.submittingPitch = !this.submittingPitch
              this.pitch = !this.pitch
            })
        }
      },
      validateProfile() {
        if (this.$refs.formProfile.validate()) {
          //
          const profile = this.xpert.data.profile

          store.dispatch('xpert/backendUpstreamUpdateAction', {
            data: { profile: profile },
            collection: 'xperts',
          })

          this.onboardSubmitted = true
        }
      },
      validateInvite() {
        if (this.$refs.formInvite.validate()) {
          //

          const invite = this.system.temp.invite
          this.checkingInvite = !this.checkingInvite
          store
            .dispatch('xpert/xpertCheckInvite', {
              invite: invite,
            })
            .then((data) => {
              if (!data.data.error) {
                this.onboardUnlocked = true
                this.invitedBy = this.system.temp.invite
                store.dispatch('user/backendUpstreamUpdateAction', {
                  data: {
                    invitedBy: this.invitedBy,
                  },
                  collection: 'users',
                })

                store.dispatch('triggerNotification', {
                  type: 'success',
                  message: 'Invite is valid',
                })
              } else {
                this.onboardUnlocked = false
                store.set('system/temp@onboarding', {})
                store.dispatch('triggerNotification', {
                  type: 'error',
                  message: 'Invite is not valid',
                })
              }
              this.checkingInvite = !this.checkingInvite
              // console.log(data)
            })
        }
      },
      completeOnboarding() {
        store
          .dispatch('user/backendUpstreamUpdateAction', {
            data: {
              onboarded: true,
              username: this.auth.uid.slice(0, 7).toLowerCase(),
              invite: this.auth.uid.slice(6, 12),
              invitedBy: this.invitedBy,
            },
            collection: 'users',
          })
          .then(function () {
            store
              .dispatch('xpert/bindData')
              .then(function () {
                store
                  .dispatch('user/bindData')
                  .then(function () {
                    store.dispatch('pushRoute', 'dashboard')
                  })
                  .catch(function (error) {
                    console.log(error)
                  })
              })

              .catch(function (error) {
                console.log(error)
              })
          })
          .catch(function (error) {
            console.log(error)
          })
      },
    },
  }
</script>


<style >
  .filepond--credits {
    display: none;
  }
  .filepond--drop-label {
    border-radius: 5px;
    background: white;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }
  .filepond--panel {
    border-radius: 5px;
    background: white;
  }
</style>