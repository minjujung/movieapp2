import axios from "axios";
import Search from "Routes/Search";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "d65f4a42d4c8bec9b2b4ef11ca5713a5",
        language: "en-US"
    }
})

// '/tv/popular'은 절대 경로이므로 api에서 우리가 정의해준
// url, params랑 같이 쓸 수 없음!! 'tv/popular' 상대 경로 사용해야함!!
//api.get("tv/popular");

export const tVApi = {
    topRated: () => api.get("tv/top_rated"),
    airingToday: () => api.get("tv/airing_today"), 
    popular: ()=> api.get("tv/popular"),
    showDetail: id => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: term => api.get("search/tv", {
        params: {
            query: term
        }
    })
};

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upComing: () => api.get("movie/upcoming"),  
    popular: () => api.get("movie/popular"),
    movieDetail: id => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: term => api.get("search/movie", {
        params: {
            query: term
        }
    }),
};

export const collectionApi ={
    collection: id => api.get(`collection/${id}`)
}