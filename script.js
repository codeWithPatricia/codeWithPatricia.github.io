

//window scroll

$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop >=100){
        $('body').addClass('fixed-header');
    }else{
        $('body').removeClass('fixed-header');
    }
});

// close the navbar when a link is clicked
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        // Collapse the navbar
        const navbarCollapse = document.getElementById('navbar-collapse-toggle');
        const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        bootstrapCollapse.hide();
    });
});

// Portfolio Section 
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-button");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove the 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add the 'active' class to the clicked button
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            portfolioItems.forEach(item => {
                if (filter === "all") {
                    item.classList.add("show");
                } else {
                    if (item.classList.contains(filter)) {
                        item.classList.add("show");
                    } else {
                        item.classList.remove("show");
                    }
                }
            });
        });
    });

    // Trigger click on the first filter button (All) to show all items initially
    filterButtons[0].click();
});

// Hide navbar on portfolio section
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const portfolioSection = document.getElementById('portfolio');
    const serviceSection = document.getElementById('service');

    function checkNavbarVisibility() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const portfolioTop = portfolioSection.offsetTop;
        const serviceBottom = serviceSection.offsetTop + serviceSection.offsetHeight;

        if (scrollPosition > portfolioTop && scrollPosition < (portfolioTop + portfolioSection.offsetHeight)) {
            // In the portfolio section, hide the navbar
            navbar.classList.add('hidden');
        } else if (scrollPosition > serviceBottom) {
            // After the end of the service section, hide the navbar
            navbar.classList.add('hidden');
        } else {
            // Otherwise, show the navbar
            navbar.classList.remove('hidden');
        }
    }

    // Check visibility on scroll
    window.addEventListener('scroll', checkNavbarVisibility);

    // Also check on page load
    checkNavbarVisibility();
});




//Document Ready
$(document).ready(function(){

    //Typing animation

        new Typed('#type-it', {
            strings: ['Data Analyst','Freelancer'],
            typeSpeed: 100,
            loop:true
      });

        // Owl Carousel
        var owl = $('.owl-carousel');
        owl.owlCarousel({
          margin: 30,
          loop: true,
          items:2,
          autoplay:true,
          autoplayTimeout: 2000,
          responsive: {
            0: {
              items: 1
            },
            900: {
              items: 2
            },
          }
        })
  
});

// Contact Form To Email
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail(){

    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${message.value}`;

Email.send({
    SecureToken: "0272fb91-6cbe-4efe-80a0-8aa660c98ef2",
    Host : "smtp.elasticemail.com",
    Username : "iheonyekachukwu@gmail.com",
    Password : "379BF1FBDCEC71B10E23B1349AF57FFDBD38",
    To : 'iheonyekachukwu@gmail.com',
    From : "iheonyekachukwu@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if (message == "OK"){
        Swal.fire({
            title: "Success",
            text: "Message sent successfully!",
            icon: "success"
          });
    }
  }
);
}

function checkInputs(){
    const items = document.querySelectorAll(".item");

    for (const item of items ){
        if (item.value ==""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != ""){
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/ ;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != ""){
            errorTxtEmail.innerText= " Enter a valid email address";
        }
        else{
        errorTxtEmail.innerText= " Email Addres can't be blank";
    }
}
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")){
        
    sendEmail();

    form.reset();
    return false;
    }

});
