let editor = document.querySelector("#editor");
let b = document.querySelector("#boldBtn");

b.addEventListener("click", () => {
    // get the selection text
    let selection = window.getSelection();
    // check kuch select hua hai ya nahi
    // .isCollapsed humko batata hai ke select hua hai yaa nahi

    if (selection.isCollapsed) return;

    // jo select hua uska start or end humko getrangeat deta hai
    // 0 matlab kee jo pehla select hua hai
    const range = selection.getRangeAt(0);
    console.log(range.toString());

    // bold karne ke liye element create karna
    const strong = document.createElement("strong");

    // ek fragment ko strongtag ke andr append karna
    // advantage ye hai kee jo purana data rehta hai voh preserved rehta hai and hum sirf apne selection mai change karte hai
    strong.appendChild(range.extractContents());

    // insert kardenge hum strong ko uski exactposition mei
    range.insertNode(strong);
});
