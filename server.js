const express = require("express");
const app = express();
app.use(express.static('./dist/SpaceLauncher'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/SpaceLauncher/'});
});

app.listen(8080);