//set the initial array containing the images urls of the houses


//check if the text submitted is an email
function validateEmail(id_email) {
  var email = id_email;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
  }else{
    return true;
  }
}

//if the email submitted match so the email is send
function sendMessage(id_email){
    if(validateEmail(id_email)){
      alert("Message sent succesfully");

    }else{
      alert("Message not sent. Be sure to have typed an email address");

    }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//check if the date submitted is like DD/MM/YY
function validateDate(input){
  var reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    if (input.match(reg)) {
      return true;
    }else {
      alert("Please enter dd/mm/yyyy");
      return false;
    }
}
function action_page(){
  if (typeof(Storage) !== "undefined") {
    if(validateDate(document.getElementById("in").value) &&
      validateDate(document.getElementById("out").value) &&
      (document.getElementById("number_adults").value != "" || document.getElementById("number_kids").value != "")){
        window.localStorage.setItem("chek_in",document.getElementById("in").value);
        window.localStorage.setItem("chek_out",document.getElementById("out").value);
        window.localStorage.setItem("number_adults",document.getElementById("number_adults").value);
        window.localStorage.setItem("number_kids",document.getElementById("number_kids").value);

     }else{

     }
  }else {
    document.getElementById("result").innerHTML = "web Storage non supportato";
    alert("not supported");
  }

}

function init(){

      if (typeof(Storage) !== "undefined") {
      // prendo valore salvato e assegno al campo src del tag img con id image
      document.getElementById('image').src = localStorage.getItem('img_url');
      document.getElementById('image_living').src = window.localStorage.getItem('img_url_living');
      document.getElementById('image_dining').src = window.localStorage.getItem('img_url_dining');
      document.getElementById('image_living_2').src = window.localStorage.getItem('img_url_living_2');
      
      document.getElementById('liv').src = window.localStorage.getItem('img_url_living');
      document.getElementById('bed').src = window.localStorage.getItem('img_url');
      document.getElementById('din').src = window.localStorage.getItem('img_url_dining');
      document.getElementById('2liv').src = window.localStorage.getItem('img_url_living_2');

      } else {
      document.getElementById("result").innerHTML = "web Storage non supportato";
      alert("not supported");
      }

}



function Subscribe(email_in){
    if(validateEmail(email_in)){
        document.getElementById('subscribe').style.display='none';
    }else{

    }
}
// Script to open and close sidebar when on tablets and phones
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Slideshow Apartment Images

function slide_apart(){
  var slideIndex = 1;
  showDivs(slideIndex);
}
function plusDivs(n) {

  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}

//check if the date submitted is like MM/YY
function validDate(dValue) {
    var result = false;
    dValue = dValue.split('/');
    var pattern = /^\d{2}$/;
    if (dValue[0] < 1 || dValue[0] > 12)
      result = true;
    if (!pattern.test(dValue[0]) || !pattern.test(dValue[1]))
      result = true;
    if (dValue[2])
      result = true;
    if (result){ alert("Please enter a valid date in MM/YY format."); return false;}else{return true;}

}

  function submitPay(){
    if(document.getElementById('card_owner').value != "" &&
      !isNaN(document.getElementById('number_card').value) &&
      document.getElementById('number_card').value.length == 16 &&
      !isNaN(document.getElementById('cvc_card').value) &&
      document.getElementById('cvc_card').value.length == 3 &&
      validDate(document.getElementById('expiration_date_card').value) &&
      validateEmail(document.getElementById('email_card').value)){
                window.localStorage.setItem("card_owner_ls",document.getElementById('card_owner').value);
                window.localStorage.setItem("number_card_ls",document.getElementById('number_card').value);
                window.localStorage.setItem("cvc_ls",document.getElementById('cvc_card').value);
                window.localStorage.setItem("expiration_date_card_ls",document.getElementById('expiration_date_card').value);
                window.localStorage.setItem("email_card_ls",document.getElementById('email_card').value);
                alert("payment submitted succesfully");
                document.getElementById('form_of_pay').action = "index.html";
    }else{
      document.getElementById('form_of_pay').action = "payment.html";
      alert("There are some missing field!");
    }
  }
