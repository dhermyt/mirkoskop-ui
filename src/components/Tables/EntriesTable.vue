<template>
  <div>
    <ul>
      <li v-for="item in currentEntries" v-bind:key="item.id">
        <div class="entry-header">
          <div class="author-cell">
            <img
              v-bind:src="item.authorAvatar"
              style="max-width: 32px"
              alt="avatar"
            />
            <a
              v-bind:href="'https://www.wykop.pl/ludzie/' + item.authorLogin"
              target="_blank"
              style="margin-left: 10px"
              ><span style="font-weight: bold">{{ item.authorLogin }}</span></a
            >
            <a
              v-bind:href="'https://www.wykop.pl/wpis/' + item.id"
              target="_blank"
              style="margin-left: 10px"
              >{{ item.date }}</a
            >
          </div>
          <span id="votes-counter">+{{ item.voteCount }}</span>
        </div>
        <div class="entry-content">
          <pre v-html="item.body"></pre>
          <div v-if="item.embedType === 'image'">
            <a v-bind:href="item.embedUrl" target="_blank">
              <img v-bind:src="item.embedUrl" alt="img" class="entry-embed" />
            </a>
          </div>
        </div>
        <md-divider></md-divider>
      </li>
    </ul>
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

.entry-header {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.entry-content {
  margin-bottom: 20px;
}

.entry-embed {
  width: 50%;
  margin-top: 10px;
}

#votes-counter {
  color: green;
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
