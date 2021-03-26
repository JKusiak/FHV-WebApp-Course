export function addNavBar() {
    const navBarDiv = document.createElement("div");
    navBarDiv.className = "topnav";
    
    const homeRef = document.createElement("a");
    homeRef.className = "allmessages";
    homeRef.href = "home.html";
    homeRef.textContent = "Messages";

    const newMessageRef = document.createElement("a");
    newMessageRef.className = "newmessage";
    newMessageRef.href = "newmessage.html";
    newMessageRef.textContent = "Add new message";

    document.body.appendChild(navBarDiv);
    navBarDiv.appendChild(newMessageRef);
    navBarDiv.appendChild(homeRef);
}
