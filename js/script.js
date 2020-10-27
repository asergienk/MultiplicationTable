function generateTable() {
  //getting input values
  var minCol = parseInt(document.getElementById("minCol").value);
  var maxCol = parseInt(document.getElementById("maxCol").value);
  var minRow = parseInt(document.getElementById("minRow").value);
  var maxRow = parseInt(document.getElementById("maxRow").value);

  //swapping values if min>max
  if(minCol>maxCol)
  {
    let temp = maxCol;
    maxCol = minCol;
    minCol = temp;
  }
  if(minRow>maxRow)
  {
    let temp = maxRow;
    maxRow = minRow;
    minRow = temp;
  }

  var table = document.getElementById("multTable");
  var result = "";
  //creating a multTable
  for(var i=minRow; i<=maxRow;i++)
  {
      //executed only once
      if(i==minRow)
      {
        //starting a new row
        result += "<tr>";
        //printing x in the left upper corner of the table
        result += "<th>&times;</th>";
      }

      for(var j=minCol; j<=maxCol; j++)
      {
          if(i==minRow || j==minCol)
          {
            //filling out top row of the table
            if(i==minRow)
              result += "<th>" + j + "</th>";
            else
              result += "<td>"+ (i-1)*j + "</td>";
          }
          else
            result += "<td>"+ (i-1)*j + "</td>";
      }
        //closing the row
        result += "</tr>";
        result += "<tr>";
        //filling out left most column of the table
        result += "<th>" + i + "</th>";
        if(i==maxRow)
        {
          for(var j=minCol; j<=maxCol; j++)
          {
            result += "<td>"+ i*j + "</td>";
          }
        }
    }
  //printing the table
  table.innerHTML=result;

  return false;
}


function checkValid() {
  var minCol = document.getElementById("minCol").value;
  var maxCol = document.getElementById("maxCol").value;
  var minRow = document.getElementById("minRow").value;
  var maxRow = document.getElementById("maxRow").value;

  // if minCol, maxCol, minRow, maxRow is Not a Number
  if (isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow)) {
    text = "Input is not valid. Please enter an integer value.";
  } else {
    text = "Input is valid.";
  }
  document.getElementById("error").innerHTML = text;

  return false;
}
