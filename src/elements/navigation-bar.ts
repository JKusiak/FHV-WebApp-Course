export function addNavBar() {
    const navBarDiv = document.createElement("div");
    navBarDiv.className = "topNav";
    
    const homeRef = document.createElement("a");
    homeRef.className = "allMessages";
    homeRef.href = "home.html";
    homeRef.textContent = "Messages";

    const newMessageRef = document.createElement("a");
    newMessageRef.className = "newMessage";
    newMessageRef.href = "newmessage.html";
    newMessageRef.textContent = "Add new message";

    document.body.appendChild(navBarDiv);
    navBarDiv.appendChild(newMessageRef);
    navBarDiv.appendChild(homeRef);
}
