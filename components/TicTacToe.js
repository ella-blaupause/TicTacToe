import { useState } from "react";
import styled from "styled-components";
import Cell from "./Cell";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;



export default function TicTacToe(){
   const [turn, setTurn] = useState("x");
   const [cells, setCells] = useState(Array(9).fill(""));
   const [winner, setWinner] = useState();
   
   function checkedForWinner(squars){
    let combos = {
        across: [
            [0,1,2],
            [3,4,5],
            [6,7,8],
        ],
        down: [
            [0,3,6],
            [1,4,7],
            [2,5,6],
        ],
        diagonal:[
            [0,4,8],
            [2,4,6],
        ],
    };

    for (let combo in combos){
        combos[combo].forEach((pattern) => {
            if(squars[pattern[0]] === "" ||
               squars[pattern[1]] === "" ||
               squars[pattern[2]] === ""){

            }else if (squars[pattern[0]] === squars[pattern[1]] &&
                      squars[pattern[1]] === squars[pattern[2]]){
                        setWinner(squars[pattern[0]])
            }
        });
    }
   }

   function handleClick(number){
    let squars = [...cells]

    if(cells[number] !== ""){
        alert("schon geklickt")
        return;
    }

    if(turn == "x"){
        squars[number] = "x";
        setTurn("o");
    }else{
        squars[number] = "o";
        setTurn("x");
    }
    checkedForWinner(squars);
    setCells(squars);
    
   }

   function playAgain(){
    setCells(Array(9).fill(""));
    setWinner();
   }
   

    return (
        
        <StyledDiv>
        <p>{turn} ist am Zug!</p>
            <table>
                <tbody>
                     <tr>
                        <Cell number={0} cells={cells} handleClick={handleClick}/>
                        <Cell number={1} cells={cells} handleClick={handleClick}/> 
                        <Cell number={2} cells={cells} handleClick={handleClick}/>
                    </tr>
                    <tr>
                        <Cell number={3} cells={cells} handleClick={handleClick}/>
                        <Cell number={4} cells={cells} handleClick={handleClick}/>
                        <Cell number={5} cells={cells} handleClick={handleClick}/>
                    </tr>
                    <tr>
                        <Cell number={6} cells={cells} handleClick={handleClick}/>
                        <Cell number={7} cells={cells} handleClick={handleClick}/>
                        <Cell number={8} cells={cells} handleClick={handleClick}/>
                    </tr>
                </tbody>
            </table>

            {winner && (
            <>
                <p>Der Gewinner ist: {winner}</p>
                <button onClick={playAgain}>Noch mal Spielen</button>
            </>
            )}
            
        </StyledDiv>
        
       );
};