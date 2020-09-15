"use strict";

const $ = (selector) => {
  return document.querySelector(selector);
};
const senGenarate = $(".senGenarate");
const startBtn = $(".btn");
const inputArea = $(".input-area");
const msg = $(".msg");
const randSentences = [
  "Be careful with that butter knife.",
  "The body piercing didn't go exactly as he expected.",
  "Dan ate the clouds like cotton candy.",
  "He watched the dancing piglets with panda bear tummies in the swimming pool.",
];
let randSentence;
let startTime;
let endTime;
let totalTime;
let isStarted = false;
const startGame = () => {
  if (!isStarted) {
    startTime = new Date().getTime();
    isStarted = true;
    let randNum = Math.floor(Math.random() * randSentences.length);
    randSentence = randSentences[randNum];
    senGenarate.innerText = randSentence;
    startBtn.innerText = "Done";
    msg.innerText = "";
    inputArea.disabled = false;
    inputArea.focus();
  } else {
    endTime = new Date().getTime();
    totalTime = (endTime - startTime) / 1000;
    isStarted = false;
    let right = 0;
    let wrong = 0;
    const randSentArray = randSentence.split(" ");
    const userSentArray = inputArea.value.split(" ");
    randSentArray.forEach((singleWord, index) => {
      if (singleWord === userSentArray[index]) {
        right++;
      } else {
        wrong++;
      }
    });
    inputArea.value = "";
    inputArea.disabled = true;
    startBtn.innerText = "Start Again";
    const speed = Math.floor((right / totalTime) * 60);
    msg.innerText = `Your typing speed is ${speed} words per minute. You typed ${right} right words and ${wrong} wrong words.`;
  }
};
startBtn.addEventListener("click", startGame);
