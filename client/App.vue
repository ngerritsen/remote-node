<template>
    <div>
        <h1 class="title">Remote node</h1>
        <code-input></code-input>
        <results></results>
    </div>
</template>

<script>
  import CodeInput from './CodeInput.vue'
  import Results from './Results.vue'

  export default {
    name: 'app',
    components: { CodeInput, Results }
  }
</script>

<style lang="scss">
    @import './variables';

    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        background-color: #333;
        color: $color-white;
        font-family: Roboto, sans-serif;
        font-size: 1.6rem;
    }

    .title {
        font-size: 2.6rem;
        margin: $size-xl 0 0;
        padding: 0 $size-s;
    }
</style>
