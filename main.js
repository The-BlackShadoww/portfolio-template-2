
// ------------Cursor
let cursorDiv = document.querySelector(".cursor");
window.addEventListener('mousemove', cursor)
function cursor(e) {
     cursorDiv.style.top =  e.pageY + "px";
     cursorDiv.style.left = e.pageX + "px";
}


//-------------- ((Nav))
const navOpen = document.querySelector('.menu_nav_open');
const closeNav = document.querySelector('.menu_nav_close');
const navLinks = document.querySelector('.navlinks');


navOpen.addEventListener('click', () => {
    navLinks.classList.add('sidnavOpen');
})
closeNav.addEventListener('click', () => {
    navLinks.classList.remove('sidnavOpen');
})


// --------------- ((About))
function appear (){
    let screenPositon = window.innerHeight / 2;
    let meTitle = document.querySelector(".me_title");
    let meTitleHgt = meTitle.getBoundingClientRect().top;
    let myWords = document.querySelector(".my_words");
    let myWordsTop = myWords.getBoundingClientRect().top;

    
    if(meTitleHgt < screenPositon){
        meTitle.classList.add('animate_me_title')
    }
    else{
        meTitle.classList.remove('animate_me_title')
    }
    
    if(myWordsTop < screenPositon){
        myWords.classList.add('show_my_words')
    }
    else{
        myWords.classList.remove('show_my_words')
    }

    // -------- ((works))
    let screenPositon2 = window.innerHeight / 2;
    let workimg = document.querySelectorAll('.wrk_img');
    // let workimgHight = workimg.getBoundingClientRect().top;
    let workTxt = document.querySelector('.wrk_txt');
    let workTxtHight = workTxt.getBoundingClientRect().top;

    workimg.forEach((img) => {
        let imgHigth = img.getBoundingClientRect().top
        if(imgHigth < screenPositon2){
            img.classList.add('show_wrk_img')
        }
        else{
            img.classList.remove('show_wrk_img')
        }
    })

}
window.addEventListener('scroll', appear)



// // -------- ((works))
// let screenPositon2 = window.innerHeight / 2;
// let workimg = document.querySelectorAll('.wrk_img');
// // let workimgHight = workimg.getBoundingClientRect().top;
// let workTxt = document.querySelector('.wrk_txt');
// let workTxtHight = workTxt.getBoundingClientRect().top;

// workimg.forEach((img) => {
//     let imgHigth = img.getBoundingClientRect().top
//     if(imgHigth < screenPositon2){
//         img.classList.add('show_wrk_img')
//     }
// })








