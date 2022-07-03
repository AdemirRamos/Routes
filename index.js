"use strict";
class Route_controller {
    ID_getter(id) {
        if (id == 'home_page') {
            let page1 = window.location.href += 'Home Page/';
            return window.open(page1);
        }
        else if (id == 'gallery') {
            let page2 = window.location.href += 'Gallery/';
            return window.open(page2);
        }
        else if (id == 'tailwind') {
            let page3 = window.location.href += 'Tailwind/';
            return window.open(page3);
        }
    }
}
const url = new Route_controller();
//Without POO:
/*
    function click() {
        const page: HTMLElement | null = document.getElementById('home_page')
        page?.addEventListener('click', function() {
            window.open(window.location.href += 'homepage')
        })

        const gallery: HTMLElement | null = document.getElementById('gallery')
        gallery?.addEventListener('click', function() {
            window.open(window.location.href += 'gallery')
        })
    }

    window.addEventListener('load', click)
*/
