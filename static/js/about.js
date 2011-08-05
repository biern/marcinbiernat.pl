YUI({
    //Last Gallery Build of this module
    gallery: 'gallery-2011.03.11-23-49'
}).use("node", "gallery-dialog", function(Y) {
    var dialog = new Y.Dialog({ draggable: false }),
        name = "contact",
        server = "marcinbiernat.pl",
        m = name + "@" + server,
        msgNode = Y.Node.create("<div>email: </div>");

    msgNode.appendChild("<a></a>").set("text", m).set(
        "href", "mailto:" + m);

    Y.all(".js-hide").hide();
    Y.all(".js-show").show();
    Y.one("#about-email-button").on("click", function (e) {
        e.preventDefault();
        dialog.build("Contact info", msgNode).addCloseButton();
        dialog.show();
    });
});
