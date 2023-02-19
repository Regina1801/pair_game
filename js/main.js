import Card from './card.js'


function newDame(container, cardsCount) {

  cardsCount = cardsCount

  let cardsNumberArray = [],
    cardsArray = [],
    firstCard = null,
    secondCard = null

  for (let i = 1; i <= cardsCount / 2; i++) {
    cardsNumberArray.push(i)
    cardsNumberArray.push(i)
  }

  cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5)

  for (let cardsNumber of cardsNumberArray) {
    cardsArray.push(new Card(container, cardsNumber, flip))
  }

  function flip(card) {
    if (firstCard != null && secondCard != null) {
      if (firstCard.number !== secondCard.number) {
        firstCard.open = false
        secondCard.open = false
        firstCard = null
        secondCard = null
      }
    }

    if (firstCard == null) {
      firstCard = card
    } else {
      if (secondCard == null) {
        secondCard = card
      }
    }

    if (firstCard != null && secondCard != null) {
      if (firstCard.number == secondCard.number) {
        firstCard.success = true
        secondCard.success = true
        firstCard = null
        secondCard = null
      }
    }

    let button = document.createElement('button')
    button.textContent = 'Сыграть ещё раз'
    button.classList.add('button')

    button.addEventListener('click', () => {
      container.innerHTML = '';
      firstCard = null
      secondCard = null
      cardsNumberArray = []
      cardsArray = []
      button.remove()

      newDame(container, cardsCount)

    })

    if (document.querySelectorAll('.card.success').length === cardsNumberArray.length) {
      //newDame(container, cardsCount)
      document.body.append(button)
    }
  }

}

newDame(document.getElementById('game'), 8)






