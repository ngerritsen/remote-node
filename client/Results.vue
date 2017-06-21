<template>
    <div>
        <h2 class="title">Results</h2>
        <pre class="results" :class="{ 'results--error': error }">{{ results }}</pre>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: mapState({
        results: 'results',
        error: 'error'
    })
};
</script>

<style scoped>
.title {
    color: #ccc;
    font-size: 2.1rem;
    margin: 3rem 0 0;
    padding: 0 1.4rem;
}

.results {
    display: block;
    padding: 2.1rem;
    margin: 1.4rem 0 0;
    background-color: #222;
    font-family: Inconsolata, monospace;
    font-size: 1.6rem;
}

.results--error {
    color: #f00;
}
</style>
