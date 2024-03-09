'use strict'

const books = document.querySelectorAll('.book')
const body = document.querySelector('body')
const title3 = document.querySelectorAll('.book h2')[4]

books[2].before(books[5])
books[5].before(books[3])
books[3].before(books[4])
books[4].before(books[0])
books[0].before(books[1])

body.style.setProperty('background-image', 'url(./image/you-dont-know-js.jpg)')

console.dir(title3);
