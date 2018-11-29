var countdownGenerator = function (x) {
  /* your code here */
  //input variable x - to keep track of our count.
  var count = x;

  return function(){
    //print out countdown msg and decrease count by 1.
    if (x > 0){
      console.log("T-minus " + x + "...");
    }
    else if (x === 0){
      console.log("BLAST OFF!");
    }
    else {
      console.log("ROckets already gone, bub!");
    }


    x--;
  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
