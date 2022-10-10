<template>
  <div>
    <!-- <v-btn
      fab
      fixed
      bottom
      left
      icon
      color="black"
      class="ma-5"
      @click="scrollToTop"
    >
      <v-icon dark>mdi-chevron-up</v-icon>
    </v-btn> -->

    <v-row no-gutters>
      <v-col class sm="12" md="12">
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="25px"
        ></v-sheet>
      </v-col>
    </v-row>
    <!-- <vue-link
      :to="'https://github.com/xfhg'"
      rel="no-follow"
      :external="true"
      :new-tab="true"
      class=""
    >
      This is the link text ;)
    </vue-link> 
     VueLink: () => import('vue-link'),

     -->

    <v-sheet height="150px" width="100%" color="transparent"></v-sheet>

    <v-row no-gutters>
      <v-col class sm="12" md="12">
        <vue-diagonal
          :deg="-2"
          background="#f9fbfd"
          space-before
        ></vue-diagonal>
        <vue-diagonal :deg="-2" background="#f6f9fc" space-after>
          <v-sheet class="pb-5" color="#f6f9fc" min-height="25">
            <v-row no-gutters>
              <v-col class sm="0" md="2"></v-col>
              <v-col class="d-flex justify-space-around" sm="12" md="8">
                <v-scroll-x-transition>
                  <v-avatar
                    style="
                      margin-top: -150px;
                      margin-bottom: 25px;
                      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
                        rgba(0, 0, 0, 0.22) 0px 15px 12px;
                    "
                    size="250"
                    rounded
                  >
                    <v-img
                      v-if="xpert.data.profile.displayPicture"
                      :src="xpert.data.profile.displayPicture"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <logo-animated
                            lwidth="100px"
                            lheight="100px"
                            lfill="#f7fafc"
                            lstroke="#39444b"
                            lstrokewidth="2px"
                            class="ma-5"
                          ></logo-animated>
                        </v-row>
                      </template>
                    </v-img>
                    <v-img v-else>
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-btn icon color="#32e0c4">
                            <v-icon size="128">mdi-fingerprint</v-icon>
                          </v-btn>
                        </v-row>
                      </template>
                    </v-img>
                  </v-avatar>
                </v-scroll-x-transition>
              </v-col>
              <v-col class sm="0" md="2"></v-col>
            </v-row>

            <v-row no-gutters class="pb-15">
              <v-col class sm="0" md="2"></v-col>
              <v-col class="d-flex flex-column align-center" sm="12" md="8">
                <div class="text-h4 text-md-h2 text-sm-h2">
                  {{ xpert.data.profile.displayName }}
                </div>

                <!-- <v-chip class="ma-10 pa-5 elevation-2" color="white">
                  <v-avatar left>
                    <grain-icon color="" />
                  </v-avatar>
                  <div class="text-button pioneer-username">@ganso</div>
                </v-chip> -->
              </v-col>
              <v-col class sm="0" md="2"></v-col>
            </v-row>

            <v-row no-gutters>
              <v-col
                class="d-flex align-center justify-center mt-0"
                cols="12"
                sm="12"
                md="12"
              >
                <!-- <v-icon size="64" color="#1d2226">mdi-plus</v-icon> -->
              </v-col>
              <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
              <v-col class="px-5" cols="12" sm="12" md="8" xl="4"></v-col>
              <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
            </v-row>

            <v-row no-gutters>
              <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
              <v-col class cols="12" sm="12" md="8" xl="4">
                <ValidationObserver
                  ref="formProfile"
                  immediate
                  v-slot="{ invalid, valid, handleSubmit }"
                >
                  <v-form
                    class="mt-5"
                    ref="formProfile"
                    v-model="validProfile"
                    v-on:submit.prevent
                  >
                    <v-card
                      class="elevation-0 mx-5 mb-0 pa-5"
                      color="transparent"
                    >
                      <div
                        class="text-button text-left mb-5"
                        style="color: black"
                      >
                        Profile Display Name
                      </div>
                      <v-row no-gutters class="">
                        <v-col class cols="12" sm="12" md="8">
                          <ValidationProvider
                            name="Profile Display Name"
                            rules="alpha_num_spaces|required"
                            v-slot="{ errors, valid }"
                          >
                            <v-text-field
                              class=""
                              v-model.trim="xpert.data.profile.displayName"
                              label=""
                              solo
                              required
                              :error-messages="errors"
                              :valid="valid"
                              maxlength="32"
                            ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col class cols="12" sm="12" md="4">
                          <ValidationProvider
                            name="Username"
                            rules="required"
                            v-slot="{ errors, valid }"
                          >
                            <v-text-field
                              class="ml-md-5"
                              v-model="user.data.username"
                              label=""
                              solo
                              disabled
                              required
                              prepend-inner-icon="mdi-at"
                              :error-messages="errors"
                              :valid="valid"
                              maxlength="32"
                            ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                      <v-row no-gutters class="mb-10">
                        <v-col class cols="12" sm="12" md="12">
                          <div
                            class="text-button text-right mb-5"
                            style="color: black"
                          >
                            public profile picture
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
                              label-idle="Drag and drop your best picture here"
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
                              v-on:init="handleFilePondInit"
                            />
                          </v-form>
                        </v-col>
                      </v-row>

                      <div class="my-5 text-button text-center">
                        elevator pitch
                      </div>

                      <ValidationProvider
                        name="Bio"
                        rules
                        v-slot="{ errors, valid }"
                      >
                        <vue-editor
                          :error-messages="errors"
                          :valid="valid"
                          id="bioEditor"
                          v-model="xpert.data.profile.bio"
                          :editorToolbar="customToolbar"
                        />
                      </ValidationProvider>
                      <v-row class="mt-10" no-gutters>
                        <v-col class cols="12" sm="12" md="7">
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

                        <v-col class cols="12" sm="12" md="5">
                          <ValidationProvider
                            name="Location"
                            rules
                            v-slot="{ errors, valid }"
                          >
                            <v-autocomplete
                              class="mb-5 ml-md-5"
                              v-model="xpert.data.profile.location"
                              :items="system.countries"
                              clearable
                              solo
                              chips
                              :error-messages="errors"
                              :valid="valid"
                              item-text="name"
                              return-object
                              label="Location"
                            >
                              <template v-slot:selection="data">
                                <v-chip
                                  v-bind="data.attrs"
                                  :input-value="data.selected"
                                  outlined
                                >
                                  <v-avatar left>{{
                                    data.item.emoji
                                  }}</v-avatar>
                                  {{ data.item.name }}
                                </v-chip>
                              </template>
                              <template v-slot:item="data">
                                <v-list-item-avatar>{{
                                  data.item.emoji
                                }}</v-list-item-avatar>
                                <v-list-item-content>
                                  <v-list-item-title
                                    v-html="data.item.name"
                                  ></v-list-item-title>
                                  <v-list-item-subtitle
                                    v-html="data.item.native"
                                  ></v-list-item-subtitle>
                                </v-list-item-content>
                              </template>
                            </v-autocomplete>
                          </ValidationProvider>
                        </v-col>
                      </v-row>

                      <div class="text-h3 mt-10">Influence</div>

                      <div class="text-overline ml-5">
                        Sectors that define your experience
                      </div>
                      <div class="mt-10 mb-5 text-button text-right">
                        Sectors
                      </div>
                      <v-row no-gutters>
                        <v-col class cols="12" sm="12" md="12">
                          <ValidationProvider
                            name="Sector"
                            rules="array_maxlength_5"
                            v-slot="{ errors, valid }"
                          >
                            <v-autocomplete
                              v-model="xpert.data.profile.sectors"
                              :items="system.data.internal.sectors"
                              solo
                              chips
                              hide-no-data
                              multiple
                              :error-messages="errors"
                              :valid="valid"
                              label="Sectors"
                              item-text="name"
                              return-object
                              :search-input.sync="searchInputsectors"
                              @change="searchInputsectors = ''"
                              :value="xpert.data.profile.sectors"
                            >
                              <template v-slot:selection="data">
                                <v-chip
                                  v-bind="data.attrs"
                                  :input-value="data.selected"
                                  @click:close="removeIndustry(data.item)"
                                  close
                                  outlined
                                >
                                  <v-avatar left>
                                    <chart-arcs-icon stroke-width="1" />
                                  </v-avatar>
                                  <span class="mx-2">
                                    {{ data.item.name }}</span
                                  >
                                </v-chip>
                              </template>
                              <template v-slot:item="data">
                                <chart-arcs-icon
                                  class="mr-2"
                                  stroke-width="0.5"
                                />

                                <v-list-item-content>
                                  <v-list-item-title
                                    v-html="data.item.name"
                                  ></v-list-item-title>
                                </v-list-item-content>
                              </template>
                            </v-autocomplete>
                          </ValidationProvider>
                        </v-col>
                      </v-row>

                      <div class="mt-5 mb-5 text-button text-center">
                        Your main role
                      </div>
                      <v-row no-gutters>
                        <v-col class cols="12" sm="12" md="5">
                          <ValidationProvider
                            name="Company"
                            rules
                            v-slot="{ errors, valid }"
                          >
                            <v-autocomplete
                              v-model="xpert.data.profile.currentCompany"
                              :items="xpert.data.profile.currentCompanyItems"
                              :loading="
                                system.data.template.xpert.currentCompany
                                  .loading
                              "
                              clearable
                              solo
                              chips
                              :filter="(v) => v"
                              :error-messages="errors"
                              :valid="valid"
                              label="Company"
                              no-data-text="Type name or domain"
                              item-text="name"
                              :value="xpert.data.profile.currentCompany"
                              :search-input.sync="companySearch"
                              :return-object="true"
                            >
                              <template v-slot:selection="data">
                                <v-chip
                                  v-bind="data.attrs"
                                  :input-value="data.selected"
                                  outlined
                                >
                                  <v-avatar left>
                                    <v-img :src="data.item.logo"></v-img>
                                  </v-avatar>
                                  {{ data.item.name }}
                                </v-chip>
                              </template>
                              <template v-slot:item="data">
                                <v-list-item-avatar>
                                  <img :src="data.item.logo" />
                                </v-list-item-avatar>
                                <v-list-item-content>
                                  <v-list-item-title
                                    v-html="data.item.name"
                                  ></v-list-item-title>
                                  <v-list-item-subtitle
                                    v-html="data.item.domain"
                                  ></v-list-item-subtitle>
                                </v-list-item-content>
                              </template>
                            </v-autocomplete>
                          </ValidationProvider>
                        </v-col>
                        <v-col class cols="12" sm="12" md="7">
                          <ValidationProvider
                            name="Current Role"
                            rules="alpha_num_spaces"
                            v-slot="{ errors, valid }"
                          >
                            <v-text-field
                              class="mb-5 ml-md-5"
                              v-model="xpert.data.profile.currentRole"
                              label="Current Role"
                              solo
                              :error-messages="errors"
                              :valid="valid"
                              maxlength="32"
                            ></v-text-field> </ValidationProvider
                        ></v-col>
                      </v-row>
                    </v-card>

                    <v-row justify="space-between">
                      <v-col class="text-center" cols="12">
                        <!-- <v-alert
                          v-model="infoProfile"
                          dismissible
                          transition="scale-transition"
                          color="#293136"
                          dark
                          dense
                          icon="mdi-school"
                          prominent
                          elevation="5"
                          class="mx-5"
                          >Help Lorem Ipsum</v-alert
                        > -->
                      </v-col>
                    </v-row>

                    <v-row no-gutters>
                      <!-- <v-col
                        class="d-flex align-center justify-center mb-5"
                        cols="12"
                        sm="12"
                        md="6"
                      >
                        <v-btn
                          text
                          color="#293136"
                          @click="infoProfile = !infoProfile"
                        >
                          <v-icon dark>mdi-information</v-icon>
                        </v-btn>
                      </v-col> -->
                      <v-col class cols="1" sm="3" md="3" xl="3"></v-col>
                      <v-col
                        class="d-flex align-center justify-center mb-5 mt-10"
                        cols="10"
                        sm="6"
                        md="6"
                      >
                        <v-btn
                          :disabled="invalid || !valid"
                          color="#32e0c4"
                          @click="handleSubmit(validateProfile)"
                          rounded
                          x-large
                          block
                          class="px-10"
                        >
                          Update Profile
                          <v-icon right>mdi-account-circle</v-icon>
                        </v-btn>
                      </v-col>
                      <v-col class cols="1" sm="3" md="3" xl="3"></v-col>
                    </v-row>
                  </v-form>
                </ValidationObserver>
              </v-col>
              <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
            </v-row>
          </v-sheet>
          <v-sheet height="50px" width="100%" color="transparent"></v-sheet>
        </vue-diagonal>
      </v-col>
    </v-row>

    <v-row no-gutters class="pb-5">
      <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="6">
        <v-sheet class="mt-10 pa-5" width="100%" height>
          <div class="text-h3 mt-10">Skillset</div>

          <div class="text-overline ml-5">Production ready expertise</div>
          <v-sheet
            class="d-flex flex-wrap justify-space-between mt-15"
            width="100%"
          >
            <template v-for="item in xpert.data.skillset">
              <div :key="item.skill_id" class="my-5 mx-10">
                <v-chip
                  v-if="item.skill_length < 7"
                  class="elevation-2"
                  color="#52616b"
                  @click:close="
                    removeElement('skillset', 'skill_id', item.skill_id)
                  "
                  dark
                  close
                >
                  <v-avatar left>
                    <recharging-icon stroke-width="1" color="white" />
                  </v-avatar>
                  <span class="mx-5">{{ item.skill_entity }}</span>
                </v-chip>
                <v-chip
                  v-if="item.skill_length > 6"
                  class="elevation-2"
                  :color="
                    (6 < item.skill_length && item.skill_length) < 9
                      ? '#39444b'
                      : '#21272b'
                  "
                  @click:close="
                    removeElement('skillset', 'skill_id', item.skill_id)
                  "
                  dark
                  close
                >
                  <v-avatar left>
                    <recharging-icon
                      stroke-width="1"
                      :color="
                        (6 < item.skill_length && item.skill_length) < 9
                          ? '#f6f9fc'
                          : '#32e0c4'
                      "
                    />
                  </v-avatar>
                  <span class="mx-5">{{ item.skill_entity }}</span>
                </v-chip>
              </div>
            </template>
          </v-sheet>
        </v-sheet>
      </v-col>
      <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        class="d-flex align-center justify-center my-5"
        cols="12"
        sm="12"
        md="12"
      >
        <v-icon size="64" color="black">mdi-plus</v-icon>
      </v-col>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      <v-col class="px-5" cols="12" sm="12" md="8" xl="4"></v-col>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="4">
        <v-sheet class color="transparent" min-height="10px"></v-sheet>
        <ValidationObserver
          ref="formSkillset"
          immediate
          v-slot="{ invalid, valid, handleSubmit }"
        >
          <v-form
            class="mt-1 px-5"
            ref="formSkillset"
            v-model="validSkillset"
            v-on:submit.prevent
          >
            <v-card
              class="elevation-0 mx-auto mb-5 pa-5 pa-md-10"
              color="transparent"
            >
              <div class="text-overline text-center mb-5">
                skill or role related to your main areas of influence
              </div>
              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="8">
                  <ValidationProvider
                    name="Skill Name"
                    rules="alpha_num_spaces|required"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      class="mr-md-5"
                      v-model="system.data.template.xpert.skillset.skill_entity"
                      label="Skill Name *"
                      solo
                      maxlength="32"
                      required
                      :error-messages="errors"
                      :valid="valid"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
                <v-col class cols="12" sm="12" md="4">
                  <ValidationProvider
                    name="Years of Experience"
                    rules="integer|between:1,80|required"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      class="ml-md-5"
                      v-model.number="
                        system.data.template.xpert.skillset.skill_length
                      "
                      label="Years *"
                      hint="Years of Experience *"
                      solo
                      maxlength="2"
                      required
                      :error-messages="errors"
                      :valid="valid"
                      append-icon="mdi-calendar"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
              </v-row>
            </v-card>
            <v-row justify="space-between">
              <v-col class="text-center" cols="12">
                <!-- <v-alert
                  v-model="infoSkillset"
                  dismissible
                  transition="scale-transition"
                  color="#f9fbfd"
                  dense
                  icon="mdi-school"
                  prominent
                  elevation="1"
                  >Help Lorem Ipsum</v-alert
                > -->
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col
                class="d-flex align-center justify-center mb-5"
                cols="12"
                sm="12"
                md="6"
              >
                <v-btn
                  text
                  color="#293136"
                  @click="infoSkillset = !infoSkillset"
                >
                  <v-icon dark>mdi-information</v-icon>
                </v-btn>
              </v-col>
              <v-col
                class="d-flex align-end justify-end mb-5 px-5"
                cols="12"
                sm="12"
                md="6"
              >
                <v-btn
                  rounded
                  block
                  x-large
                  :disabled="invalid || !valid"
                  color="#32e0c4"
                  @click="handleSubmit(validateSkillset)"
                >
                  Add Skill
                  <recharging-icon
                    stroke-width="1"
                    class="ml-2"
                  ></recharging-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </ValidationObserver>
      </v-col>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class cols="1" sm="1" md="2"></v-col>
      <v-col class cols="12" sm="12" md="8">
        <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet>
      </v-col>
      <v-col class cols="1" sm="1" md="2"></v-col>
    </v-row>
    <v-sheet
      class="d-flex justify-center align-center py-10"
      color="#f9fbfd"
      width="100%"
    >
      <div class="text-overline mx-5">Influence</div>
      <chart-arcs-icon stroke-width="0.5" size="64px" color="#32e0c4" />
      <div class="text-button mx-5">Skill</div>
      <recharging-icon stroke-width="0.5" size="64px" color="#32e0c4" />
      <div class="text-overline mx-5">Experience</div>
      <atom-2-icon stroke-width="0.5" size="64px" color="#32e0c4" />
    </v-sheet>
    <v-row no-gutters>
      <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="6">
        <v-sheet class="mt-15 pa-5" width="100%" height>
          <div class="text-h3 mt-10">Experience</div>

          <div class="text-overline ml-5">
            Detailed experience / achievement bits
          </div>
          <v-sheet class="mt-15" width="100%">
            <template v-for="(item, index) in xpert.data.experience">
              <div :key="index">
                <v-card
                  style="box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px"
                  color="#fff"
                  class="py-md-5 px-md-10 px-2 py-2 my-5"
                >
                  <v-card-title class>
                    <v-row justify="space-between">
                      <v-col cols="12" sm="8">
                        <div class="text-h5 text-uppercase">
                          {{ item.exp_entity }}
                        </div>
                      </v-col>
                      <v-col class="text-right" cols="12" sm="4">
                        <v-chip class="ma-0 px-5" color="transparent">
                          <v-avatar left
                            ><recharging-icon
                              stroke-width="1"
                            ></recharging-icon></v-avatar
                          >{{ item.exp_length }} YR.
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-card-title>

                  <v-card-text v-if="item.exp_description" class="mt-5">
                    <span v-html="item.exp_description"></span>
                  </v-card-text>

                  <v-card-actions
                    v-if="item.exp_industry.length > 0"
                    class="d-flex flex-wrap text-right justify-right"
                  >
                    <template
                      v-for="(industry, ind_index) in item.exp_industry"
                    >
                      <v-chip
                        label
                        :key="ind_index"
                        class="ma-2 elevation-0"
                        color="transparent"
                        outlined
                        text-color="#52616b"
                        ><v-avatar left
                          ><chart-arcs-icon
                            stroke-width="1"
                          ></chart-arcs-icon></v-avatar
                        >{{ industry.name }}</v-chip
                      >
                    </template>
                  </v-card-actions>
                </v-card>

                <v-row justify="space-between">
                  <v-col cols="8"></v-col>
                  <v-col class="text-right" cols="4">
                    <v-btn
                      text
                      color="red"
                      @click="
                        removeElement('experience', 'exp_id', item.exp_id)
                      "
                    >
                      <v-icon dark>mdi-close</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </template>
          </v-sheet>
        </v-sheet>
      </v-col>
      <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col
        class="d-flex align-center justify-center my-5"
        cols="12"
        sm="12"
        md="12"
      >
        <v-icon size="64" color="black">mdi-plus</v-icon>
      </v-col>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      <v-col class="px-5" cols="12" sm="12" md="8" xl="4"></v-col>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="4">
        <v-sheet class color="transparent" min-height="10px"></v-sheet>
        <ValidationObserver
          immediate
          ref="formExperience"
          v-slot="{ invalid, valid, handleSubmit }"
        >
          <v-form
            class="mt-1 px-5"
            ref="formExperience"
            v-model="validExperience"
            v-on:submit.prevent
          >
            <v-card
              class="elevation-0 mx-auto mb-5 pa-5 pa-md-10"
              color="transparent"
            >
              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="8">
                  <ValidationProvider
                    name="EXP Skill"
                    rules="required"
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      class="mr-md-5"
                      v-model="system.data.template.xpert.experience.exp_entity"
                      :items="xpert.data.skillset"
                      solo
                      hide-no-data
                      :error-messages="errors"
                      :valid="valid"
                      label="Skill"
                      no-data-text="Your Skill set is empty"
                      item-text="name"
                      return-object
                      clearable
                      :search-input.sync="searchInputskillset"
                      @change="searchInputskillset = ''"
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          outlined
                        >
                          <v-avatar left>
                            <recharging-icon stroke-width="1" />
                          </v-avatar>
                          {{ data.item.skill_entity }}
                        </v-chip>
                      </template>
                      <template v-slot:item="data">
                        <recharging-icon
                          stroke-width="1"
                          class="mr-2"
                        ></recharging-icon>
                        <v-list-item-content>
                          <v-list-item-title
                            v-html="data.item.skill_entity"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-autocomplete>
                  </ValidationProvider>
                </v-col>
                <v-col class cols="12" sm="12" md="4">
                  <ValidationProvider
                    name="EXP Skilllevel"
                    rules="required"
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      class
                      v-model="system.data.template.xpert.experience.exp_level"
                      :items="system.data.xpert.skilllevel"
                      solo
                      hide-no-data
                      :error-messages="errors"
                      :valid="valid"
                      label="Skill Level"
                      item-text="name"
                      return-object
                      clearable
                      :search-input.sync="searchInputskilllevel"
                      @change="searchInputskilllevel = ''"
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          outlined
                        >
                          <v-avatar left>
                            <stack-2-icon stroke-width="0.5" />
                          </v-avatar>
                          {{ data.item.name }}
                        </v-chip>
                      </template>
                      <template v-slot:item="data">
                        <template v-if="typeof data.item !== 'object'">
                          <v-list-item-content
                            v-text="data.item"
                          ></v-list-item-content>
                        </template>
                        <template v-else>
                          <stack-2-icon class="mr-2" stroke-width="0.5" />

                          <v-list-item-content>
                            <v-list-item-title
                              v-html="data.item.name"
                            ></v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </template>
                    </v-autocomplete>
                  </ValidationProvider>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col class="mb-5" cols="12" sm="12" md="12">
                  <div class="mb-5 pl-1 text-overline text-left">
                    Summary / highlights
                  </div>
                  <ValidationProvider
                    name="Experience"
                    rules="required"
                    v-slot="{ errors, valid }"
                  >
                    <vue-editor
                      :error-messages="errors"
                      :valid="valid"
                      id="expEditor"
                      v-model="
                        system.data.template.xpert.experience.exp_description
                      "
                      :editorToolbar="customToolbar"
                    />
                  </ValidationProvider>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="12">
                  <ValidationProvider
                    name="EXP Sector"
                    rules="array_maxlength_3|required"
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      class="mt-5"
                      v-model="
                        system.data.template.xpert.experience.exp_industry
                      "
                      :items="system.data.internal.sectors"
                      solo
                      chips
                      hide-no-data
                      multiple
                      :error-messages="errors"
                      :valid="valid"
                      label="Related Sectors"
                      item-text="name"
                      return-object
                      clearable
                      :search-input.sync="searchInputindustry"
                      @change="searchInputindustry = ''"
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
                          {{ data.item.name }}
                        </v-chip>
                      </template>
                      <template v-slot:item="data">
                        <template v-if="typeof data.item !== 'object'">
                          <v-list-item-content
                            v-text="data.item"
                          ></v-list-item-content>
                        </template>
                        <template v-else>
                          <chart-arcs-icon class="mr-2" stroke-width="1" />

                          <v-list-item-content>
                            <v-list-item-title
                              v-html="data.item.name"
                            ></v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </template>
                    </v-autocomplete>
                  </ValidationProvider>
                </v-col>
              </v-row>
            </v-card>
            <v-row justify="space-between">
              <v-col class="text-center" cols="12">
                <!-- <v-alert
                  v-model="infoExperience"
                  dismissible
                  transition="scale-transition"
                  color="#293136"
                  dark
                  dense
                  icon="mdi-school"
                  prominent
                  elevation="5"
                  >Help Lorem Ipsum</v-alert
                > -->
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col
                class="d-flex align-center justify-center mb-5"
                cols="12"
                sm="12"
                md="6"
              >
                <v-btn
                  text
                  color="#293136"
                  @click="infoExperience = !infoExperience"
                >
                  <v-icon dark>mdi-information</v-icon>
                </v-btn>
              </v-col>
              <v-col
                class="d-flex align-center justify-center mb-5 px-5"
                cols="12"
                sm="12"
                md="6"
              >
                <v-btn
                  :disabled="invalid || !valid"
                  color="#32e0c4"
                  @click="handleSubmit(validateExperience)"
                  block
                  rounded
                  x-large
                >
                  Add Experience
                  <atom-2-icon stroke-width="0.5" />
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </ValidationObserver>
      </v-col>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class cols="1" sm="1" md="2"></v-col>
      <v-col class cols="12" sm="12" md="8">
        <v-sheet class="mb-10" color="transparent" min-height="150px"></v-sheet>
      </v-col>
      <v-col class cols="1" sm="1" md="2"></v-col>
    </v-row>

    <vue-diagonal :deg="-2" background="#f7fafc" space-before></vue-diagonal>

    <vue-diagonal :deg="-2" background="#1d2226">
      <v-row no-gutters>
        <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
        <v-col class cols="12" sm="12" md="8" xl="6">
          <v-sheet class="mt-10 pa-5" width="100%" color="transparent">
            <div style="color: #f6f9fc" class="text-h3 mt-10">Now</div>
            <div style="color: #f6f9fc" class="text-overline ml-5 mb-10">
              Active Knowledge Bits
            </div>
          </v-sheet>
        </v-col>
        <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
      </v-row>
    </vue-diagonal>

    <vue-diagonal :deg="-2" background="#39444b">
      <v-sheet class color="#39444b" min-height="25">
        <v-row no-gutters>
          <v-col class cols="12" sm="0" md="2" xl="2"></v-col>
          <v-col class cols="12" sm="12" md="8" xl="8">
            <v-sheet class="mt-10 pa-5" width="100%" height color="transparent">
              <div class="text-h3 mt-10" style="color: #f6f9fc">Portfolio</div>

              <div class="text-overline ml-5" style="color: #f6f9fc">
                Featured Projects / Work in Progress
              </div>
              <v-sheet
                class="d-flex justify-center flex-wrap mt-15"
                width="100%"
                color="transparent"
              >
                <template v-for="(item, index) in xpert.data.featured">
                  <div :key="index">
                    <v-sheet class="mb-10" height color="transparent">
                      <template>
                        <v-card
                          class="
                            elevation-0
                            mx-6
                            py-1
                            d-flex
                            mb-3
                            justify-space-between
                          "
                          max-width="300"
                          color="transparent"
                        >
                          <v-tooltip eager top>
                            <template v-slot:activator="{ on, attrs }">
                              <chart-arcs-icon
                                v-bind="attrs"
                                v-on="on"
                                stroke-width="0.5"
                              ></chart-arcs-icon>
                            </template>
                            <span>{{ item.feat_industry_list.join(' ') }}</span>
                          </v-tooltip>

                          <vue-link
                            :to="item.feat_linkfetch"
                            :external="true"
                            :new-tab="true"
                            class=""
                          >
                            <v-icon color="#32e0c4">mdi-link</v-icon>
                          </vue-link>

                          <v-tooltip eager top>
                            <template v-slot:activator="{ on, attrs }">
                              <recharging-icon
                                v-bind="attrs"
                                v-on="on"
                                stroke-width="0.5"
                              ></recharging-icon>
                            </template>
                            <span>{{ item.feat_skillset_list.join(' ') }}</span>
                          </v-tooltip>
                        </v-card>

                        <v-card
                          class="mx-5 mb-10"
                          elevation="5"
                          max-width="300"
                          min-width="300"
                          color="transparent"
                        >
                          <v-img
                            class="white--text align-end"
                            height="200px"
                            :alt="item.feat_image"
                            :src="item.feat_image"
                          ></v-img>
                        </v-card>

                        <v-card
                          class="ma-5"
                          elevation="5"
                          max-width="300"
                          min-width="300"
                          color="#f7fafc"
                        >
                          <v-card-title>
                            <div
                              class="text-h6 wrap-text"
                              style="color: #22292d"
                            >
                              {{ item.feat_entity }}
                            </div>
                          </v-card-title>

                          <v-card-text
                            class="my-5 pb-10"
                            style="color: #22292d"
                          >
                            <span
                              v-if="item.feat_manual"
                              v-html="item.feat_description"
                            ></span>

                            <span v-else style="color: #22292d">{{
                              item.feat_description
                            }}</span>
                          </v-card-text>
                        </v-card>

                        <v-row justify="center" class="mb-5">
                          <v-col class="text-center" cols="12">
                            <v-btn
                              color="red"
                              text
                              @click="
                                removeElement(
                                  'featured',
                                  'feat_id',
                                  item.feat_id
                                )
                              "
                            >
                              <v-icon dark>mdi-close</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </template>
                    </v-sheet>
                  </div>
                </template>
                <v-skeleton-loader
                  v-if="loadingFeatured"
                  class="ma-5"
                  elevation="5"
                  width="300px"
                  height="100%"
                  type="image"
                ></v-skeleton-loader>
              </v-sheet>
            </v-sheet>
          </v-col>
          <v-col class cols="12" sm="0" md="2" xl="2"></v-col>
        </v-row>

        <v-row no-gutters>
          <v-col
            class="d-flex align-center justify-center my-5"
            cols="12"
            sm="12"
            md="12"
          >
            <v-icon size="64" color="#f6f9fc">mdi-plus</v-icon>
          </v-col>
          <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
          <v-col class="px-5" cols="12" sm="12" md="8" xl="4"></v-col>
          <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
        </v-row>

        <v-row no-gutters>
          <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
          <v-col class cols="12" sm="12" md="8" xl="4">
            <v-sheet class color="transparent" min-height="10px"></v-sheet>
            <ValidationObserver
              immediate
              ref="formFeatured"
              v-slot="{ invalid, valid, handleSubmit }"
            >
              <v-form
                class="mt-1 px-5"
                ref="formFeatured"
                v-model="validFeatured"
                v-on:submit.prevent
              >
                <v-card
                  class="elevation-5 mx-auto mb-5 pa-5 pa-md-10"
                  color="#f6f9fc"
                >
                  <v-sheet class color="transparent" min-height="10px">
                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="12">
                        <div class="text-overline text-center mb-5">
                          Automatically fetch info from URL
                        </div>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="12">
                        <ValidationProvider
                          name="Featured URL"
                          rules="url|required"
                          v-slot="{ errors, valid }"
                        >
                          <v-text-field
                            class="mb-1"
                            v-model="
                              system.data.template.xpert.featured.feat_linkfetch
                            "
                            label="Featured URL *"
                            hint
                            color="#32e0c4"
                            solo
                            :error-messages="errors"
                            :valid="valid"
                            maxlength="512"
                            append-icon="mdi-link"
                          ></v-text-field>
                        </ValidationProvider>
                      </v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="6">
                        <ValidationProvider
                          name="Featured Related Industry"
                          rules="array_maxlength_3"
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            v-model="
                              system.data.template.xpert.featured.feat_industry
                            "
                            :items="xpert.data.profile.sectors"
                            solo
                            chips
                            hide-no-data
                            multiple
                            class="mt-1 mb-1 mr-md-5"
                            :error-messages="errors"
                            :valid="valid"
                            label="Related Sectors"
                            item-text="name"
                            return-object
                            clearable
                            :search-input.sync="searchInputfeatind"
                            @change="searchInputfeatind = ''"
                          >
                            <template v-slot:selection="data">
                              <v-chip
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                outlined
                              >
                                <v-avatar left>
                                  <chart-arcs-icon
                                    class="mr-2"
                                    stroke-width="0.5"
                                  />
                                </v-avatar>
                                {{ data.item.name }}
                              </v-chip>
                            </template>
                            <template v-slot:item="data">
                              <chart-arcs-icon
                                class="mr-2"
                                stroke-width="0.5"
                              />

                              <v-list-item-content>
                                <v-list-item-title
                                  v-html="data.item.name"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-autocomplete>
                        </ValidationProvider>
                      </v-col>
                      <v-col class cols="12" sm="12" md="6">
                        <ValidationProvider
                          name="Featured Related Skillset"
                          rules="array_maxlength_3"
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            class="mt-1"
                            v-model="
                              system.data.template.xpert.featured.feat_skillset
                            "
                            :items="xpert.data.skillset"
                            clearable
                            multiple
                            solo
                            chips
                            label="Related Skills"
                            return-object
                            item-text="skill_entity"
                            :error-messages="errors"
                            :valid="valid"
                          >
                            <template v-slot:selection="data">
                              <v-chip
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                outlined
                              >
                                <v-avatar left>
                                  <recharging-icon stroke-width="1" />
                                </v-avatar>
                                {{ data.item.skill_entity }}
                              </v-chip>
                            </template>
                            <template v-slot:item="data">
                              <recharging-icon
                                stroke-width="1"
                                class="mr-2"
                              ></recharging-icon>
                              <v-list-item-content>
                                <v-list-item-title
                                  v-html="data.item.skill_entity"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-autocomplete>
                        </ValidationProvider>
                      </v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="12"></v-col>
                    </v-row>
                  </v-sheet>

                  <v-row no-gutters>
                    <v-col
                      class="d-flex justify-space-around"
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-switch
                        class
                        color="#32e0c4"
                        v-model="
                          system.data.template.xpert.featured.feat_manual
                        "
                      >
                        <template v-slot:label>
                          <div class="text-overline text-center">
                            Manually override details
                          </div>
                        </template>
                      </v-switch>
                    </v-col>
                  </v-row>
                  <v-expand-transition>
                    <v-sheet
                      class="pt-5"
                      color="transparent"
                      min-height="10px"
                      v-if="system.data.template.xpert.featured.feat_manual"
                    >
                      <v-row no-gutters>
                        <v-col class cols="12" sm="12" md="12">
                          <ValidationProvider
                            name="Featured Entity"
                            rules="alpha_num_spaces"
                            v-slot="{ errors, valid }"
                          >
                            <v-text-field
                              class="mb-1"
                              v-model="
                                system.data.template.xpert.featured.feat_entity
                              "
                              label="Featured Project Name"
                              solo
                              required
                              :error-messages="errors"
                              :valid="valid"
                              maxlength="32"
                              append-icon="mdi-star"
                            ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                      </v-row>

                      <div class="mb-5 pl-1 text-overline text-left">
                        Project Description / Your Contribution
                      </div>
                      <ValidationProvider
                        name="Featured Summary"
                        rules
                        v-slot="{ errors, valid }"
                      >
                        <vue-editor
                          :error-messages="errors"
                          :valid="valid"
                          id="featEditor"
                          v-model="
                            system.data.template.xpert.featured.feat_description
                          "
                          :editorToolbar="customToolbarNoList"
                        />
                      </ValidationProvider>
                    </v-sheet>
                  </v-expand-transition>
                </v-card>

                <v-row justify="space-between">
                  <v-col class="text-center" cols="12">
                    <!-- <v-alert
                      v-model="infoFeatured"
                      dismissible
                      transition="scale-transition"
                      color="#293136"
                      dark
                      dense
                      icon="mdi-school"
                      prominent
                      elevation="5"
                      >Help Lorem Ipsum</v-alert
                    > -->
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col
                    class="d-flex align-center justify-center mb-5"
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-btn
                      text
                      color="white"
                      @click="infoFeatured = !infoFeatured"
                    >
                      <v-icon dark>mdi-information</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col
                    class="d-flex align-center justify-center mb-5 px-5"
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-btn
                      :disabled="invalid || !valid"
                      color="#32e0c4"
                      @click="handleSubmit(validateFeatured)"
                      block
                      rounded
                      x-large
                      :loading="loadingFeatured"
                    >
                      Add Project
                      <versions-icon class="ml-2"></versions-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </ValidationObserver>
          </v-col>
          <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
        </v-row>

        <v-row no-gutters>
          <v-col class cols="1" sm="1" md="2"></v-col>
          <v-col class cols="12" sm="12" md="8">
            <v-sheet
              class="mb-10"
              color="transparent"
              min-height="50px"
            ></v-sheet>
          </v-col>
          <v-col class cols="1" sm="1" md="2"></v-col>
        </v-row>
      </v-sheet>
    </vue-diagonal>

    <vue-diagonal :deg="-2" background="#f7fafc" space-after>
      <v-row no-gutters>
        <v-col class cols="12" sm="0" md="1" xl="2"></v-col>
        <v-col class cols="12" sm="12" md="10" xl="8">
          <v-sheet class="mt-15 pa-5" width="100%" height color="transparent">
            <div class="text-h3 mt-10" style="color: #2d2d2d">Bookshelf</div>

            <div class="text-overline ml-5" style="color: #2d2d2d">
              Physical extension of your mind
            </div>

            <v-sheet
              class="
                mt-5
                px-sm-5
                pt-5
                d-flex
                flex-wrap
                justify-space-around
                align-top
              "
              width="100%"
              color="transparent"
            >
              <template v-for="(item, index) in xpert.data.bookshelf">
                <div :key="index">
                  <v-card
                    color="#fff"
                    style="box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px"
                    class="px-2 py-2 ma-5"
                    max-width="450px"
                  >
                    <div
                      class="
                        d-flex
                        flex-no-wrap
                        justify-space-between
                        align-top
                      "
                    >
                      <div>
                        <v-row no-gutters>
                          <v-col class sm="0" md="1"></v-col>
                          <v-col
                            class="d-flex justify-space-around px-2"
                            sm="12"
                            md="10"
                          >
                            <v-img
                              v-if="item.book_image"
                              class="mx-2 mt-5 elevation-5 hidden-sm-and-down"
                              style="border-radius: 5px"
                              :src="item.book_image"
                              max-width="150px"
                            ></v-img>

                            <v-img
                              v-if="item.book_image"
                              class="mx-2 mt-5 elevation-5 hidden-md-and-up"
                              style="border-radius: 5px"
                              :src="item.book_image"
                              max-width="125px"
                            ></v-img>
                          </v-col>
                          <v-col class sm="0" md="1"></v-col>
                        </v-row>
                        <v-row>
                          <v-col
                            class="
                              d-flex
                              justify-space-around
                              align-center
                              mb-5
                            "
                            cols="12"
                          >
                            <v-tooltip eager max-width="300px" right>
                              <template v-slot:activator="{ on, attrs }">
                                <book-icon
                                  v-bind="attrs"
                                  v-on="on"
                                  stroke-width="1"
                                  class=""
                                ></book-icon>
                              </template>
                              <span>{{ item.book_description }}</span>
                            </v-tooltip>
                            <v-tooltip v-if="item.book_categories" eager bottom>
                              <template v-slot:activator="{ on, attrs }">
                                <info-circle-icon
                                  v-bind="attrs"
                                  v-on="on"
                                  stroke-width="1"
                                  class=""
                                ></info-circle-icon>
                              </template>
                              <span>{{
                                item.book_categories
                                  ? item.book_categories.join(' ')
                                  : ''
                              }}</span>
                            </v-tooltip>
                            <v-tooltip v-if="item.book_recommend" eager right>
                              <template v-slot:activator="{ on, attrs }">
                                <checks-icon
                                  v-bind="attrs"
                                  v-on="on"
                                  stroke-width="1"
                                  class=""
                                ></checks-icon>
                              </template>
                              <span>RECOMMENDED</span>
                            </v-tooltip>
                          </v-col>
                        </v-row>
                      </div>
                      <v-sheet width="100%" color="transparent">
                        <v-card-title class>
                          <v-row>
                            <v-col
                              class="
                                d-flex
                                flex-wrap
                                justify-space-between
                                align-center
                              "
                              cols="12"
                              sm="12"
                            >
                              <div class="text-h6 text-uppercase">
                                {{ item.book_title }}
                              </div>

                              <!-- <v-chip class="ma-0 px-5" color="transparent">
                                <v-avatar left
                                  ><recharging-icon
                                    stroke-width="1"
                                  ></recharging-icon></v-avatar
                                >{{ item.exp_length }} X
                              </v-chip> -->
                            </v-col>
                          </v-row>
                        </v-card-title>

                        <v-card-text v-if="item.book_review" class="mt-5">
                          <span v-html="item.book_review"></span>
                        </v-card-text>

                        <v-card-text v-else class="mt-5">
                          <span v-html="item.book_description"></span>
                        </v-card-text>
                      </v-sheet>
                    </div>
                  </v-card>
                  <v-row justify="space-between">
                    <v-col class="text-center" cols="12">
                      <v-btn
                        text
                        color="red"
                        @click="
                          removeElement('bookshelf', 'book_id', item.book_id)
                        "
                      >
                        <v-icon dark>mdi-close</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </template>
            </v-sheet>

            <div class="d-flex justify-center align-center flex-wrap">
              <v-skeleton-loader
                v-if="loadingBookshelf"
                class="ma-5"
                elevation="5"
                width="300px"
                height="100%"
                type="image"
              ></v-skeleton-loader>
            </div>
          </v-sheet>
        </v-col>
        <v-col class cols="12" sm="0" md="1" xl="2"></v-col>
      </v-row>

      <v-row no-gutters>
        <v-col
          class="d-flex align-center justify-center my-5"
          cols="12"
          sm="12"
          md="12"
        >
          <v-icon size="64" color="#2d2d2d">mdi-plus</v-icon>
        </v-col>
        <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
        <v-col class="px-5" cols="12" sm="12" md="8" xl="4"></v-col>
        <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      </v-row>

      <v-row no-gutters>
        <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
        <v-col class cols="12" sm="12" md="8" xl="4">
          <v-sheet class color="transparent" min-height="10px"></v-sheet>
          <ValidationObserver
            ref="formBookshelf"
            v-slot="{ invalid, valid, handleSubmit }"
          >
            <v-form
              class="mt-1 px-5"
              ref="formBookshelf"
              v-model="validBookshelf"
              v-on:submit.prevent
            >
              <v-card
                class="elevation-5 mx-auto mb-5 pa-0 pa-md-10"
                color="#ffffff"
              >
                <v-row no-gutters>
                  <v-col class cols="12" sm="12" md="12">
                    <div class="text-overline text-center">Search</div>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col class cols="12" sm="12" md="12">
                    <ValidationProvider
                      name="Book"
                      rules="required"
                      v-slot="{ errors, valid }"
                    >
                      <v-autocomplete
                        v-model="
                          system.data.template.xpert.bookshelf.currentBook
                        "
                        :items="
                          system.data.template.xpert.bookshelf.currentBookItems
                        "
                        :loading="system.data.template.xpert.bookshelf.loading"
                        clearable
                        no-data-text="Type book title or author"
                        solo
                        :filter="(v) => v"
                        :error-messages="errors"
                        :valid="valid"
                        label="Book Title / Author"
                        item-text="volumeInfo.title"
                        :value="
                          system.data.template.xpert.bookshelf.currentBook
                        "
                        :search-input.sync="bookSearch"
                        :return-object="true"
                      >
                        <template v-slot:selection="data">
                          <v-chip
                            v-bind="data.attrs"
                            :input-value="data.selected"
                            :v-if="data.item.volumeInfo.imageLinks"
                            outlined
                          >
                            <v-avatar left>
                              <v-img
                                :src="
                                  data.item.volumeInfo.imageLinks
                                    .smallThumbnail || null
                                "
                              ></v-img>
                            </v-avatar>
                            {{ data.item.volumeInfo.title.substring(0, 64) }}
                          </v-chip>
                        </template>
                        <template v-slot:item="data">
                          <template :v-if="data.item.volumeInfo.imageLinks">
                            <v-list-item-avatar>
                              <img
                                :src="
                                  data.item.volumeInfo.imageLinks
                                    .smallThumbnail || null
                                "
                              />
                            </v-list-item-avatar>
                            <v-list-item-content>
                              <v-list-item-title
                                v-html="
                                  data.item.volumeInfo.title.substring(0, 64)
                                "
                              ></v-list-item-title>
                              <v-list-item-subtitle
                                v-html="
                                  _.join(
                                    data.item.volumeInfo.authors,
                                    ' '
                                  ).substring(0, 64)
                                "
                              ></v-list-item-subtitle>
                            </v-list-item-content>
                          </template>
                        </template>
                      </v-autocomplete>
                    </ValidationProvider>
                  </v-col>
                  <v-col
                    class="d-flex align-center justify-center"
                    cols="12"
                    sm="4"
                    md="4"
                  >
                    <v-card elevation="5" max-width="150" min-width="150">
                      <v-img
                        v-if="system.data.template.xpert.bookshelf.currentBook"
                        :src="
                          system.data.template.xpert.bookshelf.currentBook
                            .volumeInfo.imageLinks.thumbnail
                        "
                      ></v-img>
                    </v-card>
                  </v-col>
                  <v-col class="pr-5" cols="12" sm="8" md="8">
                    <div
                      class="my-5 pl-1 text-overline text-left"
                      v-if="system.data.template.xpert.bookshelf.currentBook"
                      v-html="
                        system.data.template.xpert.bookshelf.currentBook
                          .volumeInfo.title
                      "
                    ></div>
                    <div
                      class="my-5 pl-1 text-caption text-left"
                      v-if="system.data.template.xpert.bookshelf.currentBook"
                      v-html="
                        system.data.template.xpert.bookshelf.currentBook
                          .searchInfo.textSnippet
                      "
                    ></div>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col class cols="12" sm="12" md="12">
                    <v-item-group
                      mandatory
                      class="my-5 d-flex flex-wrap align-center justify-center"
                      v-model="system.data.template.xpert.bookshelf.type"
                    >
                      <v-item :value="0" v-slot="{ active, toggle }">
                        <v-chip
                          :color="active ? '#32e0c4' : '#fff'"
                          class="ma-3 px-5 d-flex align-center elevation-1"
                          @click="toggle"
                        >
                          <checks-icon
                            v-if="active"
                            stroke-width="1"
                          ></checks-icon>
                          <div class="pa-3 text-overline">Completed</div>
                        </v-chip>
                      </v-item>
                      <v-item :value="1" selected v-slot="{ active, toggle }">
                        <v-chip
                          :color="active ? '#32e0c4' : '#fff'"
                          class="ma-3 px-5 d-flex align-center elevation-1"
                          @click="toggle"
                        >
                          <book-icon v-if="active" stroke-width="1"></book-icon>
                          <div class="pa-3 text-overline">Reading</div>
                        </v-chip>
                      </v-item>
                      <v-item :value="2" v-slot="{ active, toggle }">
                        <v-chip
                          :color="active ? '#32e0c4' : '#fff'"
                          class="ma-3 px-5 d-flex align-center elevation-1"
                          @click="toggle"
                        >
                          <bookmark-icon
                            v-if="active"
                            stroke-width="1"
                          ></bookmark-icon>
                          <div class="pa-3 text-overline">To Read List</div>
                        </v-chip>
                      </v-item>
                    </v-item-group>
                  </v-col>
                </v-row>
                <v-expand-transition>
                  <div v-if="!system.data.template.xpert.bookshelf.type">
                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="12">
                        <div class="text-overline text-center mt-5">
                          Your tweet-sized review / favourite book quote
                        </div>
                      </v-col>
                    </v-row>
                    <ValidationProvider
                      name="Book Review"
                      rules="required"
                      v-slot="{ errors, valid }"
                    >
                      <v-textarea
                        counter="300"
                        maxlength="300"
                        solo
                        :error-messages="errors"
                        :valid="valid"
                        label="Review"
                        v-model="system.data.template.xpert.bookshelf.review"
                      ></v-textarea>
                    </ValidationProvider>

                    <v-row no-gutters>
                      <v-col
                        cols="12"
                        sm="12"
                        md="12"
                        class="d-flex justify-center align-middle"
                      >
                        <v-switch
                          class="pa-0 ma-0"
                          color="#32e0c4"
                          v-model="
                            system.data.template.xpert.bookshelf.recommend
                          "
                        >
                          <template v-slot:label>
                            <div class="text-overline text-center">
                              Recommend this book
                            </div>
                          </template>
                        </v-switch></v-col
                      >
                    </v-row>
                  </div>
                </v-expand-transition>
                <v-row no-gutters></v-row>
              </v-card>

              <v-row justify="space-between">
                <v-col class="text-center" cols="12">
                  <!-- <v-alert
                    v-model="infoBookshelf"
                    dismissible
                    transition="scroll-y-transition"
                    color="#293136"
                    dark
                    dense
                    icon="mdi-school"
                    prominent
                    elevation="5"
                    >Help Lorem Ipsum</v-alert
                  > -->
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col
                  class="d-flex align-center justify-center mb-5"
                  cols="12"
                  sm="12"
                  md="6"
                >
                  <v-btn
                    text
                    color="#39444b"
                    @click="infoBookshelf = !infoBookshelf"
                  >
                    <v-icon dark>mdi-information</v-icon>
                  </v-btn>
                </v-col>
                <v-col
                  class="d-flex align-center justify-center mb-5 px-5"
                  cols="12"
                  sm="12"
                  md="6"
                >
                  <v-btn
                    :disabled="invalid || !valid"
                    color="#32e0c4"
                    @click="handleSubmit(validateBookshelf)"
                    block
                    rounded
                    x-large
                  >
                    Add Book
                    <v-icon right>mdi-book</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </ValidationObserver>
        </v-col>
        <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      </v-row>

      <v-row no-gutters>
        <v-col class cols="1" sm="1" md="2"></v-col>
        <v-col class cols="12" sm="12" md="8">
          <v-sheet
            class="mb-10"
            color="transparent"
            min-height="100px"
          ></v-sheet>
        </v-col>
        <v-col class cols="1" sm="1" md="2"></v-col>
      </v-row>
    </vue-diagonal>

    <v-row no-gutters>
      <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="6">
        <v-sheet class="mt-10 pa-5" width="100%" height>
          <div class="text-h3 mt-10">Employment</div>
          <div class="text-overline ml-5 mb-10">
            Current position / Relevant Experience
          </div>

          <v-timeline
            class="hidden-sm-and-down"
            dense
            v-if="xpert.data.employment.length > 0"
          >
            <template v-for="(item, index) in xpert.data.employment">
              <div :key="index">
                <v-timeline-item
                  :color="item.emp_active ? '#32e0c4' : '#52616b'"
                  fill-dot
                >
                  <template v-slot:icon>
                    <chevrons-right-icon
                      v-if="item.emp_active"
                      color="#52616b"
                      stroke-width="1"
                    ></chevrons-right-icon>
                    <building-skyscraper-icon
                      v-if="!item.emp_active"
                      color="white"
                      stroke-width="1"
                    ></building-skyscraper-icon>
                  </template>
                  <v-card class="elevation-1 mr-5 pa-5" color="#ffffff">
                    <v-row no-gutters>
                      <v-col cols="12" sm="12" md="12">
                        <div class="d-flex align-center justify-space-between">
                          <div
                            class="text-h5 mb-5 text-uppercase"
                            style="font-size: 1.2em !important"
                          >
                            {{ item.emp_role }}
                          </div>

                          <v-chip
                            label
                            class="mb-5 text-uppercase"
                            color="#f9fbfd"
                            text-color="#52616b"
                            >{{ item.emp_company }}</v-chip
                          >
                        </div>
                      </v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="8">
                        <div class="text-overline pl-5">
                          {{ item.emp_location.emoji }}
                          {{ item.emp_location.name }}
                        </div>
                      </v-col>
                      <v-col class="text-right" cols="4">
                        <div class="text-overline pr-5">
                          <span>{{ item.emp_start }}</span>
                          <span v-if="!item.emp_active" class="mx-1">···</span>
                          <span v-if="!item.emp_active">{{
                            item.emp_end
                          }}</span>
                        </div>
                      </v-col>
                    </v-row>

                    <v-card-text class="mt-5" v-if="item.emp_detailed">
                      <span v-html="item.emp_description"></span>
                      <div
                        v-if="item.emp_industry.length > 0"
                        class="d-flex flex-wrap mt-10"
                      >
                        <template
                          v-for="(industry, ind_index) in item.emp_industry"
                        >
                          <v-chip
                            label
                            :key="ind_index"
                            class="my-1 mr-2 elevation-0"
                            color="transparent"
                            outlined
                            text-color="#52616b"
                            ><v-avatar left
                              ><chart-arcs-icon
                                stroke-width="1"
                              ></chart-arcs-icon></v-avatar
                            >{{ industry.name }}</v-chip
                          >
                        </template>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>

                <v-row justify="space-between">
                  <v-col cols="8"></v-col>
                  <v-col class="text-right" cols="4">
                    <v-btn
                      class="mr-5 mb-5"
                      text
                      color="red"
                      @click="
                        removeElement('employment', 'emp_id', item.emp_id)
                      "
                    >
                      <v-icon dark>mdi-close</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </template>
          </v-timeline>

          <template v-for="(item, index) in xpert.data.employment">
            <div :key="index">
              <v-card
                class="hidden-md-and-up elevation-1 ma-5 pa-5"
                color="white"
              >
                <v-row no-gutters>
                  <v-col cols="12" sm="12" md="12">
                    <div
                      class="text-h6 mb-5 text-uppercase"
                      style="font-size: 1.2em !important"
                    >
                      {{ item.emp_role }}
                    </div>
                  </v-col>

                  <v-col cols="12" sm="12" md="12">
                    <div class="text-overline pl-5">{{ item.emp_company }}</div>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col cols="8">
                    <div class="text-overline pl-5">
                      {{ item.emp_location.emoji }}
                      {{ item.emp_location.name }}
                    </div>
                  </v-col>
                  <v-col class="text-right" cols="4">
                    <div class="text-overline pr-5">
                      <span>{{ item.emp_start }}</span>
                      <span v-if="!item.emp_active" class="mx-1">·</span>
                      <span v-if="!item.emp_active">{{ item.emp_end }}</span>
                    </div>
                  </v-col>
                </v-row>

                <v-card-text class="mt-5" v-if="item.emp_detailed">
                  <span v-html="item.emp_description"></span>
                  <div
                    v-if="item.emp_industry.length > 0"
                    class="d-flex flex-wrap mt-10"
                  >
                    <template
                      v-for="(industry, ind_index) in item.emp_industry"
                    >
                      <v-chip
                        label
                        :key="ind_index"
                        class="my-1 mr-2 elevation-0"
                        color="transparent"
                        outlined
                        text-color="#52616b"
                        ><v-avatar left
                          ><chart-arcs-icon
                            stroke-width="1"
                          ></chart-arcs-icon></v-avatar
                        >{{ industry.name }}</v-chip
                      >
                    </template>
                  </div>
                </v-card-text>
              </v-card>

              <v-row justify="space-between">
                <v-col cols="8"></v-col>
                <v-col class="text-right" cols="4">
                  <v-btn
                    class="hidden-md-and-up mr-5"
                    text
                    color="red"
                    @click="removeElement('employment', 'emp_id', item.emp_id)"
                  >
                    <v-icon dark>mdi-close</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </template>
        </v-sheet>
      </v-col>
      <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        class="d-flex align-center justify-center my-5"
        cols="12"
        sm="12"
        md="12"
      >
        <v-icon size="64" color="black">mdi-plus</v-icon>
      </v-col>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      <v-col class="px-5" cols="12" sm="12" md="8" xl="4"></v-col>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
    </v-row>

    <v-row>
      <v-col
        class="d-flex align-center justify-center"
        cols="12"
        sm="12"
        md="12"
      >
        <div class="text-overline mr-2">quick</div>
        <v-switch
          class="pt-1"
          v-model="system.data.template.xpert.employment.emp_detailed"
        >
          <template v-slot:label>
            <div class="text-overline">Detailed</div>
          </template>
        </v-switch>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="4">
        <v-sheet class color="transparent" min-height="10px"></v-sheet>
        <ValidationObserver
          immediate
          ref="formEmployment"
          v-slot="{ invalid, valid, handleSubmit }"
        >
          <v-form
            class="mt-1 px-5"
            ref="formEmployment"
            v-model="validEmployment"
            v-on:submit.prevent
          >
            <v-card
              class="elevation-0 mx-auto mb-5 pa-5 pa-md-10"
              color="transparent"
            >
              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="8">
                  <ValidationProvider
                    name="Role Name"
                    rules="alpha_num_spaces|required"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      class=""
                      v-model="system.data.template.xpert.employment.emp_role"
                      label="Role *"
                      solo
                      :error-messages="errors"
                      :valid="valid"
                      maxlength="64"
                      required
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
                <v-col class cols="12" sm="12" md="4">
                  <ValidationProvider
                    name="Seniority"
                    rules
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      v-model="system.data.template.xpert.employment.seniority"
                      :items="system.data.talent.seniority"
                      solo
                      hide-no-data
                      class="ml-md-5"
                      :error-messages="errors"
                      :valid="valid"
                      label="Seniority"
                      item-text="name"
                      return-object
                      :search-input.sync="searchInputseniority"
                      @change="searchInputseniority = ''"
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          outlined
                          >{{ data.item.name }}</v-chip
                        >
                      </template>
                      <template v-slot:item="data">
                        <clear-all-icon class="mr-2" stroke-width="0.5" />

                        <v-list-item-content>
                          <v-list-item-title
                            v-html="data.item.name"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-autocomplete>
                  </ValidationProvider>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="6">
                  <ValidationProvider
                    name="Company Name"
                    rules="alpha_num_spaces|required"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      class="mr-md-5"
                      v-model="
                        system.data.template.xpert.employment.emp_company
                      "
                      label="Company Name *"
                      solo
                      maxlength="32"
                      required
                      :error-messages="errors"
                      :valid="valid"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
                <v-col class cols="12" sm="12" md="6">
                  <ValidationProvider
                    name="Company Location"
                    rules
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      class="ml-md-5"
                      v-model="
                        system.data.template.xpert.employment.emp_location
                      "
                      :items="system.countries"
                      clearable
                      solo
                      chips
                      item-text="name"
                      return-object
                      label="Location"
                      :error-messages="errors"
                      :valid="valid"
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          outlined
                        >
                          <v-avatar left>{{ data.item.emoji }}</v-avatar>
                          {{ data.item.name }}
                        </v-chip>
                      </template>
                      <template v-slot:item="data">
                        <v-list-item-avatar>{{
                          data.item.emoji
                        }}</v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            v-html="data.item.name"
                          ></v-list-item-title>
                          <v-list-item-subtitle
                            v-html="data.item.native"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                      </template>
                    </v-autocomplete>
                  </ValidationProvider>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="4">
                  <ValidationProvider
                    name="EMP Year Start"
                    rules="integer|between:1900,2100|required"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      class="mr-md-5"
                      v-model.number="
                        system.data.template.xpert.employment.emp_start
                      "
                      label="Year Start *"
                      solo
                      required
                      :error-messages="errors"
                      :valid="valid"
                      maxlength="4"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
                <v-col
                  class="d-flex align-center justify-space-around"
                  cols="12"
                  sm="12"
                  md="4"
                >
                  <v-switch
                    class="pa-0 ma-0"
                    inset
                    v-model="system.data.template.xpert.employment.emp_active"
                  >
                    <template v-slot:label>
                      <div class="text-overline text-center">ACTIVE</div>
                    </template>
                  </v-switch>
                </v-col>
                <v-col class cols="12" sm="12" md="4">
                  <ValidationProvider
                    name="EMP Year End"
                    rules="integer|between:1900,2100"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      class=""
                      v-model.number="
                        system.data.template.xpert.employment.emp_end
                      "
                      v-if="!system.data.template.xpert.employment.emp_active"
                      label="Year End"
                      solo
                      :error-messages="errors"
                      :valid="valid"
                      maxlength="4"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
              </v-row>

              <!--
              <v-row no-gutters>
               <v-col class cols="12" sm="12" md="6">
                  <ValidationProvider
                    name="Company URL"
                    rules="url"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      class="mr-md-5"
                      v-model="system.data.template.xpert.employment.emp_link"
                      label="Company URL"
                      solo
                      maxlength="32"
                      required
                      :error-messages="errors"
                      :valid="valid"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col> 

                <v-col class cols="12" sm="12" md="4">
                  <ValidationProvider
                    name="Year Start"
                    rules="required"
                    v-slot="{ errors, valid }"
                  >
                   <v-menu
                      ref="menuStart"
                      v-model="menuStart"
                      :close-on-content-click="false"
                      :return-value.sync="
                        system.data.template.xpert.employment.emp_start
                      "
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="
                            system.data.template.xpert.employment.emp_start
                          "
                          label="Date Start"
                          class=""
                          readonly
                          solo
                          v-bind="attrs"
                          v-on="on"
                          :error-messages="errors"
                          :valid="valid"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        type="month"
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menuStart = false"
                          >Cancel</v-btn
                        >
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menuStart.save(date)"
                          >OK</v-btn
                        >
                      </v-date-picker>
                    </v-menu> 
                  </ValidationProvider>
                </v-col>
                <v-col class cols="12" sm="12" md="4">
                  <ValidationProvider
                    name="Year End"
                    rules
                    v-slot="{ errors, valid }"
                  >
                 <v-menu
                      v-if="!system.data.template.xpert.employment.emp_active"
                      ref="menuEnd"
                      v-model="menuEnd"
                      :close-on-content-click="false"
                      :return-value.sync="
                        system.data.template.xpert.employment.emp_end
                      "
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="
                            system.data.template.xpert.employment.emp_end
                          "
                          label="Date End"
                          class="ml-md-5"
                          readonly
                          solo
                          v-bind="attrs"
                          v-on="on"
                          :error-messages="errors"
                          :valid="valid"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        type="month"
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menuEnd = false"
                          >Cancel</v-btn
                        >
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menuEnd.save(date)"
                          >OK</v-btn
                        >
                      </v-date-picker>
                    </v-menu> 
                  </ValidationProvider>
                </v-col>
                <v-col
                  class="d-flex align-center justify-space-around"
                  cols="12"
                  sm="12"
                  md="4"
                >
                  <v-switch
                    class="pa-0 ma-0"
                    inset
                    v-model="system.data.template.xpert.employment.emp_active"
                  >
                    <template v-slot:label>
                      <div class="text-overline text-center">ACTIVE</div>
                    </template>
                  </v-switch>
                </v-col>
              </v-row>
              -->
              <v-expand-transition>
                <div v-if="system.data.template.xpert.employment.emp_detailed">
                  <div class="my-5 pl-1 text-overline text-left">
                    Role Summary / highlights
                  </div>

                  <ValidationProvider
                    name="Role Summary"
                    rules
                    v-slot="{ errors, valid }"
                  >
                    <vue-editor
                      :error-messages="errors"
                      :valid="valid"
                      id="empEditor"
                      v-model="
                        system.data.template.xpert.employment.emp_description
                      "
                      :editorToolbar="customToolbar"
                    />
                  </ValidationProvider>

                  <v-row no-gutters>
                    <v-col class cols="12" sm="12" md="6">
                      <ValidationProvider
                        name="EMP Related Sector"
                        rules="array_maxlength_3"
                        v-slot="{ errors, valid }"
                      >
                        <v-autocomplete
                          class="mt-10 mb-1 mr-md-5"
                          v-model="
                            system.data.template.xpert.employment.emp_industry
                          "
                          :items="system.data.internal.sectors"
                          solo
                          chips
                          hide-no-data
                          multiple
                          :error-messages="errors"
                          :valid="valid"
                          label="Related Sectors"
                          item-text="name"
                          return-object
                          clearable
                          :search-input.sync="searchInputempind"
                          @change="searchInputempind = ''"
                        >
                          <template v-slot:selection="data">
                            <v-chip
                              v-bind="data.attrs"
                              :input-value="data.selected"
                              outlined
                            >
                              <v-avatar left>
                                <chart-arcs-icon stroke-width="0.5" />
                              </v-avatar>
                              {{ data.item.name }}
                            </v-chip>
                          </template>
                          <template v-slot:item="data">
                            <template v-if="typeof data.item !== 'object'">
                              <v-list-item-content
                                v-text="data.item"
                              ></v-list-item-content>
                            </template>
                            <template v-else>
                              <chart-arcs-icon
                                class="mr-2"
                                stroke-width="0.5"
                              />

                              <v-list-item-content>
                                <v-list-item-title
                                  v-html="data.item.name"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </template>
                        </v-autocomplete>
                      </ValidationProvider>
                    </v-col>
                    <v-col class cols="12" sm="12" md="6">
                      <ValidationProvider
                        name="EMP Related Skillset"
                        rules="array_maxlength_5"
                        v-slot="{ errors, valid }"
                      >
                        <v-autocomplete
                          class="mt-10"
                          v-model="
                            system.data.template.xpert.employment.emp_skillset
                          "
                          :items="xpert.data.skillset"
                          clearable
                          multiple
                          solo
                          chips
                          label="Related Skills"
                          return-object
                          item-text="skill_entity"
                          :error-messages="errors"
                          :valid="valid"
                        >
                          <template v-slot:selection="data">
                            <v-chip
                              v-bind="data.attrs"
                              :input-value="data.selected"
                              outlined
                            >
                              <v-avatar left>
                                <recharging-icon stroke-width="1" />
                              </v-avatar>
                              {{ data.item.skill_entity }}
                            </v-chip>
                          </template>
                          <template v-slot:item="data">
                            <recharging-icon
                              stroke-width="1"
                              class="mr-2"
                            ></recharging-icon>
                            <v-list-item-content>
                              <v-list-item-title
                                v-html="data.item.skill_entity"
                              ></v-list-item-title>
                            </v-list-item-content>
                          </template>
                        </v-autocomplete>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                </div>
              </v-expand-transition>
            </v-card>

            <v-row justify="space-between">
              <v-col class="text-center" cols="12">
                <!-- <v-alert
                  v-model="infoEmployment"
                  dismissible
                  transition="scale-transition"
                  color="#293136"
                  dark
                  dense
                  icon="mdi-information"
                  prominent
                  elevation="5"
                  >Help Lorem Ipsum</v-alert
                > -->
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col
                class="d-flex align-center justify-center mb-5"
                cols="12"
                sm="12"
                md="6"
              >
                <v-btn
                  text
                  color="#293136"
                  @click="infoEmployment = !infoEmployment"
                >
                  <v-icon dark>mdi-information</v-icon>
                </v-btn>
              </v-col>
              <v-col
                class="d-flex align-center justify-center mb-5 px-5"
                cols="12"
                sm="12"
                md="6"
              >
                <v-btn
                  block
                  rounded
                  x-large
                  :disabled="invalid || !valid"
                  color="#32e0c4"
                  @click="handleSubmit(validateEmployment)"
                >
                  Add Employment
                  <v-icon dark right>mdi-briefcase</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </ValidationObserver>
      </v-col>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class cols="1" sm="1" md="2"></v-col>
      <v-col class cols="12" sm="12" md="8">
        <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet>
      </v-col>
      <v-col class cols="1" sm="1" md="2"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="6">
        <v-sheet class="mt-15 pa-5" width="100%" height>
          <div class="text-h3 mt-10">Education</div>
          <div class="text-overline ml-5 mb-10">
            Degrees / Certifications / Accolades
          </div>

          <v-timeline
            class="hidden-sm-and-down"
            dense
            v-if="xpert.data.education.length > 0"
          >
            <template v-for="(item, index) in xpert.data.education">
              <div :key="index">
                <v-timeline-item
                  :color="item.edu_active ? '#32e0c4' : '#52616b'"
                  fill-dot
                >
                  <template v-slot:icon>
                    <school-icon
                      v-if="item.edu_active"
                      color="#52616b"
                      stroke-width="1"
                    ></school-icon>
                    <certificate-icon
                      v-if="!item.edu_active"
                      color="white"
                      stroke-width="1"
                    ></certificate-icon>
                  </template>
                  <v-card class="elevation-1 mr-5 pa-5" color="">
                    <v-row no-gutters>
                      <v-col cols="12" sm="12" md="12">
                        <div
                          class="text-h5 mb-5 text-uppercase"
                          style="font-size: 1.2em !important"
                        >
                          {{ item.edu_name }}
                        </div>
                      </v-col>

                      <v-col cols="12" sm="12" md="12">
                        <div class="text-overline pl-5">
                          {{ item.edu_entity }}
                        </div>
                      </v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="8">
                        <div class="text-overline pl-5">
                          {{ item.edu_location.emoji }}
                          {{ item.edu_location.name }}
                        </div>
                      </v-col>
                      <v-col class="text-right" cols="4">
                        <div class="text-overline pr-5">
                          <span>{{ item.edu_start }}</span>
                          <span v-if="!item.edu_active" class="mx-1">···</span>
                          <span v-if="!item.edu_active">{{
                            item.edu_end
                          }}</span>
                        </div>
                      </v-col>
                    </v-row>

                    <v-card-text v-if="item.edu_detailed">
                      <span v-html="item.edu_description"></span>

                      <div class="d-flex flex-wrap mt-5">
                        <template
                          v-for="(skill, skill_index) in item.edu_skillset"
                        >
                          <v-chip
                            label
                            :key="skill_index"
                            class="my-1 mr-2 elevation-0"
                            color="transparent"
                            outlined
                            text-color="#52616b"
                          >
                            <recharging-icon
                              stroke-width="1"
                              class="mr-2"
                            ></recharging-icon>
                            {{ skill.skill_entity }}
                          </v-chip>
                        </template>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
                <v-row justify="space-between">
                  <v-col cols="8"></v-col>
                  <v-col class="text-right" cols="4">
                    <v-btn
                      class="hidden-md-and-down mr-5 mb-5"
                      text
                      color="red"
                      @click="removeElement('education', 'edu_id', item.edu_id)"
                    >
                      <v-icon dark>mdi-close</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </template>
          </v-timeline>

          <template v-for="(item, index) in xpert.data.education">
            <div :key="index">
              <v-card class="hidden-md-and-up elevation-1 ma-5 pa-5" color="">
                <v-row no-gutters>
                  <v-col cols="12" sm="12" md="12">
                    <div
                      class="text-h5 mb-5 text-uppercase"
                      style="font-size: 1.2em !important"
                    >
                      {{ item.edu_name }}
                    </div>
                  </v-col>

                  <v-col cols="12" sm="12" md="12">
                    <div class="text-overline pl-5">{{ item.edu_entity }}</div>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col cols="8">
                    <div class="text-overline pl-5">
                      {{ item.edu_location.emoji }}
                      {{ item.edu_location.name }}
                    </div>
                  </v-col>
                  <v-col class="text-right" cols="4">
                    <div class="text-overline pr-5">
                      <span>{{ item.edu_start }}</span>
                      <span v-if="!item.edu_active" class="mx-1">·</span>
                      <span v-if="!item.edu_active">{{ item.edu_end }}</span>
                    </div>
                  </v-col>
                </v-row>

                <v-card-text v-if="item.edu_detailed">
                  <span v-html="item.edu_description"></span>

                  <div class="d-flex flex-wrap mt-5">
                    <template v-for="(skill, skill_index) in item.edu_skillset">
                      <v-chip
                        label
                        :key="skill_index"
                        class="my-1 mr-2 elevation-0"
                        color="transparent"
                        outlined
                        text-color="#52616b"
                      >
                        <recharging-icon
                          stroke-width="1"
                          class="mr-2"
                        ></recharging-icon>
                        {{ skill.skill_entity }}
                      </v-chip>
                    </template>
                  </div>
                </v-card-text>
              </v-card>
              <v-row justify="space-between">
                <v-col cols="8"></v-col>
                <v-col class="text-right" cols="4">
                  <v-btn
                    class="hidden-md-and-up mr-5"
                    text
                    color="red"
                    @click="removeElement('education', 'edu_id', item.edu_id)"
                  >
                    <v-icon dark>mdi-close</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </template>
        </v-sheet>
      </v-col>
      <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        class="d-flex align-center justify-center my-5"
        cols="12"
        sm="12"
        md="12"
      >
        <v-icon size="64" color="black">mdi-plus</v-icon>
      </v-col>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      <v-col class="px-5" cols="12" sm="12" md="8" xl="4"></v-col>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
    </v-row>

    <v-row>
      <v-col
        class="d-flex align-center justify-center"
        cols="12"
        sm="12"
        md="12"
      >
        <div class="text-overline mr-2">quick</div>
        <v-switch
          class="pt-1"
          v-model="system.data.template.xpert.education.edu_detailed"
        >
          <template v-slot:label>
            <div class="text-overline">Detailed</div>
          </template>
        </v-switch>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="4">
        <v-sheet class color="transparent" min-height="10px"></v-sheet>
        <ValidationObserver
          immediate
          ref="formEducation"
          v-slot="{ invalid, valid, handleSubmit }"
        >
          <v-form
            class="mt-1 px-5"
            ref="formEducation"
            v-model="validEducation"
            v-on:submit.prevent
          >
            <v-card
              class="elevation-0 mx-auto mb-5 pa-5 pa-md-10"
              color="transparent"
            >
              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="7">
                  <ValidationProvider
                    name="EDU Entity Name"
                    rules="alpha_num_spaces|required"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      class="mr-md-5"
                      v-model="system.data.template.xpert.education.edu_name"
                      label="Degree / Certificate / Diploma Name *"
                      solo
                      required
                      :error-messages="errors"
                      :valid="valid"
                      maxlength="140"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
                <v-col class cols="12" sm="12" md="5">
                  <ValidationProvider
                    name="Entity Name"
                    rules="alpha_num_spaces|required"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      class=""
                      v-model="system.data.template.xpert.education.edu_entity"
                      label="Entity / School Name *"
                      solo
                      required
                      :error-messages="errors"
                      :valid="valid"
                      maxlength="140"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="6">
                  <ValidationProvider
                    name="Entity URL"
                    rules="url"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      class="mr-md-5"
                      v-model="system.data.template.xpert.education.edu_link"
                      label="Entity / Certificate Link"
                      solo
                      required
                      :error-messages="errors"
                      :valid="valid"
                      maxlength="64"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>

                <v-col class cols="12" sm="12" md="6">
                  <ValidationProvider
                    name="Entity Location"
                    rules
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      class=""
                      v-model="
                        system.data.template.xpert.education.edu_location
                      "
                      :items="system.countries"
                      clearable
                      solo
                      chips
                      :error-messages="errors"
                      :valid="valid"
                      item-text="name"
                      return-object
                      label="Location"
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          outlined
                        >
                          <v-avatar left>{{ data.item.emoji }}</v-avatar>
                          {{ data.item.name }}
                        </v-chip>
                      </template>
                      <template v-slot:item="data">
                        <v-list-item-avatar>{{
                          data.item.emoji
                        }}</v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            v-html="data.item.name"
                          ></v-list-item-title>
                          <v-list-item-subtitle
                            v-html="data.item.native"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                      </template>
                    </v-autocomplete>
                  </ValidationProvider>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="4">
                  <ValidationProvider
                    name="EDU Year Start"
                    rules="integer|between:1900,2100|required"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      class="mr-md-5"
                      v-model.number="
                        system.data.template.xpert.education.edu_start
                      "
                      label="Year Start *"
                      solo
                      required
                      :error-messages="errors"
                      :valid="valid"
                      maxlength="4"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
                <v-col
                  class="d-flex align-center justify-space-around"
                  cols="12"
                  sm="12"
                  md="4"
                >
                  <v-switch
                    class="pa-0 ma-0"
                    inset
                    v-model="system.data.template.xpert.education.edu_active"
                  >
                    <template v-slot:label>
                      <div class="text-overline text-center">ACTIVE</div>
                    </template>
                  </v-switch>
                </v-col>
                <v-col class cols="12" sm="12" md="4">
                  <ValidationProvider
                    name="EDU Year End"
                    rules="integer|between:1900,2100"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      class=""
                      v-model.number="
                        system.data.template.xpert.education.edu_end
                      "
                      v-if="!system.data.template.xpert.education.edu_active"
                      label="Year End"
                      solo
                      :error-messages="errors"
                      :valid="valid"
                      maxlength="4"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
              </v-row>
              <v-expand-transition>
                <div v-if="system.data.template.xpert.education.edu_detailed">
                  <div class="my-5 text-overline text-left">Syllabus</div>

                  <ValidationProvider
                    name="Syllabus"
                    rules
                    v-slot="{ errors, valid }"
                  >
                    <vue-editor
                      :error-messages="errors"
                      :valid="valid"
                      id="eduEditor"
                      v-model="
                        system.data.template.xpert.education.edu_description
                      "
                      :editorToolbar="customToolbar"
                    />
                  </ValidationProvider>

                  <v-row no-gutters>
                    <v-col class cols="12" sm="12" md="6">
                      <ValidationProvider
                        name="EDU Related Sector"
                        rules="array_maxlength_3"
                        v-slot="{ errors, valid }"
                      >
                        <v-autocomplete
                          class="mt-10 mb-1 mr-md-5"
                          v-model="
                            system.data.template.xpert.education.edu_industry
                          "
                          :items="system.data.internal.sectors"
                          solo
                          chips
                          hide-no-data
                          multiple
                          :error-messages="errors"
                          :valid="valid"
                          label="Related Sectors"
                          item-text="name"
                          return-object
                          clearable
                          :search-input.sync="searchInputeduind"
                          @change="searchInputeduind = ''"
                        >
                          <template v-slot:selection="data">
                            <v-chip
                              v-bind="data.attrs"
                              :input-value="data.selected"
                              outlined
                            >
                              <v-avatar left>
                                <chart-arcs-icon stroke-width="0.5" />
                              </v-avatar>
                              {{ data.item.name }}
                            </v-chip>
                          </template>
                          <template v-slot:item="data">
                            <template v-if="typeof data.item !== 'object'">
                              <v-list-item-content
                                v-text="data.item"
                              ></v-list-item-content>
                            </template>
                            <template v-else>
                              <chart-arcs-icon
                                class="mr-2"
                                stroke-width="0.5"
                              />

                              <v-list-item-content>
                                <v-list-item-title
                                  v-html="data.item.name"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </template>
                        </v-autocomplete>
                      </ValidationProvider>
                    </v-col>
                    <v-col class cols="12" sm="12" md="6">
                      <ValidationProvider
                        name="EDU Related Skillset"
                        rules="array_maxlength_5"
                        v-slot="{ errors, valid }"
                      >
                        <v-autocomplete
                          class="mt-10"
                          v-model="
                            system.data.template.xpert.education.edu_skillset
                          "
                          :items="xpert.data.skillset"
                          clearable
                          multiple
                          solo
                          chips
                          label="Related Skills"
                          return-object
                          item-text="skill_entity"
                          :error-messages="errors"
                          :valid="valid"
                        >
                          <template v-slot:selection="data">
                            <v-chip
                              v-bind="data.attrs"
                              :input-value="data.selected"
                              outlined
                            >
                              <v-avatar left>
                                <recharging-icon stroke-width="1" />
                              </v-avatar>
                              {{ data.item.skill_entity }}
                            </v-chip>
                          </template>
                          <template v-slot:item="data">
                            <recharging-icon
                              stroke-width="1"
                              class="mr-2"
                            ></recharging-icon>
                            <v-list-item-content>
                              <v-list-item-title
                                v-html="data.item.skill_entity"
                              ></v-list-item-title>
                            </v-list-item-content>
                          </template>
                        </v-autocomplete>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                </div>
              </v-expand-transition>
            </v-card>

            <v-row justify="space-between">
              <v-col class="text-center" cols="12">
                <!-- <v-alert
                  v-model="infoEducation"
                  dismissible
                  transition="scale-transition"
                  color="#293136"
                  dark
                  dense
                  icon="mdi-school"
                  prominent
                  elevation="5"
                  >Help Lorem Ipsum</v-alert
                > -->
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col
                class="d-flex align-center justify-center mb-5"
                cols="12"
                sm="12"
                md="6"
              >
                <v-btn
                  text
                  color="#293136"
                  @click="infoEducation = !infoEducation"
                >
                  <v-icon dark>mdi-information</v-icon>
                </v-btn>
              </v-col>
              <v-col
                class="d-flex align-center justify-center mb-5 px-5"
                cols="12"
                sm="12"
                md="6"
              >
                <v-btn
                  block
                  rounded
                  x-large
                  :disabled="invalid || !valid"
                  color="#32e0c4"
                  @click="handleSubmit(validateEducation)"
                >
                  Add Education
                  <v-icon dark right>mdi-school</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </ValidationObserver>
      </v-col>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class cols="1" sm="1" md="2"></v-col>
      <v-col class cols="12" sm="12" md="8">
        <v-sheet class="mb-10" color="transparent" min-height="150px"></v-sheet>
      </v-col>
      <v-col class cols="1" sm="1" md="2"></v-col>
    </v-row>

    <vue-diagonal :deg="-2" background="#f9fbfd" space-before>
      <vue-diagonal :deg="-2" background="#1d2226">
        <v-row no-gutters>
          <v-col class cols="12" sm="0" md="2" xl="4"></v-col>
          <v-col class cols="12" sm="12" md="8" xl="4">
            <v-sheet class="mt-10 pa-5" width="100%" height color="transparent">
              <div class="text-h3 mt-10 white--text">Trending</div>
              <div class="text-overline ml-5 white--text">
                Interests / Researching / Upskilling / Learning
              </div>

              <v-sheet
                class="d-flex flex-wrap justify-space-between mt-15"
                width="100%"
                color="transparent"
              >
                <template v-for="item in xpert.data.interests">
                  <div :key="item.trend_id" class="my-5 mx-5">
                    <v-chip
                      class="elevation-5"
                      color="#39444b"
                      @click:close="
                        removeElement('interests', 'trend_id', item.trend_id)
                      "
                      dark
                      label
                      close
                    >
                      <v-avatar left>
                        <v-icon color="#32e0c4">mdi-pound-box</v-icon>
                      </v-avatar>
                      <span class="mx-5">{{ item.trend_entity }}</span>
                    </v-chip>
                  </div>
                </template>
              </v-sheet>
            </v-sheet>
          </v-col>
          <v-col class cols="12" sm="0" md="2" xl="4"></v-col>
        </v-row>
        <v-row no-gutters>
          <v-col
            class="d-flex align-center justify-center my-5"
            cols="12"
            sm="12"
            md="12"
          >
            <v-icon size="64" color="#f6f9fc">mdi-plus</v-icon>
          </v-col>
          <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
          <v-col class="px-5" cols="12" sm="12" md="8" xl="4"></v-col>
          <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
        </v-row>
        <v-row no-gutters>
          <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
          <v-col class cols="12" sm="12" md="8" xl="4">
            <v-sheet class color="transparent" min-height="10px"></v-sheet>
            <ValidationObserver
              immediate
              ref="formInterests"
              v-slot="{ invalid, valid, handleSubmit }"
            >
              <v-form
                class="mt-1 px-5"
                ref="formInterests"
                v-model="validInterests"
                v-on:submit.prevent
              >
                <v-card
                  class="elevation-5 mx-auto mb-5 pa-5 pa-md-10"
                  color="#f6f9fc"
                >
                  <v-row no-gutters>
                    <v-col class cols="12" sm="12" md="12">
                      <div class="text-button text-center mb-5">
                        What is keeping you curious ?
                      </div>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col class cols="12" sm="12" md="12">
                      <ValidationProvider
                        name="Trends"
                        rules="required"
                        v-slot="{ errors, valid }"
                      >
                        <!-- :items="system.data.internal.trends" -->
                        <v-combobox
                          v-model="system.data.template.xpert.interests"
                          solo
                          chips
                          hide-no-data
                          :error-messages="errors"
                          :valid="valid"
                          label="Trends"
                          item-text="name"
                          return-object
                          color="#32e0c4"
                          multiple
                          hint="Add what is keeping you awake"
                          prepend-inner-icon="mdi-pound-box"
                          :search-input.sync="searchInputinterests"
                          @change="searchInputinterests = ''"
                        >
                        </v-combobox>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col class cols="12" sm="12" md="12"> </v-col>
                  </v-row>
                </v-card>
                <v-row justify="space-between">
                  <v-col class="text-center" cols="12">
                    <!-- <v-alert
                    v-model="infoConnections"
                    dismissible
                    transition="scale-transition"
                    color="#293136"
                    dark
                    dense
                    icon="mdi-school"
                    prominent
                    elevation="5"
                    >Help Lorem Ipsum</v-alert
                  > -->
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col
                    class="d-flex align-center justify-center mb-5"
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-btn
                      text
                      color="#39444b"
                      @click="infoInterests = !infoInterests"
                    >
                      <v-icon dark>mdi-information</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col
                    class="d-flex align-center justify-center mb-5 px-5"
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-btn
                      block
                      rounded
                      x-large
                      :disabled="invalid || !valid"
                      color="#32e0c4"
                      @click="handleSubmit(validateInterests)"
                    >
                      Add Trend
                      <v-icon dark right>mdi-pound-box</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </ValidationObserver>
          </v-col>
          <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
        </v-row>
        <v-row no-gutters>
          <v-col class cols="1" sm="1" md="2"></v-col>
          <v-col class cols="12" sm="12" md="8">
            <v-sheet
              class="mb-10"
              color="transparent"
              min-height="100px"
            ></v-sheet>
          </v-col>
          <v-col class cols="1" sm="1" md="2"></v-col>
        </v-row>
      </vue-diagonal>
      <v-row no-gutters>
        <v-col class cols="12" sm="0" md="2" xl="4"></v-col>
        <v-col class cols="12" sm="12" md="8" xl="4">
          <v-sheet class="mt-10 pa-5" width="100%" height color="transparent">
            <div class="text-h3 mt-10" style="color: #2d2d2d">Connections</div>
            <div class="text-overline ml-5" style="color: #2d2d2d">
              your public internet presence
            </div>

            <v-sheet class="mt-15 pl-5" width="100%" color="transparent">
              <template v-for="(item, index) in xpert.data.socials">
                <div :key="index">
                  <v-row no-gutters>
                    <v-col cols="10" sm="10" md="10">
                      <v-card
                        color="#22292d"
                        class="elevation-3 py-1 px-1 my-5"
                      >
                        <v-row no-gutters>
                          <v-col
                            class="d-flex align-center justify-center"
                            cols="2"
                            sm="2"
                            md="2"
                          >
                            <vue-link
                              :to="item.conn_link"
                              :external="true"
                              :new-tab="true"
                              class=""
                            >
                              <v-avatar class="ma-3" size="32" tile>
                                <v-icon
                                  :tag="item.conn_entity.icon"
                                  size="48"
                                  stroke-width="1"
                                  color="white"
                                ></v-icon>
                              </v-avatar>
                            </vue-link>
                          </v-col>
                          <v-col
                            class="d-flex align-center"
                            cols="8"
                            sm="8"
                            md="8"
                          >
                            <div class="text-button ml-1">···</div>
                            <div class="text-button ml-5 white--text">
                              {{ item.conn_name }}
                            </div>
                          </v-col>
                          <v-col class cols="2" sm="2" md="2"></v-col>
                        </v-row>
                      </v-card>
                    </v-col>

                    <v-col
                      class="d-flex align-center justify-center"
                      cols="2"
                      sm="2"
                      md="2"
                    >
                      <v-btn
                        text
                        class="ml-2"
                        color="red"
                        @click="
                          removeElement('socials', 'conn_id', item.conn_id)
                        "
                      >
                        <v-icon dark>mdi-close</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </template>
            </v-sheet>
          </v-sheet>
        </v-col>
        <v-col class cols="12" sm="0" md="2" xl="4"></v-col>
      </v-row>
      <v-row no-gutters>
        <v-col
          class="d-flex align-center justify-center my-5"
          cols="12"
          sm="12"
          md="12"
        >
          <v-icon size="64" color="#1d1d1d">mdi-plus</v-icon>
        </v-col>
        <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
        <v-col class="px-5" cols="12" sm="12" md="8" xl="4"></v-col>
        <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
        <v-col class cols="12" sm="12" md="8" xl="4">
          <v-sheet class color="transparent" min-height="10px"></v-sheet>
          <ValidationObserver
            immediate
            ref="formConnections"
            v-slot="{ invalid, valid, handleSubmit }"
          >
            <v-form
              class="mt-1 px-5"
              ref="formConnections"
              v-model="validConnections"
              v-on:submit.prevent
            >
              <v-card
                class="elevation-5 mx-auto mb-5 pa-5 pa-md-10"
                color="#ffffff"
              >
                <v-row no-gutters>
                  <v-col class cols="12" sm="12" md="12">
                    <div class="text-overline text-center mb-5">
                      Customize your links
                    </div>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col class cols="12" sm="6" md="6">
                    <ValidationProvider
                      name="Socials"
                      rules="required"
                      v-slot="{ errors, valid }"
                    >
                      <v-autocomplete
                        class="mr-md-5"
                        v-model="system.data.template.xpert.socials.conn_entity"
                        :items="system.data.xpert.socials"
                        solo
                        chips
                        :error-messages="errors"
                        :valid="valid"
                        return-object
                        clearable
                        item-text="name"
                        label="Network"
                      >
                        <template v-slot:selection="data">
                          <v-chip
                            v-bind="data.attrs"
                            :input-value="data.selected"
                            outlined
                          >
                            <v-avatar left>
                              <v-icon
                                :tag="data.item.icon"
                                size="16"
                                stroke-width="1"
                              ></v-icon>
                            </v-avatar>
                            {{ data.item.name }}
                          </v-chip>
                        </template>
                        <template v-slot:item="data">
                          <v-icon
                            class="mr-2"
                            :tag="data.item.icon"
                            size="24"
                            stroke-width="1"
                          ></v-icon>

                          <v-list-item-content>
                            <v-list-item-title
                              v-html="data.item.name"
                            ></v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-autocomplete>
                    </ValidationProvider>
                  </v-col>
                  <v-col class cols="12" sm="6" md="6">
                    <ValidationProvider
                      name="Social Handle Title"
                      rules="alpha_num_spaces|required"
                      v-slot="{ errors, valid }"
                    >
                      <v-text-field
                        class="ml-sm-5"
                        v-model="system.data.template.xpert.socials.conn_name"
                        label="Connection Name *"
                        solo
                        :error-messages="errors"
                        :valid="valid"
                        required
                        maxlength="32"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col class cols="12" sm="12" md="12">
                    <ValidationProvider
                      name="URL"
                      rules="url|required"
                      v-slot="{ errors, valid }"
                    >
                      <v-text-field
                        class
                        v-model="system.data.template.xpert.socials.conn_link"
                        label="URL Handle *"
                        solo
                        :error-messages="errors"
                        :valid="valid"
                        required
                        append-icon="mdi-link"
                        maxlength="128"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                </v-row>
              </v-card>
              <v-row justify="space-between">
                <v-col class="text-center" cols="12">
                  <!-- <v-alert
                    v-model="infoConnections"
                    dismissible
                    transition="scale-transition"
                    color="#293136"
                    dark
                    dense
                    icon="mdi-school"
                    prominent
                    elevation="5"
                    >Help Lorem Ipsum</v-alert
                  > -->
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col
                  class="d-flex align-center justify-center mb-5"
                  cols="12"
                  sm="12"
                  md="6"
                >
                  <v-btn
                    text
                    color="#39444b"
                    @click="infoConnections = !infoConnections"
                  >
                    <v-icon dark>mdi-information</v-icon>
                  </v-btn>
                </v-col>
                <v-col
                  class="d-flex align-center justify-center mb-5 px-5"
                  cols="12"
                  sm="12"
                  md="6"
                >
                  <v-btn
                    block
                    rounded
                    x-large
                    :disabled="invalid || !valid"
                    color="#32e0c4"
                    @click="handleSubmit(validateConnections)"
                  >
                    Add Connection
                    <v-icon dark right>mdi-link</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </ValidationObserver>
        </v-col>
        <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      </v-row>

      <v-row no-gutters>
        <v-col class cols="1" sm="1" md="2"></v-col>
        <v-col class cols="12" sm="12" md="8">
          <v-sheet
            class="mb-10"
            color="transparent"
            min-height="100px"
          ></v-sheet>
        </v-col>
        <v-col class cols="1" sm="1" md="2"></v-col>
      </v-row>
    </vue-diagonal>

    <!-- <vue-diagonal :deg="-2" background="#1d2226" space-after>
      <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet>
      <v-row no-gutters>
        <v-col class cols="12" sm="12" md="2" xl="2"></v-col>
        <v-col
          class="d-flex justify-space-between align-center"
          cols="12"
          sm="12"
          md="8"
          xl="8"
        >
          <div class="text-h5 mx-2" style="color: #39444b">
            you are in control of all your data
          </div>
          <astro-svg width="500px"></astro-svg>
          <div class="text-h4 mx-2" style="color: #39444b"></div>
        </v-col>
        <v-col class cols="12" sm="12" md="2" xl="2"></v-col>
      </v-row>
      <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet>
    </vue-diagonal> -->

    <v-row no-gutters>
      <v-col class cols="1" sm="1" md="2"></v-col>
      <v-col class cols="12" sm="12" md="8">
        <v-sheet class="mb-10" color="transparent" min-height="150px"></v-sheet>
      </v-col>
      <v-col class cols="1" sm="1" md="2"></v-col>
    </v-row>

    <v-sheet class="mb-10" color="transparent" min-height="350px"></v-sheet>
  </div>
