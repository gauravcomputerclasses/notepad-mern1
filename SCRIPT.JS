let editor = document.querySelector("#editor");
let b = document.querySelector("#boldBtn");
let u = document.querySelector("#underlineBtn");
let i = document.querySelector("#italicBtn");
let font = document.querySelector("#fontFamily");
let charcter = document.querySelector("#charCount");
let word = document.querySelector("#wordCount");

let fontSize = document.querySelector("#fontSize");
let colorPicker = document.querySelector("#textColor");

function applyStyles(tagName) {
    // get the selection text
    let selection = window.getSelection();
    // console.log(selection);

    // check kuch select hua hai ya nahi
    // .isCollapsed humko batata hai ke select hua hai yaa nahi

    if (selection.isCollapsed) return;

    // jo select hua uska start or end humko getrangeat()  deta hai
    // 0 matlab kee jo pehla select hua hai
    const range = selection.getRangeAt(0);
    // console.log(range.toString());
    // console.log(range.extractContents());

    // bold karne ke liye element create karna
    const tag = document.createElement(`${tagName}`);

    // ek fragment ko strong tag ke andr append karna
    // advantage ye hai kee jo purana data rehta hai voh preserved rehta hai and hum sirf apne selection mai change karte hai
    tag.appendChild(range.extractContents());

    // insert kardenge hum strong ko uski exactposition mei
    range.insertNode(tag);
}

b.addEventListener("click", () => applyStyles("strong"));
u.addEventListener("click", () => applyStyles("u"));
i.addEventListener("click", () => applyStyles("i"));

font.addEventListener("change", (e) => {
    editor.style.fontFamily = e.target.value;
});

editor.addEventListener("input", (e) => {
    let text = e.target.textContent;
    charcter.innerText = text.length;
    word.innerText = text.split(" ").length;
});


fontSize.addEventListener("change", () => {
editor.style.fontSize = fontSize.value;
});
colorPicker.addEventListener("input", () => {
editor.style.color = colorPicker.value;
});