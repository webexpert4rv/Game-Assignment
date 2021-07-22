import React from 'react';
import logo from './logo.svg';
import Game from "./pages/Game";
import Start from "./pages/Start";
import Finished from "./pages/Finished";
import useLogic from "./hooks/useLogic";
import './App.css';

function App() {
  // useLogic hook check which page to show based on game status.
  const game = useLogic();
  return (
    <div className="App">
      {game.status === "created" && <Start handleStart={game.handleStart} />}
      {game.status === "finished" && (
        <Finished name={game.winner} restart={game.handleRestart} />
      )}
      {game.status === "started" && (
        <Game board={game.board} handleClick={game.handleClick} />
      )}
    </div>
  );
}

export default App;
