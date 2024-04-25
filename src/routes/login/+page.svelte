<script>
  import { enhance } from "$app/forms";

  export let form;
</script>

<main class="container max-auto">
  {#if form}
    {#if !form?.status}
      <div>{form?.error}</div>
    {:else}
      <div>brawo sie zalogowales</div>
    {/if}
  {:else}
    <form
      use:enhance
      action="?/login"
      method="post"
      class="max-w-md mx-auto my-16 space-y-4 form"
    >
      <label for="username" class="">
        <span class="text-right sr-only">Użytkownik</span>
        <input
          type="text"
          name="username"
          required
          class="form-input"
          placeholder="Nazwa użytkwonika"
        />
      </label>
      <label for="password" class="">
        <span class="sr-only">Hasło</span>
        <input
          type="password"
          name="password"
          required
          class="form-input"
          placeholder="Hasło"
        />
      </label>

      <button
        type="submit"
        class="px-6 py-3 font-bold text-white uppercase rounded-full bg-primary-500"
      >
        Zaloguj
      </button>
      <button type="reset">Reset</button>
    </form>
  {/if}
</main>

<!-- Przykładowy komentaz -->
