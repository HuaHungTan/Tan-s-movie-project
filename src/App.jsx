import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Banner from './components/Banner'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import MovieSearch from './components/MovieSearch'

function App() {
  const [movie, setMovie]=useState([]); //phim mới
  const [movieTop, setMovieTop]=useState([]); //phim đề cử
  const [movieSearch, setMovieSearch]=useState([]);  //tìm kiếm phim

  const handleSearch = async(searchValue) =>{
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=vi&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    const fetchMovie = async ()=>{
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };

      const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1';
      const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1';

      const response1 =  await fetch(url1,options);
      const data1 = await response1.json();
      setMovie(data1.results);

      const response2 =  await fetch(url2,options);
      const data2 = await response2.json();
      setMovieTop(data2.results);
    }
    fetchMovie();
  },[])

  return (
    <>
      <div className='bg-gray-900 pb-2'>
        <Header onSearch={handleSearch}/>
        <Banner/>
        {movieSearch.length > 0 ? <MovieSearch title={"KẾT QUẢ TÌM KIẾM"} data={movieSearch}></MovieSearch> : (
          <>
          <MovieList title={"PHIM MỚI"} data={movie} />
          <MovieList title={"PHIM ĐỀ CỬ"} data={movieTop} />
          </>
        )}
        <Footer/>
      </div>
    </>
  )
}

export default App
