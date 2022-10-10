<template>
  <div>
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
                <router-link to="/profile">
                  <div class="text-button text-left">identity</div>
                </router-link>
                <v-divider class="mx-2"></v-divider>
                <div class="text-button text-right mx-2">Talent</div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
    </v-row>

    <v-sheet height="50px" width="100%" color="transparent"> </v-sheet>

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      <v-col class="px-5" sm="12" md="8" xl="6">
        <div class="text-h4 text-right mx-5 mt-15">Actively Searching ?</div>
        <div class="text-overline text-right mx-5"></div>

        <v-list color="transparent">
          <v-list-item class="pl-10">
            <template>
              <v-list-item-action>
                <v-switch
                  v-model="talent.data.search_jobs"
                  class="mx-5"
                  inset
                  color="#39444b"
                >
                  <template v-slot:label>
                    <div class="text-overline text-center mx-5">
                      Hunting for your dream role
                    </div>
                  </template>
                </v-switch>
              </v-list-item-action>

              <!-- <v-list-item-content>
                      <v-list-item-title>Profile</v-list-item-title>
                      Reduce unconscious bias ?
                    </v-list-item-content> -->
            </template>
          </v-list-item>

          <v-list-item class="pl-10">
            <template>
              <v-list-item-action>
                <v-switch
                  v-model="talent.data.search_cofounders"
                  class="mx-5"
                  inset
                  color="#39444b"
                >
                  <template v-slot:label>
                    <div class="text-overline text-center mx-5">
                      Matching with CO-FOUNDERs or fellow xperts
                    </div>
                  </template>
                </v-switch>
              </v-list-item-action>

              <!-- <v-list-item-content>
                      <v-list-item-title>Profile</v-list-item-title>
                      Reduce unconscious bias ?
                    </v-list-item-content> -->
            </template>
          </v-list-item>

          <v-list-item class="pl-10">
            <template>
              <v-list-item-action>
                <v-switch
                  v-model="talent.data.search_talent"
                  class="mx-5"
                  inset
                  color="#39444b"
                >
                  <template v-slot:label>
                    <div class="text-overline text-center mx-5">
                      Growing your own team
                    </div>
                  </template>
                </v-switch>
              </v-list-item-action>
            </template>
          </v-list-item>
          <!-- 
                <v-list-item>
                  <template>
                    <v-list-item-action>
                      <v-checkbox
                        v-model="xpert.data.privacy"
                        color="#32e0c4"
                        value="picture"
                        multiple
                      ></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>Profile Picture</v-list-item-title>
                      <v-list-item-subtitle class="text-wrap"
                        >Reduce unconscious bias ?</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </template>
                </v-list-item> -->
        </v-list>
      </v-col>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class sm="12" md="12">
        <DividerTop dcolor="f6f9fc"></DividerTop>
        <v-sheet class="pb-5" color="#f6f9fc" min-height="250">
          <v-row no-gutters class="pb-15">
            <v-col class cols="0" sm="0" md="2" xl="3"></v-col>
            <v-col class="px-5" sm="12" md="8" xl="6">
              <div class="text-h2 mt-15">Hunt</div>
              <div class="ml-5 text-overline text-left">
                finding instead of searching
              </div>
              <div class="mb-5 text-overline text-right">Job Offer Filters</div>
            </v-col>
            <v-col class cols="0" sm="0" md="2" xl="3"></v-col>
          </v-row>

          <v-row no-gutters>
            <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
            <v-col class cols="12" sm="12" md="8" xl="6">
              <ValidationObserver
                ref="formTalent"
                immediate
                v-slot="{ invalid, valid, handleSubmit }"
              >
                <v-form
                  class=""
                  ref="formTalent"
                  v-model="validTalent"
                  v-on:submit.prevent
                >
                  <v-card
                    class="elevation-0 mx-auto mb-0 pa-5"
                    color="transparent"
                  >
                    <div class="my-5 text-overline text-right">
                      Your Work Eligibility
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
                            v-model="talent.data.citizenship"
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
                        <ValidationProvider
                          name="Working VISA"
                          rules="array_maxlength_5"
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            class="mb-5"
                            v-model="talent.data.visa"
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

                    <div class="my-5 text-overline text-right">
                      Preferred Sectors
                    </div>
                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="12">
                        <ValidationProvider
                          name="Sector"
                          rules="array_maxlength_5"
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            v-model="talent.data.sectors"
                            :items="system.data.internal.sectors"
                            outlined
                            hide-no-data
                            multiple
                            :error-messages="errors"
                            :valid="valid"
                            label="Sectors"
                            item-text="name"
                            return-object
                            :search-input.sync="searchInput"
                            @change="searchInput = ''"
                            :value="talent.data.sectors"
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
                              <template>
                                <v-list-item-avatar>
                                  <circle-dashed-icon stroke-width="1" />
                                </v-list-item-avatar>
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

                    <div class="my-5 text-overline text-right">
                      IDEAL Employment Type
                    </div>
                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="6">
                        <ValidationProvider
                          name="Contract Type"
                          rules=""
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            v-model="talent.data.contract_type"
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
                            :value="talent.data.contract_type"
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
                                  <chevron-right-icon stroke-width="1" />
                                </v-list-item-avatar>
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
                          name="Remote Level"
                          rules=""
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            v-model="talent.data.remote_level"
                            :items="system.data.talent.remote_level"
                            outlined
                            hide-no-data
                            multiple
                            class="mb-5"
                            :error-messages="errors"
                            :valid="valid"
                            label="Job Remote Level"
                            item-text="name"
                            prepend-inner-icon="mdi-airplane"
                            return-object
                            :search-input.sync="searchInput"
                            @change="searchInput = ''"
                            :value="talent.data.remote_level"
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
                                  <chevron-right-icon stroke-width="1" />
                                </v-list-item-avatar>
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
                      <v-col class cols="12" sm="12" md="6">
                        <ValidationProvider
                          name="Career PAth"
                          rules=""
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            v-model="talent.data.career_path"
                            :items="system.data.talent.career_path"
                            outlined
                            hide-no-data
                            multiple
                            class="mb-5 mr-md-5"
                            :error-messages="errors"
                            :valid="valid"
                            label="Preferred Career Path"
                            item-text="name"
                            prepend-inner-icon="mdi-call-split"
                            return-object
                            :search-input.sync="searchInput"
                            @change="searchInput = ''"
                            :value="talent.data.career_path"
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
                                  <chevron-right-icon stroke-width="1" />
                                </v-list-item-avatar>
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
                          name="Job Seniority"
                          rules=""
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            v-model="talent.data.seniority"
                            :items="system.data.talent.seniority"
                            outlined
                            hide-no-data
                            multiple
                            class="mb-5"
                            :error-messages="errors"
                            :valid="valid"
                            label="Job Seniority"
                            item-text="name"
                            prepend-inner-icon="mdi-account-tie"
                            return-object
                            :search-input.sync="searchInput"
                            @change="searchInput = ''"
                            :value="talent.data.seniority"
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
                                  <chevron-right-icon stroke-width="1" />
                                </v-list-item-avatar>
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
                    <div class="my-5 text-overline text-right">
                      Compensation & Perks
                    </div>
                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="6">
                        <ValidationProvider
                          name="Minimum Target Salary"
                          rules="integer"
                          v-slot="{ errors, valid }"
                        >
                          <v-text-field
                            class="mb-5 mr-md-5"
                            v-model="talent.data.salary_target"
                            label="Minimum Target Salary"
                            outlined
                            :error-messages="errors"
                            :valid="valid"
                            maxlength="32"
                            prepend-inner-icon="mdi-cash-usd"
                          ></v-text-field>
                        </ValidationProvider>
                      </v-col>
                      <v-col class cols="12" sm="12" md="6">
                        <ValidationProvider
                          name="Salary Rate"
                          rules=""
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            v-model="talent.data.salary_rate"
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
                            :value="talent.data.salary_rate"
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
                                  <chevron-right-icon stroke-width="1" />
                                </v-list-item-avatar>
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
                      <v-col class cols="12" sm="12" md="12">
                        <ValidationProvider
                          name="Company Perks"
                          rules=""
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            v-model="talent.data.company_perks"
                            :items="system.data.talent.company_perks"
                            outlined
                            hide-no-data
                            multiple
                            :error-messages="errors"
                            :valid="valid"
                            label="Ideal Company Perks"
                            item-text="name"
                            prepend-inner-icon="mdi-puzzle"
                            return-object
                            :search-input.sync="searchInput"
                            @change="searchInput = ''"
                            :value="talent.data.company_perks"
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
                              <template>
                                <v-list-item-avatar>
                                  <chevron-right-icon stroke-width="1" />
                                </v-list-item-avatar>
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

                    <div class="my-5 text-overline text-right">
                      Location Location Location
                    </div>

                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="6">
                        <ValidationProvider
                          name="Timezones"
                          rules=""
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            class="mb-5 mr-md-5"
                            v-model="talent.data.timezones"
                            :items="system.timezones"
                            clearable
                            outlined
                            multiple
                            :error-messages="errors"
                            :valid="valid"
                            item-text="text"
                            return-object
                            prepend-inner-icon="mdi-map-clock"
                            label="Preferred Timezones"
                            :search-input.sync="searchInput"
                            @change="searchInput = ''"
                          >
                            <template v-slot:selection="data">
                              <v-chip
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                outlined
                              >
                                {{ data.item.text }}
                              </v-chip>
                            </template>
                            <template v-slot:item="data">
                              <template>
                                <v-list-item-avatar>
                                  <clock-icon stroke-width="1"></clock-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                  <v-list-item-title
                                    v-html="data.item.text"
                                  ></v-list-item-title>
                                  <v-list-item-subtitle
                                    v-html="data.item.value"
                                  ></v-list-item-subtitle>
                                </v-list-item-content>
                              </template>
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
                            v-model="talent.data.languages"
                            :items="system.languages"
                            clearable
                            outlined
                            multiple
                            :error-messages="errors"
                            :valid="valid"
                            item-text="name"
                            return-object
                            prepend-inner-icon="mdi-translate"
                            label="Preferred Languages"
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
                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="12">
                        <ValidationProvider
                          name="Company HQ"
                          rules="array_maxlength_5"
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            class="mb-5"
                            v-model="talent.data.company_hq"
                            :items="system.countries"
                            clearable
                            outlined
                            multiple
                            :error-messages="errors"
                            :valid="valid"
                            item-text="name"
                            return-object
                            prepend-inner-icon="mdi-earth"
                            label="Preferred Company HQ Location"
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
                        Update YOUR Job Filter
                        <v-icon right>mdi-filter</v-icon>
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
        </v-sheet>
        <DividerBottom dcolor="f6f9fc"></DividerBottom>
      </v-col>
    </v-row>
    <v-sheet height="50px" width="100%" color="transparent"> </v-sheet>

    <v-row no-gutters>
      <v-col class cols="1" sm="1" md="2" xl="3"></v-col>
      <v-col class="px-5" cols="12" sm="12" md="8" xl="6">
        <div class="text-h2 mt-10" style="color: #39444b">Match</div>
        <div class="text-overline ml-5" style="color: #39444b">
          you create better together
        </div>
        <!-- <div class="text-overline text-right" style="color: #39444b">
          we will match you with relevant experts
        </div> -->

        <ValidationObserver
          ref="formMatch"
          immediate
          v-slot="{ invalid, valid, handleSubmit }"
        >
          <v-form
            class=""
            ref="formMatch"
            v-model="validMatch"
            v-on:submit.prevent
          >
            <v-card class="elevation-0 mx-auto mb-0 pa-5" color="transparent">
              <div class="my-5 text-overline text-right">
                Do you already have a startup idea that you're set on ?
              </div>

              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="12">
                  <v-radio-group v-model="talent.match_idea">
                    <v-radio
                      class="py-2"
                      value="true"
                      on-icon="mdi-check"
                      off-icon="mdi-minus"
                    >
                      <template v-slot:label>
                        <v-card color="#f6f9fc" class="ml-5 pa-5">
                          <div class="text-overline text-right">
                            Yes, I'm looking for co-founders that will help me
                            build it
                          </div>
                        </v-card>
                      </template>
                    </v-radio>
                    <v-radio
                      class="py-2"
                      value="false"
                      on-icon="mdi-check"
                      off-icon="mdi-minus"
                    >
                      <template v-slot:label>
                        <v-card color="#f6f9fc" class="ml-5 pa-5">
                          <div class="text-overline text-right">
                            No, I can help co-founders with their existing idea
                            or explore new ideas together
                          </div>
                        </v-card>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="12">
                  <div class="d-flex align-center">
                    <v-divider class="mx-2"></v-divider>
                    <div class="my-5 text-overline text-right">
                      Over the next few months, how much time can you dedicate
                      to working on a startup ?
                    </div>
                  </div>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col cols="12" sm="12" md="12">
                  <v-radio-group v-model="talent.match_timededication">
                    <v-radio
                      class="py-2"
                      value="10"
                      on-icon="mdi-check"
                      off-icon="mdi-minus"
                    >
                      <template v-slot:label>
                        <div class="text-overline text-right">
                          Less than 10 hours a week
                        </div>
                      </template>
                    </v-radio>
                    <v-radio
                      class="py-2"
                      value="20"
                      on-icon="mdi-check"
                      off-icon="mdi-minus"
                    >
                      <template v-slot:label>
                        <div class="text-overline text-right">
                          10 to 20 hours a week
                        </div>
                      </template>
                    </v-radio>
                    <v-radio
                      class="py-2"
                      value="30"
                      on-icon="mdi-check"
                      off-icon="mdi-minus"
                    >
                      <template v-slot:label>
                        <div class="text-overline text-right">
                          20 to 40 hours a week
                        </div>
                      </template>
                    </v-radio>
                    <v-radio
                      class="py-2"
                      value="40"
                      on-icon="mdi-check"
                      off-icon="mdi-minus"
                    >
                      <template v-slot:label>
                        <div class="text-overline text-right">
                          40+ hours a week
                        </div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>

              <div class="my-5 text-overline text-right">
                What is the most impressive thing that you have built or
                achieved ?
              </div>
              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="12">
                  <ValidationProvider
                    name="Match Impressive Summary"
                    rules=""
                    v-slot="{ errors, valid }"
                  >
                    <vue-editor
                      :error-messages="errors"
                      :valid="valid"
                      id="empEditor"
                      v-model="talent.match_impressive"
                      :editorToolbar="customToolbar"
                    />
                  </ValidationProvider>
                </v-col>
              </v-row>

              <div class="mt-15 mb-5 text-button text-center">
                Which areas do you have experience on
              </div>

              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="12">
                  <v-item-group
                    class="my-5 d-flex flex-wrap align-center justify-center"
                    multiple
                  >
                    <v-item v-slot="{ active, toggle }">
                      <v-chip
                        :color="active ? '#f6f9fc' : '#ffffff'"
                        class="ma-2 px-5 d-flex align-center"
                        @click="toggle"
                      >
                        <check-icon v-if="active"></check-icon>
                        <div class="pa-3 text-overline">
                          Idea Validation / Product Market Fit
                        </div>
                      </v-chip>
                    </v-item>

                    <v-item v-slot="{ active, toggle }">
                      <v-chip
                        :color="active ? '#f6f9fc' : '#ffffff'"
                        class="ma-2 px-5 d-flex align-center"
                        @click="toggle"
                      >
                        <check-icon v-if="active"></check-icon>
                        <div class="pa-3 text-overline">
                          Form a Startup / Incorporate
                        </div>
                      </v-chip>
                    </v-item>

                    <v-item v-slot="{ active, toggle }">
                      <v-chip
                        :color="active ? '#f6f9fc' : '#ffffff'"
                        class="ma-2 px-5 d-flex align-center"
                        @click="toggle"
                      >
                        <check-icon v-if="active"></check-icon>
                        <div class="pa-3 text-overline">
                          Business Planning / Startup Finance
                        </div>
                      </v-chip>
                    </v-item>
                    <v-item v-slot="{ active, toggle }">
                      <v-chip
                        :color="active ? '#f6f9fc' : '#ffffff'"
                        class="ma-2 px-5 d-flex align-center"
                        @click="toggle"
                      >
                        <check-icon v-if="active"></check-icon>
                        <div class="pa-3 text-overline">
                          Product Development / Marketing Automation
                        </div>
                      </v-chip>
                    </v-item>
                    <v-item v-slot="{ active, toggle }">
                      <v-chip
                        :color="active ? '#f6f9fc' : '#ffffff'"
                        class="ma-2 px-5 d-flex align-center"
                        @click="toggle"
                      >
                        <check-icon v-if="active"></check-icon>
                        <div class="pa-3 text-overline">
                          Customer Acquisition / Success
                        </div>
                      </v-chip>
                    </v-item>
                    <v-item v-slot="{ active, toggle }">
                      <v-chip
                        :color="active ? '#f6f9fc' : '#ffffff'"
                        class="ma-2 px-5 d-flex align-center"
                        @click="toggle"
                      >
                        <check-icon v-if="active"></check-icon>
                        <div class="pa-3 text-overline">
                          Culture Creation / Mindset Coaching
                        </div>
                      </v-chip>
                    </v-item>
                    <v-item v-slot="{ active, toggle }">
                      <v-chip
                        :color="active ? '#f6f9fc' : '#ffffff'"
                        class="ma-2 px-5 d-flex align-center"
                        @click="toggle"
                      >
                        <check-icon v-if="active"></check-icon>
                        <div class="pa-3 text-overline">
                          Funding Advice / Bootstrapping
                        </div>
                      </v-chip>
                    </v-item>
                    <v-item v-slot="{ active, toggle }">
                      <v-chip
                        :color="active ? '#f6f9fc' : '#ffffff'"
                        class="ma-2 px-5 d-flex align-center"
                        @click="toggle"
                      >
                        <check-icon v-if="active"></check-icon>
                        <div class="pa-3 text-overline">
                          Public Relations / Social Media
                        </div>
                      </v-chip>
                    </v-item>
                    <v-item v-slot="{ active, toggle }">
                      <v-chip
                        :color="active ? '#f6f9fc' : '#ffffff'"
                        class="ma-2 px-5 d-flex align-center"
                        @click="toggle"
                      >
                        <check-icon v-if="active"></check-icon>
                        <div class="pa-3 text-overline">
                          Growth Hacking / Optimisation
                        </div>
                      </v-chip>
                    </v-item>
                  </v-item-group>
                </v-col>
              </v-row>

              <div class="my-15 text-overline text-center">
                We'll make yourself available to book a virtual coffee on your
                brainstorm time slots
              </div>

              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="12">
                  <div class="d-flex align-center">
                    <v-divider class="mr-2"></v-divider>
                    <div class="text-h4 text-center">
                      Your co-founder filter
                    </div>
                    <v-divider class="ml-2"></v-divider>
                  </div>
                </v-col>
              </v-row>

              <div class="my-5 text-overline text-left">
                Minimum time commitment
              </div>
              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="12">
                  <v-radio-group v-model="talent.match_foundertimededication">
                    <v-radio
                      class="py-2"
                      value="10"
                      on-icon="mdi-check"
                      off-icon="mdi-minus"
                    >
                      <template v-slot:label>
                        <div class="text-overline text-right">
                          Up to 10 hours a week
                        </div>
                      </template>
                    </v-radio>
                    <v-radio
                      class="py-2"
                      value="20"
                      on-icon="mdi-check"
                      off-icon="mdi-minus"
                    >
                      <template v-slot:label>
                        <div class="text-overline text-right">
                          10 to 20 hours a week
                        </div>
                      </template>
                    </v-radio>
                    <v-radio
                      class="py-2"
                      value="30"
                      on-icon="mdi-check"
                      off-icon="mdi-minus"
                    >
                      <template v-slot:label>
                        <div class="text-overline text-right">
                          20 to 40 hours a week
                        </div>
                      </template>
                    </v-radio>
                    <v-radio
                      class="py-2"
                      value="40"
                      on-icon="mdi-check"
                      off-icon="mdi-minus"
                    >
                      <template v-slot:label>
                        <div class="text-overline text-right">
                          40+ hours a week
                        </div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>

              <div class="my-5 text-overline text-left">
                describe ideal cofounder
              </div>

              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="12">
                  <ValidationProvider
                    name="Ideal Co Founder Summary"
                    rules=""
                    v-slot="{ errors, valid }"
                  >
                    <vue-editor
                      :error-messages="errors"
                      :valid="valid"
                      id="empEditor"
                      v-model="talent.match_founderideal"
                      :editorToolbar="customToolbar"
                    />
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
                      v-model="talent.match_foundertimezones"
                      :items="system.timezones"
                      clearable
                      outlined
                      multiple
                      :error-messages="errors"
                      :valid="valid"
                      item-text="text"
                      return-object
                      append-icon="mdi-map-clock"
                      label="Preferred Timezones"
                      :search-input.sync="searchInputfounder_timezones"
                      @change="searchInputfounder_timezones = ''"
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          outlined
                        >
                          {{ data.item.text }}
                        </v-chip>
                      </template>
                      <template v-slot:item="data">
                        <template>
                          <v-list-item-avatar>
                            <clock-icon stroke-width="1"></clock-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title
                              v-html="data.item.text"
                            ></v-list-item-title>
                            <v-list-item-subtitle
                              v-html="data.item.value"
                            ></v-list-item-subtitle>
                          </v-list-item-content>
                        </template>
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
                      v-model="talent.founder_languages"
                      :items="system.languages"
                      clearable
                      outlined
                      multiple
                      :error-messages="errors"
                      :valid="valid"
                      item-text="name"
                      return-object
                      append-icon="mdi-translate"
                      label="Preferred Languages"
                      :search-input.sync="searchInputfounder_languages"
                      @change="searchInputfounder_languages = ''"
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
                      </template>
                    </v-autocomplete>
                  </ValidationProvider>
                </v-col>
              </v-row>

              <div class="my-5 text-overline text-left">
                Which sectors are the target of your idea ?
              </div>

              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="12">
                  <ValidationProvider
                    name="Sector"
                    rules="array_maxlength_5"
                    v-slot="{ errors, valid }"
                  >
                    <v-autocomplete
                      v-model="talent.match_foundersectors"
                      :items="system.data.internal.sectors"
                      outlined
                      hide-no-data
                      multiple
                      :error-messages="errors"
                      :valid="valid"
                      label="Sectors"
                      item-text="name"
                      return-object
                      :search-input.sync="searchInputmatch_sectors"
                      @change="searchInputmatch_sectors = ''"
                      :value="talent.match_foundersectors"
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
                        <template>
                          <v-list-item-avatar>
                            <circle-dashed-icon stroke-width="1" />
                          </v-list-item-avatar>
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
                  Update your Matching preferences
                  <v-icon right>mdi-account-multiple-check</v-icon>
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
      <v-col class cols="1" sm="1" md="2" xl="3"></v-col>
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
      <v-sheet class="mb-10" color="transparent" min-height="250px">
        <v-row no-gutters>
          <v-col class cols="12" sm="12" md="12"> </v-col>
        </v-row>
      </v-sheet>
    </v-sheet>

    <DividerTop dcolor="39444b" style="margin-top: -250px"></DividerTop>
    <v-sheet class="" color="#39444b" min-height="25">
      <v-row no-gutters>
        <v-col class cols="12" sm="0" md="2" xl="4"></v-col>
        <v-col class cols="12" sm="12" md="8" xl="4">
          <v-sheet
            class="mt-10 pa-5"
            width="100%"
            height=""
            color="transparent"
          >
            <div class="text-h2 mt-10" style="color: #f6f9fc">Hire</div>

            <div class="text-overline ml-5" style="color: #f6f9fc">
              Scouting for TALENT ?
            </div>
            <v-card class="elevation-2 mx-1 mt-15 pa-1" color="#f6f9fc">
              <v-row no-gutters>
                <v-col class cols="12" sm="12" md="12">
                  <div class="text-body-2 text-left pa-3">
                    Network effects client product management. Ecosystem buyer
                    interaction design lean startup infographic infrastructure
                    pivot monetization. Buzz ecosystem stealth bootstrapping
                    ownership founders.
                  </div>
                </v-col>
              </v-row>
            </v-card>

            <v-sheet class="mt-15" width="100%" color="transparent"> </v-sheet>

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
                <v-btn color="#32e0c4" to="/talent/offer" block rounded x-large>
                  POST A JOB OFFER
                  <v-icon right>mdi-card-account-details-star</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
        <v-col class cols="12" sm="0" md="2" xl="4"> </v-col>
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

import { VueEditor } from 'vue2-editor'

export default {
  data: () => ({
    searchInput: null,
    validTalent: null,

    validMatch: null,
    customToolbar: [
      ['bold', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [],
    ],
    searchInputmatch_sectors: null,
    searchInputfounder_timezones: null,
    searchInputfounder_languages: null,
  }),
  components: {
    DividerTop,
    DividerBottom,
    VueEditor,
  },
  computed: {
    ...mapState(['system', 'talent']),
  },
  created() {},
  mounted() {
    store.dispatch('talent/bindData')
  },

  methods: {
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