<template>
  <div class="terminal-bar">
    <div class="icons">
      <div class="icon icon-red"></div>
      <div class="icon icon-yellow"></div>
      <div class="icon icon-green"></div>
    </div>
    <div class="bar-info">
      <img src="@/assets/images/icons8-mac-folder-48.png" class="folder-icon">
      <p class="terminal-name">Sebastian's Portfolio</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TerminalBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin: 0;
  padding: 0;
}

.terminal-bar {
  display: flex;
  width: 750px;
  align-items: center;
  font-size: 0.9rem;
  height: 1.5rem;
  background-color: rgb(55, 55, 55);
  color: rgb(178, 178, 178);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.bar-info {
  margin: auto;
  display: flex;
  align-items: center;
  gap: 5px;
}
.terminal-name {
  font-weight: bold;
}

.icons {
  display: flex;
  position: absolute;
  gap: 0.4rem;
  margin-left: 15px;
}
.folder-icon {
  width: 1.2rem;
}

.icon {
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
}

.icon-red {
  background-color: rgb(236, 106, 96);
}

.icon-yellow {
  background-color: rgb(245, 191, 79);
}

.icon-green {
  background-color: rgb(97, 197, 84);
}
</style>
