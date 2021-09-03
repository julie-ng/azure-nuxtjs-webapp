<template>
  <div>
    <h1 id="js-title"><a href="https://github.com/julie-ng/azure-nuxtjs-webapp" target="_blank"><span>Hello Azure</span> from Nuxt.js</a></h1>
    <h2 id="js-build-no">Commit {{ $config.commitSha }}</h2>
    <h2>{{ $config.deploymentType }}</h2>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: `Nuxt.js Test (${this.$config.deploymentType})`
    }
  }
}
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}

div {
  max-width: 768px;
  margin: 2em auto;
}

a {
  color: #0178d4;
  text-decoration: none;
}

a:hover,
a:active {
  text-decoration: underline;
}

h2 {
  color: #999;
  font-weight: 400;
}

p {
  margin-top: 4em
}

p a {
  color: #0178d4;
}
</style>