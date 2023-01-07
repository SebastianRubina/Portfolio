<template>
  <h1 class="name-title">Sebastian Rubina</h1>
  <h2 class="description">Full Stack Developer</h2>
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
        '\u00A0\u00A0<em>cat about</em> - shows about information.',
        '\u00A0\u00A0<em>cat contact</em> - shows <a href="#" style="color:#88AED0;font-weight:bold;">contact</a> information.',
        '\u00A0\u00A0<em>ls projects</em> - lists projects.',
        '\u00A0\u00A0<em>clear</em> - clears terminal and shows this manual.',
        '<em><strong>Note:</strong> Work in Progress, some commands may not be implemented yet (2023/01/07)</em>'
      ]
    }
  },
  methods: {
    updateMessages(message) {
      if (message) {
        this.messages.push("> " + message);
        if (message.toLowerCase() === "clear") {
          this.$data.messages = Array.from(this.$data.introMessages);
        } else if (message.toLowerCase() == "cat about") {
          this.messages.push("Command yet to be implemented: " + message);
        } else if (message.toLowerCase() == "cat contact") {
          this.messages.push("Command yet to be implemented: " + message); // maybe send an email? accept an email address as a parameter
        } else if (message.toLowerCase() == "ls projects") {
          this.messages.push("Command yet to be implemented: " + message);
        } else {
          this.messages.push(`Command not found: ${message}`)
        }
      }
      window.scrollTo(0, 0);
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

.description {
  position: fixed;
  top: 90px;
  margin-block: 1rem;
  font-family: monospace;
  font-size: 1.5rem;
  padding: 0;
}

@media screen and (max-width: 800px) {
  * {
    font-size: 18px;
  }

  #app {
    justify-content: flex-start;
  }

  .terminal {
    max-width: 90%;
    max-height: 70%;
  }

  .terminal-bar {
    max-width: 90%;
    margin-top: 10%;
  }

  .bar-info p {
    font-size: 10px;
  }

  .name-title,
  .description {
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
