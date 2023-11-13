import React, { useState } from 'react';
import { AiFillScissor, AiFillPaper, AiFillRock } from 'react-icons/ai';
const Game = () => {
 const [playerChoice, setPlayerChoice] = useState('');
 const [computerChoice, setComputerChoice] = useState('');
 const [winner, setWinner] = useState('');
 const generateComputerChoice = () => {
   const choices = ['rock', 'paper', 'scissors'];
   const randomIndex = Math.floor(Math.random() * choices.length);
   return choices[randomIndex];
 };
 const determineWinner = () => {
   if (playerChoice === computerChoice) {
     return 'tie';
   } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
     return 'player';
   } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
     return 'player';
   } else if (playerChoice === 'paper' && computerChoice === 'rock') {
     return 'player';
   } else {
     return 'computer';
   }
 };
 const handlePlayerClick = (choice) => {
   setPlayerChoice(choice);
   setComputerChoice(generateComputerChoice());
   setWinner(determineWinner());
 };
 return (
   <div>
     <h1>Rock Paper Scissors</h1>
     <div className="game-board">
       <button onClick={() => handlePlayerClick('rock')}>
         <AiFillRock />
       </button>
       <button onClick={() => handlePlayerClick('paper')}>
         <AiFillPaper />
       </button>
       <button onClick={() => handlePlayerClick('scissors')}>
         <AiFillScissor />
       </button>
     </div>
     <div className="winner">
       <h1>Winner: {winner}</h1>
     </div>
   </div>
 );
};
export default Game;
Use code with caution. Learn more
JavaScript
// App.js
import React from 'react';
import Game from './components/Game';
const App = () => {
 return (
   <div>
     <Game />
   </div>
 );
};