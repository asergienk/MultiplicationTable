function generateTable() {
  //getting input values
  var minCol = parseInt(document.getElementById("minCol").value);
  var maxCol = parseInt(document.getElementById("maxCol").value);
  var minRow = parseInt(document.getElementById("minRow").value);
  var maxRow = parseInt(document.getElementById("maxRow").value);
  var error = document.getElementById("error");
  //if(var node = document.createTextNode();)

  clearError();

  //swapping values if min>max
  if(minCol>maxCol && minRow>maxRow)
  {
    let temp = maxCol;
    maxCol = minCol;
    minCol = temp;

    let temp2 = maxRow;
    maxRow = minRow;
    minRow = temp2;

    var node = document.createTextNode("Min and Max Column AND Row Values are swapped.");
    printError(node);
  }
 else{
  if(minCol>maxCol)
  {
    let temp = maxCol;
    maxCol = minCol;
    minCol = temp;
    var node = document.createTextNode("Min and Max Column Values are swapped.");
    printError(node);
    /*
    var newP = document.createElement("P");
    var node = document.createTextNode("Min and Max Column Values are swapped.");
    clearError();
    newP.appendChild(node);
    error.appendChild(newP);
    */
    //error.textContent += "Min and Max Column Values are swapped.";
    //error.style.color = "red";
  }
  if(minRow>maxRow)
  {
    let temp = maxRow;
    maxRow = minRow;
    minRow = temp;
    var node = document.createTextNode("Min and Max Row Values are swapped.");
    printError(node);

    /*
    clearError();
    var newP = document.createElement("P");
    var node = document.createTextNode("Min and Max Row Values are swapped.");
    newP.appendChild(node);
    error.appendChild(newP);
    */
    //error.textContent += "Min and Max Row Values are swapped.";
    //error.style.color = "red";
  }
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
        result += "<th>" + " " + "</th>";
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
function printError(error){
   var node = document.getElementById("error");
   var newP = document.createElement("P");
   clearError();
   newP.appendChild(error);
   node.appendChild(newP);
}
function clearError(){
    var errorMessage = document.getElementById("error");
    while(errorMessage.firstChild){
        errorMessage.removeChild(errorMessage.firstChild);
    }
}
