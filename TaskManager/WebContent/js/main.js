var G_SERVER = "http://localhost:8081/";

/**
 * Initialize dynamic page
 */
function initialize() {
    /*
     * // Create form $form = $("<div>").addClass("ui-widget"); $form1 = $("<form>");
     * $form.append($form1);
     * 
     * $title = $("<div>"); $title.append("<a>").text("Title");
     * $title.append($("<input>").attr({"id": "title", "type": "text"}));
     * $form1.append($title);
     * 
     * $description = $("<div>"); $description.append("<a>").text("Description");
     * $description.append($("<input>").attr({"id": "description", "type":
     * "text"})); $form1.append($description);
     * 
     * $type = $("<div>"); $type.append("<a>").text("Type"); $type.append($("<input>").attr({"id":
     * "type", "type": "text"})); $form1.append($type);
     * 
     * $("body").append($form);
     * 
     * $form.dialog();
     *  // *** proposal/idea *** // view = controller.selectView(response) //
     * view.display(response);
     * 
     * $button = $("<button>").text("Confirm").button({ icon: { primary:
     * "ui-icon-trash" } }).click(function() { $.ajax({ url:
     * G_SERVER+"TaskManager/db/proxy.json", type: "get", data:
     * JSON.stringify($form1), dataType: "json", success: function(response) {
     * var json = JSON.parse(response); alert("json.message") }, error:
     * function(error) { $("#output").html("ERROR: " + error.message); } }); });
     * $form1.append($button);
     * 
     * //$output = $("<div>"); //$output.html("OK: " + json.message);
     * 
     * //$("body").append($output);
     */

    $fields = $([]).add($("#name")).add($("#password")).add($("#email"));

    $("#dialog-form").dialog({
        autoOpen : false,
        height : 350,
        width : 450,
        modal : true,
        buttons : {
            "Add task" : function() {
                $.ajax({
                    url : G_SERVER + "TaskManager/db/proxy.json",
                    type : "get",
                    // data: JSON.stringify($fields),
                    dataType : "json",
                    success : function(response) {
                        var json = JSON.parse(response);
                        alert(json.message);
                        $("#dialog-form").dialog("close");
                    },
                    error : function(error) {
                        $("#output").html("ERROR: " + error.message);
                    }
                });
            },
            "Cancel" : function() {
                $(this).dialog("close");
            }
        },
        close : function() {
            allFields.val("").removeClass("ui-state-error");
        }
    });

    $("#create-user").button().click(function() {
        $("#dialog-form").dialog("open");
    });
}