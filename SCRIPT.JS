let editor = document.querySelector("#editor");
let b = document.querySelector("#boldBtn");

b.addEventListener("click", () => {
    let content = editor.textContent;
    let text = window.getSelection();
    let range = text.getRangeAt(0);

    let formatted = content.substring(0, range.startOffset);
    let bold = `<strong>${content.substring(range.startOffset, range.endOffset)}</strong>`;
    editor.innerHTML = formatted + bold;
});
