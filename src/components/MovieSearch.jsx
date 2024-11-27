import React from 'react'
import { useState } from "react"
import propTypes from "prop-types"
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

const MovieSearch = ({title,data}) => {
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
      <div className='grid grid-cols-3 gap-3 md:grid-cols-5 lg:grid-cols-7'>
        {data && data.map((item) => (
          <div key={item.id} className="w-[200px] h-[350px]" >
            <div className="w-[200px] h-[300px] relative group"
              onClick={() => trailer(item.id)}
            >
              <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                alt={item.title}
                className="w-[90%] h-[90%] object-cover group-hover:scale-110"></img>
            </div>
            <div className=" bottom-0 left-4">
              <p>{item.title || item.original_title}</p>
            </div>
          </div>
        ))}
      </div>
      <Modal  isOpen={modalIsOpen}
                onRequestClose={()=>setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal">
          <YouTube videoId={trailerUrl} opts={opts}/>
      </Modal>
     
     
      

    </div>
  )
}

MovieSearch.propTypes={
  title: propTypes.string,
  data: propTypes.array
};

export default MovieSearch