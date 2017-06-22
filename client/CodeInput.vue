<template>
    <form @submit="runCode">
        <textarea class="input" @input="updateCode" :value="code"></textarea>
        <button class="submit-button">Run</button>
    </form>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'code-input',
    computed: mapState({ code: 'code' }),
    methods: {
      runCode(e) {
        e.preventDefault();
        this.$store.dispatch('runCode');
      },
      updateCode(e) {
        e.preventDefault();
        this.$store.dispatch('updateCode', e.currentTarget.value);
      }
    }
  };
</script>

<style lang="scss" scoped>
    @import './variables';

    .input {
        display: block;
        margin: $size-m 0 0;
        border: none;
        padding: $size-m $size-s;
        height: 20rem;
        width: 100%;
        background-color: $color-deep-dark;
        font-family: Inconsolata, monospace;
        font-size: 1.6rem;
        color: $color-white;
    }

    .input:focus {
        outline: none;
    }

    .submit-button {
        border: 0;
        background-color: $color-blue;
        font-size: 1.4rem;
        padding: $size-s $size-m;
        color: $color-white;

        &:hover {
            cursor: pointer;
        }

        &:hover,
        &:focus {
            background-color: lighten($color-blue, 5%);
            outline: none;
        }
    }
</style>
