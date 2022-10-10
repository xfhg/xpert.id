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
          min-height="100px"
        ></v-sheet>
      </v-col>
    </v-row>

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
                      v-if="global.xpert.profile.displayPicture"
                      :src="global.xpert.profile.displayPicture"
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
                  {{ global.xpert.profile.displayName }}
                </div>

                <v-chip
                  class="ma-10 pa-5"
                  style="box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px"
                  color="#39444b"
                  label
                  small
                >
                  <div class="text-h5 pioneer-username">
                    {{ global.xpert.profile.username }}
                  </div>
                </v-chip>
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
                <div
                  class="text-body-1 pa-5"
                  v-html="global.xpert.profile.bio"
                ></div>

                <v-row no-gutters>
                  <v-col class="pa-5" cols="12" sm="12" md="12" xl="12">
                    <v-sheet class="px-5" color="transparent">
                      <v-sheet
                        class="d-flex flex-wrap justify-space-between"
                        width="100%"
                        color="transparent"
                      >
                        <v-chip class="elevation-0" color="#f6f9fc" label small>
                          <div class="text-button">
                            {{ global.xpert.profile.location.emoji }}
                            {{ global.xpert.profile.location.name }}
                          </div>
                        </v-chip>
                        <v-chip class="elevation-0" color="#f6f9fc" label small>
                          <div class="text-button">
                            {{ global.xpert.profile.timezone }}
                          </div>
                        </v-chip>

                        <v-avatar
                          v-if="global.xpert.profile.currentCompany"
                          class="elevation-0"
                          style="
                            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
                              rgba(0, 0, 0, 0.22) 0px 15px 12px;
                          "
                          size="24"
                          rounded
                        >
                          <v-img
                            :src="global.xpert.profile.currentCompany.logo"
                            rounded
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
                        </v-avatar>

                        <v-chip class="elevation-0" color="#f6f9fc" label small>
                          <div class="text-button">
                            {{ global.xpert.profile.currentCompany.name }}
                          </div>
                        </v-chip>

                        <!-- <div class="text-button">
                          {{ global.xpert.profile.currentCompany.domain }}
                        </div> -->
                      </v-sheet>
                    </v-sheet>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col class="pa-5" cols="12" sm="12" md="12" xl="12">
                    <v-sheet class="px-5" color="transparent">
                      <v-sheet
                        class="d-flex flex-wrap justify-space-between"
                        width="100%"
                        color="transparent"
                      >
                        <template
                          v-for="(item, index) in global.xpert.profile
                            .languages"
                        >
                          <div :key="index" class="my-3 mx-3">
                            <v-chip
                              class="elevation-0"
                              color="#f6f9fc"
                              label
                              small
                            >
                              <v-avatar left>
                                <language-icon
                                  stroke-width="0.5"
                                ></language-icon>
                              </v-avatar>
                              <span class="mx-5">{{ item.name }}</span>
                            </v-chip>
                          </div>
                        </template>
                      </v-sheet>
                    </v-sheet>
                  </v-col>
                </v-row>
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

          <!-- <div class="text-overline ml-5">Production ready expertise</div> -->
          <v-sheet
            class="d-flex flex-wrap justify-space-between mt-15"
            width="100%"
          >
            <template v-for="item in global.xpert.skillset">
              <div :key="item.skill_id" class="my-5 mx-10">
                <v-chip
                  v-if="item.skill_length < 7"
                  class="elevation-2"
                  color="#52616b"
                  dark
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
                  dark
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
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="4">
        <v-sheet class color="transparent" min-height="10px"></v-sheet>
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

          <!-- <div class="text-overline ml-5">
            Detailed experience / achievement bits
          </div> -->
          <v-sheet class="mt-15" width="100%">
            <template v-for="(item, index) in global.xpert.experience">
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
                  <v-col class="text-right" cols="4"> </v-col>
                </v-row>
              </div>
            </template>
          </v-sheet>
        </v-sheet>
      </v-col>
      <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="4">
        <v-sheet class color="transparent" min-height="10px"></v-sheet>
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

    <!-- <vue-diagonal :deg="-2" background="#f7fafc" space-before></vue-diagonal> -->

    <vue-diagonal :deg="-2" background="#39444b">
      <v-sheet class color="#39444b" min-height="25">
        <v-row no-gutters>
          <v-col class cols="12" sm="0" md="2" xl="2"></v-col>
          <v-col class cols="12" sm="12" md="8" xl="8">
            <v-sheet class="mt-10 pa-5" width="100%" height color="transparent">
              <div class="text-h3 mt-10" style="color: #f6f9fc">Portfolio</div>

              <!-- <div class="text-overline ml-5" style="color: #f6f9fc">
                Work in Progress / Featured Projects
              </div> -->
              <v-sheet
                class="d-flex justify-center flex-wrap mt-15"
                width="100%"
                color="transparent"
              >
                <template v-for="(item, index) in global.xpert.featured">
                  <div :key="index">
                    <v-sheet class="mb-10" height color="transparent">
                      <template>
                        <v-card
                          class="ma-5"
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
                          class="
                            elevation-0
                            mx-6
                            py-1
                            d-flex
                            mb-2
                            justify-space-between
                          "
                          max-width="300"
                          color="transparent"
                        >
                          <v-tooltip eager bottom>
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
                            <v-icon>mdi-link</v-icon>
                          </vue-link>

                          <v-tooltip eager bottom>
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
                          <v-col class="text-center" cols="12"> </v-col>
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
          <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
          <v-col class cols="12" sm="12" md="8" xl="4">
            <v-sheet class color="transparent" min-height="10px"></v-sheet>
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
    <!-- <vue-diagonal :deg="-2" background="#f7fafc" space-after></vue-diagonal> -->

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
        <v-sheet class="mt-10 pa-5" width="100%" height>
          <div class="text-h3 mt-10 mb-10">Employment</div>
          <!-- <div class="text-overline ml-5 mb-10">
            Current position / Relevant Experience
          </div> -->

          <v-timeline
            class="hidden-sm-and-down"
            dense
            v-if="global.xpert.employment.length > 0"
          >
            <template v-for="(item, index) in global.xpert.employment">
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
                  <v-col class="text-right" cols="4"> </v-col>
                </v-row>
              </div>
            </template>
          </v-timeline>

          <template v-for="(item, index) in global.xpert.employment">
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
                <v-col class="text-right" cols="4"> </v-col>
              </v-row>
            </div>
          </template>
        </v-sheet>
      </v-col>
      <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="4">
        <v-sheet class color="transparent" min-height="10px"></v-sheet>
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
          <div class="text-h3 mt-10 mb-10">Education</div>
          <!-- <div class="text-overline ml-5 mb-10">
            Degrees / Certifications / Accolades
          </div> -->

          <v-timeline
            class="hidden-sm-and-down"
            dense
            v-if="global.xpert.education.length > 0"
          >
            <template v-for="(item, index) in global.xpert.education">
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
                  <v-col class="text-right" cols="4"> </v-col>
                </v-row>
              </div>
            </template>
          </v-timeline>

          <template v-for="(item, index) in global.xpert.education">
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
                <v-col class="text-right" cols="4"> </v-col>
              </v-row>
            </div>
          </template>
        </v-sheet>
      </v-col>
      <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="4">
        <v-sheet class color="transparent" min-height="10px"></v-sheet>
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

    <vue-diagonal :deg="-2" background="#39444b" space-before>
      <v-row no-gutters>
        <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
        <v-col class cols="12" sm="12" md="8" xl="6">
          <v-sheet class="mt-15 pa-5" width="100%" height color="transparent">
            <div class="text-h3 mt-10" style="color: #f6f9fc">Bookshelf</div>

            <!-- <div class="text-overline ml-5" style="color: #f6f9fc">
              review Your latest favorites
            </div> -->

            <v-sheet
              class="d-flex justify-center flex-wrap mt-15 px-sm-5 pt-15"
              width="100%"
              color="transparent"
            >
              <template v-for="(item, index) in global.xpert.bookshelf">
                <div :key="index" class="mt-5 mb-10">
                  <v-row class="pb-2">
                    <v-col
                      class="d-flex justify-space-between align-center"
                      cols="12"
                    >
                      <v-tooltip eager max-width="300px" bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <book-icon
                            v-bind="attrs"
                            v-on="on"
                            stroke-width="1"
                            class="ml-10"
                          ></book-icon>
                        </template>
                        <span>{{ item.book_description }}</span>
                      </v-tooltip>

                      <v-tooltip eager bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <info-circle-icon
                            v-bind="attrs"
                            v-on="on"
                            stroke-width="1"
                            class="mr-10"
                          ></info-circle-icon>
                        </template>
                        <span>{{
                          item.book_categories
                            ? item.book_categories.join(' ')
                            : ''
                        }}</span>
                      </v-tooltip>
                    </v-col>
                  </v-row>
                  <v-card
                    class="elevation-5 pa-2 ma-sm-5 mx-5"
                    color="#f7fafc"
                    max-width="300"
                    min-width="300"
                  >
                    <v-row no-gutters>
                      <v-col class sm="0" md="1"></v-col>
                      <v-col
                        class="d-flex justify-space-around px-5"
                        sm="12"
                        md="10"
                      >
                        <v-img
                          v-if="item.book_image"
                          class="mx-5 mb-5 elevation-5 hidden-sm-and-down"
                          style="border-radius: 5px; margin-top: -125px"
                          :src="item.book_image"
                          max-width="150px"
                        ></v-img>

                        <v-img
                          v-if="item.book_image"
                          class="mx-5 mb-5 elevation-5 hidden-md-and-up"
                          style="border-radius: 5px; margin-top: -125px"
                          :src="item.book_image"
                          max-width="125px"
                        ></v-img>
                      </v-col>
                      <v-col class sm="0" md="1"></v-col>
                    </v-row>

                    <v-card-title
                      class="mb-5 d-flex align-center justify-center"
                    >
                      <div
                        class="text-h6 text-uppercase"
                        style="color: #22292d"
                      >
                        {{ item.book_title }}
                      </div>
                    </v-card-title>

                    <v-card-text style="color: #22292d">
                      <span v-html="item.book_review"></span>
                    </v-card-text>
                  </v-card>
                  <v-row justify="center" class="mb-5">
                    <v-col class="text-center" cols="12"> </v-col>
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
        <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
      </v-row>

      <v-row no-gutters>
        <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
        <v-col class cols="12" sm="12" md="8" xl="4">
          <v-sheet class color="transparent" min-height="10px"></v-sheet>
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
    <vue-diagonal :deg="-2" background="#1d2226">
      <v-row no-gutters>
        <v-col class cols="12" sm="0" md="2" xl="4"></v-col>
        <v-col class cols="12" sm="12" md="8" xl="4">
          <v-sheet class="mt-10 pa-5" width="100%" height color="transparent">
            <div class="text-h3 mt-10 white--text">Interests</div>
            <!-- <div class="text-overline ml-5 white--text">
                Trends / Researching / Upskilling / Learning
              </div> -->

            <v-sheet
              class="d-flex flex-wrap justify-space-between mt-15"
              width="100%"
              color="transparent"
            >
              <template v-for="item in global.xpert.interests">
                <div :key="item.trend_id" class="my-5 mx-5">
                  <v-chip class="elevation-5" color="#39444b" dark label>
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
        <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
        <v-col class cols="12" sm="12" md="8" xl="4">
          <v-sheet class color="transparent" min-height="10px"></v-sheet>
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

    <vue-diagonal :deg="-2" background="#f6f9fc">
      <v-row no-gutters>
        <v-col class cols="12" sm="0" md="2" xl="4"></v-col>
        <v-col class cols="12" sm="12" md="8" xl="4">
          <v-sheet class="mt-10 pa-5" width="100%" height color="transparent">
            <div class="text-h3 mt-10">Connections</div>
            <!-- <div class="text-overline ml-5 white--text">
              your public personal & project internet presence
            </div> -->

            <v-sheet class="mt-15 pl-5" width="100%" color="transparent">
              <template v-for="(item, index) in global.xpert.socials">
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
                      <vue-link
                        :to="item.conn_link"
                        :external="true"
                        :new-tab="true"
                        class=""
                      >
                        <v-avatar class="ma-3" size="32" tile>
                          <v-icon>mdi-link</v-icon>
                        </v-avatar>
                      </vue-link>
                    </v-col>
                  </v-row>
                </div>
              </template>
            </v-sheet>
          </v-sheet>
        </v-col>
        <v-col class cols="12" sm="0" md="2" xl="4"></v-col>
      </v-row>

      <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet>
    </vue-diagonal>

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
  import LogoAnimated from '@/components/main/LogoAnimated'

  import store from '@/store'
  import { mapState } from 'vuex'

  import { DateTime } from 'luxon'

  export default {
    data: () => ({
      newProfilePic: [],

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
      LogoAnimated,
      VueLink: () => import('vue-link'),
    },

    computed: {
      ...mapState(['auth', 'user', 'system', 'xpert', 'global']),
    },
    created() {},
    mounted() {
      store.dispatch('xpert/bindData')
    },
    watch: {},
    methods: {
      handleFilePondInit: function () {},

      reset() {
        requestAnimationFrame(() => {
          this.$refs.form.reset()
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
