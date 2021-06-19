<script lang="ts">
  import { time } from '__/stores/time.store';

  const format = (n: number) => `0${n}`.slice(-2);

  $: [hour1, hour2] = format($time.getHours() % 12).split('');
  $: [minutes1, minutes2] = format($time.getMinutes()).split('');
</script>

<main>
  <section class="clock">
    <h1>
      <span>{hour1}</span>
      <span>{hour2}</span>
      <span>{minutes1}</span>
      <span>{minutes2}</span>
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
    text-align: center;

    user-select: none;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .clock {
    height: 100%;
    width: 100%;

    display: grid;
    place-items: center;
  }
</style>
