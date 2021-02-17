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




function delete_row(id, given_value) {
   var td = $("#" + id + " td");
   $.each(td, function (i) {
       if ($(td[i]).text() === given_value) {
          $(td[i]).parent().remove();
      }
   });
}







