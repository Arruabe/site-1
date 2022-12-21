//var canvas = document.getElementById ("canvas");

function message () {
    var userName = document.getElementById ("name");
    var lastName = document.getElementById ("lastname");
    var userAge = document.getElementById ("userage");
    var messageBox = document.getElementById ("message-box");
    var uN = String (userName.value);
    var lN = String (lastName.value);
    var uA = Number (userAge.value);
    var ageComment = (uA<40?"still a young person. Younger than me though, I'm 40 :)":"already a mature person. I myself am 40 years old now :)");

    messageBox.hidden= false;
    messageBox.innerHTML= "Hi " + uN + " " + lN + ", " + "you are navigating my fisrt attempt do build a site. I chose a form because it's obvously very usefull in day to day site crating. Also, I really decided to write down manually the code (no ctrl+C crtl+V here), experimenting, discovering, trying different ways to do it so I can build brick by brick a strong background to aim larger steps being able to really understand what I'm doing. It's nice to aknowlegde that you are " +ageComment;
}

