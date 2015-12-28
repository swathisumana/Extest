/*function myCreateFunction() {
    var table = document.getElementById("myTable");
    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>This is a table header</b>";
}

function myDeleteFunction() {
    document.getElementById("myTable").deleteTHead();
}
*/



function Addfunction() {
    location.hash = "column";
    function myFunction() {
    var table = document.getElementById("myTable");
    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>This is a table header</b>";
}
}
function Deletefunction(){
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/Columnmaster/views/column.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('get').innerHTML = oEv.currentTarget.responseText;
            }
        }
  Addfunction();  };



    oXhr.send();
}
