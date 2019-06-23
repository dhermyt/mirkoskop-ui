<template>
  <div>
    <md-table v-model="currentEntries">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell class="cell-top"
          ><span style="color: green;">+{{ item.voteCount }}</span>
        </md-table-cell>
        <md-table-cell class="cell-top"
          ><div>
            <pre v-html="item.body"></pre>
            <div v-if="item.embedType === 'image'">
              <a v-bind:href="item.embedUrl" target="_blank">
                <img v-bind:src="item.embedUrl" alt="img" style="width: 30%;" />
              </a>
            </div>
          </div>
        </md-table-cell>
        <md-table-cell class="cell-top"
          ><div class="author-cell">
            <img
              v-bind:src="item.authorAvatar"
              style="max-width: 32px"
              alt="avatar"
            />
            <a
              v-bind:href="'https://www.wykop.pl/ludzie/' + item.authorLogin"
              target="_blank"
              style="margin-left: 5px"
              >{{ item.authorLogin }}</a
            >
          </div>
        </md-table-cell>
        <md-table-cell class="cell-top">
          <a
            v-bind:href="'https://www.wykop.pl/wpis/' + item.id"
            target="_blank"
            >{{ item.date }}</a
          >
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
        return (this.$store.state.currentReport || {}).mostUpvoted || {};
      }
    }
  }
};
</script>

<style scoped>
pre {
  text-align: left;
  white-space: pre-line;
  margin: 0;
}

.cell-top {
  vertical-align: top;
}

a {
  color: black !important;
  text-decoration: none;
  white-space: nowrap; /* no underline */
}
a:hover {
  color: black !important;
}

.author-cell {
  display: flex;
  align-items: flex-start;
}
</style>
