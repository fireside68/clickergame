/* global $ */

$(document).ready(function () {
    $('#clickButton').click(function accumulate() {
        let score = +document.getElementById("mainscore").innerHTML
        let clickScore = +document.getElementById("clickScore").innerHTML
        if((score > 0) && (score % 100 === 0)) {
          clickScore = ((score * 4) / 2) + 1
        }
        score += clickScore
        document.getElementById("mainscore").innerHTML = score
        document.getElementByID("clickScore").innerHTML = clickScore
   })
})
