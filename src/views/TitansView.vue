<template>
  <div class="w-full pt-8 px-4">
    <h1 class="font-millik text-2xl sm:text-3xl">Titans</h1>

    <error-panel v-if="currentView === status.ERROR" @onRetry="fetchAllTitans" />

    <div v-else-if="currentView === status.SUCCESS" class="mt-8 w-full">
      <div v-if="titansData.results && titansData.results.length > 0" class="w-full">
        <div
          class="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-3 gap-5"
        >
          <character-card
            v-for="titan in titansData.results"
            :key="titan.id"
            :name="titan.name"
            :imageUrl="titan.img ? titan.img.split('.png')[0] + '.png' : ''"
            @onClick="goToTitan(titan.id)"
          />
        </div>
      </div>

      <div v-else>
        <p class="text-center text-lg text-muted">No titan found</p>
      </div>
    </div>

    <loading-spinner v-else />
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'
import api from '@/lib/api'
import apiEndpoints from '@/lib/apiEndpoints'
import { VIEW_STATUS } from '@/utils/enums'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ErrorPanel from '@/components/ErrorPanel.vue'

const getAllTitans = apiEndpoints.getAllTitans

export default {
  components: {
    CharacterCard,
    LoadingSpinner,
    ErrorPanel
  },

  data() {
    return {
      titansData: {},
      status: VIEW_STATUS,
      currentView: VIEW_STATUS.LOADING
    }
  },

  methods: {
    async fetchAllTitans() {
      this.currentView = VIEW_STATUS.LOADING
      try {
        const response = await api.get(getAllTitans)
        const { status, data } = response || {}
        if (status === 200) {
          this.titansData = data
          this.currentView = VIEW_STATUS.SUCCESS
        }
      } catch (err) {
        this.currentView = VIEW_STATUS.ERROR
      }
    },

    goToTitan(id) {
      this.$router.push(`/titan/${id}`)
    }
  },

  created() {
    this.fetchAllTitans()
  }
}
</script>

<style lang="scss" scoped></style>
