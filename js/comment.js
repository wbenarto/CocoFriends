
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBvyCSqcfxKLo7fkbAFPxQrLQZo-MHzQQ0",
    authDomain: "coco-comment.firebaseapp.com",
    databaseURL: "https://coco-comment.firebaseio.com",
    projectId: "coco-comment",
    storageBucket: "coco-comment.appspot.com",
    messagingSenderId: "1051166316272",
    appId: "1:1051166316272:web:17ea933dc771a659835435",
    measurementId: "G-5MB2T23EGT"
  };

  firebase.initializeApp(firebaseConfig);

  var comment="";

  $("#submit").on("click", function(){
      comment = $("#comment").val().trim();
      console.log(comment);
      firebase.database().ref().push({
        Comment:comment
      });
      return false;
  });

  firebase.database().ref().on("child_added", function(snapshot){
        if(snapshot.val().Comment === undefined) {
            return; 
        }
        $("#conversation").append(snapshot.val().Comment + "<br>"); 
  });
