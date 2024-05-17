 import axios from "axios";
 
 export const GetTrendingMovies = async (pageNo = 1) => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/movie/day',
        params: { language: "en-US", page: pageNo},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGIxM2ZjYWE4ZDM3N2VmZjdmNmFkNzgyM2VlM2MzZSIsInN1YiI6IjY2MmY0MmU3YzNhYTNmMDEyOWZkY2FiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVYia_v9cn9VvGfG_xFeMkihPp7r_pT80OVLFp2RRA8'
        }
      };
      
    const response = await axios.request(options);
    console.log(response);
    return response?.data.results; 
 }