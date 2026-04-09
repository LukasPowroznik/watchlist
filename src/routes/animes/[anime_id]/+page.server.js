import db from "$lib/db.js"

export async function load({ params }) {
    
    return {
        anime: await db.getMovie(params.anime_id)
    }
}