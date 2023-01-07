<template>
  <div class="footer-element">

    <div class="links">
      <a href="https://srubinasanchez2938220712.blob.core.windows.net/files/SRubinaCV.pdf" target="_blank">RESUME</a>
      <a href="https://github.com/SebastianRubina" target=”_blank”>GITHUB</a>
      <a href="https://www.linkedin.com/in/sebastian-rubina-22bb41128/" target=”_blank”>LINKEDIN</a>
      <a href="mailto:sebastian.rubina@icloud.com" target=”_blank”>EMAIL ME</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterElement',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-element {
  border-top: dashed black;
  color: black;
  padding-block: 1rem;
}

.links {
  display: flex;
  justify-content: space-around;
}

a {
  color: black;
  text-decoration: none;
}
a:visited {
  text-decoration: underline;
}
</style>
