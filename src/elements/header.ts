export function addHeader() {
    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "Messenger VeryLight";

    document.body.appendChild(header);
}