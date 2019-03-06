let value;
let counter = 0;
let loremValue = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at, sunt quia dolores iste sit? Laboriosam qui accusantium vel corrupti dolore ad quibusdam tenetur, necessitatibus est commodi tempore magnam. Sapiente?";

function previewFile() {
    let file = document.querySelector('input[type=file]').files[0]; //sames as here
    let reader = new FileReader();

    reader.onloadend = function () {
        // document.getElementById("addingthetext").innerHTML = "<img src='" + reader.result + "'>";
        setTimeout(() => {
            document.getElementById("tochange" + counter + "").style = "background-image: url('" + reader.result + "');"
        }, 1000)
    }
    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    }
}

document.getElementById("button").addEventListener("click", dothis);

function dothis() {
    document.getElementById("addingthetext").innerHTML = '<textarea id="textarea" cols="30" rows="10"></textarea><input type="file" multiple="false" accept="image/*"><button id="submit" onclick="dothat();">Submit</button>';
}

function dothat() {
    previewFile();
    counter++;
    value = document.getElementById("textarea").value;
    if (value == "lorem") {
        value = loremValue;
    }
    document.getElementById("addingthetext").innerHTML = '';
    document.getElementById("mainContainer").innerHTML += '<li class="s_post"><div class="s_post-inner"><div class="s_image" id="tochange' + counter + '"></div><div class="s_content">' + value + '</div></div></li>'
}