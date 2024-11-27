import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.png'
import banner4 from '../assets/banner4.png'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner =() => {
  return <div className="p-5">
    <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={5000} infinite={true} className="w-full h-[600px]">
      <img src={banner1} alt="banner1" className="w-full h-full object-contain"></img>
      <img src={banner2} alt="banner2" className="w-full h-full object-contain"></img>
      <img src={banner3} alt="banner3" className="w-full h-full object-contain"></img>
      <img src={banner4} alt="banner3" className="w-full h-full object-contain"></img>
    </Carousel>
  </div>
};

export default Banner;
{/*return <div className="w-full h-[550px] bg-banner bg-center bg-no-repeat bg-cover relative">
    <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30"></div>
    <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
      <div className="text-white bg-red-400 py-1 px-2">TV Show</div>
      <div>Image</div>
    </div>
  </div>*/}
