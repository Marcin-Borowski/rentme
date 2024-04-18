<script>
  import Car from "$lib/Car.svelte";
  import { APP_NAME } from "./constants";
  import { LightSwitch } from "@skeletonlabs/skeleton";
</script>

<header class="text-gray-600 shadow-md body-font">
  <div
    class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row"
  >
    <a
      href="/"
      class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
    >
      <Car class="h-16" />
      <span class="ml-3 text-3xl">{APP_NAME}</span>
    </a>
    <nav
      class="flex flex-wrap items-center justify-center text-base md:ml-auto"
    >
      <a href="/rental/" class="mr-5 hover:text-gray-900">Wypożyczalnia</a>
      <a href="/offer/" class="mr-5 hover:text-gray-900">Oferta</a>
      <a href="/packages/" class="mr-5 hover:text-gray-900">Pakiety</a>
      <a href="/contact/" class="mr-5 hover:text-gray-900">Kontakt</a>
      <a href="/login/" class="mr-5 hover:text-gray-900">Zaloguj</a>
      <a href="/register/" class="mr-5 hover:text-gray-900">Zarejestruj</a>
    </nav>

    <LightSwitch />
  </div>
</header>
