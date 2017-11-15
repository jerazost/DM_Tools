const fs = require('fs');
const names = fs.readFileSync('./names', 'utf-8');
const list = names.split('\n').join(' ').split('\t');

fs.writeFile("names.json", JSON.stringify(list), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 