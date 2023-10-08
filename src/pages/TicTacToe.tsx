import React, { useState } from "react";
import "./TicTacToe.css"

let turn: number = 0;
const board_history: string[][] = [];

function Square(prop: { value: string, onSquareClick: (index: number) => void}, index:number): React.ReactElement {
  return (
    <button className="square" onClick={()=>prop.onSquareClick(index)}>
      {prop.value}
    </button>
  );


}
export default function Board(): JSX.Element{
  const board_rows: number = 10;
  const board_cols: number = 10;
  const to_win: number = 5;

  const  [currentVals, setVals] = useState<string[]>(Array(board_rows*board_cols).fill(""));

  function handleClick(index: number): void
  {
    if(calculateWinner(currentVals, board_rows, board_cols, to_win) || currentVals[index] !== "")
    {
      return;
    }
    else  
    {
      const board_copy: string[] = currentVals.slice();
      board_history.push(board_copy);
      board_copy[index] = turn % 2 === 0 ? "X" : "O";
      setVals(board_copy);
      turn++;
    }
    //Else do nothing
  }

  const board: React.ReactElement[] = [];
  const div_board:  React.ReactElement[] = [];
  for(let i = 0; i < currentVals.length; i++)
  {
    board.push(Square({value:currentVals[i], onSquareClick: () => {handleClick(i)}}, i));
    //board.push(<Square value={defaultVals[i]} onSquareClick={() => {handleClick(i)}}></Square>);
  }

  let board_row: React.ReactElement[];
  for(let i = 0; i < board_rows; i++)
  {
    board_row = [];
    for (let j = 0; j < board_cols; j++)
    {
      board_row.push(board[(i*board_rows)+j]);
    }
    div_board.push(<div className="board-row">{board_row}</div>)
  }

  let game_message:React.ReactElement;
  if(calculateWinner(currentVals, board_rows, board_cols, to_win))
  {
    game_message = turn % 2 ? <h1> X wins!</h1> : <h1> O wins!</h1>;
  }
  else
  {
    game_message = turn % 2 ? <h1> O's turn. </h1> : <h1> X's turn. </h1>;
  }

  return (<div className="tictactoe-container">{game_message}{div_board}</div>);
}


