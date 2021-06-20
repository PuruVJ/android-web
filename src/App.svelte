<script lang="ts">
  import '__/css/global.scss';
  import LockScreen from './views/LockScreen.svelte';
</script>

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

  @media screen and (max-width: 600px) {
    .container {
      width: 100%;
      aspect-ratio: unset;
    }
  }
</style>
