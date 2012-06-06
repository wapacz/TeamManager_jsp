var G_SERVER = "http://localhost:8081/";

function initialize() {
    $.ajax({
        url: G_SERVER+"TaskManager/db/proxy.json",
        type: "get",
        dataType: "json",
        success: function(response) {
            var json = eval(response);

            // *** proposal/idea ***
            // view = controller.selectView(response)
            // view.display(response);
            
            $("#output").html("OK: " + json.message);            
        },
        error: function(response) {
            $("#output").html("ERROR: " + response.message);
        }
    });    
}