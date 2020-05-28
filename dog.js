// var axios = require("axios");

var typeOfBreed = [];

$("#submit").on("click", function() {
    var input = $("#breed").val().trim();
    typeOfBreed.push(input);
    console.log(typeOfBreed);

    return false;
});


// axios.get('https://dog.ceo/api/breed/' + typeOfBreed + '/images')
//   .then(function (response) {
//     var random = Math.floor(Math.random() * response.data.message.length);
//     console.log(response.data.message[random]);

//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })