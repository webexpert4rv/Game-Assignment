import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react"; 

const baseUrl: string = "http://localhost:6060/"; // change it with your server url

interface ReturnValue {
  board: string[];
  status: string;
  winner: string | null;
  handleClick: (index: number) => void;
  handleRestart: () => void;
  handleStart: (players: string[]) => void;
}
export default (): ReturnValue => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);
  const [status, setStatus] = useState("created");
  const [players, setPlayers] = useState(["", ""]);
  const [error, setErrors] = useState("");
  useEffect(() => {
    if (status !== "started") return;
    const postData = { board: board };
    axios.post(baseUrl+"check/winner", postData)
        .then(response => {
          if (response) {
            if (response.data.winner) {
              console.log("inside");
              setWinner(response.data.winner === "X" ? players[0] : players[1]);
              setStatus("finished");
              return;
            }
            setStatus(board.filter((value) => !value).length ? "started" : "finished"); 
          }
        }).catch((error) => {
        // handle this error
          console.log('error: '+error);
          setErrors(error+" (Error in server Side,Please try again)");
          alert(error+" (Error in server Side,Please try again)");

          return;
        });
  }, [board, players, status]);

  const handleClick = (index: number): void => {
    if (index < 0 || index > 9 || winner) return;
    if(board[index] == "" && error == ""){ // check if user has clicked the same box or have api error
      const newBoard = [...board];
      newBoard.splice(index, 1, turn);
      setBoard(newBoard);
      const newTurn = turn === "X" ? "O" : "X";
      setTurn(newTurn); // set next player symbol
    }
  };
  const handleStart = (players: string[]) => {
    setPlayers(players);
    setTurn("X");
    setStatus("started");
  };
  const handleRestart = () => {
    setBoard(Array(9).fill(""));
    setWinner("");
    setStatus("created");
  };

  return { board, status, winner, handleClick, handleRestart, handleStart };
};
