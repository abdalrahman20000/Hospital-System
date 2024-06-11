
//---------------------Declarations----------------------
let patients = [];
let counter = 0;


let p_section = document.createElement("section");
let after_section = document.getElementById("s_form");

//---------------------Append----------------------------
document.body.appendChild(p_section);
//----------------------Constructor----------------------
function user_info(name, pass, birth, gender, phone, dis) {
    this.user_name = name;
    this.password = pass;
    this.birth_day = birth;
    this.user_gender = gender;
    this.phone_number = phone;
    this.diseases = dis;
}

//------------------------Functions----------------------
function render(event) {

    event.preventDefault();


    //---------------------Declarations-------------------
    let u_name = document.getElementById("_name").value;
    let u_pass = document.getElementById("_pass").value;
    let u_birth = document.getElementById("_birth").value;
    let u_gender = document.getElementById("_gender").value;
    let u_phone = document.getElementById("_phone").value;
    let u_dis = document.getElementById("dis").value;

    //----------------------Constructor-------------------
    let p_obj = String("p" + counter);

    p_obj = new user_info(u_name, u_pass, u_birth, u_gender, u_phone, u_dis);

    patients[counter] = p_obj;

    counter++;


    //---------------Convert To JSON-------------------------
    localStorage.setItem("patients", JSON.stringify(patients));



    //---------------Declarations Create-------------------------
    let paragraph = document.createElement("p");

    let p_info = document.createElement("p");
    let ul_info = document.createElement("ul");
    let li_pic = document.createElement("li");
    let li_name = document.createElement("li");
    let li_pass = document.createElement("li");
    let li_birth = document.createElement("li");
    let li_gender = document.createElement("li");
    let li_phone = document.createElement("li");
    let li_dis = document.createElement("li");

    let u_img = document.createElement("img");

    //---------------Convert To Js-------------------------
    let p_arr = JSON.parse(localStorage.getItem("patients"));

    //-----------------------Style-------------------------
    li_name.innerHTML = "User name : " + p_arr[p_arr.length - 1].user_name;
    li_pass.innerHTML = "Password : " + p_arr[p_arr.length - 1].password;
    li_birth.innerHTML = "Birth day : " + p_arr[p_arr.length - 1].birth_day;
    li_gender.innerHTML = "Gender : " + p_arr[p_arr.length - 1].user_gender;
    li_phone.innerHTML = "Phone : " + p_arr[p_arr.length - 1].phone_number;
    li_dis.innerHTML = "Disease : " + p_arr[p_arr.length - 1].diseases;


    u_img.src = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png";
    u_img.style.width = "150px";
    u_img.style.borderRadius = "100px";
    u_img.style.marginBottom = "15px";

    ul_info.style.listStyle = "none";
    ul_info.style.padding = "10px";


    p_section.style.display = "flex";
    p_section.style.flexWrap = "wrap";
    p_section.style.justifyContent = "center";

    p_info.style.border = "1px solid black";
    p_info.style.width = "fit-content";
    p_info.style.margin = "20px";

    //----------------------Append-------------------------
    p_section.appendChild(p_info);
    p_info.appendChild(ul_info);
    ul_info.appendChild(li_pic);
    li_pic.appendChild(u_img);
    ul_info.appendChild(li_name);
    ul_info.appendChild(li_pass);
    ul_info.appendChild(li_birth);
    ul_info.appendChild(li_gender);
    ul_info.appendChild(li_phone);
    ul_info.appendChild(li_dis);

}


//------------------------Events-------------------------
document.getElementById("form").addEventListener("submit", render);