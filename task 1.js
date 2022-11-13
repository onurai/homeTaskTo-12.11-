const form = document.querySelector('.blog-form');

const blogInput = document.getElementById('Blogbd');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('Number');
const nameInput = document.getElementById('Author');

const blog_validation= document.querySelector('.blog-validation');
const name_validation= document.querySelector('.name-validation') 
const number_validation= document.querySelector('.number-validation') 
const email_validation= document.querySelector('.email-validation') 


        
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if(blogInput.value == ""){
        blog_validation.classList.remove('deactive');
        blogInput.classList.add('active');
    }
    else{    
        blog_validation.classList.add('deactive');
    }

    if(emailInput.value == ""){
        email_validation.classList.remove('deactive');
        emailInput.classList.add('active');
    }
    else{
        email_validation.classList.add('deactive');
    }

    if(nameInput.value == ""){
        name_validation.classList.remove('deactive');
        nameInput.classList.add('active');
    }
    else{
        name_validation.classList.add('deactive');
    }
            
    if(numberInput.value == ""){
        number_validation.classList.remove('deactive');
        numberInput.classList.add('active');
    }
    else{
        number_validation.classList.add('deactive');
    }
            
})
        

