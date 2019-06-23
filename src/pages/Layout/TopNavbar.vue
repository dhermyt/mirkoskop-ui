<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <span class="md-headline">{{ $route.name }}</span>
      </div>
      <div class="md-toolbar-section-end">
        <div class="md-layout md-medium-size-50 md-xsmall-size-100 md-size-50">
          <div class="field">
            <md-field md-clearable>
              <label>Wybierz tag</label>
              <md-input v-model="selectedTag"></md-input>
            </md-field>
          </div>
        </div>
        <div class="md-layout md-medium-size-50 md-xsmall-size-100 md-size-50">
          <div class="field">
            <md-field>
              <label for="timeframe">Wybierz przedział czasowy</label>
              <md-select
                v-model="selectedTimeframe"
                name="timeframe"
                id="timeframe"
              >
                <md-option value="week">Ostatni tydzień</md-option>
                <md-option value="month">Ostatni miesiąc</md-option>
                <md-option value="year">Ostatni rok</md-option>
                <md-option value="alltime">Od początku</md-option>
              </md-select>
            </md-field>
          </div>
        </div>
        <div>
          <a href="https://github.com/dhermyt/mirkoskop-ui" target="_blank">
            <img
              src="https://image.flaticon.com/icons/svg/25/25231.svg"
              alt="github"
              style="max-width: 32px"
            />
          </a>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  computed: {
    selectedTag: {
      get() {
        return this.$store.state.currentSettings.selectedTag;
      },
      set(tag) {
        this.$store.commit("UPDATE_SELECTED_TAG", tag);
      }
    },
    selectedTimeframe: {
      get() {
        return this.$store.state.currentSettings.selectedTimeframe;
      },
      set(timeframe) {
        this.$store.commit("UPDATE_SELECTED_TIMEFRAME", timeframe);
      }
    }
  }
};
</script>

<style lang="css" scoped>

.field {
  margin: 0 20px;
}
</style>
