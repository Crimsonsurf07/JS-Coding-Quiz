var clearBtn = document.getElementById("clear");

// Clear High Scores
clearBtn.addEventListener("click", function() {
    localStorage.clear();
})

var finalScore = {
  contactInfo: "",
  timeleft: ""
}

var finalScore = [];


//Load Scores 
var loadScores = function() {
  var finalScore = localStorage.getItem("contactInfo, timeLeft");
  
      // if (!finalScore) {
      //     return false;
      // }
    
       for (var i = 0; i < finalScore.length; i++) {
        var finalScore = finalScore[i];
        var listItemEl = document.createElement("li");
        listItemEl.textContent = finalScore;
      }    
    finalScore.push(finalScore)   
};
