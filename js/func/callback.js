"use strict";

function learnJs(lang, callback) {
  console.log(`I'm learning : ${lang}`);
  callback();
}

function done() {
  console.log("I finished this lesson");
}

learnJs("JavaScript", done);
