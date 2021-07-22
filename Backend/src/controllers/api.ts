import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface sayHello {
    message: String;
}
interface winnerData{
    winner : String | null;
}

// say hello
const sayHelloFunction = async (req: Request, res: Response, next: NextFunction) => {
    let abc: sayHello = {"message" : "Say Hello !"};
    return res.status(200).json({
        message: abc
    });
};

// checking winner
//return null or string
const checkWinner = async (req: Request, res: Response, next: NextFunction) => {

        var board = req.body.board; //  !need to add validation!
        // win combinations
        const winningPositions = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        let winningPositionsIndex = 0;
        let winner = null;
        // loop to check if any combination match with board
        while (winningPositionsIndex < winningPositions.length && !winner) {

          const boardPositionsToCheck = winningPositions[winningPositionsIndex];
          
          const boardValuesToCkeck = boardPositionsToCheck.map(
            (index) => board[index]
          );
          const checkingValue = boardValuesToCkeck[0];
          
          const isFinished = boardValuesToCkeck.every(
            (value) => value === checkingValue && checkingValue
          );
          winner = !isFinished ? null : checkingValue;
          winningPositionsIndex++;
        }
        
        let winnerData: winnerData = {winner : winner};
        return res.status(200).json(winnerData);
};

export default { sayHelloFunction, checkWinner };