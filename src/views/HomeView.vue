<template>
  <div class="w-full pt-8">
    <h1 class="font-millik text-2xl sm:text-3xl">Characters</h1>

    <CustomInput hasIcon v-model="text" :attr="attr" class="mt-3">
      <template #icon>
        <SearchIcon />
      </template>
    </CustomInput>

    <ErrorPanel v-if="currentView === status.ERROR" class="mt-20" @onRetry="fetchAllCharacters" />

    <div v-else-if="currentView === status.SUCCESS" class="mt-12 w-full">
      <div class="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-4 gap-5">
        <CharacterCard
          v-for="character in characters"
          :key="character.id"
          :name="character.name"
          :imageUrl="character.img ? character.img.split('.png')[0] + '.png' : ''"
          :id="character.id"
        />
      </div>

      <div class="mt-12 flex justify-end">
        <vue-awesome-paginate
          :total-items="pageInfo.pages"
          :items-per-page="1"
          :max-pages-shown="1"
          v-model="page"
          prevButtonContent="Prev"
          nextButtonContent="Next"
        />
      </div>
    </div>

    <LoadingSpinner v-else />
  </div>
</template>

<script>
import api from '@/lib/api'
import apiEndpoints from '@/lib/apiEndpoints'
import { VIEW_STATUS } from '@/utils/enums'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ErrorPanel from '@/components/ErrorPanel.vue'
import CharacterCard from '@/components/CharacterCard.vue'
import CustomInput from '@/components/CustomInput.vue'
import SearchIcon from '../assets/icons/search-icon.svg?component'

const getAllCharacters = apiEndpoints.getAllCharacters

export default {
  components: {
    LoadingSpinner,
    ErrorPanel,
    CharacterCard,
    CustomInput,
    SearchIcon
  },

  data() {
    return {
      characters: [],
      status: VIEW_STATUS,
      currentView: VIEW_STATUS.LOADING,
      page: 1,
      pageInfo: {},
      text: '',
      attr: {
        type: 'text',
        placeholder: 'Search...',
        id: 'search-character'
      }
    }
  },

  methods: {
    async fetchAllCharacters() {
      this.currentView = VIEW_STATUS.LOADING
      try {
        const response = await api.get(getAllCharacters, {
          params: {
            page: this.page
          }
        })
        const { status, data } = response || {}
        if (status === 200) {
          this.characters = data.results
          this.pageInfo = data.info
          this.currentView = VIEW_STATUS.SUCCESS
        }
      } catch (err) {
        this.currentView = VIEW_STATUS.ERROR
      }
    }
  },

  beforeMount() {
    this.fetchAllCharacters()
  },

  watch: {
    page(newPage, oldPage) {
      if (newPage !== oldPage) {
        this.fetchAllCharacters()
      }
    }
  }
}
</script>

<style lang="scss">
.pagination-container {
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px !important;
  row-gap: 4px;
  justify-content: flex-end;

  @media (max-width: 600px) {
    column-gap: 4px !important;
  }
}

.paginate-buttons {
  height: 32px !important;
  width: fit-content !important;
  min-width: 57px;
  padding: 10px;
  border-radius: 4px !important;
  cursor: pointer;
  background-color: #21262d;
  border: 1px solid #30363db3;
  color: #848d97 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.paginate-buttons:hover {
  background-color: #21262d;
}

.number-buttons,
.last-button,
.first-button,
.starting-breakpoint-button,
.ending-breakpoint-button {
  min-width: unset;
  width: 44px !important;
}

.active-page {
  background-color: #17394f;
  border: 1px solid #21638e;
  color: white;
}

.active-page:hover {
  background-color: #17394f;
}
</style>
