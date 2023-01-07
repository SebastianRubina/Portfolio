<template>
  <div class="terminal-text">
    <p>{{ msg }}</p>
  </div>
</template>

<script>

export default {
  name: 'TerminalText',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin-block: 0.05rem;
}

.terminal-text {
  color: white;
  padding-inline: 15px;
}
</style>
