import db from "$lib/db.js"

export async function load(){
    return {
        animes: await db.getMovies()
    }
}
export const actions = {
    addToWatchList: async ({request}) =>{
        
        const data = await request.formData();
        let id = data.get("id")

        let anime = {
            _id: id,
            watchlist: true
        }
        await db.updateMovie(anime)
    },
    removeFromWatchList: async ({request}) =>{
        
        const data = await request.formData();
        let id = data.get("id")

        let anime = {
            _id: id,
            watchlist: false
        }
        await db.updateMovie(anime)

    }
}