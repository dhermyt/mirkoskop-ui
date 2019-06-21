<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-field md-clearable>
          <label>Wybierz tag</label>
          <md-input v-model="selectedTag"></md-input>
        </md-field>
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

<style lang="css"></style>
