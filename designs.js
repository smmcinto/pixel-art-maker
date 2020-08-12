var table = document.getElementById('pixelCanvas');
var sizePicker = document.getElementById('sizePicker');


// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  // height and width input from here
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
});
// Make Grid
function makeGrid(height, width) {
table.innerHTML = "";
  for (var n = 0; n < height; n++) {
    var row = table.insertRow(n);
    for (var m = 0; m < width; m++) {
      var cell = row.insertCell(m);
      //add color with one click
      cell.addEventListener('click', function(event) {
        var color = document.getElementById('colorPicker');
        event.target.style.backgroundColor = color.value;
      });
      //remove the color with a double click
      cell.addEventListener('dblclick', function(event) {
        event.target.style.backgroundColor = 'grey';
      });

    }
  }
}
