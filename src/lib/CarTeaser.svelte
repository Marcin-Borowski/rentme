<script>
  export let price;
  export let img;
  export let brand;
  export let model;
  export let year;
  export let id;
</script>

<div class="relative pb-8 bg-white shadow-lg">
  <img
    src={img}
    class="object-cover w-full aspect-video"
    alt={`${brand.name} ${model.name}`}
  />
  <div
    class="absolute z-0 text-xl font-bold text-center text-white top-4 right-4"
  >
    {price} PLN
  </div>
  <div class="text-center">{year}</div>
  <div class="text-center">
    <a href={`/car/brand/${brand.slug}/`}>{brand.name}</a>
    <a href={`/car/model/${model.slug}/`}>{model.name}</a>
  </div>

  <div class="mt-8 text-center">
    <a
      class="px-6 py-3 text-white rounded-full bg-primary-500 hover:shadow-lg"
      href={`/car/${id}/`}>Szczegóły</a
    >
  </div>
</div>
