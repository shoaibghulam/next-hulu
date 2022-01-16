const API_KEY = process.env.API_KEY
export default {
    fetchTrending:{
        title:'Trending',
        url:`trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchAnimation:{
        title:'Animation',
        url:`discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchComedy:{
        title:'Comedy',
        url:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchDocumentary:{
        title:'Documentary',
        url:`discover/movie?api_key=${API_KEY}&with_genres=99`,
    },
    fetchDrama:{
        title:'Drama',
        url:`discover/movie?api_key=${API_KEY}&with_genres=18`,
    },
    fetchMystery:{
        title:'Mystery',
        url:`discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchScifi:{
        title:'Sci-Fi & Fantasy',
        url:`discover/movie?api_key=${API_KEY}&with_genres=10765`,
    },
    fetchCrime:{
        title:'Crime',
        url:`discover/movie?api_key=${API_KEY}&with_genres=80`,
    },
    
}