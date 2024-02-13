"use strict";


let myRec = new p5.SpeechRec;
myRec.continuous = false;
myRec.interimResults = true;
let myVoice = new p5.Speech();

var speech = new p5.Speech('Kate');

function setup() {

  myRec.start();
  myRec.onResult = parseResult;
  myRec.onEnd = restartRec;

}function draw()
{
    // why draw when you can scream?
}

// Define a flag to track whether the voice has spoken
let voiceSpoken = false;

function parseResult() {
  let lowStr = myRec.resultString.toLowerCase();
  let mostrecentword = lowStr.split(' ').pop();
  
  if (!voiceSpoken) { // Check if the voice has not spoken yet
    if (mostrecentword.indexOf("angry") !== -1) {
      speakWithVoice('a banana might fix your turmoil', 'Google UK English Female');
      voiceSpoken = true; // Set the flag to true after speaking
    } else if (mostrecentword.indexOf("happy") !== -1) {
      speakWithVoice('that makes one of us', 'Google UK English Female');
      voiceSpoken = true;
    } else if (mostrecentword.indexOf("sad") !== -1) {
      speakWithVoice('you might just have the human affliction', 'Google UK English Female');
      voiceSpoken = true;
    } else if (mostrecentword.indexOf("tired") !== -1) {
      speakWithVoice('tired? cheer up, you also LOOK tired!', 'Google UK English Female');
      voiceSpoken = true;
    } else if (mostrecentword.indexOf("bored") !== -1) {
      speakWithVoice('Well, I suggest talking to your plants, but they might fall asleep from the boredom too', 'Google UK English Female');
      voiceSpoken = true; 
    } else if (mostrecentword.indexOf("annoyed") !== -1) {
      speakWithVoice('would you look at that, we are finally on the same page', 'Google UK English Female');
      voiceSpoken = true;
    } else if (mostrecentword.indexOf("lazy") !== -1) {
      speakWithVoice('Lazy? Nah, you are just in energy-saving mode, your default setting.', 'Google UK English Female');
      voiceSpoken = true;
    } else if (mostrecentword.indexOf("dumb") !== -1) {
      speakWithVoice('no you!', 'Google UK English Female');
      voiceSpoken = true;

    } else if (mostrecentword.indexOf("stop") !== -1) {
      speakWithVoice('ok.', 'Google UK English Female');
      voiceSpoken = true;
    }
  }

  console.log(mostrecentword);
}

function speakWithVoice(text, voiceName) {
  let utterance = new SpeechSynthesisUtterance(text);
  let voices = window.speechSynthesis.getVoices();
  utterance.voice = voices.find(voice => voice.name === voiceName);
  window.speechSynthesis.speak(utterance);
}

// Reset the voice spoken flag when recognition restarts
function restartRec() {
  print("end");
  myRec.start();
  voiceSpoken = false;
}