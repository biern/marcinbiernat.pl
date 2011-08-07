YUI({
    gallery: 'gallery-2011.03.11-23-49'
}).use("node", "gallery-dialog", function(Y) {
    var dialog = new Y.Dialog({ draggable: false }),
        name = "me",
        server = "marcinbiernat.pl",
        mail = name + "@" + server,
        content;

    Y.on("contentready", function () {
        // Get html from <noscript> node
        content = Y.Node.create(
            Y.one("noscript").get("text")).one(".about-info-content");
        // Set friendlier email form
        content.one("#about-email").setContent(
            Y.Node.create("<a>" + mail + "</a>").
                set("href", "mailto:" + mail));
    }, "noscript");

    Y.on("domready", function () {
        // Show email button and bind it to dialog
        Y.one("#about-email-button").show().on("click", function (e) {
            e.preventDefault();
            dialog.build("Contact info", content).addCloseButton();
            dialog.show();
        });
    });
});
