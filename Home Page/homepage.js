function events() {
    background_images()
}

function background_images() {
    var section1 = document.getElementById('section1')
    var section2 = document.getElementById('section2')
    var section3 = document.getElementById('section3')
    var section4 = document.getElementById('section4')
    var section5 = document.getElementById('section5')

    var item1 = document.getElementById('a1')

    item1.addEventListener('mouseenter', function() {
        document.body.style.backgroundImage = "url('/Home Page/Pictures/p1.jpg')"
        section1.style.maxHeight = '500px'

        item1.addEventListener('mouseout', function() {
            section1.style.maxHeight = '0px'
        })
    })

    var item2 = document.getElementById('a2')

    item2.addEventListener('mouseenter', function() {
        document.body.style.backgroundImage = "url('/Home Page/Pictures/p2.jpg')"
        section2.style.maxHeight = '500px'

        item2.addEventListener('mouseout', function() {
            section2.style.maxHeight = '0px'
        })
    })

    var item3 = document.getElementById('a3')

    item3.addEventListener('mouseenter', function() {
        document.body.style.backgroundImage = "url('/Home Page/Pictures/p3.jpg')"
        section3.style.maxHeight = '500px'

        item3.addEventListener('mouseout', function() {
            section3.style.maxHeight = '0px'
        })
    })

    var item4 = document.getElementById('a4')

    item4.addEventListener('mouseenter', function() {
        document.body.style.backgroundImage = "url('/Home Page/Pictures/p4.jpg')"
        section4.style.maxHeight = '500px'

        item4.addEventListener('mouseout', function() {
            section4.style.maxHeight = '0px'
        })
    })

    var item5 = document.getElementById('a5')

    item5.addEventListener('mouseenter', function() {
        document.body.style.backgroundImage = "url('/Home Page/Pictures/p5.jpg')"
        section5.style.maxHeight = '500px'

        item5.addEventListener('mouseout', function() {
            section5.style.maxHeight = '0px'
        })
    })
}

function back() {
    let main = document.getElementById('a6')
    main.addEventListener('click', function() {
        history.back()
    })
}

window.addEventListener('click', events)
window.addEventListener('click', back)
