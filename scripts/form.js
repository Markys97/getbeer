let inputs= [...document.querySelectorAll('input')]
let iconEyes=[...document.querySelectorAll('.form__icon svg')];
let radioInputs= [...document.querySelectorAll('.form__radio-input')];


// show label
let inputContainer;
let formItem
let label;
inputs.forEach(input => {
    input.addEventListener('focus',function(e){
        inputContainer= this.parentNode;
        formItem= inputContainer.parentNode
        label=formItem.lastElementChild
        label.classList.add('show-label')
       
    })
    input.addEventListener('blur',function(e){
      
      
        if(this.value.length ===0){
            label.classList.remove('show-label')
        }
       
    })
});

// show and hide password
// console.log(iconEye.querySelector('.eye-bare'))

iconEyes.forEach(iconEye=>{
    iconEye.addEventListener('click',function(e){
        let iconContainer= this.parentNode;
        let input= iconContainer.previousElementSibling;
       
       let bare= this.querySelector('.eye-bare');
       bare.classList.toggle('eye-close')

       if(bare.classList.contains('eye-close')){
        input.setAttribute('type','text')
       }else{
        input.setAttribute('type','password')
       }

       
    })
})

radioInputs.forEach(radioInput =>[
    radioInput.addEventListener('change',function(e){
       
    })
])





