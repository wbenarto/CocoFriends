
$("#submit").on("click", function() {
    var typeOfBreed = $("#breed").val().trim();

    var queryURL = 'https://dog.ceo/api/breed/' + typeOfBreed + '/images';

    $.ajax({
        url : queryURL,
        method :'GET'
    }).done(function(response) {
        console.log(response);

        if(response.status === "success") {
            var random = Math.floor(Math.random() * response.message.length);
            console.log(response.message);
            var imageDiv = $("<div>");
            var image = $("<img>");
            var dogPhoto = response.message[random];
            image.attr("src", dogPhoto);
            image.attr("height", 250);
            image.addClass("image-class");
            imageDiv.append(image);
            $("#photos").html(imageDiv, "<br>");
        }  
    })

    return false;
});