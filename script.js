 var count=0;
 function show()
{
  var name=document.getElementById("firstname").value;
  var mob=document.getElementById("mobile").value;
  var mail=document.getElementById("email").value;
   count++;
 
  var table = document.getElementById("myTable");
  var row = table.insertRow(count);
  var col1 = row.insertCell(0);
  var col2 = row.insertCell(1);
  var col3 = row.insertCell(2);
  col1.innerHTML = name;
  col2.innerHTML = mob;
  col3.innerHTML = mail;
 
  document.getElementById("myForm").reset();
}

