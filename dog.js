// var axios = require("axios");


$("#submit").on("click", function() {
    var typeOfBreed = $("#breed").val().trim();
    console.log(typeOfBreed);

    var queryURL = 'https://dog.ceo/api/breed/' + typeOfBreed + '/images';
    console.log(queryURL);

    $.ajax({
        url : queryURL,
        method :'GET'
    }).done(function(response) {
            var random = Math.floor(Math.random() * response.message.length);
            console.log(response.message);
            var imageDiv = $("<div>");
            var image = $("<img>");
            var dogPhoto = response.message[random];
            image.attr("src", dogPhoto);
            image.attr("height", 100);
            image.addClass("image-class");
            imageDiv.append(image);
            $("#photos").prepend(image, "<br>");
            
    })

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