function modal_tabs() {
    var gallery1 = document.getElementsByClassName('gallery1')[0]
    var gallery2 = document.getElementsByClassName('gallery2')[0]
    var gallery3 = document.getElementsByClassName('gallery3')[0]
    var p1 = document.getElementById('gallery1_p')
    var p2 = document.getElementById('gallery2_p')
    var p3 = document.getElementById('gallery3_p')

    p1.addEventListener('click', function() {
        if (gallery1.style.left == '-571px') {
            gallery1.style.left = '0px'
            p1.innerHTML = '&#8249;'
        }

        else {
            gallery1.style.left = '-571px'
            p1.innerHTML = '&#8250;'
        }
    })

    p2.addEventListener('click', function() {
        if (gallery2.style.right == '-555px') {
            gallery2.style.right = '0px'
            p2.innerHTML = '&#8250;'
        }

        else {
            gallery2.style.right = '-555px'
            p2.innerHTML = '&#8249;'
        }
    })

    p3.addEventListener('click', function() {
        if (gallery3.style.left == '-571px') {
            gallery3.style.left = '0px'
            p3.innerHTML = '&#8249;'
        }

        else {
            gallery3.style.left = '-571px'
            p3.innerHTML = '&#8250;'
        }
    })
}

function modal_window() {
    var images = document.getElementsByClassName('image')
    var modal_background = document.getElementsByClassName('modal_window')[0]
    var modal_image = document.getElementById('modal_image')
    var x = document.getElementById('modal_span')
    var modal_alt = document.getElementById('modal_alt')

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function() {
            modal_background.style.display = 'block'
            modal_image.src = images[i].src
            modal_image.style.display = 'block'
            modal_alt.innerHTML = images[i].alt
            modal_alt.style.display = 'block'
            x.style.display = 'block'
        })

        x.addEventListener('click', function() {
            modal_background.style.display = 'none'
            modal_image.src = ''
            modal_image.style.display = 'none'
            modal_alt.style.display = 'none'
            x.style.display = 'none'
        })
    }
}

function description() {
    var images = document.getElementsByClassName('image')
    var description = document.getElementById('description')

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('mouseenter', function() {
            description.innerHTML = images[i].alt
        })

        images[i].addEventListener('mouseout', function() {
            description.innerHTML = ''
        })
    }
}

function back() {
    var main = document.getElementById('main')
    main.addEventListener('click', function() {
        history.back()
    })
}

window.addEventListener('load', modal_tabs)
window.addEventListener('load', modal_window)
window.addEventListener('load', description)
window.addEventListener('load', back)
