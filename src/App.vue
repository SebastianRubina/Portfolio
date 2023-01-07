<template>
  <h1 class="name-title">Sebastian Rubina</h1>
  <TerminalBar class="terminal-bar" />
  <MainTerminal :messages="this.messages" @update-messages="updateMessages" />
  <FooterElement class="footer" />
</template>

<script>
import MainTerminal from './components/MainTerminal.vue'
import TerminalBar from './components/TerminalBar.vue'
import FooterElement from './components/FooterElement.vue'

export default {
  name: 'App',
  components: {
    MainTerminal,
    TerminalBar,
    FooterElement
  },
  data() {
    return {
      messages: [''],
      introMessages: [
        'Welcome to my portfolio :)',
        'The commands available are:',
        '\u00A0\u00A0cat about - shows about information.',
        '\u00A0\u00A0cat contact - shows contact information.',
        '\u00A0\u00A0ls projects - lists projects.',
        '\u00A0\u00A0clear - clears terminal and shows this manual.'
      ]
    }
  },
  methods: {
    updateMessages(message) {
      this.messages.push("> " + message);
      if (message.toLowerCase() === "clear") {
        this.$data.messages = Array.from(this.$data.introMessages);
      } else if (message.toLowerCase() == "cat about") {
        // temp
      } else if (message.toLowerCase() == "cat contact") {
        // temp / maybe send an email? accept an email address as a parameter
      } else if (message.toLowerCase() == "ls projects") {
        // temp
      } else {
        this.messages.push(`Command not found: ${message}`)
      }
    }
  },
  mounted: function () {
    this.$data.messages = Array.from(this.$data.introMessages);
  }
}


</script>

<style>
body {
  background-color: #88AED0;
  /* #f6f6f6; */
  font-size: 0.9rem;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  font-family: monospace;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 750px;
}
.name-title {
  position: fixed;
  top: 30px;
  font-size: 2.5rem;
  font-family: monospace;
}

@media screen and (max-width: 800px) {
  * {
    font-size: 18px;
  }
  .terminal {
    max-width: 90%;
  }
  .terminal-bar {
    max-width: 90%;
  }
  .bar-info p {
    font-size: 10px;
  }
  .name-title {
    display: none;
  }
  .footer {
    max-width: 90%;
  }
  .footer a {
    font-size: 12px;
  }
}
</style>
