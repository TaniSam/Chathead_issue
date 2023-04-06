var firebaseConfig = {
      apiKey: "AIzaSyBlAtiSTz96iT0JldKbYh6IO3wrae-0cPo",
      authDomain: "chathead-ce49b.firebaseapp.com",
      databaseURL: "https://chathead-ce49b-default-rtdb.firebaseio.com",
      projectId: "chathead-ce49b",
      storageBucket: "chathead-ce49b.appspot.com",
      messagingSenderId: "1093231822588",
      appId: "1:1093231822588:web:eed1b04953c6a5f141b979"
    };


    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");

    function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push(
            {
                  name: user_name,
                  message: msg,
                  likes: 0
            }
      );
     document.getElementById("msg").value= "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

console.log(firebase_message_id);
console.log(message_data);
names = message_data['name'];
message = message_data['message'];
like = message_data['likes'];
show_name= "<h4>"+ names + "<img class='user_tick' src='tick.png'> </h4>";
show_message= "<h4 class='message_h4'>" +message+ "</h4>";
like_btn= "<button class='btn btn-warning' id="+ firebase_message_id + "value=" + like + "onclick= 'updateLike(this.id)'>";
span_btn= "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span> </button> <hr>";
row= show_name + show_message + like_btn + span_btn ;
document.getElementById("output").innerHTML += row;

      } });  }); }
getData();

function updateLike(message_id){
      console.log(message_id);
 likes= document.getElementById(message_id).value ;
 update_likes= Number(likes) +1;
 console.log(update_likes);
 firebase.database().ref(room_name).child(message_id).update({
       likes: update_likes
 });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}



