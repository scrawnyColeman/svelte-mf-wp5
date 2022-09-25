<script>
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  Click count: {count}
</button>

<style>
  button {
    padding: 0.5rem;
    border-radius: 0.375rem;
    background-color: #83ffc6;
    color: #17111c;
    font-weight: 600;
  }
  button:hover {
    opacity: 75%;
  }
</style>
