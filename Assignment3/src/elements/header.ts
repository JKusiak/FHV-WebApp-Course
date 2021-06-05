export function addHeader() {
    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "Messenger VeryLite";

    document.body.appendChild(header);
}