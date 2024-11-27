import propTypes from "prop-types"
import { useState } from "react";

const Header =({onSearch}) =>{
    const [text,setText]=useState('')
    return  <div className="p-4 bg-gray-800 flex items-center justify-between">
        <div className="flex items-center space-x-4">
            <h1 className="text-[40px] uppercase font-bold text-red-700">MyMovie</h1>
            <nav className="flex items-center space-x-4">
                {/*<a href="#" className="text-white">Thể loại</a>
                <a href="#" className="text-white">Năm</a>
                <a href="#" className="text-white">Quốc gia</a>*/}
                <ul className="flex items-center space-x-4">
                    <li className="text-white font-bold">Thể loại</li>
                    <li className="text-white font-bold">Năm phát hành</li>
                    <li className="text-white font-bold">Quốc gia
                        <ul className="hidden hover:show">
                            <li>Âu-Mỹ</li>
                            <li>Hàn Quốc</li>
                            <li>Nhật Bản</li>
                            <li>Trung Quốc</li>
                            <li>Việt Nam</li>
                            <li>Khác</li>
                        </ul>    
                    </li>
                </ul>
            </nav>
        </div>
        <div className="flex items-center space-x-2">
            <input type="text" placeholder="Tìm kiếm" className="p-2 text-black w-[500px]" onChange={(e)=>setText(e.target.value)} value={text}></input>
            <button className="p-2 text-white bg-red-700 font-bold rounded-md"
                    onClick={()=>onSearch(text)}>
                Tìm kiếm
            </button>
        </div>
        <div ><button className="text-white bg-blue-500 p-2 rounded-md font-bold">Đăng nhập</button></div>
    </div>;   
};

Header.propTypes ={
    onSearch: propTypes.func
};
export default Header;

/*export const Header = () => {
    return (
      <div>Header</div>
    )
  }*/
/*function Header(){
    return(
        <div>Header</div>
    )
}*/