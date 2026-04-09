<script>
    let { data } = $props();
</script>

<h1 class="text-center mb-5">Anime Details</h1>
<a href="/animes" class="btn btn-primary mb-3">Zurück</a>

<h4>{data.anime.name}</h4>
<div class="row">
    <div class="col-12 col-md-4 mb-3">
        <img src={data.anime.poster} alt="" class="img-fluid rounded" />
    </div>

    <div class="col-12 col-md-8">
        <div><strong>Erscheinungsjahr:</strong> {data.anime.jahr}</div>
        <div><strong>Anzahl Folgen:</strong> {data.anime.folgen}</div>
        <div><strong>Main-Charakter:</strong> {data.anime.hauptcharakter}</div>

        <div class="mt-3">
            <strong>Weitere Charaktere:</strong>
            <ul>
                {#each data.anime.charaktere as charakter}
                    <li>{charakter}</li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<style>
    img {
        object-fit: cover;
    }
</style>
