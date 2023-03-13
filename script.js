//click logo
document.querySelector('.logo').addEventListener('click',()=>{
    window.location = '/'
})


// scroll home
const getHeader =  document.querySelector('header');
const itemShow = document.querySelectorAll('.aim');
window.addEventListener('scroll',()=>{
    if(this.scrollY > 0){
        getHeader.classList.add('active')
    }
    else{
        getHeader.classList.remove('active')
    }
})

window.addEventListener('scroll',function (){
    if(this.scrollY <= 100){
        itemShow.forEach(item=>{
            item.classList.add('aim');
        })
    }
    else{
        itemShow.forEach(item=>{
            item.classList.remove('aim');
        })
    }
})


// header nav

const homeElem = document.querySelector('main .home');
const settingsElem = document.querySelector('main .settings');
const groupElem = document.querySelector('main .team');
const contactElem = document.querySelector('main .contact');
const navList = document.querySelectorAll('header li');

// lay chien rong man hinh
let newWidth = window.innerWidth;
window.addEventListener('resize',()=>{
    newWidth = this.innerHeight
})

console.log(newWidth);

const resetNav = (event)=>{
    navList.forEach(item=>item.classList.remove('active'));
    event.target.classList.add('active')
}

const resetLayout = ()=>{
    homeElem.style.display = 'none';
    settingsElem.style.display = 'none';
    groupElem.style.display = 'none';
    contactElem.style.display = 'none';
    if(newWidth < 768){
        navHeader.classList.remove('active');
        
    }
}

const home = (event)=>{
    resetLayout()
    homeElem.style.display = 'flex';
    resetNav(event);

}

const settings = (event)=>{
    resetLayout()
    settingsElem.style.display = 'block';
    resetNav(event);

}

const group = (event)=>{
    resetLayout()
    groupElem.style.display = 'flex';
    resetNav(event);

}

const contact = (event)=>{
    resetLayout()
    contactElem.style.display = 'block';
    resetNav(event);
}


// coppy settings
let btnCopy = document.querySelectorAll('.settings .copy');

btnCopy.forEach(itemCopy=>{
    itemCopy.querySelector('label').addEventListener('click',function (){
        let inputVal = itemCopy.querySelector('input');
        console.log(inputVal);
        inputVal.select();
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        this.parentElement.classList.add('active');
        setTimeout(() => {
            this.parentElement.classList.remove('active');
        }, 2000);
    })
})

// show-close mobile
const showMenu = document.getElementById('show');
const closeMenu = document.getElementById('close');
const navHeader = document.querySelector('header .nav');
showMenu.addEventListener('click',()=>{
    navHeader.classList.add('active');
})
closeMenu.addEventListener('click',()=>{
    navHeader.classList.remove('active');
})

// toast
function showToast() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }