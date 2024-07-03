function validateForm() {
    let name = document.querySelector('#name').value;
    let birthDate = document.querySelector('#birth').value;
    let gender = document.querySelector('#gender').value;
    let message = document.querySelector('#message').value;

    console.log(name);
    console.log(birthDate);
    console.log(gender);
    console.log(message);
    
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
