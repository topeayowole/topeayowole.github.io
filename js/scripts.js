//Open the menu on click
document.querySelector('.open').addEventListener('click', function () {
    
    document.querySelector('.nav-list').classList.add('nav-list-opened');
});

//Close the menu on click
document.querySelector('.close').addEventListener('click', function () {

    document.querySelector('.nav-list').classList.remove('nav-list-opened');
});