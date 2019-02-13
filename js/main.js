// burger

$(document).ready(function(){
    $('.burger').click(function(){
        $('.nav').toggleClass('nav-active');
    })
})

// nav active remove//add class
var navItems = document.querySelectorAll('.nav .nav-li');
var nav = document.querySelector('nav');

nav.addEventListener('click', function(event){
    navItems.forEach(function(el,index){
        if(el.classList.contains('active')){
            active = el;
            el.classList.remove('active')
            var toBeActive = event.target;
            var parent = toBeActive.parentElement
            parent.classList.add('active');
        } 
        nav.classList.remove('nav-active') 
    })
});

// img filter btns active

let btnItems = document.querySelectorAll('.botton-wrapper h1');
let btnWrapper = document.querySelector('.botton-wrapper');

btnWrapper.addEventListener('click', function(event){
    btnItems.forEach(function(el,index){
        if(el.classList.contains('black-active')){
            blackActive = el;
            el.classList.remove('black-active');
            let toBeActive = event.target;
            // let parent = toBeActive.parentElement;
            toBeActive.classList.add('black-active');
        }  
    })
});

let gBtns = document.querySelectorAll('.gallery .botton-wrapper h1');
let gImgs = document.querySelectorAll('.gallery .portfolio-box');
let gBtnsWrapper = document.querySelector('.gallery .botton-wrapper');

gBtnsWrapper.addEventListener('click', function(e){
    let clicked = e.target;
    let toSearch = clicked.innerText.toLowerCase();

    if (toSearch != "all"){
        gImgs.forEach(function(el){
            el.classList.add("hidden")
        })
        document.querySelectorAll("."+toSearch).forEach(function(el){
            el.classList.remove("hidden");
        })
    } else {
        gImgs.forEach(function(el){
            el.classList.remove("hidden");
        })
    }
});


window.addEventListener('scroll',function () {
    headerScroll();
    section3Animation();
    section4Animation();
    goTop();
});

function section3Animation() {
    if (window.scrollY > 100) {
        let section3 = document.getElementById('test');
        section3.classList.add('fadeInUp');
    }
};

function section4Animation() {
    if (window.scrollY > 1000) {
        let section4 = document.getElementById('section-4');
        section4.classList.add('bounceInLeft');
    }
};

function goTop() {
    let goTop = document.getElementById('gotop');
    if (window.scrollY > 200) {
        goTop.classList.add('show');
        goTop.classList.add('anime');
    }else {
        goTop.classList.remove('show');
        goTop.classList.remove('anime');
    }
};

function headerScroll() {
    let top = document.getElementById('navigation');
    let navUl = document.getElementById('nav-ul');
    let ypos = window.pageYOffset;
    if (ypos > 200) {
        top.style.height = '70px';
        navUl.style.marginLeft = '360px';
    }else {
        top.style.height = '103px';
        navUl.style.marginLeft = '0px';
    }
}

// log-in form
let logIn = document.getElementById('logIn');
let closeBtn = document.getElementById('closeBtn');
let loginForm = document.getElementById('loginForm');

logIn.addEventListener('click', showLogin);
closeBtn.addEventListener('click', closeLogin);
function showLogin() {
    loginForm.classList.add('show', 'animateZoom');
}
function closeLogin() {
    loginForm.classList.remove('show', 'animateZoom');
}

// comment box  //

let commentForm = document.getElementById('comment-form');
let btnComment  = document.getElementById('btn-comment');

commentForm.addEventListener('submit', saveComment);

function saveComment(e) {
    let commentName = document.getElementById('comment-name').value;
    let commentBody = document.getElementById('comment-body').value;
    // if input is not fill
    if (!commentName || !commentBody) {
        alert('Please Fill Name And Comment inputs');
        return false;
    }
    let comment = {
        name: commentName,
        body: commentBody
    }
    if (localStorage.getItem('comments') === null) {
        // init array
        let comments = [];
         // add to array
        comments.push(comment);
        // set to localstorage
        localStorage.setItem('comments',JSON.stringify(comments));
    } else {
        // get comments from localStorage 
        let comments = JSON.parse(localStorage.getItem('comments'));
        // add comments to array
        comments.push(comment);
        // Re-set back to localStorage
        localStorage.setItem('comments',JSON.stringify(comments));
    }

    // clear form
    commentForm.reset();
    // Re-fetch comments
    fetchComments();

e.preventDefault();   
}

// fetch comments

function fetchComments() {
    // get comments from localStorage 
    let comments = JSON.parse(localStorage.getItem('comments'));
    // Get output ID
    let commentResult = document.getElementById('commentOutput');

    // Build output
    commentResult.innerHTML = '';

    // loop

    for (let i = 0; i < comments.length; i++) {
        let name = comments[i].name;
        let body = comments[i].body;
        
        commentResult.innerHTML +=  '<div class="comments-box">'+
                                    '<img src="../img/user.png">'+
                                    '<h3 class="comments-h3">'+name+'</h3>'+
                                    '<h4 class="comments-h4">'+body+'</h4>'+
                                    '</div>';
    }
}

