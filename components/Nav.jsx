import ReactCountryFlag from "react-country-flag";
import Imagetest from "./Imageop";

const Nav = () => {
  return (
    <div className="nav-bar">
      
      <div><input type="search" placeholder="Search here" className="search-btn" /></div>

      <div><u className="text-xs font-bold text-[color:#5718C3]">OTHER MENUS</u></div>
      
      <div className="flex gap-6 text-[30px]">
      <div className="relative text-[color:#777DF2]"><Imagetest /> <span className="absolute text-[10px] font-bold py-1 px-[6px] text-white bg-[color:#5DCFFF] rounded-[50%] bottom-[15px] left-[10px]">12</span> </div>
      <div className="relative text-[color:#464669]"><Imagetest /> <span className="absolute text-[10px] font-bold py-1 px-[10px] text-white bg-[color:#5DCFFF] rounded-[50%] bottom-[15px] left-[17px]">5</span> </div>
      <div className="relative text-[color:#777DF2]"><Imagetest /> <span className="absolute text-[10px] font-bold py-1 px-[10px] text-white bg-[color:#5DCFFF] rounded-[50%] bottom-[15px] left-[17px]">2</span> </div>
      <div className="relative text-[color:#777DF2]"><Imagetest /> <span className="absolute text-[10px] font-bold py-1 px-[10px] text-white bg-[color:#E328AF] rounded-[50%] bottom-[15px] left-[15px]">!</span> </div>
      </div>
      
      <div className="flex justify-center items-center gap-2 text-center bg-[color:#211a75] px-7 py-3 rounded-3xl">
        <ReactCountryFlag countryCode="IN" svg title="IN" className="flag text-xl" />
        INDIA<Imagetest className="text-[color:#6217BE]" />
      </div>

      

      <div className="flex justify-center items-center gap-2">
        <div className="border mr-5 h-10 border-[color:#464669]"></div>
        <div className="w-[40px] h-[40px] rounded-lg bg-[color:#C4C4C4]"></div>
        <div className="flex flex-col text-xs font-bold">
          <span>Instructor Day</span>
          <span className="text-[color:#5B79EB] text-xs font-semibold">Super Admin</span>
        </div><Imagetest className="text-[color:#6418C3]" />
      </div>

    </div>
  )
}

export default Nav