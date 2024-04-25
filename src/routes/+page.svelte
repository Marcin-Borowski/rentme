<script>
  import CarTeaser from "$lib/CarTeaser.svelte";

  export let data;
  const { cars } = data;
</script>

<main class="container mx-auto">
  <section class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
    {#each cars as item}
      <CarTeaser
        id={item.id}
        img={item.image}
        year={item.year}
        price={item.price}
        model={item.model}
        brand={item.model.brand}
      />
    {/each}
  </section>
</main>
