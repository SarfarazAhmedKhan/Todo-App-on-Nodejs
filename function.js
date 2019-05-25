var prompt = require('prompt');
var list = ["apple", "banana", "mango"];

function addItem() {
    console.log("current list=>>");
    for (var key in list) {
        console.log(key + " " + list[key]);
    }
    prompt.start();
    prompt.get(['addItem'], function (err, result) {
        var get = false;
        for (var key in list) {
            if (result.addItem == list[key]) {
                console.log("item already exist");
                get = true;
            }
        }
        if (get == false) {
            list.push(result.addItem);
            console.log("view list after adding new items==>");
            for (var key in list) {
                console.log(key + " " + list[key]);
            }
        }
    });
}

function removeItem() {
    console.log("current list=>>");
    for (var key in list) {
        console.log(list[key]);
    }
    prompt.start();
    prompt.get(['removeItems'], function (err, result) {
        var get = false;
        for (var key in list) {
            if (result.removeItems == list[key]) {
                list.splice(key, 1)
                get = true;
            }
        }
        if (get == true) {
            console.log("view list after removing items==>");
            for (var key in list) {
                console.log(list[key]);
            }
        } else {
            console.log("item not found to remove");
        }
    });
}
function searchItem() {
    prompt.start();
    prompt.get(['searchItem'], function (err, result) {
        var get = false;
        for (var key in list) {
            if (result.searchItem == list[key]) {
                console.log("item found", list[key] + " at index" + key);
                get = true;
            }
        }
        if (get == false) {
            console.log("item not found");
        }
    });
}
module.exports = {
    addItem,
    searchItem,
    removeItem,
}