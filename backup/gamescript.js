/* global $ */
(document).ready(function () {
  $('#perClick').click(function () {
  let total = 0
  let score = parseInt($('#scoretext').val(), 10)
  ++score
  total = score
    $('#scoretext').text(score)
  })
}
)
