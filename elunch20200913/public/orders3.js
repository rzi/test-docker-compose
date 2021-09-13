window.onload = function() {
    var selections = [];
    var dayBefore;
    var $table = $("#table");

    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;

    if (day - 5 <= 0) {
        dayBefore = 25;
        month = month - 1;
        if (month < 1) {
            month = 12;
        }
        if (month < 10) {
            month = "0" + month;
        }
    } else {
        dayBefore = day - 5;
    }

    if (dayBefore < 10) {
        dayBefore = "0" + dayBefore;
    }
    var userDBhistory2 = document.getElementById("userDBhistory");
    var resultuser = userDBhistory2.options[userDBhistory2.selectedIndex].value;

    var before_few_days = now.getFullYear() + "-" + month + "-" + dayBefore;
    document.getElementById("data_to").value = today;
    document.getElementById("data_from").value = before_few_days;
    document.getElementById("btn").addEventListener("click", function() {
        userDBhistory2 = document.getElementById("userDBhistory");
        resultuser = userDBhistory2.options[userDBhistory2.selectedIndex].value;


        // Make a request for a user with a given ID
        axios
            .post("/home/orders3", {
                data_from: document.getElementById("data_from").value,
                data_to: document.getElementById("data_to").value,
                userDBhistory: resultuser
            })
            .then(function(response) {
                // handle success
                var table_data = response.data.message;
                var table_data2 = JSON.stringify(table_data);
                console.log("table_data: " + table_data2);

                $table.bootstrapTable("destroy");

                $table.bootstrapTable({ data: table_data });

            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .finally(function() {
                // always executed
            });
    });


    // Make a request for a user with a given ID
    axios

        .post("/home/orders3", {
            data_from: document.getElementById("data_from").value,
            data_to: document.getElementById("data_to").value,
            userDBhistory: resultuser
        })
        .then(function(response) {

            // handle success
            var userDBhistory = document.getElementById("userDBhistory");
            var users_json = response.data.message1;
            var users_json2 = JSON.stringify(users_json);
            // console.log("users_json: " + users_json2);
            var j = 1;
            for (let i = 0; i < users_json.length; i++) {
                var el = users_json[i].sesa_no;
                var listName = users_json[i].first_name + " " + users_json[i].last_name;
                var o = document.createElement("option");
                o.text = listName;
                o.value = el;
                document.getElementById("userDBhistory").add(o);
            }

            // handle success
            var table_data = response.data.message;
            var table_data2 = JSON.stringify(table_data);
            //console.log("table_data: " + table_data2);
            $table.bootstrapTable("destroy");
            $table.bootstrapTable({ data: table_data });
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
        .finally(function() {
            // always executed
        });

    function customSort(sortName, sortOrder, data) {
        var order = sortOrder === 'desc' ? -1 : 1
        data.sort(function(a, b) {
            var aa = +((a[sortName] + '').replace(/[^\d]/g, ''))
            var bb = +((b[sortName] + '').replace(/[^\d]/g, ''))
            if (aa < bb) {
                return order * -1
            }
            if (aa > bb) {
                return order
            }
            return 0
        })
    }


}; //end of window load