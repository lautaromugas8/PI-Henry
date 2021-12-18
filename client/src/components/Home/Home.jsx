import * as React from "react";
import { useSelector } from "react-redux";
import GameList from "./GameList";
import "./Home.css";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";

function Home() {
  const { isLoading } = useSelector((state) => state.games);
  return (
    <div>
      <Pagination />
      <Sidebar />
      <div className="home">
        {isLoading ? <div className="loading"></div> : <GameList />}
      </div>
    </div>
  );
}

export default Home;
