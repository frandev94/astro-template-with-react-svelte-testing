<script>
  export let onIncrement = () => {};
  export let onDecrement = () => {};
  let count = 0;

  const handleIncrement = () => {
    onIncrement();
    count += 1;
  };

  const handleDecrement = () => {
    onDecrement();
    count -= 1;
  };
</script>

<div>
  <button class="btn btn-lg btn-dark px-4" on:click={handleDecrement}>-</button>
  <span class="fs-1 mx-5">{count}</span>
  <button class="btn btn-lg btn-dark px-4" on:click={handleIncrement}>+</button>
</div>

<style>
  div {
    display: flex;
    align-items: center;
  }

  button {
    margin: 0 10px;
    padding: 10px;
    font-size: 1.5rem;
  }

  span {
    font-size: 1.5rem;
    width: 2rem;
    text-align: center;
  }
</style>
