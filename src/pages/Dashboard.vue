<template>
  <div class="content-container">
    <div class="content" v-if="!isEmptyReport">
      <div class="md-layout">
        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        >
          <stats-card data-background-color="green">
            <template slot="header">
              <md-icon>chat</md-icon>
            </template>

            <template slot="content">
              <p class="category">Liczba wpisów</p>
              <h3 class="title">{{ currentReport.totalEntries }}</h3>
            </template>
          </stats-card>
        </div>
        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        >
          <stats-card data-background-color="orange">
            <template slot="header">
              <md-icon>forum</md-icon>
            </template>

            <template slot="content">
              <p class="category">Liczba komentarzy</p>
              <h3 class="title">{{ currentReport.totalComments }}</h3>
            </template>
          </stats-card>
        </div>
        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        ></div>
        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        ></div>
        <div
          class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        >
          <md-card style="max-width: 1000px">
            <md-card-header data-background-color="blue">
              <h4 class="title">Najlepsze wpisy</h4>
            </md-card-header>
            <md-card-content>
              <nav-tabs-table></nav-tabs-table>
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>
    <div v-if="isEmptyReport" class="error-box">
      <md-card class="md-accent">
        <md-ripple>
          <md-card-header>
            <div class="md-title">Brak danych</div>
          </md-card-header>

          <md-card-content>
            Wystąpił błąd lub nie znaleziono raportu
          </md-card-content>
        </md-ripple>
      </md-card>
    </div>
  </div>
</template>

<script>
import { StatsCard, NavTabsTable } from "@/components";
import _ from "lodash";
import { MirkoskopApiClient } from "../clients/mirkoskopApiClient";

export default {
  components: {
    StatsCard,
    NavTabsTable
  },
  async created() {
    this.client = new MirkoskopApiClient();
    await this.refreshReport();
  },
  mounted() {
    this.$store.watch(
      state => state.currentSettings,
      () => {
        this.refreshReport();
      },
      { deep: true }
    );
  },
  methods: {
    refreshReport: _.debounce(async function() {
      this.currentReport = await this.client.getReport(
        this.$store.state.currentSettings.selectedTag,
        this.$store.state.currentSettings.selectedTimeframe
      );
    }, 500)
  },
  computed: {
    currentReport: {
      get() {
        return this.$store.state.currentReport || {};
      },
      set(report) {
        this.$store.commit("UPDATE_CURRENT_REPORT", report);
      }
    },
    isEmptyReport() {
      return !this.$store.state.currentReport;
    }
  }
};
</script>

<style scoped>
.error-box {
  margin-top: 100px;
  max-width: 30%;
}

.content-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.content {
  width: 100%;
}
</style>
