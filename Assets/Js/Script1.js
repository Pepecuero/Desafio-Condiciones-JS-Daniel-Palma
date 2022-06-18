const image = document.querySelector(".card");

image.addEventListener ("click", function(){
    if (image.style.border != ""){
        image.style.border = "";
    } else {
        image.style.border = "solid 2px red";
    }

}
)

