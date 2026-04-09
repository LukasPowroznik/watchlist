<script>
    import { enhance } from "$app/forms";

    let { anime } = $props();
</script>

<div>
    <div class="card" style="width: 18rem;">
        <img
            src={anime.poster}
            class="card-img-top"
            alt="Poster von {anime.name}"
        />

        <div class="card-body d-flex flex-column align-items-center">
            <a
                href={"/animes/" + anime._id}
                class="text-decoration-none text-dark fw-bold mb-3"
            >
                {anime.name}
            </a>

            <div class="w-100 d-flex justify-content-center">
                {#if anime.watchlist === true}
                    <form
                        method="POST"
                        action="?/removeFromWatchList"
                        use:enhance
                    >
                        <input type="hidden" name="id" value={anime._id} />
                        <button class="btn btn-danger"
                            >Remove from Watchlist</button
                        >
                    </form>
                {:else}
                    <form method="POST" action="?/addToWatchList" use:enhance>
                        <input type="hidden" name="id" value={anime._id} />
                        <button class="btn btn-success">Add to Watchlist</button
                        >
                    </form>
                {/if}
            </div>
        </div>
    </div>
</div>
