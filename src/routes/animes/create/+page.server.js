import db from "$lib/db.js"

export const actions = {
    create: async ({ request }) => {
        
        const data = await request.formData()

        let anime = {
            name: data.get("name"),
            jahr: data.get("year"),
            folgen: data.get("folgen"),
            hauptcharakter: data.get("main_character"),
            poster: "/img/"+data.get("dateiname")+".jpg",
            watchlist: false
        }
        await db.createMovie(anime)
        return { success: true };
    }
}