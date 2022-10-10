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
        <div class="text-h3 mb-10">Welcome {{ user.data.onboardingName }}</div>
      </v-col>
      <v-col cols="2"></v-col
    ></v-row>

    <v-row no-gutters>
      <v-col cols="0" sm="3" md="4"></v-col>
      <v-col cols="12" sm="6" md="4" class="px-5">
        <ValidationObserver
          ref="formInvite"
          v-slot="{ invalid, valid, handleSubmit }"
        >
          <v-expand-transition>
            <v-form
              class="mt-5"
              ref="formInvite"
              v-show="!onboardUnlocked"
              v-on:submit.prevent
            >
              <div
                class="ml-md-5 text-overline text-center"
                style="color: gray"
              >
                Fill in your invite code
              </div>
              <ValidationProvider
                name="XPERT INVITE"
                rules="alpha_num|required"
                v-slot="{ errors, valid }"
              >
                <v-text-field
                  class="mx-5"
                  v-model="system.temp.invite"
                  :error-messages="errors"
                  :valid="valid"
                  label="Code"
                  hint="Invite code is case sensitive"
                  maxlength="64"
                  color="#32e0c4"
                ></v-text-field>
              </ValidationProvider>

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
                    :disabled="invalid || !valid"
                    color="#32e0c4"
                    @click="handleSubmit(validateInvite)"
                    rounded
                    x-large
                    :loading="checkingInvite"
                    elevation="5"
                    class="mt-10"
                  >
                    Validate your Invite
                    <!-- <v-icon dark right>mdi-skull</v-icon> -->
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
          </v-expand-transition>
        </ValidationObserver>
      </v-col>
      <v-col cols="0" sm="3" md="4"></v-col>
    </v-row>
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
    <vue-diagonal :deg="-2" background="#39444b" space-before>
      <v-sheet color="#39444b" min-height="25">
        <v-row no-gutters>
          <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
          <v-col class cols="12" sm="12" md="8" xl="6">
            <v-row no-gutters>
              <v-col
                class="d-flex align-center justify-center mb-5"
                cols="12"
                sm="12"
                md="12"
              >
                <v-icon size="64" color="#32e0c4">mdi-plus</v-icon>
              </v-col>
              <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
              <v-col class="px-5" cols="12" sm="12" md="8" xl="4"> </v-col>
              <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
            </v-row>

            <div class="text-body-2 text-justify">
              We are pleased to have you as onboard.
            </div>
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
                      <div
                        class="text-overline text-right"
                        style="color: white"
                      >
                        You're looking great today !
                      </div>
                      <div class="text-overline text-left" style="color: white">
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
                          v-on:init="handleFilePondInit"
                        />
                      </v-form>
                    </v-col>
                  </v-row>

                  <v-row no-gutters>
                    <v-col class cols="12" sm="12" md="12">
                      <div
                        class="ml-md-5 text-overline text-center"
                        style="color: white"
                      >
                        how should we address you
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
                          dark
                          :disabled="!onboardUnlocked"
                          :error-messages="errors"
                          :valid="valid"
                          maxlength="64"
                          color="#32e0c4"
                          append-icon="mdi-account-circle"
                        ></v-text-field>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                  <!-- <v-row>
                <v-col class cols="12" sm="12" md="12">
                  <div class="text-overline text-center" style="color: white">
                    select your unique username
                  </div>
                  <ValidationProvider
                    name="Username"
                    rules="alpha_num"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      class="mb-0"
                      :disabled="usernameAvailable"
                      v-model="special.username"
                      label="Username"
                      counter
                      outlined
                      :error-messages="errors"
                      :valid="valid"
                      dark
                      maxlength="20"
                      color="#32e0c4"
                      prepend-inner-icon="mdi-at"
                      :append-icon="
                        usernameAvailable && usernameRules ? 'mdi-check' : ''
                      "
                    >
                    </v-text-field>
                  </ValidationProvider>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class cols="2" sm="4" md="4"></v-col>
                <v-col class cols="8" sm="4" md="4">
                  <v-btn
                    :disabled="usernameAvailable"
                    v-if="special.username && usernameRules"
                    @click="
                      special.username && usernameRules
                        ? checkUsername(special.username)
                        : false
                    "
                    block
                    :color="!usernameAvailable ? '#32e0c4' : ''"
                    class="mb-15 text-center"
                  >
                    Check if available
                  </v-btn>
                </v-col>
                <v-col class cols="2" sm="4" md="4">
                  <v-badge
                    v-if="usernameCheckAgain"
                    color="red"
                    block
                    content="X"
                    class="ml-5"
                  >
                  </v-badge>
                </v-col>
              </v-row> -->

                  <v-row no-gutters>
                    <v-col class cols="12" sm="12" md="12">
                      <div
                        class="ml-md-5 text-overline text-center"
                        style="color: white"
                      >
                        What is your current main profession
                      </div>

                      <ValidationProvider
                        name="Role"
                        rules="alpha_spaces|required"
                        v-slot="{ errors, valid }"
                      >
                        <v-text-field
                          class="mb-0"
                          v-model="xpert.data.profile.currentRole"
                          label="Current Role"
                          dark
                          :disabled="!onboardUnlocked"
                          :error-messages="errors"
                          :valid="valid"
                          maxlength="64"
                          color="#32e0c4"
                          append-icon="mdi-briefcase"
                        ></v-text-field>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class cols="12" sm="12" md="12">
                      <div
                        class="ml-md-5 text-overline text-center"
                        style="color: white"
                      >
                        Where are you based in right now
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
                          color="#32e0c4"
                          dark
                          :disabled="!onboardUnlocked"
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
                  </v-row>
                </v-card>
                <v-sheet height="100px" width="100%" color="transparent">
                </v-sheet>
                <v-row no-gutters>
                  <v-col class cols="12" sm="12" md="2" xl="3"></v-col>
                  <v-col class cols="12" sm="12" md="8" xl="6">
                    <v-row>
                      <v-col cols="6" sm="6" md="6"> </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <div
                          class="text-overline text-right text-wrap mr-5"
                          style="color: #f7fafc"
                        >
                          <v-chip label color="#32e0c4" small>
                            PIONEER
                            <chevrons-up-icon
                              stroke-width="1"
                              class="ml-1"
                            ></chevrons-up-icon>
                          </v-chip>
                        </div>
                      </v-col>
                    </v-row>

                    <v-card class="elevation-5 py-5 px-5 ma-5" color="#f7fafc">
                      <v-row no-gutters>
                        <v-col
                          class="d-flex justify-center"
                          cols="12"
                          sm="12"
                          md="12"
                        >
                          <v-scroll-y-transition>
                            <v-avatar
                              class="elevation-5"
                              style="
                                margin-top: -100px;
                                margin-bottom: 15px;
                                box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
                                  rgba(0, 0, 0, 0.22) 0px 15px 12px;
                              "
                              size="150"
                            >
                              <v-img
                                v-if="user.data.avatar"
                                :src="user.data.avatar"
                                style="border-radius: 10%"
                              >
                                <template v-slot:placeholder>
                                  <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                                  >
                                    <v-progress-circular
                                      indeterminate
                                      color="#32e0c4"
                                    ></v-progress-circular>
                                  </v-row>
                                </template>
                              </v-img>

                              <v-img
                                v-else
                                src="https://i.imgur.com/dSJvdtu.jpg"
                                style
                              >
                                <template v-slot:placeholder>
                                  <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                                  >
                                  </v-row>
                                </template>
                              </v-img>
                            </v-avatar>
                          </v-scroll-y-transition>
                        </v-col>
                      </v-row>

                      <v-card-title>
                        <v-row no-gutters>
                          <v-col
                            cols="12"
                            class="d-flex justify-center align-center"
                            ><div class="text-h6 text-uppercase">
                              {{ xpert.data.profile.displayName }}
                            </div>
                          </v-col>
                        </v-row>
                      </v-card-title>
                      <v-row no-gutters>
                        <v-col
                          cols="12"
                          class="d-flex justify-center align-center"
                        >
                          <div class="text-overline text-uppercase">
                            {{ xpert.data.profile.currentRole }}
                          </div>
                        </v-col>
                      </v-row>
                    </v-card>

                    <v-row>
                      <v-col
                        class="d-flex justify-start align-center"
                        cols="9"
                        sm="9"
                        md="9"
                      >
                        <map-pin-icon
                          v-if="xpert.data.profile.location"
                          class="ml-10"
                          stroke-width="0.5"
                        ></map-pin-icon>
                        <div
                          v-if="xpert.data.profile.location"
                          class="text-button font-weight-light ml-3"
                        >
                          {{ xpert.data.profile.location.name }}
                        </div>
                      </v-col>
                      <v-col
                        class="d-flex justify-end align-center"
                        cols="3"
                        sm="3"
                        md="3"
                      >
                        <div
                          v-if="xpert.data.profile.location"
                          class="text-h5 font-weight-light mr-10"
                        >
                          {{ xpert.data.profile.location.emoji }}
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>

                  <v-col class cols="12" sm="12" md="2" xl="3"></v-col>
                </v-row>

                <!-- <v-row no-gutters>
                <v-col class cols="1" sm="1" md="0"> </v-col>
                <v-col class cols="10" sm="10" md="12">
                  <v-sheet
                    class="d-flex mb-10"
                    color="transparent"
                    min-height="100px"
                    v-if="!infoPicture"
                  ></v-sheet>
                  <v-alert
                    v-model="infoPicture"
                    transition="scale-transition"
                    color="white"
                    elevation="5"
                    icon="mdi-alert"
                    class="mb-10"
                  >
                    We need you to upload your best picture before completing
                    the onboarding
                  </v-alert>
                </v-col>
                <v-col class cols="1" sm="1" md="0"> </v-col>
              </v-row> -->

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
                      :disabled="
                        invalid ||
                        !valid ||
                        onboardSubmitted ||
                        !onboardUnlocked
                      "
                      color="#32e0c4"
                      @click="handleSubmit(validateProfile)"
                      rounded
                      x-large
                      :loading="loading"
                      elevation="5"
                      class="mt-10"
                    >
                      Complete Onboarding
                      <checks-icon class="ml-5"></checks-icon>
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
            <v-row no-gutters>
              <v-col cols="0" sm="0" md="3"></v-col>
              <v-col
                cols="0"
                sm="12"
                md="6"
                class="d-flex align-center justify-center mt-10 px-5"
              >
                <!-- <v-expand-transition>
                <v-sheet
                  class="d-flex mb-10"
                  color="transparent"
                  min-height="132px"
                  v-show="!onboardSubmitted"
                ></v-sheet>
              </v-expand-transition> -->
                <v-expand-transition>
                  <v-sheet
                    class="d-flex flex-column justify-space-around mb-5"
                    color="transparent"
                    min-height="150px"
                    v-show="onboardSubmitted"
                  >
                    <scroll-down v-show="onboardSubmitted"></scroll-down>
                  </v-sheet>
                </v-expand-transition>
              </v-col>
              <v-col cols="0" sm="0" md="3"></v-col>
            </v-row>

            <v-row no-gutters>
              <v-col cols="0" sm="0" md="3"></v-col>
              <v-col
                cols="0"
                sm="12"
                md="6"
                class="d-flex align-center justify-center mt-0 px-5"
              >
                <div
                  v-if="onboardSubmitted"
                  class="text-overline text-center"
                  style="color: white"
                >
                  scroll down
                </div>
              </v-col>
              <v-col cols="0" sm="0" md="3"></v-col>
            </v-row>

            <!-- <v-sheet
                class="d-flex mb-10"
                color="transparent"
                min-height="150px"
              ></v-sheet> -->
          </v-col>
          <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
        </v-row>
      </v-sheet>
    </vue-diagonal>
    <vue-diagonal :deg="-2" background="#f6f9fc" space-after></vue-diagonal>

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="3"></v-col>
      <v-col cols="0" sm="12" md="6" class="pa-5 my-10"
        ><div class="text-h3 mb-10">
          <activity-icon class="mr-1"></activity-icon> Define the Problem
        </div>

        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website.
        </div>
      </v-col>
      <v-col cols="0" sm="0" md="3"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="3"></v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-10">
        <div class="text-h5 mb-10">
          <activity-icon class="mr-1"></activity-icon> Brainstorm
        </div>
        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website.
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-10"
        ><div class="text-h5 mb-10">
          <activity-icon class="mr-1"></activity-icon> Collaborate
        </div>

        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website.
        </div>
      </v-col>
      <v-col cols="0" sm="0" md="3"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="0" sm="0" md="3"></v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-10">
        <div class="text-h5 mb-10">Network</div>
        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website.
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-10"
        ><div class="text-h5 mb-10">Solve</div>

        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website.
        </div>
      </v-col>
      <v-col cols="0" sm="0" md="3"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="0" sm="0" md="3"></v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-10">
        <div class="text-h5 mb-10"><v-icon left>mdi-plus</v-icon>Bootstrap</div>
        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website.
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-10"
        ><div class="text-h5 mb-10"><v-icon left>mdi-plus</v-icon>Grow</div>

        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website.
        </div>
      </v-col>
      <v-col cols="0" sm="0" md="3"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="3"></v-col>
      <v-col cols="12" sm="12" md="" class="pa-5 my-10">
        <div class="text-h5 mb-10"><v-icon left>mdi-plus</v-icon>Iterate</div>
        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website.
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-10"
        ><div class="text-h5 mb-10"><v-icon left>mdi-plus</v-icon>Succeed</div>

        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website.
        </div>
      </v-col>
      <v-col cols="0" sm="0" md="3"></v-col>
    </v-row>

    <v-sheet
      class="d-flex mb-10"
      color="transparent"
      min-height="50px"
    ></v-sheet>
    <v-row no-gutters>
      <v-col cols="0" sm="0" md="3"></v-col>
      <v-col cols="0" sm="12" md="6" class="px-5">
        <!-- <div class="text-h3 mb-10">My Dashboard</div> -->

        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website, but i already made it
          in wix there are more projects lined up charge extra the next time can
          it be more retro. Can you pimp this powerpoint, need more geometry
          patterns. Can you pimp this powerpoint, need more geometry patterns
          can you put "find us on facebook" by the facebook logo?
        </div>
      </v-col>
      <v-col cols="0" sm="0" md="3"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="3"></v-col>
      <v-col
        cols="0"
        sm="12"
        md="6"
        class="d-flex align-center justify-center my-15 px-5"
      >
        <v-btn
          :disabled="!onboardSubmitted"
          elevation="5"
          color="#32e0c4"
          rounded
          x-large
          @click="completeOnboarding"
        >
          Take me to my Dashboard
          <fingerprint-icon class="ml-5"></fingerprint-icon>
        </v-btn>
      </v-col>
      <v-col cols="0" sm="0" md="3"></v-col>
    </v-row>

    <v-sheet
      class="d-flex mb-10"
      color="transparent"
      min-height="250px"
    ></v-sheet>
  </div>
