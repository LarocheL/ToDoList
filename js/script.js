$(function () {

    affichage();

    var add = document.getElementById("add");
    add.addEventListener("click", function () {
        var tache = document.getElementById("tache").value;
        var date = document.getElementById("date").value;
        $.ajax({
            type: 'GET',
            url: './services.php',
            data: { action: "add", date: date, tache: tache },
            dataType: 'json',
            success: function (data) {
                var table = document.getElementById("table");
                table.innerHTML = "";
                affichage();
            }

        });
    });

    $("body").on("click", "#update", function () {
        var idUpd = $(this).attr("data-id");
        update(idUpd);
    });
    function update(id) {
        $.ajax({
            type: "GET",
            url: "./services.php",
            dataType: "json",
            data: {
                id: id,
                action: "getTaskId",
            },
            success: function (data) {

                var modal = document.getElementById("updModal");
                modal.style.display = "block";

                var date = new Date(data['0'].date);
                if (date.getMonth() + 1 > 9) {
                    var updDate = date.getFullYear() + "-" + (date.getMonth() + 1);
                }
                else {
                    var updDate = date.getFullYear() + "-0" + (date.getMonth() + 1);
                }
                if (date.getDate() > 9) {
                    var updDate = updDate + "-" + (date.getDate());
                }
                else {
                    var updDate = updDate + "-0" + (date.getDate());
                }
                if (date.getHours() > 9) {
                    var updDate = updDate + "T" + (date.getHours());
                }
                else {
                    var updDate = updDate + "T0" + (date.getHours());
                }
                if (date.getMinutes() > 9) {
                    var updDate = updDate + ":" + (date.getMinutes());
                }
                else {
                    var updDate = updDate + ":0" + (date.getMinutes());
                }
                $("#updDate").val(updDate);
                $("#updTask").attr("value", data['0'].name);

                $("body").on("click", "#canUpd", function () {
                    modal.style.display = "none";
                });

                $("#envUpd").click(function () {
                    $.ajax({
                        type: 'GET',
                        url: "./services.php",
                        dataType: "json",
                        data: {
                            id: id,
                            date: $("#updDate").val(),
                            tache: $("#updTask").val(),
                            action: "update"
                        },
                        success: function (data) {
                            document.getElementById("table").innerHTML = "";
                            affichage();

                            modal.style.display = "none";
                        }
                    });
                });
            }
        });
    }

    $("body").on("click", "#remove", function () {
        var idSup = $(this).attr("data-id");
        del(idSup);
    })
    function del(id) {
        var modal = document.getElementById("delModal");
        modal.style.display = "block";

        $("body").on("click", "#canSup", function () {
            modal.style.display = "none";
        });

        $("#envSup").click(function () {
            $.ajax({
                type: "GET",
                url: "./services.php",
                dataType: "json",
                data: {
                    id: id,
                    action: "remove",
                },
                success: function (data) {
                    document.getElementById("table").innerHTML = "";
                    affichage();

                    modal.style.display = "none";
                }
            });
        });
    }


    function affichage() {
        $.ajax({
            type: 'GET',
            url: './services.php',
            dataType: 'json',
            success: function (data) {
                var table = document.getElementById("table");
                table.innerHTML="";

                var trHea = document.createElement("tr");

                var firTh = document.createElement("th");
                firTh.innerHTML = "Numéro";

                var sndTh = document.createElement("th");
                sndTh.innerHTML = "Date";

                var thiTh = document.createElement("th");
                thiTh.innerHTML = "Tâche";

                var fouTh = document.createElement("th");
                fouTh.innerHTML = "Actions";

                trHea.appendChild(firTh);
                trHea.appendChild(sndTh);
                trHea.appendChild(thiTh);
                trHea.appendChild(fouTh);
                table.appendChild(trHea);

                for (var i = 0; i < data.length; i++) {
                    var firTr = document.createElement("tr");

                    var firTd = document.createElement("td");
                    firTd.innerHTML = data[i].id;

                    var sndTd = document.createElement("td");
                    sndTd.innerHTML = data[i].date;

                    var thiTd = document.createElement("td");
                    thiTd.innerHTML = data[i].name;

                    var fouTd = document.createElement("td");
                    fouTd.innerHTML = "<input type='image' src='./img/pencil.png' id='update' data-id='" + data[i].id + "' />";
                    fouTd.innerHTML += "<input type='image' src='./img/cancel.png' id='remove' data-id='" + data[i].id + "' />";

                    firTr.appendChild(firTd);
                    firTr.appendChild(sndTd);
                    firTr.appendChild(thiTd);
                    firTr.appendChild(fouTd);
                    table.appendChild(firTr);
                }
            }
        });
    }
});