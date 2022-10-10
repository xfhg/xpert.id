<template>
  <div>
    <v-row no-gutters>
      <v-col class="" sm="12" md="12">
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="25px"
        ></v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      <v-col class="px-5" sm="12" md="8" xl="6">
        <v-card class="elevation-0 mx-1 mb-5 pa-1" color="#fff">
          <v-row no-gutters>
            <v-col class cols="12" sm="12" md="12">
              <div class="d-flex align-center">
                <div class="text-button text-left mr-2">talent</div>
                <v-divider class="mx-2"></v-divider>
                <div class="text-button text-right mx-2">New Offer</div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
    </v-row>

    <v-sheet height="50px" width="100%" color="transparent"> </v-sheet>

    <v-row no-gutters>
      <v-btn
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
      </v-btn>

      <v-col class sm="12" md="12">
        <DividerTop dcolor="f6f9fc"></DividerTop>
        <v-sheet class="pb-5" color="#f6f9fc" min-height="250">
          <v-row no-gutters>
            <v-col class sm="0" md="2"></v-col>
            <v-col class="d-flex justify-space-around" sm="12" md="8">
              <v-scroll-x-transition>
                <v-avatar
                  v-if="system.data.template.talent.jobs.company"
                  class="elevation-5"
                  style="
                    margin-top: -125px;
                    margin-bottom: 15px;
                    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
                      rgba(0, 0, 0, 0.22) 0px 15px 12px;
                  "
                  size="150"
                >
                  <v-img
                    :src="system.data.template.talent.jobs.company.logo"
                    style
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <!-- <logo-animated
                        lwidth="100px"
                        lheight="100px"
                        lfill="#f7fafc"
                        lstroke="#39444b"
                        lstrokewidth="2px"
                        class="ma-5"
                      ></logo-animated> -->
                      </v-row>
                    </template>
                  </v-img>
                </v-avatar>
              </v-scroll-x-transition>
            </v-col>
            <v-col class sm="0" md="2"> </v-col>
          </v-row>
          <div
            v-if="system.data.template.talent.jobs.company"
            class="text-overline text-center"
          >
            {{ system.data.template.talent.jobs.company.domain }}
          </div>

          <v-row no-gutters>
            <v-col class cols="1" sm="1" md="2" xl="3"></v-col>
            <v-col class="px-5" cols="12" sm="12" md="8" xl="6">
              <div class="text-h3 mt-10" style="color: #39444b">Role</div>
              <div class="text-overline ml-5" style="color: #39444b">
                Base details
              </div>
              <ValidationObserver ref="formRole" immediate v-slot="{ valid }">
                <v-form
                  class=""
                  ref="formRole"
                  v-model="validRole"
                  v-on:submit.prevent
                >
                  <v-card
                    class="elevation-0 mx-auto mb-10 pa-5"
                    color="transparent"
                  >
                    <div class="my-5 text-overline text-right">company</div>
                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="6">
                        <ValidationProvider
                          name="Company"
                          rules="required"
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            v-model="system.data.template.talent.jobs.company"
                            :items="
                              system.data.template.talent.jobs.company_list
                            "
                            :loading="
                              system.data.template.talent.jobs.company_loading
                            "
                            clearable
                            outlined
                            class="mr-md-5"
                            :error-messages="errors"
                            :valid="valid"
                            label="Company"
                            item-text="name"
                            no-data-text="Start typing"
                            open-on-clear
                            :value="system.data.template.talent.jobs.company"
                            :search-input.sync="companySearch"
                            :return-object="true"
                            no-filter
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
                      <v-col class cols="12" sm="12" md="6">
                        <ValidationProvider
                          name="Tagline"
                          rules="required|alpha_num_spaces"
                          v-slot="{ errors, valid }"
                        >
                          <v-text-field
                            class="mb-5"
                            v-model="
                              system.data.template.talent.jobs.company_tagline
                            "
                            label="Company Tagline"
                            outlined
                            :error-messages="errors"
                            :valid="valid"
                            maxlength="128"
                          ></v-text-field>
                        </ValidationProvider>
                      </v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="12">
                        <ValidationProvider
                          name="Sector"
                          rules="required|array_maxlength_5"
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            v-model="
                              system.data.template.talent.jobs.offer_sectors
                            "
                            :items="system.industries"
                            outlined
                            hide-no-data
                            multiple
                            :error-messages="errors"
                            :valid="valid"
                            label="Industries & Sectors"
                            item-text="name"
                            return-object
                            :search-input.sync="searchInput"
                            @change="searchInput = ''"
                          >
                            <template v-slot:selection="data">
                              <v-chip
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                outlined
                                @click:close="removeIndustry(data.item)"
                                close
                              >
                                <v-avatar left>
                                  <circle-dashed-icon stroke-width="1" />
                                </v-avatar>
                                {{ data.item.name }}
                              </v-chip>
                            </template>
                            <template v-slot:item="data">
                              <v-list-item-avatar>
                                <circle-dashed-icon stroke-width="1" />
                              </v-list-item-avatar>
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
                    <div class="my-5 text-overline text-right">Position</div>
                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="12" xl="12">
                        <ValidationProvider
                          name="Offer Role"
                          rules="required|alpha_num_spaces"
                          v-slot="{ errors, valid }"
                        >
                          <v-text-field
                            class="mb-5"
                            v-model="
                              system.data.template.talent.jobs.offer_role
                            "
                            label="Role"
                            outlined
                            :error-messages="errors"
                            :valid="valid"
                            maxlength="128"
                          ></v-text-field>
                        </ValidationProvider>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="12" xl="12">
                        <ValidationProvider
                          name="Offer Role"
                          rules="required|alpha_num_spaces"
                          v-slot="{ errors, valid }"
                        >
                          <v-text-field
                            class="mb-5"
                            v-model="
                              system.data.template.talent.jobs.offer_pitch
                            "
                            label="One Line Role Description Pitch"
                            outlined
                            :error-messages="errors"
                            :valid="valid"
                            maxlength="128"
                          ></v-text-field>
                        </ValidationProvider>
                      </v-col>
                    </v-row>

                    <div class="my-5 text-overline text-center">
                      Role description
                    </div>

                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="12" xl="12">
                        <ValidationProvider
                          name="Role Description"
                          rules="required"
                          v-slot="{ errors, valid }"
                        >
                          <vue-editor
                            class=""
                            :valid="valid"
                            id="bioEditor"
                            v-model="
                              system.data.template.talent.jobs.offer_description
                            "
                            :editorToolbar="customToolbar"
                          />

                          <div class="mb-5 text-overline red--text text-right">
                            {{ errors[0] }}
                          </div>
                        </ValidationProvider>
                      </v-col>
                    </v-row>
                    <div class="my-5 text-overline text-right">Skillset</div>
                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="12" xl="12">
                        <ValidationProvider
                          name="Required STT Proficiency"
                          rules="required"
                          v-slot="{ errors, valid }"
                        >
                          <v-combobox
                            v-model="
                              system.data.template.talent.jobs.skills_required
                            "
                            label="Required Skills / TechStack / Tooling Proficiency"
                            multiple
                            :error-messages="errors"
                            :valid="valid"
                            outlined
                          >
                            <template v-slot:selection="data">
                              <v-chip
                                :key="JSON.stringify(data.item)"
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                :disabled="data.disabled"
                                color="#39444b"
                                class="mx-2"
                                dark
                                small
                                @click:close="data.parent.selectItem(data.item)"
                              >
                                <!-- <v-avatar
                          class="white--text"
                          color="#32e0c4"
                          left
                          v-text="data.item.slice(0, 1).toUpperCase()"
                        ></v-avatar> -->
                                {{ data.item.toUpperCase() }}
                              </v-chip>
                            </template>
                          </v-combobox>
                        </ValidationProvider>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="12" xl="12">
                        <ValidationProvider
                          name="Desired Skills"
                          rules=""
                          v-slot="{ errors, valid }"
                        >
                          <v-combobox
                            v-model="
                              system.data.template.talent.jobs.skills_desired
                            "
                            label="Desired Skills"
                            multiple
                            outlined
                            :error-messages="errors"
                            :valid="valid"
                          >
                            <template v-slot:selection="data">
                              <v-chip
                                :key="JSON.stringify(data.item)"
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                :disabled="data.disabled"
                                color="#39444b"
                                dark
                                class="mx-2"
                                small
                                @click:close="data.parent.selectItem(data.item)"
                              >
                                <!-- <v-avatar
                          class="white--text"
                          color="#32e0c4"
                          left
                          v-text="data.item.slice(0, 1).toUpperCase()"
                        ></v-avatar> -->
                                {{ data.item.toUpperCase() }}
                              </v-chip>
                            </template>
                          </v-combobox>
                        </ValidationProvider>
                      </v-col>
                    </v-row>
                  </v-card>

                  <v-row no-gutters>
                    <v-col
                      class="d-flex align-center justify-center mb-5"
                      cols="12"
                      sm="12"
                      md="6"
                    >
                    </v-col>
                    <v-col
                      class="d-flex align-center justify-center mb-5 px-5"
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <v-expand-transition>
                        <div
                          v-if="!valid"
                          class="mb-5 text-overline red--text text-right"
                        >
                          SOME FIELDS ARE INVALID OR INCOMPLETE
                          <v-icon right color="red">mdi-close</v-icon>
                        </div>
                      </v-expand-transition>
                    </v-col>
                  </v-row>
                </v-form>
              </ValidationObserver>
            </v-col>
            <v-col class cols="1" sm="1" md="2" xl="3"></v-col>
          </v-row>
        </v-sheet>
        <DividerBottom dcolor="f6f9fc"></DividerBottom>
      </v-col>
    </v-row>

    <v-row no-gutters class="pb-15">
      <v-col class cols="0" sm="0" md="2" xl="3"></v-col>
      <v-col class="px-5" sm="12" md="8" xl="6">
        <div class="text-h3 mt-15">Offer</div>
        <div class="mb-5 ml-5 text-overline text-left">
          the offer they can't refuse
        </div>
      </v-col>
      <v-col class cols="0" sm="0" md="2" xl="3"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="6">
        <ValidationObserver
          ref="formOffer"
          immediate
          v-slot="{ invalid, valid, handleSubmit }"
        >
          <v-form
            class=""
            ref="formOffer"
            v-model="validOffer"
            v-on:submit.prevent
          >
            <v-card class="elevation-0 mx-auto mb-10 pa-5" color="transparent">
              <div class="my-5 text-overline text-right">Employment Type</div>
              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="6">
                  <ValidationProvider
                    name="Contract Type"
                    rules="required"
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      v-model="system.data.template.talent.jobs.offer_contract"
                      :items="system.data.talent.contract_type"
                      outlined
                      hide-no-data
                      multiple
                      class="mb-5 mr-md-5"
                      :error-messages="errors"
                      :valid="valid"
                      label="Contract Type"
                      item-text="name"
                      prepend-inner-icon="mdi-format-list-bulleted-type"
                      return-object
                      :search-input.sync="searchInput"
                      @change="searchInput = ''"
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
                        <v-list-item-avatar>
                          <chevron-right-icon stroke-width="1" />
                        </v-list-item-avatar>
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
                    name="Job Seniority"
                    rules=""
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      v-model="system.data.template.talent.jobs.offer_seniority"
                      :items="system.data.talent.seniority"
                      outlined
                      hide-no-data
                      multiple
                      class="mb-5"
                      :error-messages="errors"
                      :valid="valid"
                      label="Role Seniority"
                      item-text="name"
                      prepend-inner-icon="mdi-account-tie"
                      return-object
                      :search-input.sync="searchInput"
                      @change="searchInput = ''"
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
                        <v-list-item-avatar>
                          <chevron-right-icon stroke-width="1" />
                        </v-list-item-avatar>
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
                    name="Career PAth"
                    rules=""
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      v-model="
                        system.data.template.talent.jobs.offer_career_path
                      "
                      :items="system.data.talent.career_path"
                      outlined
                      hide-no-data
                      multiple
                      class="mb-5 mr-md-5"
                      :error-messages="errors"
                      :valid="valid"
                      label="Career Path"
                      item-text="name"
                      prepend-inner-icon="mdi-call-split"
                      return-object
                      :search-input.sync="searchInput"
                      @change="searchInput = ''"
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
                        <v-list-item-avatar>
                          <chevron-right-icon stroke-width="1" />
                        </v-list-item-avatar>
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
                    name="Remote Level"
                    rules=""
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      v-model="
                        system.data.template.talent.jobs.offer_remote_level
                      "
                      :items="system.data.talent.remote_level"
                      outlined
                      hide-no-data
                      multiple
                      class="mb-5"
                      :error-messages="errors"
                      :valid="valid"
                      label="Remote Level"
                      item-text="name"
                      prepend-inner-icon="mdi-airplane"
                      return-object
                      :search-input.sync="searchInput"
                      @change="searchInput = ''"
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
                        <v-list-item-avatar>
                          <chevron-right-icon stroke-width="1" />
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            v-html="data.item.name"
                          ></v-list-item-title>
                          <v-list-item-subtitle v-html="data.item.description">
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </template>
                    </v-autocomplete>
                  </ValidationProvider>
                </v-col>
              </v-row>
              <div class="my-5 text-overline text-right">
                Compensation & Perks
              </div>
              <v-row no-gutters>
                <v-col class cols="12" sm="6" md="4">
                  <ValidationProvider
                    name="Minimum Target Salary"
                    rules="integer"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      class="mb-5 mr-md-2"
                      v-model="system.data.template.talent.jobs.salary_low"
                      label="Salary Range"
                      outlined
                      :error-messages="errors"
                      :valid="valid"
                      maxlength="32"
                      append-icon="mdi-cash-usd-outline"
                      append-outer-icon="mdi-chevron-right"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
                <v-col class cols="12" sm="6" md="4">
                  <ValidationProvider
                    name="Minimum Target Salary"
                    rules="integer"
                    v-slot="{ errors, valid }"
                  >
                    <v-text-field
                      class="mb-5 mr-md-5"
                      v-model="system.data.template.talent.jobs.salary_high"
                      label="Salary Range"
                      outlined
                      :error-messages="errors"
                      :valid="valid"
                      maxlength="32"
                      append-icon="mdi-cash-usd"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
                <v-col class cols="12" sm="12" md="4">
                  <ValidationProvider
                    name="Salary Rate"
                    rules=""
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      v-model="system.data.template.talent.jobs.salary_rate"
                      :items="system.data.talent.salary_rate"
                      outlined
                      hide-no-data
                      class="mb-5"
                      :error-messages="errors"
                      :valid="valid"
                      label="Salary Rate"
                      item-text="name"
                      prepend-inner-icon="mdi-progress-clock"
                      return-object
                      :search-input.sync="searchInput"
                      @change="searchInput = ''"
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
                        <v-list-item-avatar>
                          <chevron-right-icon stroke-width="1" />
                        </v-list-item-avatar>
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
                <v-col class cols="12" sm="12" md="12">
                  <ValidationProvider
                    name="Company Perks"
                    rules=""
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      v-model="system.data.template.talent.jobs.company_perks"
                      :items="system.data.talent.company_perks"
                      outlined
                      hide-no-data
                      multiple
                      :error-messages="errors"
                      :valid="valid"
                      label="Company Perks"
                      item-text="name"
                      prepend-inner-icon="mdi-puzzle"
                      return-object
                      :search-input.sync="searchInput"
                      @change="searchInput = ''"
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          outlined
                        >
                          <v-avatar left>
                            <check-icon stroke-width="1" />
                          </v-avatar>
                          {{ data.item.name }}
                        </v-chip>
                      </template>
                      <template v-slot:item="data">
                        <v-list-item-avatar>
                          <chevron-right-icon stroke-width="1" />
                        </v-list-item-avatar>
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

              <div class="my-5 text-overline text-right">
                Employee Eligibility
              </div>
              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="6">
                  <ValidationProvider
                    name="Citizenship"
                    rules="array_maxlength_3"
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      class="mb-5 mr-md-5"
                      v-model="
                        system.data.template.talent.jobs.restrict_citizenship
                      "
                      :items="system.countries"
                      clearable
                      outlined
                      multiple
                      :error-messages="errors"
                      :valid="valid"
                      item-text="name"
                      return-object
                      label="Citizenship"
                      prepend-inner-icon="mdi-passport"
                      :search-input.sync="searchInput"
                      @change="searchInput = ''"
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
                    </v-autocomplete>
                  </ValidationProvider>
                </v-col>
                <v-col class cols="12" sm="12" md="6">
                  <ValidationProvider
                    name="Working VISA"
                    rules="array_maxlength_5"
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      class="mb-5"
                      v-model="system.data.template.talent.jobs.restrict_visa"
                      :items="system.countries"
                      clearable
                      outlined
                      multiple
                      :error-messages="errors"
                      :valid="valid"
                      item-text="name"
                      return-object
                      prepend-inner-icon="mdi-card-account-details"
                      label="Working VISA"
                      :search-input.sync="searchInput"
                      @change="searchInput = ''"
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
                    </v-autocomplete>
                  </ValidationProvider>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="6">
                  <ValidationProvider
                    name="Timezones"
                    rules=""
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      class="mb-5 mr-md-5"
                      v-model="
                        system.data.template.talent.jobs.restrict_timezone
                      "
                      :items="system.data.internal.timezones"
                      clearable
                      outlined
                      multiple
                      :error-messages="errors"
                      :valid="valid"
                      item-text="name"
                      return-object
                      prepend-inner-icon="mdi-map-clock"
                      label="Timezones"
                      :search-input.sync="searchInput"
                      @change="searchInput = ''"
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
                        <clock-icon class="mr-2" stroke-width="1"></clock-icon>

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
                    name="Languages"
                    rules=""
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      class="mb-5"
                      v-model="
                        system.data.template.talent.jobs.restrict_language
                      "
                      :items="system.languages"
                      clearable
                      outlined
                      multiple
                      :error-messages="errors"
                      :valid="valid"
                      item-text="name"
                      return-object
                      prepend-inner-icon="mdi-translate"
                      label="Languages"
                      :search-input.sync="searchInput"
                      @change="searchInput = ''"
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
                        <v-list-item-avatar>
                          <language-icon stroke-width="1"></language-icon>
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
                    </v-autocomplete>
                  </ValidationProvider>
                </v-col>
              </v-row>
              <div class="my-5 text-overline text-right">georestrict</div>
              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="6">
                  <ValidationProvider
                    name="Role Locations"
                    rules="array_maxlength_5"
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      class="mb-5 mr-md-5"
                      v-model="system.data.template.talent.jobs.offer_location"
                      :items="system.countries"
                      clearable
                      outlined
                      multiple
                      :error-messages="errors"
                      :valid="valid"
                      item-text="name"
                      return-object
                      prepend-inner-icon="mdi-earth"
                      label="Offer Location(s)"
                      :search-input.sync="searchInput"
                      @change="searchInput = ''"
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
                    </v-autocomplete>
                  </ValidationProvider>
                </v-col>
                <v-col class cols="12" sm="12" md="6">
                  <ValidationProvider
                    name="Role Region"
                    rules="array_maxlength_3"
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      class="mb-5"
                      v-model="system.data.template.talent.jobs.offer_region"
                      :items="system.regions"
                      clearable
                      outlined
                      multiple
                      :error-messages="errors"
                      :valid="valid"
                      item-text="name"
                      prepend-inner-icon="mdi-earth"
                      label="Offer Region(s)"
                      :search-input.sync="searchInput"
                      @change="searchInput = ''"
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          outlined
                        >
                          {{ data.item }}
                        </v-chip>
                      </template>
                      <template v-slot:item="data">
                        <v-list-item-content>
                          <v-list-item-title
                            v-html="data.item"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-autocomplete>
                  </ValidationProvider>
                </v-col>
              </v-row>

              <!-- <span v-html="xpert.data.profile.bio"></span> -->
            </v-card>

            <v-row no-gutters>
              <v-col
                class="d-flex align-center justify-center mb-5"
                cols="12"
                sm="12"
                md="6"
              >
                <v-btn disabled text color="#293136">
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
                  @click="handleSubmit(validateTalent)"
                  block
                  rounded
                  x-large
                >
                  Save the Role Details
                  <v-icon right>mdi-account-tie</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </ValidationObserver>
        <!-- <v-sheet
                class="d-flex mb-10"
                color="transparent"
                min-height="150px"
              ></v-sheet> -->
      </v-col>
      <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
    </v-row>

    <!-- <v-row no-gutters>
      <v-col
        class="d-flex align-center justify-center"
        cols="12"
        sm="12"
        md="12"
        xl="12"
      >
        <v-divider></v-divider>
        <Logo
          lwidth="64px"
          lheight="64px"
          lfill="#ccc"
          lstroke="#f6f9fc"
          class="ma-5"
        />
        <v-divider></v-divider>
      </v-col>
    </v-row> -->
    <v-row no-gutters>
      <v-col class cols="1" sm="1" md="2"></v-col>
      <v-col class cols="12" sm="12" md="8">
        <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet
      ></v-col>
      <v-col class cols="1" sm="1" md="2"></v-col>
    </v-row>

    <DividerTop dcolor="f7fafc"></DividerTop>
    <v-sheet class="" color="#f7fafc" min-height="25">
      <v-sheet class="mb-10" color="transparent" min-height="450px">
        <v-row no-gutters>
          <v-col class cols="12" sm="0" md="2" xl="4"></v-col>
          <v-col class cols="12" sm="12" md="8" xl="4">
            <v-sheet
              class="mt-10 pa-5"
              width="100%"
              height=""
              color="transparent"
            >
              <div class="text-h3" style="color: #39444b">Extra Features</div>
              <div class="text-overline ml-5" style="color: #39444b">
                XPERT.ID TALENT NETWORK
              </div>
            </v-sheet>
          </v-col>
          <v-col class cols="12" sm="0" md="2" xl="4"> </v-col>
        </v-row>
      </v-sheet>
    </v-sheet>

    <DividerTop dcolor="39444b" style="margin-top: -250px"></DividerTop>
    <v-sheet class="" color="#39444b" min-height="25">
      <v-row no-gutters>
        <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
        <v-col class cols="12" sm="12" md="8" xl="6">
          <v-sheet
            class="mt-10 pa-5"
            width="100%"
            height=""
            color="transparent"
          >
            <div class="text-h3 mt-10" style="color: #f6f9fc">
              Offer Preview
            </div>
            <div class="text-overline ml-5" style="color: #f6f9fc">
              full page preview
            </div>
            <v-sheet height="150px" width="100%" color="transparent"> </v-sheet>
            <v-card
              v-if="system.data.template.talent.jobs.company"
              class="elevation-5 mx-1 mt-15 pa-1"
              color="#f6f9fc"
            >
              <v-row no-gutters>
                <v-col class sm="4" md="4">
                  <div class="my-5 text-overline text-center">
                    {{ system.data.template.talent.jobs.company.name }}
                  </div>
                </v-col>
                <v-col class="d-flex justify-space-around" sm="4" md="4">
                  <v-scroll-x-transition>
                    <v-avatar
                      style="
                        margin-top: -100px;
                        margin-bottom: 15px;
                        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
                          rgba(0, 0, 0, 0.22) 0px 15px 12px;
                      "
                      size="150"
                      class="elevation-5"
                    >
                      <v-img
                        v-if="system.data.template.talent.jobs.company"
                        :src="system.data.template.talent.jobs.company.logo"
                        style
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <!-- <logo-animated
                        lwidth="100px"
                        lheight="100px"
                        lfill="#f7fafc"
                        lstroke="#39444b"
                        lstrokewidth="2px"
                        class="ma-5"
                      ></logo-animated> -->
                          </v-row>
                        </template>
                      </v-img>
                    </v-avatar>
                  </v-scroll-x-transition>
                </v-col>
                <v-col class sm="4" md="4">
                  <div class="my-5 text-overline text-center">
                    {{ system.data.template.talent.jobs.company.domain }}
                  </div>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="12"> </v-col>
              </v-row>
            </v-card>

            <v-card class="elevation-5 mx-1 mt-5 pa-5 mb-3" color="#f6f9fc">
              <v-row no-gutters>
                <v-col class="pa-5" cols="12" sm="12" md="12"
                  ><div class="text-h4 text-left text-wrap">
                    {{ system.data.template.talent.jobs.offer_role }}
                  </div>
                  <div class="ml-5 mt-3 text-overline text-left text-wrap">
                    {{ system.data.template.talent.jobs.offer_pitch }}
                  </div>
                </v-col>
              </v-row>
            </v-card>

            <div class="mx-5 mt-10 text-overline white--text text-right">
              Role
            </div>
            <v-card class="elevation-5 mx-1 pa-5" color="#f6f9fc">
              <v-sheet height="25px" width="100%" color="transparent">
              </v-sheet>

              <div class="ma-5 text-body-1">
                <div
                  v-html="system.data.template.talent.jobs.offer_description"
                ></div>
              </div>

              <v-sheet height="25px" width="100%" color="transparent">
              </v-sheet>

              <div class="d-flex align-center ma-5 text-button text-left">
                Required Skills

                <v-divider class="mx-5"></v-divider>
              </div>
              <v-sheet
                class="d-flex flex-wrap justify-space-between pa-5"
                width="100%"
                color="transparent"
                v-if="system.data.template.talent.jobs.skills_required"
              >
                <template
                  v-for="item in system.data.template.talent.jobs
                    .skills_required"
                >
                  <div :key="item" class="my-2 mx-2">
                    <v-chip
                      dark
                      small
                      label
                      class="elevation-2"
                      color="#39444b"
                    >
                      <!-- <v-avatar left>
                      <atom-2-icon color="#32e0c4" />
                    </v-avatar> -->
                      <span class="mx-5">{{ item.toUpperCase() }}</span>
                    </v-chip>
                  </div>
                </template>
              </v-sheet>
              <div class="d-flex align-center ma-5 text-button text-left">
                Desired Skills
                <v-divider class="mx-5"></v-divider>
              </div>
              <v-sheet
                class="d-flex flex-wrap justify-space-between pa-5"
                width="100%"
                color="transparent"
                v-if="system.data.template.talent.jobs.skills_desired"
              >
                <template
                  v-for="item in system.data.template.talent.jobs
                    .skills_desired"
                >
                  <div :key="item" class="my-2 mx-2">
                    <v-chip small label class="elevation-1" color="#f6f9fc">
                      <!-- <v-avatar left>
                      <atom-2-icon color="#32e0c4" />
                    </v-avatar> -->
                      <span class="mx-5">{{ item.toUpperCase() }}</span>
                    </v-chip>
                  </div>
                </template>
              </v-sheet>

              <v-sheet height="50px" width="100%" color="transparent">
              </v-sheet>

              <v-row no-gutters>
                <v-col class="" cols="12" sm="6" md="6">
                  <div class="d-flex align-center ma-5 text-overline text-left">
                    Contract Type
                    <v-divider class="mx-5"></v-divider>
                  </div>
                  <v-sheet
                    class="d-flex flex-wrap justify-center px-5"
                    width="100%"
                    color="transparent"
                    v-if="system.data.template.talent.jobs.offer_contract"
                  >
                    <template
                      v-for="item in system.data.template.talent.jobs
                        .offer_contract"
                    >
                      <div :key="item.name" class="my-2 mx-2">
                        <v-chip small label outlined color="#000">
                          <!-- <v-avatar left>
                      <atom-2-icon color="#32e0c4" />
                    </v-avatar> -->
                          <span class="mx-1">{{ item.name }}</span>
                        </v-chip>
                      </div>
                    </template>
                  </v-sheet>
                </v-col>
                <v-col class="" cols="12" sm="6" md="6">
                  <div class="d-flex align-center ma-5 text-overline text-left">
                    Role Seniority
                    <v-divider class="mx-5"></v-divider>
                  </div>
                  <v-sheet
                    class="d-flex flex-wrap justify-center px-5"
                    width="100%"
                    color="transparent"
                    v-if="system.data.template.talent.jobs.offer_seniority"
                  >
                    <template
                      v-for="item in system.data.template.talent.jobs
                        .offer_seniority"
                    >
                      <div :key="item.name" class="my-2 mx-2">
                        <v-chip small label outlined color="#000">
                          <!-- <v-avatar left>
                      <atom-2-icon color="#32e0c4" />
                    </v-avatar> -->
                          <span class="mx-1">{{ item.name }}</span>
                        </v-chip>
                      </div>
                    </template>
                  </v-sheet>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col class="" cols="12" sm="6" md="6">
                  <div class="d-flex align-center ma-5 text-overline text-left">
                    Career path
                    <v-divider class="mx-5"></v-divider>
                  </div>
                  <v-sheet
                    class="d-flex flex-wrap justify-center px-5"
                    width="100%"
                    color="transparent"
                    v-if="system.data.template.talent.jobs.offer_career_path"
                  >
                    <template
                      v-for="item in system.data.template.talent.jobs
                        .offer_career_path"
                    >
                      <div :key="item.name" class="my-2 mx-2">
                        <v-chip small label outlined color="#000">
                          <!-- <v-avatar left>
                      <atom-2-icon color="#32e0c4" />
                    </v-avatar> -->
                          <span class="mx-1">{{ item.name }}</span>
                        </v-chip>
                      </div>
                    </template>
                  </v-sheet>
                </v-col>
                <v-col class="" cols="12" sm="6" md="6">
                  <div class="d-flex align-center ma-5 text-overline text-left">
                    Remote Level
                    <v-divider class="mx-5"></v-divider>
                  </div>
                  <v-sheet
                    class="d-flex flex-wrap justify-center px-5"
                    width="100%"
                    color="transparent"
                    v-if="system.data.template.talent.jobs.offer_remote_level"
                  >
                    <template
                      v-for="item in system.data.template.talent.jobs
                        .offer_remote_level"
                    >
                      <div :key="item.name" class="my-2 mx-2">
                        <v-chip small label outlined color="#000">
                          <!-- <v-avatar left>
                      <atom-2-icon color="#32e0c4" />
                    </v-avatar> -->
                          <span class="mx-1">{{ item.name }}</span>
                        </v-chip>
                      </div>
                    </template>
                  </v-sheet>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class="" cols="12" sm="6" md="6">
                  <div class="d-flex align-center ma-5 text-overline text-left">
                    Timezones
                    <v-divider class="mx-5"></v-divider>
                  </div>
                  <v-sheet
                    class="d-flex flex-wrap justify-center px-5"
                    width="100%"
                    color="transparent"
                    v-if="system.data.template.talent.jobs.restrict_timezone"
                  >
                    <template
                      v-for="item in system.data.template.talent.jobs
                        .restrict_timezone"
                    >
                      <div :key="item.value" class="my-2 mx-2">
                        <v-chip small label outlined color="#000">
                          <!-- <v-avatar left>
                      <atom-2-icon color="#32e0c4" />
                    </v-avatar> -->
                          <span class="mx-1">{{ item.name }}</span>
                        </v-chip>
                      </div>
                    </template>
                  </v-sheet>
                </v-col>
                <v-col class="" cols="12" sm="6" md="6">
                  <div class="d-flex align-center ma-5 text-overline text-left">
                    Languages
                    <v-divider class="mx-5"></v-divider>
                  </div>
                  <v-sheet
                    class="d-flex flex-wrap justify-center px-5"
                    width="100%"
                    color="transparent"
                    v-if="system.data.template.talent.jobs.restrict_language"
                  >
                    <template
                      v-for="item in system.data.template.talent.jobs
                        .restrict_language"
                    >
                      <div :key="item.name" class="my-2 mx-2">
                        <v-chip small label outlined color="#000">
                          <!-- <v-avatar left>
                      <atom-2-icon color="#32e0c4" />
                    </v-avatar> -->
                          <span class="mx-1">{{ item.name }}</span>
                        </v-chip>
                      </div>
                    </template>
                  </v-sheet>
                </v-col>
              </v-row>
              <v-sheet height="50px" width="100%" color="transparent">
              </v-sheet>
            </v-card>

            <div class="mx-5 mt-10 text-overline white--text text-right">
              Offer
            </div>
            <v-card class="elevation-5 mx-1 pa-5" color="#f6f9fc">
              <v-row no-gutters>
                <v-col class="pa-5" cols="12" sm="12" md="12"
                  ><div class="text-h5 text-left">
                    <v-icon left>mdi-cash-usd-outline</v-icon>Salary
                  </div>
                  <div
                    class="mx-5 mt-7 text-h6 justify-center d-flex align-center"
                  >
                    <v-chip
                      dark
                      label
                      class="elevation-3 px-5 mr-2"
                      color="#39444b"
                    >
                      <currency-dollar-icon
                        color="#32e0c4"
                        class="mr-5"
                      ></currency-dollar-icon>
                      {{ system.data.template.talent.jobs.salary_low }} -
                      {{ system.data.template.talent.jobs.salary_high }}
                    </v-chip>

                    {{ system.data.template.talent.jobs.salary_rate.name }}
                  </div>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class="pa-5" cols="12" sm="12" md="12"
                  ><div class="text-h5 text-left">
                    <v-icon left>mdi-puzzle-outline</v-icon>Perks
                  </div>
                  <v-sheet
                    class="d-flex flex-wrap justify-space-between pa-5 mt-5"
                    width="100%"
                    color="transparent"
                    v-if="system.data.template.talent.jobs.company_perks"
                  >
                    <template
                      v-for="item in system.data.template.talent.jobs
                        .company_perks"
                    >
                      <div :key="item.name" class="my-2 mx-2">
                        <v-chip dark label class="elevation-1" color="#39444b">
                          <v-avatar left>
                            <check-icon color="#32e0c4" />
                          </v-avatar>
                          <span class="mx-3">{{ item.name }}</span>
                        </v-chip>
                      </div>
                    </template>
                  </v-sheet>
                </v-col>
              </v-row>
              <v-sheet height="50px" width="100%" color="transparent">
              </v-sheet>
              <div class="d-flex align-center mx-5 text-button text-right">
                <v-divider class="mr-5"></v-divider>eligibility<v-divider
                  class="mx-5"
                ></v-divider>
              </div>
              <v-row no-gutters>
                <v-col class="my-5" cols="12" sm="12" md="12">
                  <v-sheet
                    class="d-flex flex-wrap justify-space-around px-5"
                    width="100%"
                    color="transparent"
                    v-if="system.data.template.talent.jobs.offer_location"
                  >
                    <template
                      v-for="item in system.data.template.talent.jobs
                        .offer_location"
                    >
                      <div :key="item.name" class="my-2 mx-2">
                        <v-chip
                          outlined
                          small
                          label
                          class="elevation-0"
                          color=""
                        >
                          <v-avatar left>
                            {{ item.emoji }}
                          </v-avatar>
                          <span class="mx-5">{{ item.name }}</span>
                        </v-chip>
                      </div>
                    </template>
                  </v-sheet>
                  <v-sheet
                    class="d-flex flex-wrap justify-space-around px-5"
                    width="100%"
                    color="transparent"
                    v-if="system.data.template.talent.jobs.offer_region"
                  >
                    <template
                      v-for="item in system.data.template.talent.jobs
                        .offer_region"
                    >
                      <div :key="item" class="my-2 mx-2">
                        <v-chip small outlined label class="elevation-0">
                          <v-avatar left>
                            <map-pins-icon stroke-width="1" color="#39444b" />
                          </v-avatar>
                          <span class="mx-5">{{ item.toUpperCase() }}</span>
                        </v-chip>
                      </div>
                    </template>
                  </v-sheet>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class="" cols="12" sm="6" md="6">
                  <div class="d-flex align-center ma-5 text-overline text-left">
                    Citizenship
                    <v-divider class="mx-5"></v-divider>
                  </div>
                  <v-sheet
                    class="d-flex flex-wrap justify-center px-5"
                    width="100%"
                    color="transparent"
                    v-if="system.data.template.talent.jobs.restrict_citizenship"
                  >
                    <template
                      v-for="item in system.data.template.talent.jobs
                        .restrict_citizenship"
                    >
                      <div :key="item.name" class="my-2 mx-2">
                        <v-chip small label outlined color="#000">
                          <!-- <v-avatar left>
                      <atom-2-icon color="#32e0c4" />
                    </v-avatar> -->
                          <span class="mx-1">{{ item.name }}</span>
                        </v-chip>
                      </div>
                    </template>
                  </v-sheet>
                </v-col>
                <v-col class="" cols="12" sm="6" md="6">
                  <div class="d-flex align-center ma-5 text-overline text-left">
                    Working VISA
                    <v-divider class="mx-5"></v-divider>
                  </div>
                  <v-sheet
                    class="d-flex flex-wrap justify-center px-5"
                    width="100%"
                    color="transparent"
                    v-if="system.data.template.talent.jobs.restrict_visa"
                  >
                    <template
                      v-for="item in system.data.template.talent.jobs
                        .restrict_visa"
                    >
                      <div :key="item.name" class="my-2 mx-2">
                        <v-chip small label outlined color="#000">
                          <!-- <v-avatar left>
                      <atom-2-icon color="#32e0c4" />
                    </v-avatar> -->
                          <span class="mx-1">{{ item.name }}</span>
                        </v-chip>
                      </div>
                    </template>
                  </v-sheet>
                </v-col>
              </v-row>

              <v-sheet height="50px" width="100%" color="transparent">
              </v-sheet>
            </v-card>
            <v-sheet height="150px" width="100%" color="transparent"> </v-sheet>
            <div class="text-h3 mt-10" style="color: #f6f9fc">
              Listing Preview
            </div>
            <div class="text-overline ml-5" style="color: #f6f9fc">
              listing preview
            </div>

            <v-sheet height="50px" width="100%" color="transparent"> </v-sheet>
            <v-sheet width="100%" class="pa-5" color="transparent">
              <v-card class="elevation-5 ml-10 mt-5 pa-5" color="#f6f9fc">
                <div class="d-flex align-center">
                  <v-avatar
                    style="margin-left: -50px; border-radius: 50%"
                    size="64"
                    class="elevation-5"
                  >
                    <v-img
                      v-if="system.data.template.talent.jobs.company"
                      :src="system.data.template.talent.jobs.company.logo"
                      style
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <!-- <logo-animated
                        lwidth="100px"
                        lheight="100px"
                        lfill="#f7fafc"
                        lstroke="#39444b"
                        lstrokewidth="2px"
                        class="ma-5"
                      ></logo-animated> -->
                        </v-row>
                      </template>
                    </v-img>
                  </v-avatar>

                  <v-row no-gutters>
                    <v-col class="pa-5" cols="12" sm="12" md="12"
                      ><div class="text-h4 text-left text-wrap">
                        {{ system.data.template.talent.jobs.offer_role }}
                      </div>
                      <div class="ml-5 mt-3 text-overline text-left text-wrap">
                        {{ system.data.template.talent.jobs.offer_pitch }}
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <v-row no-gutters>
                  <v-col class="pa-5" cols="12" sm="12" md="12">
                    <v-sheet
                      class="d-flex flex-wrap justify-space-between"
                      width="100%"
                      color="transparent"
                      v-if="system.data.template.talent.jobs.company"
                    >
                      <v-chip class="ma-1" small label outlined color="">
                        {{
                          system.data.template.talent.jobs.company.name.toUpperCase()
                        }}
                      </v-chip>
                      <v-chip class="ma-1" small label outlined color="">
                        FULL TIME
                      </v-chip>
                      <v-chip class="ma-1" small label outlined color="">
                        GLOBAL
                      </v-chip>
                      <v-chip class="ma-1" small label outlined color="">
                        REMOTE
                      </v-chip>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-card>
            </v-sheet>
            <v-sheet height="250px" width="100%" color="transparent"> </v-sheet>

            <v-row no-gutters>
              <v-col
                class="d-flex align-center justify-center mb-5"
                cols="12"
                sm="12"
                md="6"
              >
                <v-btn disabled text color="#293136">
                  <v-icon dark>mdi-information</v-icon>
                </v-btn>
              </v-col>
              <v-col
                class="d-flex align-center justify-center mb-5 px-5"
                cols="12"
                sm="12"
                md="6"
              >
                <v-btn color="#32e0c4" disabled block rounded x-large>
                  POST A JOB OFFER
                  <v-icon right>mdi-card-account-details-star</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
        <v-col class cols="12" sm="0" md="2" xl="3"> </v-col>
      </v-row>
    </v-sheet>
    <DividerBottom dcolor="39444b"></DividerBottom>
    <!-- <v-row no-gutters class="mb-20">
      <v-col class cols="12" sm="0" md="2" xl="2"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="8">
        <v-row no-gutters>
          <v-col class cols="12" sm="4" md="4" xl="4">
            <v-card class="d-flex align-center ma-5" height="200">
              <v-scroll-y-transition>
                <div class="text-h2 ma-5">
                  CAREERS <users-icon></users-icon>
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-col>
          <v-col class cols="12" sm="4" md="4" xl="4">
            <v-card class="d-flex align-center ma-5" height="200">
              <v-scroll-y-transition>
                <div class="text-h2 ma-5">
                  MENTORS <school-icon></school-icon>
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-col>
          <v-col class cols="12" sm="4" md="4" xl="4">
            <v-card class="d-flex align-center ma-5" height="200">
              <v-scroll-y-transition>
                <div class="text-h2 ma-5">NOMADS <users-icon></users-icon></div>
              </v-scroll-y-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col class cols="12" sm="0" md="2" xl="2"></v-col>
    </v-row> -->

    <!-- //TODO REMOVE THIS BOTTOM STUFF AND MAKE A COMPONENT -->

    <v-sheet class="mb-10" color="transparent" min-height="350px"></v-sheet>
    <v-row no-gutters class="mt-15">
      <v-col cols="4"> </v-col>
      <v-col cols="4" class="d-flex align-center justify-center"
        ><svg
          height="400px"
          width="400px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 600 600"
          style="enable-background: new 0 0 600 600; margin-bottom: -255px"
          xml:space="preserve"
        >
          <g>
            <path
              style="fill: #39444b; stroke: #f7fafc"
              d="M327.2118,220.0614l-0.0104-0.0097L460.9088,86.3447c4.5365-4.5365,4.5366-11.8917,0.0001-16.4282l-11.4902-11.4903
            c-4.5365-4.5366-11.8918-4.5366-16.4283,0L307.4976,183.9192c-4.5366,4.5366-11.8918,4.5366-16.4283,0l-68.5176-68.5176
            c-4.5366-4.5366-11.8918-4.5365-16.4283,0.0001l-11.4898,11.49c-4.5365,4.5366-4.5365,11.8917,0.0001,16.4282l96.4457,96.4457
            c4.5366,4.5365,11.8918,4.5365,16.4283,0L327.2118,220.0614z"
            />
            <path
              style="fill: #f7fafc; stroke: #f7fafc"
              d="M359.1364,251.986l-19.7045,19.7042c-4.5366,4.5366-4.5366,11.8918-0.0001,16.4284l108.8036,108.8033
		c4.5366,4.5366,11.8918,4.5365,16.4283,0l11.4901-11.4901c4.5366-4.5366,4.5365-11.8918,0-16.4283l-80.8752-80.8749
		c-4.5366-4.5366-4.5366-11.8918,0-16.4283L592.658,74.3204c4.5366-4.5366,4.5366-11.8917,0-16.4283l-11.4897-11.4897
		c-4.5366-4.5365-11.8918-4.5365-16.4283,0L359.1461,251.996L359.1364,251.986z"
            />
            <path
              style="fill: #f7fafc; stroke: #f7fafc"
              d="M272.413,338.7094l0.01,0.01l-85.4481,85.4474c-4.5366,4.5365-4.5366,11.8917-0.0001,16.4283l11.4901,11.4903
		c4.5365,4.5366,11.8918,4.5366,16.4284,0.0001l77.2335-77.2339c4.5366-4.5366,11.8918-4.5366,16.4283,0l187.746,187.746
		c4.5365,4.5365,11.8917,4.5366,16.4283,0.0001l11.49-11.4898c4.5366-4.5366,4.5366-11.8918,0.0001-16.4283l-215.674-215.6743
		c-4.5365-4.5365-11.8918-4.5366-16.4283,0L272.413,338.7094z"
            />
            <path
              style="fill: #f7fafc; stroke: #f7fafc"
              d="M240.4884,306.7848l19.7042-19.7042c4.5366-4.5365,4.5366-11.8918,0-16.4283L50.5942,61.0542
		c-4.5366-4.5366-11.8918-4.5365-16.4283,0l-11.49,11.49c-4.5365,4.5366-4.5365,11.8917,0,16.4283l181.6702,181.6701
		c4.5366,4.5366,4.5366,11.8918,0,16.4283L28.2539,463.1627c-4.5365,4.5365-4.5366,11.8917,0,16.4283l11.49,11.4901
		c4.5365,4.5366,11.8918,4.5366,16.4283,0l184.3063-184.3063L240.4884,306.7848z"
            />
          </g>
        </svg>
        <!-- <div
          class="text-h1"
          style="
            color: #f6f9fc;
            text-shadow: 1px 3px 7px rgba(246, 249, 252, 0.6);
          "
        >
          xpert.id
        </div> -->
      </v-col>
      <v-col cols="4"> </v-col>
    </v-row>
  </div>
