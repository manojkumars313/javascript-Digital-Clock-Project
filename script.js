const part2 = document.getElementById("part2");
const party = document.getElementById("party");

party.addEventListener("click", function () {
  part2.innerText = "Party Time!";
});

function startTime() {
  var today = new Date();

  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  let s = today.getSeconds();
  minute = checkTime(minute);
  second = checkTime(second);
  hour = checkTime(hour);
  setTimeout(startTime, 1000);

  if (hour > 06) {
    var greeting1 = "GOOD MORNING!! WAKE UP !!";
    // var greeting2 = "GRAB SOME HEALTHY BREAKFAST!!!";
    //   box6.src = "./media/Component 30 – 1.jpg";
  }
  if (hour >= 13) {
    var greeting1 = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    // var greeting2 = "LET'S HAVE SOME LUNCH !!";
    // box6.src = "./media/Component 31 – 1.jpg";
  }
  if (hour >= 16) {
    var greeting1 = "GOOD EVENING !!";
    // var greeting2 = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    // box6.src = "./media/lunch_image.jpg";
  }
  if (hour >= 20) {
    var greeting1 = "GOOD NIGHT !!";
    // var greeting2 = "CLOSE YOUR EYES AND GO TO SLEEP";
    // box6.src = "./media/Component 32 – 1.jpg";
  }
  // if (hour >= 0) {
  //   var greeting1 = "GOOD NIGHT !!";
  //   var greeting2 = "CLOSE YOUR EYES AND GO TO SLEEP";
  //   // box6.src = "./media/Component 32 – 1.jpg";
  // }
  var prepand = hour >= 12 ? " PM " : " AM ";
  hour = hour >= 12 ? hour - 12 : hour;
  if (hour === 0 && prepand === " PM ") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = " Noon";
    } else {
      hour = 12;
      prepand = " PM";
    }
  }
  if (hour === 0 && prepand === " AM ") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = " Midnight";
    } else {
      hour = 12;
      prepand = " AM";
    }
  }
  document.getElementById("box6").innerHTML = box6;
  document.getElementById("greeting1").innerHTML = greeting1;

  document.getElementById("hrs").innerHTML = hour;
  document.getElementById("mint").innerHTML = minute;
  document.getElementById("sec").innerHTML = second;
  document.getElementById("ten").innerHTML = prepand;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function passvalue() {
  // var choice = document.getElementById("option1").value;
  // localStorage.setItem("value", choice);
  // document.getElementById("f1").innerHTML = localStorage.getItem("value");
  var select = document.querySelector(".option4");
  var selectedOption = select.options[select.selectedIndex];
  var selectedOptionText = selectedOption.text;
  console.log(selectedOptionText);
  document.getElementById("f1").innerHTML = selectedOptionText;

  var select = document.querySelector(".option3");
  var selectedOption = select.options[select.selectedIndex];
  var selectedOptionText = selectedOption.text;
  console.log(selectedOptionText);
  document.getElementById("f2").innerHTML = selectedOptionText;

  var select = document.querySelector(".option2");
  var selectedOption = select.options[select.selectedIndex];
  var selectedOptionText = selectedOption.text;
  console.log(selectedOptionText);
  document.getElementById("f3").innerHTML = selectedOptionText;

  var select = document.querySelector(".option1");
  var selectedOption = select.options[select.selectedIndex];
  var selectedOptionText = selectedOption.text;
  console.log(selectedOptionText);
  document.getElementById("f4").innerHTML = selectedOptionText;

  // var choice1 = document.getElementById("option2").value;
  // localStorage.setItem("value1", choice1);
  // document.getElementById("f2").innerHTML = localStorage.getItem("value1");

  // var choice2 = document.getElementById("option3").value;
  // localStorage.setItem("value2", choice2);
  // document.getElementById("f3").innerHTML = localStorage.getItem("value2");

  // var choice3 = document.getElementById("option4").value;
  // localStorage.setItem("value3", choice3);
  // document.getElementById("f4").innerHTML = localStorage.getItem("value3");

  /*------------------------------------------------------------*/
  let date = new Date();
  var hour = date.getHours();

  const change = document.getElementById("option1").value;
  console.log(change);

  if (parseInt(change) === hour) {
    box6.src = "./media/Component 30 – 1.jpg";
    var greeting2 = "GRAB SOME HEALTHY BREAKFAST!!!";
  }

  const change2 = document.getElementById("option2").value;
  console.log(change);

  if (parseInt(change2) === hour) {
    box6.src = "./media/Component 31 – 1.jpg";
    var greeting2 = "LET'S HAVE SOME LUNCH !!";
  }

  const change3 = document.getElementById("option3").value;
  console.log(change3);

  if (parseInt(change3) === hour) {
    box6.src = "./media/lunch_image.jpg";
    var greeting2 = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  }

  const change4 = document.getElementById("option4").value;
  console.log(change4);

  if (parseInt(change4) === hour) {
    box6.src = "./media/Component 32 – 1.jpg";
    var greeting2 = "CLOSE YOUR EYES AND GO TO SLEEP";
  }
  document.getElementById("greeting2").innerHTML = greeting2;
  document.getElementById("box6").innerHTML = box6;
}
