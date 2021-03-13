    $(function () {
        $("#upload").bind("click", function () {
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
            if (regex.test($("#fileUpload").val().toLowerCase())) {
                if (typeof (FileReader) != "undefined") {

                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var mytable = $("<table />");
                        mytable.attr('id', 'idForTable');
                        var rowsf = e.target.result.split("\n");
                        for (var i = 0; i < (rowsf.length); i++) {
                            var row = $("<tr />");
                            var cells = rowsf[i].split(",");
                            for (var j = 0; j < cells.length; j++) {
                                var cell = $("<td />");
                                cell.html(cells[j]);
                                row.append(cell);

                            }
                            mytable.append(row);
                        }
                        $("#dvCSV").html('');
                        $("#dvCSV").append(mytable);




                    }
                    var size = document.getElementById('fileUpload').files[0].size;
                    if (size < 2000000) {

                        reader.readAsText($("#fileUpload")[0].files[0]);
                        console.log(size);
                    }
                   
                } else {
                    alert("This browser does not support HTML5.");
                }
            } else {
                alert("Please upload a valid CSV file.");
           }

        });


    });



//setTimeout(function () { alert("Hello"); }, 3000);

       // let table = document.getElementById('idForTable');
function delete_row(id, given_value) {
   var td = $("#" + id + " td");
   $.each(td, function (i) {
       if ($(td[i]).text() === given_value) {
          $(td[i]).parent().remove();
      }
   });
}

function deleterow(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;

    table.deleteRow(rowCount - 1);

}


var checkExist = setInterval(function () {
 if ($('#idForTable').length) {

        console.log("Exists!");
     
      clearInterval(checkExist);
       document.getElementById("upload").disabled = true;
        document.getElementById("fileUpload").disabled = true;
     
        var myn = null;
       var emp = "";
     
     
     
     
        delete_row("idForTable", emp);
             delete_row("idForTable", myn);


let editingTd;

table.onclick = function (event) {

    // 3 possible targets
    let target = event.target.closest('.edit-cancel,.edit-ok,td');

    if (!table.contains(target)) return;

    if (target.className == 'edit-cancel') {
        finishTdEdit(editingTd.elem, false);
    } else if (target.className == 'edit-ok') {
        finishTdEdit(editingTd.elem, true);
    } else if (target.nodeName == 'TD') {
        if (editingTd) return; // already editing

        makeTdEditable(target);
    }

        };
     
     function makeTdEditable(td) {
    editingTd = {
        elem: td,
        data: td.innerHTML
    };

       td.classList.add('edit-td'); // td is in edit state, CSS also styles the area inside
     
          let textArea = document.createElement('textarea');
    textArea.style.width = td.clientWidth + 'px';   
           textArea.style.height = td.clientHeight + 'px';
    textArea.className = 'edit-area';
         
    textArea.value = td.innerHTML;
    td.innerHTML = '';
  td.appendChild(textArea);
    textArea.focus();

    td.insertAdjacentHTML("beforeEnd",
        '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
    );
}

      function finishTdEdit(td, isOk) {
    if (isOk) {
        td.innerHTML = td.firstChild.value;
    } else {
        td.innerHTML = editingTd.data;
       }
    td.classList.remove('edit-td');
    editingTd = null;
}
         
     
        deleterow("idForTable");
     
     
             function download_csv(csv, filename) {
     
       }




   

}, 100);



       








