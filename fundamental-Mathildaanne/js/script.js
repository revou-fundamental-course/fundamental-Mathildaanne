<<<<<<< HEAD
// Banner AutoSlide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Form Validation
function validateForm() {
    let name = document.querySelector('#name').value;
    let birthDate = document.querySelector('#orderDate').value;
    let gender;
    let genderElements = document.getElementsByName('jkel');
    for (let i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
            break;
        }
    }
=======
function validateForm() {
    let name = document.querySelector('#name').value;
    let birthDate = document.querySelector('#birth').value;
    let gender = document.querySelector('#gender').value;
>>>>>>> 49282b4603cb5c4395fe98b821836d81845c5f51
    let message = document.querySelector('#message').value;

    console.log(name);
    console.log(birthDate);
    console.log(gender);
    console.log(message);
    
<<<<<<< HEAD
// Output
    if (name != "" && birthDate != "" && gender != undefined && message != "") {
        document.querySelector('#outputName').innerHTML = 'Nama: ' + name;
        document.querySelector('#outputTanggalOrder').innerHTML = 'Tanggal Order: ' + birthDate;
        document.querySelector('#outputKelamin').innerHTML = 'Jenis Kelamin: ' + gender;
        document.querySelector('#outputPesan').innerHTML = 'Pesan: ' + message;
    } else {
        alert("Inputan ada yang kosong");
    }
}
=======
    if (name != "" && birthDate != "" && gender != "" && message != "") {
        document.querySelector('#output').innerHTML = name + ''
    } else {
        alert("Inputan ada yang kosong");
    }
}

let indexSlide = 0;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('banner-item');
    if (n >= listImage.length) indexSlide = 0;
    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide].style.display = 'block';
}
>>>>>>> 49282b4603cb5c4395fe98b821836d81845c5f51
