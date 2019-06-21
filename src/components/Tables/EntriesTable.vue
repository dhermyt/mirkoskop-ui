<template>
  <div>
    <md-table v-model="currentEntries">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell
          ><pre>{{ item.body }}</pre>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "entries-table",
  computed: {
    currentEntries: {
      get() {
        return (this.$store.state.currentReport || {}).most_upvoted || {};
      }
    }
  }
};
</script>

<style scoped>
pre {
  text-align: left;
  white-space: pre-line;
}
</style>
