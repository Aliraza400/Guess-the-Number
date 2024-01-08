let myText = document.getElementById("myText");

let myText_1 = document.getElementById("myText-1");

let myText_2 = document.getElementById("myText-2");

let guess = document.getElementById("guess");

const minNum = 1;

const maxNum = 100;

let answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;

let running = true;

guess.onclick = function () {
  while (running) {
    guess = prompt(`Enter Number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
      alert("Please Enter a Valid Number!");
    } else if (guess < 0 || guess > 100 || guess === "") {
      alert("Please Enter a Valid Number!");
    } else {
      attempts++;

      if (guess < answer) {
        alert(`Answer is Greater than ${guess}, Please try again!`);
      } else if (guess > answer) {
        alert(`Answer is lesser than ${guess}, Please try again`);
      } else {
        alert(
          `Congrats you have guessed right! You have took ${attempts} attempts`);

        running = false;

        myText.innerHTML = `Game Over`;

        myText_1.innerHTML = `Attempts Taken: ${attempts}`;

        myText_2.innerHTML = `Correct Answer: ${answer}`;
      }
    }

    //running = false;
  }
};
