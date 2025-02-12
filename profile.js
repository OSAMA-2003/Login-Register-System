function loadProfile() {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
        
        window.location.href = "index.html";
        return;
    }
    document.getElementById("profile-name").innerText = `Name: ${user.name}`;
    document.getElementById("profile-email").innerText = `Email: ${user.email}`;
    document.getElementById("profile-container").classList.remove("hidden");
}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}

loadProfile();