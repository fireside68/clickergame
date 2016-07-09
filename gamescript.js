/* global $ */

$(document).ready(function () {
  let score = +document.getElementById("mainscore").innerHTML
  let clickScore = +document.getElementById("clickScore").innerHTML
    $('#clickButton').click(function accumulate() {
        if((score > 0) && (score % 800 === 0)) {
          clickScore = (score * 0.06) + 1
        }
        score += clickScore
        document.getElementById("mainscore").innerHTML = score.toLocaleString()
        document.getElementById("clickScore").innerHTML = clickScore.toLocaleString()
   })
})
