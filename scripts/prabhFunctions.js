// Written by Prabh: my experimental functions here bere combining with main javascript folder


// function will keep track of user's UID on any page they are in. Add listeners to buttons on nav bar/
// INPUT: none
// OUTPUT: none
function sayHello() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // Do something for the user here. 
            console.log(user.uid);
            db.collection("users").doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name;
                    console.log(n);
                    //$("#username").text(n);
                    // document.getElementById("username").innerText = n;


                })

            document.getElementById("profileGo")
                .addEventListener("click", function () {
                    window.location.href = "account.html?id=" + user.uid;
                });

            document.getElementById("helpGo")
                .addEventListener("click", function () {
                    window.location.href = "help.html?id=" + user.uid;
                });

            document.getElementById("favoritesGo")
                .addEventListener("click", function () {
                    window.location.href = "favorites.html?id=" + user.uid;
                });

            document.getElementById("homeGO")
                .addEventListener("click", function () {
                    window.location.href = "mainpage.html?id=" + user.uid;
                });
        } else {
            // No user is signed in.
        }
    });
}
sayHello();