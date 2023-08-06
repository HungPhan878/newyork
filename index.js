const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal_close');
const modalContainer = document.querySelector('.js-modal_container');
// open modal
function openModal() {
    modal.classList.add('open');}
// vi co nhieu element nen dung vong lap for
    for(const buyBtn of buyBtns){
buyBtn.addEventListener('click',openModal);}

// close modal
function closeModal() {
    modal.classList.remove('open');}
modalClose.addEventListener('click',closeModal);
modal.addEventListener('click',closeModal);
// Ngung lan truyen qua the con
modalContainer.addEventListener('click',function(e){
e.stopPropagation();
});

// thanh header Menu dong mo menu
var header = document.querySelector('#header');
var menu = document.getElementById('menu-js');
var headerClient = header.clientHeight;
menu.onclick = function(){
     var isClosed = header.clientHeight === headerClient;
     if (isClosed){
        header.style.height = 'auto';
     }else{
        header.style.height = null;
        // null se an theo thuoc tinh co dinh  
    }

}
// dong menu khi chon navigation
var menuItems = document.querySelectorAll('#nav  li  a[href*="#"]');
var menuItemsLength = menuItems.length;
for (var i = 0; i < menuItemsLength; i++){
    var menuItem = menuItems[i];
    // console.log(menuItem);
    menuItem.onclick = function(event){
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
    if(isParentMenu){
       event.preventDefault();
    }
    else{

        header.style.height = null;
    }
}
}









































