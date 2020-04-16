<script>
  let name = "stranger";

  // this will blow up
  // let foo = undefined;
  // console.log(foo.bar());
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    color: #1616b9;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h2>Hello {name}!</h2>
</main>
