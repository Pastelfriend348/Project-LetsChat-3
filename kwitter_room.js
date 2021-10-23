 
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAK9ZwrKpvoH5bdXUXS_eTtbIm0yRJjkiQ",
      authDomain: "lets-chat-840e7.firebaseapp.com",
      projectId: "lets-chat-840e7",
      storageBucket: "lets-chat-840e7.appspot.com",
      messagingSenderId: "287296244857",
      appId: "1:287296244857:web:a3da6aa54630ae88a7d8a8",
      measurementId: "G-KVK147KLPF"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
<div id="" 
      //End code
      });});}
getData(); 







function addRoom() {
 
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}





function logout() {

}


function redirectToRoomName() {

}