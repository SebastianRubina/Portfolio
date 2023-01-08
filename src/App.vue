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
import projectsJson from '@/data/projects.json'

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
      projects: projectsJson.projects,
      introMessages: [
        'Welcome to my portfolio :)',
        'The commands available are:',
        '\u00A0\u00A0<em>cat about</em> - shows about information.',
        '\u00A0\u00A0<em>cat contact</em> - shows contact information.',
        '\u00A0\u00A0<em>ls projects</em> - lists projects.',
        '\u00A0\u00A0<em>clear</em> - clears terminal and shows this manual.',
      ]
    }
  },
  methods: {
    updateMessages(message) {
      if (message) {
        this.messages.push("> " + message);
        if (message.toLowerCase() === "clear") {
          this.$data.messages = Array.from(this.$data.introMessages);
          window.scrollTo(0, 0);
        } else if (message.toLowerCase() == "cat about") {
          this.getAboutMessages();
        } else if (message.toLowerCase() == "cat contact") {
          this.getContactMessages(); // maybe send an email? accept an email address as a parameter
        } else if (message.toLowerCase() == "ls projects") {
          this.getProjectMessages();
        } else {
          this.messages.push(`Command not found: ${message}`)
        }
      }
    },
    getAboutMessages() {
      this.messages.push(
        "<br>",
        "========= ABOUT ME =========",
        "<br>",
        "I'm Sebas, a passionate Software Developer and Airline Pilot who loves new adventures.<br><br>",
        "I am currently a student at Seneca College enrolled in the Computer Programming and Analysis Advanced Diploma program.<br><br>",
        "The idea of being able to create a website for any project I might want to make feels like a superpower to me, and that is what <strong>motivates me to be constantly learning new technologies</strong>.<br><br>",
        "The topics that I find the most intriguing in Software Development are <strong>full stack web development</strong> and <strong>cloud computing</strong>.<br><br>",
        "Aside from programming, my passions include <strong>airplanes</strong> and <strong>cars</strong>. I have been a long-time fan of Formula 1 and the Dakar Rally.<br><br>",
        "<strong><u>What sets me aside?<u></strong><br><br>",
        "I am constantly learning new technologies on my free time, which allow me to improve my skills and build more projects of my own.<br><br>",
        "I believe in <em>commitment</em> and <em>hard work</em>, and is by sticking to these principles that I am planning to grow personally and profesionally.<br><br>",
        "============================<br><br>",
      )
    },
    getContactMessages() {
      this.messages.push(
        "<br>",
        "======= CONTACT INFO =======",
        "<br>",
        "Let's Talk!<br>",
        "<strong>Email: </strong><a href='mailto:sebastian.rubina@icloud.com' style='font-weight: bold;color: #88AED0;'>sebastian.rubina@icloud.com</a>",
        "<strong>Phone: </strong>+1 (437)983-751",
        "<br>",
        "============================<br><br>",
      )
    },
    getProjectMessages() {
      this.messages.push(
        "<br>",
        "========= PROJECTS =========",
        "<br>",
        "Showing " + this.projects.length + " main projects:",
        "<br>"
      )
      for (let _project of this.projects) {
        let stack = "";
        for (let item of _project.stack) {
          stack += `<li>${item}</li>`
        }
        this.messages.push(
          "<strong>--- Project " + _project.id + " --------------</strong>",
          "<br>",
          "<strong>" + _project.name + "</strong>",
          "<br>",
          _project.description,
          "<br>",
          `Built with: <ul style="list-style-type: '- ';">${stack}</ul>`,
          "<br>",
          "Links: " + "<a style='font-weight:bold; color: #88AED0;' target='_blank' href='" + _project.url + "'>PREVIEW</a> " + "<a style='font-weight:bold; color: #88AED0;' target='_blank' href='" + _project.github + "'>GITHUB</a>",
          "<br><br>"
        )
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
