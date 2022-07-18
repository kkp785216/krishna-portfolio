// Append the menu for mobile
let menu = document.getElementById('menu');
let contact = document.getElementById('contact');
let mobMenu = document.querySelector('#mobMenus .mobMenu');
let newMenu = document.createElement('div');
let newContact = document.createElement('div');
newMenu.innerHTML = menu.innerHTML;
newContact.innerHTML = contact.innerHTML;
mobMenu.appendChild(newMenu.firstElementChild);
mobMenu.appendChild(newContact.firstElementChild);


// Menu Toggle Open and Close
let menuOpen = document.getElementById('menuOpen');
let menuClose = document.getElementById('menuClose');
let menuOverlay = document.getElementById('menuOverlay');
menuOpen.addEventListener('click', () => {
    mobMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
})
menuClose.addEventListener('click', () => {
    mobMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
})
menuOverlay.addEventListener('click', () => {
    mobMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
})

// Text Write Animation
let canMake = document.querySelector('.can-make ul');
Array.from(canMake.children)
function iterator(element) {
    nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < element.length) {
                return {
                    value: element[nextIndex++],
                    done: false
                }
            }
            else {
                nextIndex = 0;
                return {
                    done: true
                }
            }
        }
    }
}