/* global $ */

$(document).ready(function () {
  function accumulate() {
  let score = +document.getElementById("mainscore").value
  $('#clickButton').click(function () {
        alert('The button was clicked')
        ++score
        document.getElementById("mainscore").innerHTML = score
   })
 }
})
