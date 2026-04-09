<script>
    let { form } = $props();
</script>


<h1 class="text-center mb-5">Anime hinzufügen</h1>

<a href="/animes" class="btn btn-primary mb-3">Zurück</a>

<form method="POST" action="?/create">
    <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input name="name" class="form-control" type="text" />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Erscheinungsjahr</label>
        <input name="year" class="form-control" type="text" />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Anzahl Folgen</label>
        <input name="folgen" class="form-control" type="text" />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Hauptcharakter</label>
        <input name="main_character" class="form-control" type="text" />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Dateiname</label>
        <input name="dateiname" class="form-control" type="text" />
    </div>
    <button type="submit" class="btn btn-primary"> Anime hinzufügen </button>
</form>

{#if form?.success}
    <p>Anime erfasst, bitte lade das Cover hoch</p>
{/if}

