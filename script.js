let img_box = document.getElementById("img_box");
let qr_img = document.getElementById("qr_img");
let qr_text = document.getElementById("qr_text");

function generateQR(){
    if(qr_text.value.length > 0){
        qr_img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qr_text.value;
        img_box.classList.add("show_img");
    }else{
        qr_text.classList.add("error");
        setTimeout(()=>{
        qr_text.classList.remove("error");
        },1000)
    }
}