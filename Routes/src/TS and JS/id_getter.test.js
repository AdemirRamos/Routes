const id_getter_homepage = require('./id_getter_homepage')

test('If the id be equal to "home_page", "Home Page" will be opened in the browser (once its respective button get clicked).', () => {
    expect(id_getter_homepage('home_page')).toBe('http://localhost:3000/')
})

const id_getter_gallery = require('./id_getter_gallery')

test ('If the id be equal to "gallery", "Gallery" will be opened in the browser (once its respective button get clicked).', () => {
    expect(id_getter_gallery('gallery')).toBe('http://localhost:3000/gallery/')
})

const id_getter_tail = require('./id_getter_tail')

test ('If the link get clicked and the id be equal to "tailwind", a tailwind-and-CSS-constructed page will be opened.', () => {
    expect(id_getter_tail('tailwind')).toBe('http://localhost:3000/tailwind/')
})
