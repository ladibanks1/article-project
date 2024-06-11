const share = document.getElementById("icon");
const design = document.getElementById("design");
const body = document.getElementsByTagName("body")
design.style.display = "none"
const dialog = document.getElementById("dialog-box");
share.addEventListener("mouseover" , () => {
    design.style.display = "block";
    dialog.showModal();

    if(innerWidth < 700){
        design.style.display = "none";
    }
})
share.addEventListener("mouseout" , () => {
    design.style.display = "none"
    dialog.close()
})