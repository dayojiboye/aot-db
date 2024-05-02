<template>
  <div class="w-full">
    <error-panel v-if="currentView === status.ERROR" @onRetry="fetchCharacter" />

    <div v-else-if="currentView === status.SUCCESS" class="w-full">
      <Transition name="slide-fade">
        <div
          v-if="showStickyHeader"
          class="fixed z-[8px] top-20 left-0 h-11 w-full py-4 bg-dark border-b border-b-border px-4 flex items-center gap-3"
        >
          <img
            v-if="details.img"
            :alt="details.name"
            :src="details.img ? details.img.split('.png')[0] + '.png' : ''"
            width="300"
            height="300"
            class="rounded-[50%] w-8 h-8"
          />
          <span class="text-sm font-moderat-bold">{{ details.name }}</span>
        </div>
      </Transition>

      <div class="w-full px-4 py-8 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <div class="w-[280px] flex gap-4 items-center flex-shrink-0" id="profile-avatar">
          <img
            v-if="details.img"
            :alt="details.name"
            :src="details.img ? details.img.split('.png')[0] + '.png' : ''"
            width="600"
            height="600"
            class="rounded-[50%] w-28 h-28 lg:w-36 lg:h-36"
          />
          <span
            v-else
            class="rounded-[50%] w-28 h-28 lg:w-36 lg:h-36 text-2xl lg:text-3xl flex items-center justify-center bg-slate-500"
            >{{ getInitial(details.name) }}</span
          >
          <h1 class="text-lg font-millik leading-6">{{ details.name }}</h1>
        </div>

        <!-- flex flex-col gap-7 -->
        <div
          class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-7 sm:gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          <character-detail title="Aliases">
            <p class="text-base lg:text-lg font-moderat-medium">
              {{ details.alias.map((alias) => alias).join(', ') }}
            </p>
          </character-detail>

          <character-detail title="Species">
            <p class="text-base lg:text-lg font-moderat-medium">
              {{ details.species.map((specie) => specie).join(', ') }}
            </p>
          </character-detail>

          <character-detail title="Gender">
            <p class="text-base lg:text-lg font-moderat-medium">
              {{ details.gender }}
            </p>
          </character-detail>

          <character-detail title="Age">
            <p class="text-base lg:text-lg font-moderat-medium">
              {{ details.age }}
            </p>
          </character-detail>

          <character-detail title="Height">
            <p class="text-base lg:text-lg font-moderat-medium">
              {{ details.height }}
            </p>
          </character-detail>

          <character-detail title="Relatives">
            <p v-if="details.relatives[0]" class="text-base lg:text-lg font-moderat-medium">
              {{ details.relatives[0].family }}
            </p>
          </character-detail>

          <character-detail title="Birthplace">
            <p class="text-base lg:text-lg font-moderat-medium">
              {{ details.birthplace }}
            </p>
          </character-detail>

          <character-detail title="Residence">
            <p class="text-base lg:text-lg font-moderat-medium">
              {{ details.residence }}
            </p>
          </character-detail>

          <character-detail title="Status">
            <p class="text-base lg:text-lg font-moderat-medium">
              {{ details.status }}
            </p>
          </character-detail>

          <character-detail title="Occupation">
            <p class="text-base lg:text-lg font-moderat-medium">
              {{ details.occupation }}
            </p>
          </character-detail>

          <character-detail title="Groups">
            <div v-for="group in details.groups" :key="group">
              <h3 class="text-lg lg:text-xl font-millik">{{ group.name }}</h3>
              <p class="text-base lg:text-lg font-moderat-medium">
                {{ group.sub_groups.map((subgroup) => subgroup).join(', ') }}
              </p>
            </div>
          </character-detail>

          <character-detail title="Roles">
            <ul>
              <li
                v-for="role in details.roles"
                :key="role"
                class="text-base lg:text-lg font-moderat-medium"
              >
                {{ role }}
              </li>
            </ul>
          </character-detail>
        </div>
      </div>
    </div>

    <loading-spinner v-else />

    <div class="px-4">
      <button class="btn-primary" @click="goBack">Go back</button>
    </div>
  </div>
</template>

<script>
import apiEndpoints from '@/lib/apiEndpoints'
import api from '@/lib/api'
import { VIEW_STATUS } from '@/utils/enums'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ErrorPanel from '@/components/ErrorPanel.vue'
import _ from 'lodash'
import CharacterDetail from '@/components/CharacterDetail.vue'
import { getCharacterInitial } from '@/utils/helpers'

const getCharacter = apiEndpoints.getCharacter

export default {
  components: {
    LoadingSpinner,
    ErrorPanel,
    CharacterDetail
  },

  data() {
    return {
      details: {},
      status: VIEW_STATUS,
      currentView: VIEW_STATUS.LOADING,
      showStickyHeader: false
    }
  },

  methods: {
    async fetchCharacter() {
      this.currentView = VIEW_STATUS.LOADING
      try {
        const response = await api.get(getCharacter(this.$route.params.id))
        const { status, data } = response || {}
        if (status === 200) {
          this.details = data
          this.currentView = VIEW_STATUS.SUCCESS
        }
      } catch (err) {
        this.currentView = VIEW_STATUS.ERROR
      }
    },

    onPageScroll() {
      const profileAvatar = document.getElementById('profile-avatar')
      const header = document.getElementById('header')
      if (
        window.scrollY + header.offsetHeight >
        profileAvatar?.offsetTop + profileAvatar?.offsetHeight
      ) {
        this.showStickyHeader = true
        profileAvatar?.classList.add('opacity-0')
      } else {
        this.showStickyHeader = false
        profileAvatar?.classList.remove('opacity-0')
      }
    },

    getInitial(name) {
      return getCharacterInitial(name)
    },

    goBack() {
      this.$router.go(-1)
    }
  },

  created() {
    this.fetchCharacter()
  },

  updated() {
    window.addEventListener('scroll', _.throttle(this.onPageScroll, 100))
  },

  unmounted() {
    window.removeEventListener('scroll', _.throttle(this.onPageScroll, 100))
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter-from {
  transform: translateY(-80px);
  opacity: 0;
}
</style>
