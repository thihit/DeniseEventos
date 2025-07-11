ScrollReveal().reveal("#intro", {duration: 500, distance: "50px", origin: "bottom"})

ScrollReveal().reveal("#whoAmI", {duration: 1000, distance: "50px", origin: "left"})

ScrollReveal().reveal("#services", {duration: 500, distance: "50px", origin: "left"})

ScrollReveal().reveal(".servicesSquare", {duration: 1000, distance: "50px", origin: "bottom"})



document.getElementById('menuIcon').addEventListener('click', ()=>{
    
    let mobileMenu = document.getElementById("mobileMenu")
    let menuIcon = document.getElementById("menuIcon")
    menuIcon.classList.toggle('fa-bars')
    menuIcon.classList.toggle('fa-x')
    mobileMenu.classList.toggle('show')

})

document.querySelectorAll('.navLink').forEach(link =>{
    link.addEventListener('click', ()=>{
        document.getElementById('menuResponsive').classList.remove('show')
    })
})