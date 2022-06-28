//Hide Word
let span = document.querySelector('.main .container .title .info .font span');
let arr = ['Creative', 'Online Store', 'Potfolio', 'WordPress'];
let i = 0;
let count = setInterval(function () {
    if (i == arr.length) {
        i = 0;
    }
    span.textContent = arr[i];
    i++;
}, 3000);


//Menu
let menu = document.querySelector('.main .container .header .contain .menu');
let tools = document.querySelector('.main .container .header .contain .tools');
menu.addEventListener('click', function () {
    if (tools.style.display == 'grid') {
        tools.style.display = 'none';
    }
    else {
        tools.style.display = 'grid';
    }
})

//box
// let box = document.querySelector('.main .container .header .contain .tools .tool .box');
// let slide = document.querySelector('.main .container .header .contain .tools .slide');
// slide.addEventListener('click', function () {
//     if (box.style.display == 'grid') {
//         box.style.display = 'none';
//         // tools.style.display = 'grid';
//     }
//     else {
//         box.style.display = 'grid';
//         // tools.style.display = 'grid';
//     }
// })

//design
let list = Array.from(document.querySelectorAll('.design .contain .bottom ul li'));
let pic = document.querySelector('.design .contain .bottom .pic img');
let imgs = ['woman_working_2.svg', 'woman_desk.svg', 'storefront_illustration.svg', 'youtube_illustration.svg', 'building_3.0.svg', 'city_landscape_illustrations_1.svg'];
list.forEach((l) => {
    l.addEventListener('click', function () {
        list.forEach((li) => {
            li.classList.remove('active')
        })
        l.classList.add("active");
        pic.src = `../Images/${imgs[list.indexOf(l)]}`
    })
})

//questions
let ques = Array.from(document.querySelectorAll('.ques .contain .bottom .list .question'));
let icon = Array.from(document.querySelectorAll('.ques .contain .bottom .list .question i'));
let answer = Array.from(document.querySelectorAll('.ques .contain .bottom .list .answer'));
ques.forEach((q)=>{
q.addEventListener('click',function(){
    if(icon[ques.indexOf(q)].classList.contains('fa-plus')){
        answer.forEach((a)=>{
            a.style.display='none';
        })
        answer[ques.indexOf(q)].style.display='grid';
        icon.forEach((i)=>{
            i.classList.remove('fa-minus');
            i.classList.add('fa-plus');
        })
        icon[ques.indexOf(q)].classList.add('fa-minus');
        icon[ques.indexOf(q)].classList.remove('fa-plus');
    }
    else{
        answer.forEach((a)=>{
            a.style.display='none';
        })
        icon.forEach((i)=>{
            i.classList.remove('fa-minus');
            i.classList.add('fa-plus');
        })
    }


    
})
})