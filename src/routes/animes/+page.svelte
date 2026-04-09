<script>
    import AnimeData from "$lib/ainmedata/AnimeData.svelte";

    let { data } = $props();

    let filterByWachtlist = $state(false);
</script>

<h1 class="text-center mb-5">Willkommen zur Anime-Watchlist!</h1>
<a href="/animes/create" class="btn btn-primary mb-3">Anime hinzufügen</a>
<div class="form-check">
    <input
        bind:checked={filterByWachtlist}
        class="form-check-input"
        type="checkbox"
        value=""
        id="checkDefault"
    />
    <label class="form-check-label" for="checkDefault">
        Nur Wachtlist Animes anzeigen
    </label>
</div>

<div class="row g-4">
    {#each data.animes as anime}
        {#if !filterByWachtlist || anime.watchlist && filterByWachtlist}
            <div class="col-sm-6">
                <AnimeData {anime}></AnimeData>
            </div>
        {/if}
    {/each}
</div>

<style>
    h1 {
        margin-bottom: 10%;
    }
</style>