</template>
<script>
  // import FingerSvg from '@/assets/svg/core/finger.svg'
  import ScrollDown from '@/components/spare/ScrollDown'

  import store from '@/store'
  import { mapState } from 'vuex'
  import { get } from 'vuex-pathify'

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
      invitedBy: '',

      validProfile: false,
      infoProfile: true,

      onboardSubmitted: false,
      onboardUnlocked: false,

      checkingInvite: false,

      requiredRules: [(v) => !!v || 'Field is required'],
    }),
    components: {
      FilePond,
      ScrollDown,
    },

    computed: {
      error: get('status@error'),
      message: get('status@message'),
      loading: get('status@loading'),

      // avatar: get('user/data@avatar'),
      // onboardingName: get('user/data@onboardingName'),
      ...mapState(['auth', 'user', 'system', 'xpert']),
    },
    created() {
      store.dispatch('system/bindData')
    },

    methods: {
      handleFilePondInit: function () {},

      reset() {
        this.$refs.form.reset()
      },
      // checkUsername(data) {
      //   store
      //     .dispatch('user/checkUsernameAvailability', {
      //       username: data,
      //     })
      //     .then((result) => {
      //       this.usernameAvailable = result
      //       this.usernameCheckAgain = !result
      //     })
      // },
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
              if (data.data.length > 0) {
                this.onboardUnlocked = true
                this.invitedBy = this.system.temp.invite

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
              username: this.auth.uid.slice(0, 7),
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
                    store.set('system/template@onboarding', {})

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
</style>