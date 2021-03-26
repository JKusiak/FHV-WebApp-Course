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
   
    updateNavBar()
}

export function updateNavBar() {
    let allMessages = JSON.parse(localStorage.getItem('allmessages') || '[]');
    let totalNew: number = 0;

    for (let msgNumber in allMessages) {
        if (!allMessages[msgNumber].isRead){
            totalNew += 1;
        }
    }

    const navBarDisplay = document.querySelector(".allMessages");
    if (totalNew > 5) {
        navBarDisplay.textContent = `Messages(5+)`;
    } else if (totalNew <= 5 && totalNew > 0) {
        navBarDisplay.textContent = `Messages(${totalNew})`;
    } else {
        navBarDisplay.textContent = `Messages`;
    }
}
