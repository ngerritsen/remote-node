<template>
    <form @submit="runCode">
        <textarea class="input" @input="updateCode" :value="code"></textarea>
        <button class="submit">Run</button>
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

<style scoped>
.input {
    display: block;
    margin: 2rem 0 0;
    border: none;
    padding: 2.1rem 1.4rem;
    height: 20rem;
    width: 100%;
    background-color: #222;
    font-family: Inconsolata, monospace;
    font-size: 1.6rem;
    color: #fff;
}

.input:focus {
    outline: none;
}

.submit {
    border: 0;
    background-color: #08d;
    font-size: 1.4rem;
    padding: 1.4rem 2.1rem;
    color: #fff;
}

.submit:hover {
    cursor: pointer;
}

.submit:hover,
.submit:focus {
    background-color: #0af;
    outline: none;
}
</style>
