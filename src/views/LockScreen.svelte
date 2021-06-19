<script lang="ts">
  import { time } from '__/stores/time.store';

  const format = (n: number) => `0${n}`.slice(-2);

  let hours = format($time.getHours() % 12);
  let minutes = format($time.getMinutes());
</script>

<main>
  <section class="clock">
    <h1>
      {hours} <br />
      {minutes}
    </h1>
  </section>
</main>

<style lang="scss">
  main {
    height: 100%;
    width: 100%;
  }

  h1 {
    color: var(--app-lockscreen-clock-color);
    font-size: 15rem;
    font-weight: 300;
    line-height: 0.9;

    user-select: none;
  }

  .clock {
    height: 100%;
    width: 100%;

    display: grid;
    place-items: center;
  }
</style>
