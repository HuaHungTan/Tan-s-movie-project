import { useState } from "react"
import propTypes from "prop-types"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
//import ImgItem from "../assets/yourname.jpg"
import Modal from 'react-modal'
import YouTube from "react-youtube"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay:{
    position: "fixed",
    zIndex: 9999,
  }
};

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    
    autoplay: 1,
  },
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const MovieList = ({title,data}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trailerUrl, setTrailerUrl]=useState("");
  const trailer = async(id) =>{
    setTrailerUrl("")
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      setTrailerUrl(data.results[0].key);
      setModalIsOpen(true)
    } catch (error) {
        setModalIsOpen(false)
        console.log(error)
    }
  }
  return (
    <div className="text-white p-10 mb-10">
        <h2 className="uppercase text-3xl font-bold">{title}</h2>
        <br></br>
        <Carousel responsive={responsive} className="flex items-center space-x-4">
          {data && data.length >0 && data.map((item)=>(
          <div key={item.id} className="w-[200px] h-[350px]" >
            <div className="w-[200px] h-[300px] relative group" 
                 onClick={()=>trailer(item.id)}>
              <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}   
                    alt={item.title}
                    className="w-[90%] h-[90%] object-cover group-hover:scale-110"></img>   
            </div>
            <div className="absolute bottom-0 left-4">
              <p>{item.title || item.original_title}</p>
            </div>
          </div>            
          ))}
        </Carousel>
        <Modal  isOpen={modalIsOpen}
                onRequestClose={()=>setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal">
          <YouTube videoId={trailerUrl} opts={opts}/>

        </Modal>
        {/*<div className="flex items-center space-x-2">
          {data.length >0 && data.map((item)=>(
          <div key={item.id} className="w-[200px] h-[300px] relative group">
              <div className="absolute top-0 left-0 w-full h-full bg-red opacity-25"></div>
              <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}   
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110"></img>
              <p className="flex justify-center text-md text-white">
                  {item.title || item.original_title}
              </p>       
          </div>
          ))}
        </div>*/}
    </div>
  )
}
MovieList.propTypes={
    title: propTypes.string,
    data: propTypes.array
}
export default MovieList