</template>
<script>
  import DividerTop from '@/components/divider/DividerTop'
  import DividerBottom from '@/components/divider/DividerBottom'

  import store from '@/store'
  import { mapState } from 'vuex'

  import _ from 'lodash'

  export default {
    data: () => ({
      searchInput: null,
      validOffer: null,
      validRole: null,

      companySearch: null,
      companyQuery: '',

      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [],
      ],
    }),
    components: {
      DividerTop,
      DividerBottom,
    },
    computed: {
      ...mapState(['system', 'talent']),
    },
    created() {},
    mounted() {
      store.dispatch('talent/bindData')
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
    },

    methods: {
      fetchCompanies: _.debounce(function (val) {
        this.system.data.template.talent.jobs.company_loading = true
        fetch(
          'https://autocomplete.clearbit.com/v1/companies/suggest?query=' + val
        )
          .then((res) => res.clone().json())
          .then((res) => {
            this.system.data.template.talent.jobs.company_list = res
            //   this.xpert.data.profile.currentCompanyItems = res
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(
            () => (this.system.data.template.talent.jobs.company_loading = false)
          )
      }, 1000),
      validateTalent() {
        if (this.$refs.formTalent.validate()) {
          console.log(this.talent.data)

          store
            .dispatch('talent/backendOfflineUpdateAction', {
              data: this.talent.data,
              collection: 'talent',
            })
            .then(function () {
              store.dispatch('triggerNotification', {
                type: 'success',
                message: 'Talent Settings Updated',
              })
            })
        }
      },
      findIndustry(id) {
        return this.ninja.find(this.talent.data.sectors, { id: id })
      },
      removeIndustry(item) {
        this.talent.data.sectors = this.ninja.reject(
          this.talent.data.sectors,
          item
        )
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
  .wrap-text {
    -webkit-line-clamp: unset !important;
  }
</style>