function calculateWinner(board: string[], board_rows: number, board_cols: number, count_to_win: number): boolean
{
  console.log("L to R");
  //Scan rows and count
  for(let i: number = 0; i < board_rows; i++)
  {
    let prev_val: string = "", consecutive_count: number = 0;
    for(let j: number = 0; j < board_cols; j++)
    {

      if (prev_val === board[(i*board_rows)+j])
      {
        consecutive_count++;
      }
      else //value compared to prev in row not same
      {
        prev_val = board[(i*board_rows)+j];
        consecutive_count = 1;
      }
      //console.log(((i*board_rows)+j) + " :" + board[(i*board_rows)+j] + " count:" + consecutive_count + " prev: " + prev_val);
      if(consecutive_count === count_to_win && prev_val !== "")
      {
        return true; //Return win
      }
    }
  }
  console.log("T to B");
  //Scan columns and count
  for(let i: number = 0; i < board_cols; i++)
  {
    let prev_val: string = "", consecutive_count: number = 0;
    for(let j: number = 0; j < board_rows;j++)
    {
      if (prev_val === board[(j*board_rows)+i])
      {
        consecutive_count++;
      }
      else //value compared to prev in row not same
      {
        prev_val = board[(j*board_rows)+i];
        consecutive_count = 1;
      }
      //console.log(((i*board_rows)+j) + " :" + board[(i*board_rows)+j] + " count:" + consecutive_count + " prev: " + prev_val);
      if(consecutive_count >= count_to_win && prev_val !== "")
      {
        return true; //Return win
      }
    }
  }
  console.log("left edge, upward diagonal");
  //Iterate over left edge of board (first leftmost cells), upward diagonal (L to R)
  for(let i: number = 0; i < board_rows; i++)
  {
    console.log("i: " + i);
    let curr_index: number = i*board_cols;
    let prev_val: string = "", consecutive_count: number = 0;
    while(curr_index > 0)
    {
      console.log("curval: " + board[curr_index] + " curindex: " + curr_index + " prevval: " + prev_val + " consecutivecount: " + consecutive_count);
      if (prev_val === board[curr_index])
      {
        consecutive_count++;
      }
      else //value compared to prev in row not same
      {
        prev_val = board[curr_index];
        consecutive_count = 1;
      }

      if(consecutive_count >= count_to_win && prev_val !== "")
      {
        return true; 
      }
      curr_index -= (board_cols-1);
    }
  }
  console.log("bottom edge, upward diagonal (L to R)");
  //Iterate over bottom edge of board (bottom most cells), upward diagonal (L to R)
  for(let i: number = 1; i < board_cols; i++)//i = 1 because the corner cell covered by previous loop
  {
    console.log("i: " + i);
    let curr_index: number = ((board_rows-1)*board_cols)+i;//Target start at corner index
    let prev_val: string = "", consecutive_count: number = 0;
    while(curr_index > 0)
    {
      console.log("curval: " + board[curr_index] + " curindex: " + curr_index + " prevval: " + prev_val + " consecutivecount: " + consecutive_count);
      if (prev_val === board[curr_index])
      {
        consecutive_count++;
      }
      else //value compared to prev in row not same
      {
        prev_val = board[curr_index];
        consecutive_count = 1;
      }

      if(consecutive_count >= count_to_win && prev_val !== "")
      {
        return true; 
      }

      if((curr_index-(board_cols-1))%board_cols === 0) //Cuts short at left edge
      {
        console.log("break");
        break;
      }
      curr_index -= (board_cols-1);
    }
  }
  //Iterate over bottom edge of board (bottom most cells), upward diagonal (R to L)
  console.log("bottom edge, upward diagonal (R to L)");
  for(let i: number = 1; i < board_rows; i++)
  {
    console.log("i: " + i);
    let curr_index: number = ((board_rows-1)*board_cols)+i;//Target start at corner index
    let prev_val: string = "", consecutive_count: number = 0;
    while(curr_index >= 0)
    {
      console.log("curval: " + board[curr_index] + " curindex: " + curr_index + " prevval: " + prev_val + " consecutivecount: " + consecutive_count);
      if (prev_val === board[curr_index])
      {
        consecutive_count++;
      }
      else //value compared to prev in row not same
      {
        prev_val = board[curr_index];
        consecutive_count = 1;
      }

      if(consecutive_count >= count_to_win && prev_val !== "")
      {
        return true; 
      }
      if(curr_index%board_cols === 0) //Cuts short at right edge
      {
        console.log("break");
        break;
      }
      curr_index -= (board_cols+1);
    }
  }
  
  //Iterate over top edge of board (top most cells), downward diagonal (L to R)
  console.log("top edge, downward diagonal (L to R)");
  for(let i: number = 1; i < board_rows; i++)
  {
    console.log("i: " + i);
    let curr_index: number = i;//Target start at 1 index
    let prev_val: string = "", consecutive_count: number = 0;
    while(curr_index > 0)
    {
      console.log("curval: " + board[curr_index] + " curindex: " + curr_index + " prevval: " + prev_val + " consecutivecount: " + consecutive_count);
      if (prev_val === board[curr_index])
      {
        consecutive_count++;
      }
      else //value compared to prev in row not same
      {
        prev_val = board[curr_index];
        consecutive_count = 1;
      }

      if(consecutive_count >= count_to_win && prev_val !== "")
      {
        return true; 
      }

      if((curr_index-(board_cols-1))%board_cols === 0) //Cuts short at left edge
      {
        console.log("break");
        break;
      }
      curr_index += (board_cols+1);
    }
  }
  //If no matches found, no win.
  return false;
}