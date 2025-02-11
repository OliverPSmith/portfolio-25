

// let options = {
//     timeZone: 'Europe/London',
//     // year: 'numeric',
//     // month: 'numeric',
//     // day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
// },
// formatter = new Intl.DateTimeFormat([], options);

// // console.log(formatter.format(new Date()));

// const asideZoneTime = document.querySelector('#aside-zone-time');
// asideZoneTime.innerText = formatter.format(new Date());
// // console.log(asideZoneTime.innerText);
// asideZoneTime.addEventListener('mouseover', () => {
//     asideZoneTime.innerText = formatter.format(new Date());
// });

// window.addEventListener('click', () => {
//     asideZoneTime.innerText = formatter.format(new Date());
// });

// const menu = document.querySelector('.hamburger'); 
// const mainArea = document.getElementById('main');
// menu.addEventListener('click', () => {
//     const menuAside = document.createElement('aside');
//     menuAside.innerText = menu.ariaLabel;
//     menuAside.classList.add('aside-menu');

//     mainArea.appendChild(menuAside);
// });



const hamburger = document.querySelector('.hamburger'); 
const nav = document.querySelector('nav');
const navLinks = Array.from(document.querySelectorAll('.nav-links'));
const mainArea = document.getElementById('main');
const mainInner = document.querySelector('.main-inner');
const asideName = document.getElementById('aside-name');

hamburger.addEventListener('click', (e) => {
     e.preventDefault();
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    mainInner.classList.toggle('active');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', (e) => {
            e.preventDefault();
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            mainInner.classList.remove('active');
        })
    }
});

asideName.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    mainInner.classList.remove('active');
})



const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const asideMenu = document.getElementById('aside-menu');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        asideMenu.innerText = tab.ariaLabel;
        console.log(tab.ariaLabel);
        // make the target (the tab clicked) a dataset variable
        const target = document.querySelector(tab.dataset.tabTarget)
        // when tab is clicked remove the 'active' class for the tab content
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        // remove 'active' class for the tab clicked
        // tabs.forEach(tab => {
        //     tab.classList.remove('active');
        // });
        // add 'active' class for the tab clicked and its content
        // tab.classList.add('active');
        target.classList.add('active');
    })
});


