var fs = require("fs");

var packageFolder = process.argv[process.argv.length - 1]; // picking the last argument as the directory

var path = packageFolder + "/package-lock.json";
var stats = fs.lstatSync(path);
var isFile = stats.isFile();
if (!isFile) {
    console.log("File not found:'"+ path + "'");
} else {
    console.log("Reading from:'" + path + "'");
    var text = fs.readFileSync(path, "utf-8");

    if (text.match("http://")) {
        var newText = "";
        var lines = text.split("\n");
        var n = lines.length;
        for (var i = 0; i < n; i++) {
            newText += lines[i].replace("http://", "https://") + "\n";
        }
        console.log("Writing to:'" + path + "'");
        fs.writeFileSync(path, newText);
    } else {
        console.log("OK. No 'http://' match.");
    }
}
