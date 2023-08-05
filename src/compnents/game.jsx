import React, { useState, useEffect } from "react";
import "../App.css";
import Papa from "papaparse";
import Prompt from "./Prompt";
import App from "../App.jsx";

export default function Game(props) {
  function gameOver() {
    props.updateBestScore();
    props.start();
  }

  function update(choice) {
    if (choice) {
      if (props.seenPkmn.includes(props.currPokemon)) {
        props.incrementScore();
      } else {
        gameOver();
      }
    } else {
      if (!props.seenPkmn.includes(props.currPokemon)) {
        props.incrementScore();
        props.updateSeenPkmn();
      } else {
        gameOver();
      }
    }

    console.log(choice);
    props.randomPokemon();
    console.log(props.seenPkmn);
  }

  return (
    <main >
      <div className="gameSpace e-flex justify-content-around align-items-center">
        <p>{props.currPokemon}</p>
        <Prompt update={update} />
      </div>
    </main>
  );
}
