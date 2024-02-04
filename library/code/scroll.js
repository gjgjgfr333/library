document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

let ostatok
function ctepen (baza, stepen){
    let n = stepen % 1;
    if(stepen < 1){
        return console.log('сепень меньше нуля')
    }else if (n === 0){
        let sum= baza ** stepen
        return sum
    }else{
        console.log('не натуральное число')
    }    
}
let naw =document.getElementById('naw')
let burger = document.getElementById('burger')
burger.addEventListener('click',function(){
    naw.classList.toggle('nawMenuAnim')
})
burger.addEventListener("click", function (){
    burger.classList.toggle('burger-to-cross')
})