import { AiOutlineSearch, AiFillBell, AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-[#0F0F0F] text-white">
      <Link to={"/"} className="flex gap-3 items-center text-2xl ">
        <AiFillYoutube className="text-red-500 text-5xl" />
        <h1>Youtube</h1>
      </Link>

      <form className="bg-white gap-3 flex items-center text-black rounded-md">
        <input
          className="px-4 py-1 outline-none rounded-md"
          placeholder="search"
          type="text"
        />
        <button>
          <AiOutlineSearch className="text-xl mr-2" />
        </button>
      </form>

      <AiFillBell className="text-2xl" />
    </header>
  );
};

export default Header;
