<template>
    <div class="terminal" ref="terminal">
      <TerminalText v-for="message in this.messages" :msg="message" :key="message" />
      <focus-trap :initial-focus="() => $refs.input" :allow-outside-click="(e) => (e.target.tagName === 'A')">
        <form @submit.prevent="updateMessages(inputValue)">
          <p>>&nbsp;</p><input type="text" class="terminal-input" v-model="inputValue" ref="input" autofocus>
        </form>
      </focus-trap>
    </div>
</template>

<script>
import TerminalText from './TerminalText.vue'
import { nextTick } from 'vue'

export default {
  name: 'MainTerminal',
  components: {
    TerminalText
  },
  data() {
    return {
      inputValue: "",
    }
  },
  props: {
    messages: Array
  },
  watch: {
    messages: {
      handler: function () {
        this.$nextTick(this.scrollDown());
        this.inputValue = "";
      },
      deep: true,
    }
  },
  methods: {
    scrollDown: function () {
      var terminal = this.$refs.terminal;
      terminal.scrollTop = terminal.scrollHeight;
    },
    updateMessages: function (message) {
      this.$emit('update-messages', message)
    },
    focusInput: async function () {
      await nextTick()
      this.$refs.input.focus();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.terminal {
  box-sizing: border-box;
  width: 750px;
  height: 500px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(30, 30, 30, 0.8);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow-y: auto;
  padding-top: 10px;
  padding-bottom: 20px;
}

.terminal-input {
  width: calc(100% - 30px);
  background: none;
  border: none;
  color: white;
  font-family: monospace;
  font-size: 0.9rem;
  caret-color: white;
}

.terminal-input:focus {
  border: none;
  outline: none;
}

form {
  display: flex;
  padding-inline: 15px;
  color: white;
  font-family: monospace;
  margin: 0;
}

p {
  margin: 0;
  padding: 0;
}

</style>