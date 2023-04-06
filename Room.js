var firebaseConfig = {
    apiKey: "AIzaSyDO-XIxQ-w2lrPC50YZb_Vql9heWW3tBg4",
  authDomain: "chathead-30930.firebaseapp.com",
  databaseURL: "https://chathead-30930-default-rtdb.firebaseio.com",
  projectId: "chathead-30930",
  storageBucket: "chathead-30930.appspot.com",
  messagingSenderId: "72804731925",
  appId: "1:72804731925:web:e1b2630e7f98b5e512521c"
  };
  
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

   row= "<div class='room_name' id=' "+Room_names +"onclick='redirectToRoomName(this.id)'>#" +Room_names + "</div> <hr>";
   document.getElementById("output").innerHTML += row;
    });});}
getData();

 var user_name= localStorage.getItem("Username",user_name);
document.getElementById("salutation").innerHTML= "Welcome "+ user_name + " !";

function add_room_name(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "Adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="ChatHead_page.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="ChatHead_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "index.html";
}