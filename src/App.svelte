<script lang="ts">
  import '__/css/global.scss';
  import LockScreen from './views/LockScreen.svelte';
</script>

<svelte:head>
  <title>Android 12 Web in Svelte</title>
</svelte:head>

<main class="container">
  <LockScreen />
</main>

<style lang="scss">
  .container {
    height: 100%;
    aspect-ratio: 3.5 / 6;

    background-image: url(/lockscreen.jpg);
    background-size: cover;
    background-position: center center;
  }
</style>
