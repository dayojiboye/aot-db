<template>
  <div class="w-full h-[200vh]">
    <ErrorPanel v-if="currentView === status.ERROR" @onRetry="fetchCharacter" />

    <div v-else-if="currentView === status.SUCCESS" class="w-full">
      <Transition name="slide-fade">
        <div
          v-if="showStickyHeader"
          class="fixed z-[8px] top-20 left-0 h-11 w-full py-4 bg-dark border-b border-b-border px-4 flex items-center gap-3"
        >
          <img
            :alt="details.name"
            :src="details.img ? details.img.split('.png')[0] + '.png' : ''"
            width="300"
            height="300"
            class="rounded-[50%] w-8 h-8"
          />
          <span class="text-sm font-moderat-bold">{{ details.name }}</span>
        </div>
      </Transition>

      <div class="w-full px-4 py-4 flex flex-col md:flex-row gap-6">
        <div class="w-[280px] flex gap-4 items-center" id="profile-avatar">
          <img
            :alt="details.name"
            :src="details.img ? details.img.split('.png')[0] + '.png' : ''"
            width="600"
            height="600"
            class="rounded-[50%] w-28 h-28 lg:w-36 lg:h-36"
          />
          <h1 class="text-lg font-millik leading-6">{{ details.name }}</h1>
        </div>

        <div></div>
      </div>
    </div>

    <LoadingSpinner v-else />
  </div>
</template>

<script>
import apiEndpoints from '@/lib/apiEndpoints'
import api from '@/lib/api'
import { VIEW_STATUS } from '@/utils/enums'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ErrorPanel from '@/components/ErrorPanel.vue'
import _ from 'lodash'

const getCharacter = apiEndpoints.getCharacter

export default {
  components: {
    LoadingSpinner,
    ErrorPanel
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
        profileAvatar.classList.add('opacity-0')
      } else {
        this.showStickyHeader = false
        profileAvatar.classList.remove('opacity-0')
      }
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
