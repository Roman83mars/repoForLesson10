'use strict'

const books = document.querySelectorAll('.book')
const body = document.querySelector('body')
const title3 = document.querySelectorAll('.book h2 a')[4]
const advertisement = document.querySelector('.adv')
const chapters = document.querySelectorAll('.book li')
const newChapters = document.createElement('li')

books[2].before(books[5])
books[5].before(books[3])
books[3].before(books[4])
books[4].before(books[0])
books[0].before(books[1])

body.style.setProperty('background-image', 'url(./image/you-dont-know-js.jpg)')

title3.textContent = 'Книга 3. this и Прототипы Объектов'

advertisement.remove()

chapters[2].before(chapters[3])
chapters[3].after(chapters[6])
chapters[6].after(chapters[8])
chapters[10].before(chapters[2])
chapters[49].before(chapters[55])
chapters[50].after(chapters[48])
chapters[54].before(chapters[51])

newChapters.textContent = 'Глава 8: За пределами ES6'
chapters[26].insertAdjacentElement('beforebegin', newChapters)

