import React from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "./utils/constants";

function App() {
  const navigate = useNavigate();

  const handleMovePage = (page: string) => {
    navigate(`${page}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <button
          className="mx-4 h-[120px] w-[120px] bg-black text-white hover:bg-zinc-700 sm:h-[160px] sm:w-[160px] rounded-[20px]"
          onClick={() => handleMovePage(PATH.signIn)}
        >
          signIn
        </button>
        <button
          className="mx-4 h-[120px] w-[120px] bg-black text-white hover:bg-zinc-700 sm:h-[160px] sm:w-[160px] rounded-[20px]"
          onClick={() => handleMovePage(PATH.signUp)}
        >
          signUp
        </button>
        <button
          className="mx-4 h-[120px] w-[120px] bg-black text-white hover:bg-zinc-700 sm:h-[160px] sm:w-[160px] rounded-[20px]"
          onClick={() => handleMovePage(PATH.board)}
        >
          Board
        </button>
      </div>
    </div>
  );
}

export default App;
