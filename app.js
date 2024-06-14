


//---------------------Declarations----------------------
let patients = [];
let counter = 0;


let p_section = document.createElement("section");
let before_section = document.querySelector("footer");

//---------------------Append----------------------------
// document.body.appendChild(p_section);
document.body.insertBefore(p_section, before_section);
//----------------------Constructor----------------------
function user_info(name, pass, birth, gender, email, phone, dis) {
    this.user_name = name;
    this.password = pass;
    this.birth_day = birth;
    this.user_gender = gender;
    this.user_email = email
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
    let u_email = document.getElementById("_email").value;
    let u_phone = document.getElementById("_phone").value;
    let u_dis = document.getElementById("dis").value;


    // Validation rules
    let usernameRegex = /^\S*$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/><,.\[\]-]).{8,}$/;
    let birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^07\d{8}$/;

    // Perform validation
    let check = true;
    if (!u_name.match(usernameRegex)) {
        document.getElementById('e_name').textContent = 'Username must not contain spaces.';
        check = false;
    }
    else {
        document.getElementById('e_name').textContent = " ";

    }

    if (!u_pass.match(passwordRegex)) {
        document.getElementById('e_pass').textContent = 'Password must be at least 8 characters long, containing at least 1 number, 1 uppercase letter, and 1 special character.';
        check = false;
    }
    else {
        document.getElementById('e_pass').textContent = " ";

    }

    if (!u_birth.match(birthdayRegex)) {
        document.getElementById('e_birth').textContent = 'Birthday must be in YYYY-MM-DD format.';
        check = false;
    }
    else {
        document.getElementById('e_birth').textContent = " ";

    }

    if (!u_email.match(emailRegex)) {
        document.getElementById('e_email').textContent = 'Email must be in a valid format.';
        check = false;
    }
    else {
        document.getElementById('e_email').textContent = " ";

    }

    if (!u_phone.match(phoneRegex)) {
        document.getElementById('e_phone').textContent = 'Phone number must be 10 digits starting with 07.';
        check = false;
    }
    else {
        document.getElementById('e_phone').textContent = " ";

    }


    if (check == false) {
        // alert("Error ");
    }
    else {
        add_card();
    }

    function add_card() {
        //----------------------Constructor-------------------
        let p_obj = String("p" + counter);

        p_obj = new user_info(u_name, u_pass, u_birth, u_gender, u_email, u_phone, u_dis);

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
        let li_email = document.createElement("li");
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
        li_gender.innerHTML = "Email : " + p_arr[p_arr.length - 1].user_email;
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
        ul_info.appendChild(li_email);
        ul_info.appendChild(li_phone);
        ul_info.appendChild(li_dis);
    }

}


//------------------------Events-------------------------
document.getElementById("form").addEventListener("submit", render);

