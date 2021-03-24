export function addNavBar() {
    const navBarDiv = document.createElement("div");
    navBarDiv.className = "topnav";
    
    const homeRef = document.createElement("a");
    homeRef.className = "active";
    homeRef.href = "#messages";
    homeRef.textContent = "Messages";

    const newMessageRef = document.createElement("a");
    newMessageRef.href = "#newmessage";
    newMessageRef.textContent = "New message";

    document.body.appendChild(navBarDiv);
    navBarDiv?.appendChild(homeRef);
    navBarDiv?.appendChild(newMessageRef);
}
