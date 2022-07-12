// contact form validation start
let s_btn = document.getElementById('submit-btn');

s_btn.addEventListener('click', function(){
    let name = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if(name == '' || email == '' || subject == '' || message == ''){
        alert("You can not empty any field \n Please Fill The All Data...")
    }

});

// email validation start
function checkEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    email.click;
    alert('Please provide a valid email address');
    return false;
 }
}
// Call the function on Email textbox

// email validation end

// contact form validation end

// book appoinment section start
let app_btn = document.getElementById('appoinment-btn');

app_btn.addEventListener('click', function(){
    let dept_select = document.getElementById('dept-dropdown');
    let doc_select = document.getElementById('doctor-dropdown');
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let fullName = document.getElementById('fullName').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let app_message = document.getElementById('message-appoinment').value;

    if(dept_select == '' || doc_select == '' || date == '' || time == '' || fullName == '' 
    || phoneNumber == '' || app_message == ''){
        alert("You can not empty any field \n Please Fill The All Data Correctly...")
    }

});
// book appoinment section end

// Scroll Top Arrow Button after scroll Web Page Start
let scrollIcon = document.getElementById("scrollIcon");

window.onscroll = function(){
    let scroll = scrollY;
    if(scroll>100){
        //console.log(scroll);
        scrollIcon.classList.add('active');
    }else{
        scrollIcon.classList.remove('active');
    }
}
// Scroll Top Arrow Button after scroll Web Page End

// For Number Counters Start
// for Happy People
var count = 0;
var project = setInterval(project, 10);

function project(){
    count++;
    var num1 = document.getElementById("num1").innerHTML = count;
    if(count == 58){
        clearInterval(project);
    }
}
// for Surgery Completed
var count2 = 0;
var client = setInterval(client, 10);

function client(){
    count2++;
    var num2 = document.getElementById("num2").innerHTML = count2;
    if(count2 == 700){
        clearInterval(client);
    }
}
// for Experts Doctors
var count3 = 0;
var archive = setInterval(archive, 100);

function archive(){
    count3++;
    var num3 = document.getElementById("num3").innerHTML = count3;
    if(count3 == 40){
        clearInterval(archive);
    }
}

// for worldwide
var count4 = 0;
var worldwide = setInterval(worldwide, 100);

function worldwide(){
    count4++;
    var num4 = document.getElementById("num4").innerHTML = count4;
    if(count4 == 20){
        clearInterval(worldwide);
    }
}
// For Number Counters Finish

// footer end email subscribe input field validation start
let sub_btn = document.getElementById('button-addon2');

sub_btn.addEventListener('click', function(){
    let email_sub_input = document.getElementById('email-subscribe').value;

    if(email_sub_input == ''){
        alert("You can not empty any field \n Please provide a valid email address...")
    }

});
// footer end email subscribe input field validation end