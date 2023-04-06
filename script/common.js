// ---------------------------------------변수
// 1. KR
const kr_lnb = document.querySelector('header .right >li:nth-child(1)')
const kr_lnb_open = document.querySelector('header .lang')
// 2. 전체메뉴 + 닫기
const all_nav = document.querySelector('header .right>li:last-child>a')
const all_nav_open = document.querySelector('header .all_nav')
const all_nav_close = document.querySelector('header .all_nav .close')
// 3. ACC gnb + sub
const nav_acc = document.querySelectorAll('nav > ul > li')
const nav_acc_sub = document.querySelectorAll('nav>ul>li>.sub')
// console.log(kr_lnb_open,all_nav_close,kr_lnb,all_nav_open)
console.log(kr_lnb, kr_lnb_open)
console.log(all_nav, all_nav_open, all_nav_close)
console.log(nav_acc, nav_acc_sub)
// --------------------------------event
// 이벤트 전 모두 숨기기
// 객체.속성.속성 = 값
// 객체.style.display = 'none'
kr_lnb_open.style.display = 'none'
all_nav_open.style.display = 'none'
nav_acc_sub[0].style.display = 'none'
// 2.햄버거메뉴 클릭 시 전체메뉴 나오기
all_nav.addEventListener('click',function(){
    all_nav_open.style.display = 'block'
})
// 3.닫기클릭 시 전체메뉴 숨기기
all_nav_close.addEventListener('click',function(){
    all_nav_open.style.display = 'none'
})
// 4.acc메뉴 마우스 오버동작
nav_acc[12].addEventListener('mouseover',function(){
    nav_acc_sub[0].style.display = 'block'
})
// 5.메뉴에 마우스 나갈 시 서브 메뉴 숨기기
nav_acc[12].addEventListener('mouseout',function(){
    nav_acc_sub[0].style.display = 'none'
})

// 6.랭     kr_lnb_open.style.display = 'block'
let lang_boolean = true
kr_lnb.addEventListener('click',function(){
    if(lang_boolean){
        kr_lnb_open.style.display = 'block'
    }else{kr_lnb_open.style.display = 'none'}
    lang_boolean = !lang_boolean
})

const right_popup = document.querySelector('#right_popup')
const popup_btn = document.querySelector('#left_btn a:first-child')
console.log(right_popup, popup_btn)
// 1. right 500 숨기기
// 2. popup_btn 클릭 - > right 보이기
// right popup if 연습------------------------------------------------
let popup_boolean = true
popup_btn.addEventListener('click',function(){
    right_popup.style.transition = 'all 0.5s'
    if(popup_boolean){
        // console.log('보이기')
        right_popup.style.transform = 'translateX(0)'
    }else{
        // console.log('숨기기')
        right_popup.style.transform = 'translateX(500px)'
    }
    popup_boolean = !popup_boolean
})