</template>

<script>
  // import AstroSvg from '@/assets/svg/temp/astro.svg'
  import _ from 'lodash'
  import sanitizeHtml from 'sanitize-html'
  import sanitizeOptions from '@/plugins/sanitize'

  import LogoAnimated from '@/components/main/LogoAnimated'

  import { VueEditor } from 'vue2-editor'

  import store from '@/store'
  import { mapState } from 'vuex'

  import { DateTime } from 'luxon'

  import vueFilePond from 'vue-filepond'

  // Import plugins

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

      searchInput: null,

      validProfile: false,
      infoProfile: true,
      validExperience: false,
      infoExperience: true,
      validSkillset: false,
      infoSkillset: true,
      validEmployment: false,
      infoEmployment: true,
      validEducation: false,
      infoEducation: true,
      validConnections: false,
      infoConnections: true,
      validPortfolio: false,
      infoPortfolio: true,
      validBookshelf: false,
      infoBookshelf: true,
      validFeatured: false,
      infoFeatured: true,
      validInterests: false,
      infoInterests: true,

      requiredRules: [(v) => !!v || 'Field is required'],
      bioRules: [
        (v) => !!v || 'Bio is required',
        (v) => (v && v.length >= 0) || 'Bio must be at least 0 chars',
        (v) =>
          (v && v.length <= 500) || 'Bio must not be bigger than a 500 chars',
      ],

      isDataInSyncWithBackend: false,

      companySearch: null,
      companyQuery: '',

      bookSearch: null,
      bookQuery: '',

      loadingFeatured: false,
      loadingPortfolio: false,
      loadingBookshelf: false,

      searchInputlanguages: null,
      searchInputsectors: null,
      searchInputskillset: null,
      searchInputskilllevel: null,
      searchInputindustry: null,
      searchInputfeatind: null,
      searchInputseniority: null,
      searchInputempind: null,
      searchInputeduind: null,
      searchInputinterests: null,

      myZoneName: DateTime.local().zoneName,

      menuStart: false,
      menuEnd: false,

      date: new Date().toISOString().substr(0, 7),

      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [],
      ],
      customToolbarNoList: [['bold', 'italic', 'underline'], [], []],
    }),
    components: {
      FilePond,
      VueEditor,
      LogoAnimated,

      VueLink: () => import('vue-link'),
    },

    computed: {
      ...mapState(['auth', 'user', 'system', 'xpert']),
    },
    created() {},
    mounted() {
      store.dispatch('xpert/bindData')
    },
    watch: {
      companySearch(val) {
        this.companyQuery = val
        if (!val) {
          return false
        } else if (val.length > 1) {
          this.fetchCompanies(encodeURI(this.companyQuery))
        }
      },
      bookSearch(val) {
        this.bookQuery = val
        if (!val) {
          return false
        } else if (val.length > 1) {
          this.fetchBooks(encodeURI(this.bookQuery))
        }
      },
    },
    methods: {
      handleFilePondInit: function () {},

      fetchCompanies: _.debounce(function (val) {
        this.system.data.template.xpert.currentCompany.loading = true
        fetch(
          'https://autocomplete.clearbit.com/v1/companies/suggest?query=' + val
        )
          .then((res) => res.clone().json())
          .then((res) => {
            console.log(res)
            this.system.data.template.xpert.companies = res
            this.xpert.data.profile.currentCompanyItems = res
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(
            () => (this.system.data.template.xpert.currentCompany.loading = false)
          )
      }, 2000),

      fetchBooks: _.debounce(function (val) {
        this.system.data.template.xpert.bookshelf.loading = true
        this.system.data.template.xpert.bookshelf.currentBookItems = []

        fetch(
          'https://www.googleapis.com/books/v1/volumes?q=' +
            val +
            '&printType=books&key=AIzaSyA1hfZonCcb3T57N2129LHT76svSsPZRvA'
        )
          .then((res) => res.clone().json())
          .then((res) => {
            var mapped = _.map(
              res.items,
              _.partialRight(_.pick, ['searchInfo', 'volumeInfo'])
            )
            _.remove(mapped, function (el) {
              return typeof el.volumeInfo.imageLinks != 'object'
            })
            console.log(mapped)
            this.system.data.template.xpert.bookshelf.currentBookItems = mapped
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(
            () => (this.system.data.template.xpert.bookshelf.loading = false)
          )
      }, 2000),

      reset() {
        requestAnimationFrame(() => {
          this.$refs.form.reset()
        })
      },

      safeData(content, options) {
        const test = sanitizeHtml(content, options)
        const sanitizedOutput = sanitizeHtml(content, options)
        const output = test != 'undefined' ? sanitizedOutput : ''
        return output
      },

      validateProfile() {
        if (this.$refs.formProfile.validate()) {
          if (this.xpert.data.profile.bio.length == 0) {
            this.xpert.data.profile.bio = '<p><br/></p>'
          }

          const updateProfile = {
            displayPicture: this.xpert.data.profile.displayPicture,
            displayName: this.xpert.data.profile.displayName,
            bio: this.safeData(this.xpert.data.profile.bio, sanitizeOptions),
            seniority: this.xpert.data.profile.seniority,
            currentRole: this.xpert.data.profile.currentRole,
            currentCompany: this.xpert.data.profile.currentCompany,
            location: this.xpert.data.profile.location,
            timezone: this.myZoneName,
            username: this.user.data.username,
          }

          store
            .dispatch('xpert/backendOfflineUpdateAction', {
              data: {
                profile: JSON.parse(JSON.stringify(updateProfile)),
              },
              collection: 'xperts',
              direct: true,
            })
            .then(() => {
              store.dispatch('triggerNotification', {
                type: 'success',
                message: 'Profile Updated',
              })
              store.dispatch('xpert/updatePublicDataAction', {
                data: JSON.parse(JSON.stringify(updateProfile)),
                collection: 'xpublic',
                path: 'profile',
              })
            })
        }
      },

      validateExperience() {
        if (this.$refs.formExperience.validate()) {
          const newEXP = {
            exp_id: _.uniqueId('') + _.random(1000, 9999),
            exp_entity: _.upperCase(
              this.system.data.template.xpert.experience.exp_entity.skill_entity
            ),
            exp_skill: this.system.data.template.xpert.experience.exp_entity,
            exp_description: this.safeData(
              this.system.data.template.xpert.experience.exp_description,
              sanitizeOptions
            ),
            exp_length:
              this.system.data.template.xpert.experience.exp_entity.skill_length,
            exp_industry:
              this.system.data.template.xpert.experience.exp_industry || [],
            exp_level: this.system.data.template.xpert.experience.exp_level,
          }
          requestAnimationFrame(() => {
            this.$refs.formExperience.reset()
            this.system.data.template.xpert.experience = {
              exp_id: '',
              exp_entity: '',
              exp_skill: {},
              exp_description: '',
              exp_length: '',
              exp_level: {},
              exp_industry: [],
            }
          })

          this.xpert.data.experience.push(newEXP)

          this.xpert.data.experience = _.orderBy(
            this.xpert.data.experience,
            ['exp_length'],
            ['desc']
          )
          store
            .dispatch('xpert/backendOfflineUpdateAction', {
              data: {
                experience: JSON.parse(
                  JSON.stringify(this.xpert.data.experience)
                ),
              },
              collection: 'xperts',
            })
            .then(function () {
              store.dispatch('triggerNotification', {
                type: 'success',
                message: 'Updated',
              })
            })
        }
      },
      validateSkillset() {
        if (this.$refs.formSkillset.validate()) {
          const newSKL = {
            skill_id: _.uniqueId('') + _.random(1000, 9999),
            skill_entity: _.upperCase(
              this.system.data.template.xpert.skillset.skill_entity
            ),
            skill_length: this.system.data.template.xpert.skillset.skill_length,
            skill_top: this.system.data.template.xpert.skillset.skill_top,
          }
          requestAnimationFrame(() => {
            this.$refs.formSkillset.reset()
            this.system.data.template.xpert.skillset = {
              skill_id: '',
              skill_entity: '',
              skill_length: '',
              skill_top: '',
            }
          })

          this.xpert.data.skillset.push(newSKL)
          // console.log(JSON.stringify(this.xpert.data.skillset))
          // store.dispatch('user/updateProfileAction', {
          //   skillset: this.xpert.data.skillset,
          // })

          this.xpert.data.skillset = _.orderBy(
            this.xpert.data.skillset,
            ['skill_length'],
            ['desc']
          )
          store
            .dispatch('xpert/backendOfflineUpdateAction', {
              data: {
                skillset: JSON.parse(JSON.stringify(this.xpert.data.skillset)),
              },
              collection: 'xperts',
            })
            .then(function () {
              store.dispatch('triggerNotification', {
                type: 'success',
                message: 'Updated',
              })
            })
        }
      },
      validateInterests() {
        if (this.$refs.formInterests.validate()) {
          // ! Propagate this
          // create empty array (this is update proof, all functions need to copy)
          if (!this.xpert.data.interests) {
            store
              .dispatch('xpert/backendOfflineUpdateAction', {
                data: {
                  interests: [],
                },
                collection: 'xperts',
              })
              .then(function () {})
          }

          _.forEach(this.system.data.template.xpert.interests, (value) => {
            var newTrend = {}
            if (value.id) {
              newTrend = {
                trend_id: _.uniqueId('') + _.random(1000, 9999),
                trend_entity: value.name,
              }
            } else {
              newTrend = {
                trend_id: _.uniqueId('') + _.random(1000, 9999),
                trend_entity: _.toUpper(_.trim(value)),
              }
            }

            this.xpert.data.interests.push(newTrend)
          })
          requestAnimationFrame(() => {
            this.$refs.formInterests.reset()
            this.system.data.template.xpert.interests = []
          })

          store
            .dispatch('xpert/backendOfflineUpdateAction', {
              data: {
                interests: JSON.parse(
                  JSON.stringify(
                    _.uniqBy(this.xpert.data.interests, 'trend_entity')
                  )
                ),
              },
              collection: 'xperts',
            })
            .then(function () {
              store.dispatch('triggerNotification', {
                type: 'success',
                message: 'Updated',
              })
            })
        }
      },
      validateBookshelf() {
        if (this.$refs.formBookshelf.validate()) {
          store.dispatch('updateGlobalStatus', {
            clean: false,
            loading: true,
          })
          this.loadingBookshelf = !this.loadingBookshelf

          const newBOOK = {
            book_id: _.uniqueId('') + _.random(1000, 9999),
            book_status: this.system.data.template.xpert.bookshelf.type,
            book_recommend: this.system.data.template.xpert.bookshelf.recommend,
            book_title:
              this.system.data.template.xpert.bookshelf.currentBook.volumeInfo
                .title,
            book_description: this.safeData(
              this.system.data.template.xpert.bookshelf.currentBook.searchInfo
                .textSnippet,
              sanitizeOptions
            ),
            book_categories:
              this.system.data.template.xpert.bookshelf.currentBook.volumeInfo
                .categories,
            book_link: 'TODO',
            book_review: this.system.data.template.xpert.bookshelf.review,
            book_image:
              this.system.data.template.xpert.bookshelf.currentBook.volumeInfo
                .imageLinks.thumbnail,
            book_authors: _.join(
              this.system.data.template.xpert.bookshelf.currentBook.volumeInfo
                .authors,
              ' '
            ),
          }
          requestAnimationFrame(() => {
            this.system.data.template.xpert.bookshelf.currentBook = null
            this.system.data.template.xpert.bookshelf.review = ''
          })
          if (this.xpert.data.bookshelf) {
            this.xpert.data.bookshelf.push(newBOOK)
          } else {
            this.xpert.data.bookshelf = []
            this.xpert.data.bookshelf.push(newBOOK)
          }

          store.dispatch('updateGlobalStatus', {
            clean: true,
            loading: false,
          })
          this.loadingBookshelf = !this.loadingBookshelf

          store
            .dispatch('xpert/backendOfflineUpdateAction', {
              data: {
                bookshelf: JSON.parse(JSON.stringify(this.xpert.data.bookshelf)),
              },
              collection: 'xperts',
            })
            .then(function () {
              store.dispatch('triggerNotification', {
                type: 'success',
                message: 'Updated',
              })
            })
        }
      },

      validateFeatured() {
        if (this.$refs.formFeatured.validate()) {
          store.dispatch('updateGlobalStatus', {
            clean: false,
            loading: true,
          })

          this.loadingFeatured = !this.loadingFeatured

          const featured_image =
            'https://picsum.photos/seed/' +
            _.uniqueId('') +
            _.random(1000, 9999) +
            '/200'

          store
            .dispatch(
              'user/checkLinkPreview',
              this.system.data.template.xpert.featured.feat_linkfetch
            )
            .then((response) => {
              console.log(response.data)
              if (response.data.image == '' || response.data.image == null) {
                response.data.image = featured_image
              }
              var newFEAT = {
                feat_id: _.uniqueId('') + _.random(1000, 9999),
                feat_entity: response.data.title || '404',
                feat_description:
                  response.data.description ||
                  'Domain not sharing information, use manual override option',

                feat_linkfetch:
                  this.system.data.template.xpert.featured.feat_linkfetch,
                feat_manual: this.system.data.template.xpert.featured.feat_manual,
                feat_industry:
                  this.system.data.template.xpert.featured.feat_industry,
                feat_industry_list: _.map(
                  this.system.data.template.xpert.featured.feat_industry,
                  function (element) {
                    return element.name
                  }
                ),
                feat_skillset:
                  this.system.data.template.xpert.featured.feat_skillset,
                feat_skillset_list: _.map(
                  this.system.data.template.xpert.featured.feat_skillset,
                  function (element) {
                    return element.skill_entity
                  }
                ),
                feat_image: response.data.image,
              }
              //If manual override entity name and description from response
              if (this.system.data.template.xpert.featured.feat_manual) {
                newFEAT = {
                  feat_id: _.uniqueId('') + _.random(1000, 9999),

                  feat_entity:
                    this.system.data.template.xpert.featured.feat_entity,
                  feat_description: this.safeData(
                    this.system.data.template.xpert.featured.feat_description,
                    sanitizeOptions
                  ),
                  feat_linkfetch:
                    this.system.data.template.xpert.featured.feat_linkfetch,
                  feat_manual:
                    this.system.data.template.xpert.featured.feat_manual,
                  feat_industry:
                    this.system.data.template.xpert.featured.feat_industry,
                  feat_industry_list: _.map(
                    this.system.data.template.xpert.featured.feat_industry,
                    function (element) {
                      return element.name
                    }
                  ),
                  feat_skillset:
                    this.system.data.template.xpert.featured.feat_skillset,
                  feat_skillset_list: _.map(
                    this.system.data.template.xpert.featured.feat_skillset,
                    function (element) {
                      return element.skill_entity
                    }
                  ),
                  feat_image: response.data.image,
                }
              }

              this.xpert.data.featured.push(newFEAT)

              requestAnimationFrame(() => {
                this.$refs.formFeatured.reset()

                this.system.data.template.xpert.featured = {
                  feat_id: '',
                  feat_entity: '',
                  feat_description: '',
                  feat_industry: '',
                  feat_industry_list: [],
                  feat_skillset: '',
                  feat_skillset_list: [],
                  feat_linkfetch: '',
                  feat_manual: false,
                }
              })
              store.dispatch('updateGlobalStatus', {
                clean: true,
                loading: false,
              })
              this.loadingFeatured = !this.loadingFeatured
              store
                .dispatch('xpert/backendOfflineUpdateAction', {
                  data: {
                    featured: JSON.parse(
                      JSON.stringify(this.xpert.data.featured)
                    ),
                  },
                  collection: 'xperts',
                })
                .then(function () {
                  store.dispatch('triggerNotification', {
                    type: 'success',
                    message: 'Updated',
                  })
                })
            })
            .catch((error) => {
              // bad fetch but apply if manual

              console.log(error)

              if (this.system.data.template.xpert.featured.feat_manual) {
                const newFEAT = {
                  feat_id: _.uniqueId('') + _.random(1000, 9999),
                  feat_entity:
                    this.system.data.template.xpert.featured.feat_entity,
                  feat_description: this.safeData(
                    this.system.data.template.xpert.featured.feat_description,
                    sanitizeOptions
                  ),
                  feat_linkfetch:
                    this.system.data.template.xpert.featured.feat_linkfetch,
                  feat_manual:
                    this.system.data.template.xpert.featured.feat_manual,
                  feat_industry:
                    this.system.data.template.xpert.featured.feat_industry,
                  feat_skillset:
                    this.system.data.template.xpert.featured.feat_skillset,
                  feat_image: featured_image,
                }
                this.xpert.data.featured.push(newFEAT)

                requestAnimationFrame(() => {
                  this.$refs.formFeatured.reset()

                  this.system.data.template.xpert.featured = {
                    feat_id: '',
                    feat_entity: '',
                    feat_description: '',
                    feat_industry: '',
                    feat_skillset: '',
                    feat_linkfetch: '',
                    feat_manual: false,
                  }
                })

                store.dispatch('updateGlobalStatus', {
                  clean: true,
                  loading: false,
                })

                store
                  .dispatch('xpert/backendOfflineUpdateAction', {
                    data: {
                      featured: JSON.parse(
                        JSON.stringify(this.xpert.data.featured)
                      ),
                    },
                    collection: 'xperts',
                  })
                  .then(function () {
                    store.dispatch('triggerNotification', {
                      type: 'success',
                      message: 'Updated',
                    })
                  })
              } else {
                store.dispatch('triggerNotification', {
                  type: 'error',
                  message: 'Failed to fetch info from URL',
                })
                store.dispatch('updateGlobalStatus', {
                  error: error,
                  type: 'error',
                  message: error,
                  loading: false,
                })
              }
              this.loadingFeatured = !this.loadingFeatured
            })
        }
      },

      validateEmployment() {
        if (this.$refs.formEmployment.validate()) {
          const newEMP = {
            emp_id: _.uniqueId('') + _.random(1000, 9999),
            emp_detailed: this.system.data.template.xpert.employment.emp_detailed,
            emp_active: this.system.data.template.xpert.employment.emp_active,
            emp_role: this.system.data.template.xpert.employment.emp_role,
            emp_company: this.system.data.template.xpert.employment.emp_company,
            emp_description: this.safeData(
              this.system.data.template.xpert.employment.emp_description,
              sanitizeOptions
            ),
            emp_seniority: this.system.data.template.xpert.employment.seniority,
            emp_start: this.system.data.template.xpert.employment.emp_start,
            emp_end: this.system.data.template.xpert.employment.emp_end,
            emp_link: this.system.data.template.xpert.employment.emp_link,
            emp_location: this.system.data.template.xpert.employment.emp_location,
            emp_industry:
              this.system.data.template.xpert.employment.emp_industry || [],
          }
          requestAnimationFrame(() => {
            this.$refs.formEmployment.reset()
            this.system.data.template.xpert.employment = {
              emp_id: '',
              emp_active: false,
              emp_role: '',
              emp_company: '',
              emp_description: '',
              emp_start: '',
              emp_end: '',
              emp_seniority: '',
              emp_link: '',
              emp_location: '',
              emp_industry: [],
              emp_detailed: false,
            }
          })
          this.xpert.data.employment.push(newEMP)
          // console.log(JSON.stringify(this.xpert.data.employment))
          // store.dispatch('user/updateProfileAction', {
          //   employment: this.xpert.data.employment,
          // })
          this.xpert.data.employment = _.orderBy(
            this.xpert.data.employment,
            ['emp_start'],
            ['desc']
          )
          store
            .dispatch('xpert/backendOfflineUpdateAction', {
              data: {
                employment: JSON.parse(
                  JSON.stringify(this.xpert.data.employment)
                ),
              },
              collection: 'xperts',
            })
            .then(function () {
              store.dispatch('triggerNotification', {
                type: 'success',
                message: 'Updated',
              })
            })
        }
      },

      validateEducation() {
        if (this.$refs.formEducation.validate()) {
          const newEDU = {
            edu_id: _.uniqueId('') + _.random(1000, 9999),
            edu_detailed: this.system.data.template.xpert.education.edu_detailed,
            edu_active: this.system.data.template.xpert.education.edu_active,
            edu_name: this.system.data.template.xpert.education.edu_name,
            edu_entity: this.system.data.template.xpert.education.edu_entity,
            edu_description: this.safeData(
              this.system.data.template.xpert.education.edu_description,
              sanitizeOptions
            ),
            edu_skillset:
              this.system.data.template.xpert.education.edu_skillset || [],
            edu_start: this.system.data.template.xpert.education.edu_start,
            edu_end: this.system.data.template.xpert.education.edu_end,
            edu_link: this.system.data.template.xpert.education.edu_link,
            edu_location: this.system.data.template.xpert.education.edu_location,
          }
          requestAnimationFrame(() => {
            this.$refs.formEducation.reset()
            this.system.data.template.xpert.education = {
              edu_id: '',
              edu_active: false,
              edu_name: '',
              edu_entity: '',
              edu_description: '',
              edu_start: '',
              edu_end: '',
              edu_link: '',
              edu_skillset: '',
              edu_location: '',
              edu_detailed: false,
            }
          })
          this.xpert.data.education.push(newEDU)
          // console.log(JSON.stringify(this.xpert.data.education))
          // store.dispatch('user/updateProfileAction', {
          //   education: this.xpert.data.education,
          // })
          this.xpert.data.education = _.orderBy(
            this.xpert.data.education,
            ['edu_start'],
            ['desc']
          )
          store
            .dispatch('xpert/backendOfflineUpdateAction', {
              data: {
                education: JSON.parse(JSON.stringify(this.xpert.data.education)),
              },
              collection: 'xperts',
            })
            .then(function () {
              store.dispatch('triggerNotification', {
                type: 'success',
                message: 'Updated',
              })
            })
        }
      },

      validateConnections() {
        if (this.$refs.formConnections.validate()) {
          const newCONN = {
            conn_id: _.uniqueId() + _.random(1000, 9999),
            conn_entity: this.system.data.template.xpert.socials.conn_entity,
            conn_name: this.system.data.template.xpert.socials.conn_name,
            conn_link: this.system.data.template.xpert.socials.conn_link,
          }
          requestAnimationFrame(() => {
            this.$refs.formConnections.reset()
            this.system.data.template.xpert.socials = {
              conn_id: '',
              conn_entity: '',
              conn_name: '',
              conn_link: '',
            }
          })
          this.xpert.data.socials.push(newCONN)

          store
            .dispatch('xpert/backendOfflineUpdateAction', {
              data: {
                socials: JSON.parse(JSON.stringify(this.xpert.data.socials)),
              },
              collection: 'xperts',
            })
            .then(() => {
              store.dispatch('triggerNotification', {
                type: 'success',
                message: 'Updated',
              })
              store.dispatch('xpert/updatePublicDataAction', {
                data: JSON.parse(JSON.stringify(this.xpert.data.socials)),
                collection: 'xpublic',
                path: 'socials',
              })
            })
        }
      },

      removeElement(array_name, element_name, element_id) {
        this.xpert.data[array_name] = _.uniqBy(
          _.filter(this.xpert.data[array_name], function (o) {
            return o[element_name] != element_id
          }),
          element_name
        )
        // VERY IMPORTANT DISPATCH
        store.dispatch('xpert/backendOfflineUpdateAction', {
          data: JSON.parse(JSON.stringify(this.xpert.data[array_name])),
          replace: true,
          target: array_name,
          collection: 'xperts',
        })
      },

      removeIndustry(item) {
        this.xpert.data.profile.sectors = _.reject(
          this.xpert.data.profile.sectors,
          item
        )
      },

      findIndustry(id) {
        return _.find(this.system.data.template.industry, {
          id: id,
        })
      },

      scrollToTop() {
        requestAnimationFrame(() => {
          this.$vuetify.goTo(0)
        })
      },
    },
  }
</script>

<style>
  .filepond--credits {
    display: none;
  }
  .filepond--panel-root {
    background-color: #52616b;
  }
  .filepond--drop-label {
    border-radius: 5px;
    background: white;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }
  .ql-toolbar {
    border-radius: 5px 5px 0px 0px;
    border: 1px solid rgba(0, 0, 0, 0.47);
  }
  .ql-container {
    border-radius: 0px 0px 5px 5px;
    border: 1px solid rgba(0, 0, 0, 0.47);
  }
  .ql-editor {
    user-select: text;
    -ms-user-select: text;
    -moz-user-select: text;
    -webkit-user-select: text;
    background: white;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    border-radius: 5px;
  }

  .wrap-text {
    -webkit-line-clamp: unset !important;
  }

  .pioneer-username {
    box-sizing: border-box;
    min-width: 0px;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
    margin: 0px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    background: linear-gradient(
        110.78deg,
        rgb(118, 230, 80) -1.13%,
        rgb(249, 214, 73) 15.22%,
        rgb(240, 142, 53) 32.09%,
        rgb(236, 81, 87) 48.96%,
        rgb(255, 24, 189) 67.94%,
        rgb(26, 75, 255) 85.34%,
        rgb(98, 216, 249) 99.57%
      )
      text;
    background-image: linear-gradient(
      110.78deg,
      rgb(118, 230, 80) -1.13%,
      rgb(249, 214, 73) 15.22%,
      rgb(240, 142, 53) 32.09%,
      rgb(236, 81, 87) 48.96%,
      rgb(255, 24, 189) 67.94%,
      rgb(26, 75, 255) 85.34%,
      rgb(98, 216, 249) 99.57%
    );
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: text;
    background-color: initial;
  }
</style>
