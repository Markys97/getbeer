let menuLeftItems=[...document.querySelectorAll('.menu-left__item')];
let buttonMenuLeft= document.querySelector('.menu-left__item--bottom');

buttonMenuLeft.addEventListener('click',function(e){
    document.querySelector('.page-sidebar').classList.toggle('open-slidebar-long')
 

})

menuLeftItems.forEach(menuLeftItem=>{
    menuLeftItem.addEventListener('mouseenter',function(e){
        if(!this.dataset.off ){
            document.querySelector('.page-sidebar').classList.add('open-slidebar')
        }
       
    })
    menuLeftItem.addEventListener('mouseleave',function(e){
        document.querySelector('.page-sidebar').classList.remove('open-slidebar')
    })
})





