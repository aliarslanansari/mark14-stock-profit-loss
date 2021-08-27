const form = document.getElementById('mainform')
const initialPrice = document.querySelector('#intialprice')
const stocksQuantity = document.querySelector('#quatityofstocks')
const currentPrice = document.querySelector('#currentprice')
const message = document.querySelector('#message-container')

function onSubmit(event) {
  event.preventDefault()
  const initialValue = parseFloat(initialPrice.value)
  const currentValue = parseFloat(currentPrice.value)
  const quantityOfStocks = parseFloat(stocksQuantity.value)
  try {
    if (isNaN(initialValue) || isNaN(currentValue) || isNaN(quantityOfStocks)) {
      throw new Error('Please enter valid values')
    }
    if (initialValue > currentValue) {
      var loss = (initialValue - currentValue) * quantityOfStocks
      var lossPercentage = (loss / initialValue) * 100
      showMessage(
        `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
      )
    } else if (currentValue > initialValue) {
      var profit = (currentValue - initialValue) * quantityOfStocks
      var profitPercentage = ((profit / initialValue) * 100).toFixed(2)

      showMessage(
        `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
      )
    } else {
      showMessage(`No pain no gain and no gain no pain`)
    }
  } catch (error) {
    showMessage(error.message)
  }
}

function showMessage(msg) {
  message.innerText = msg
}

form.addEventListener('submit', onSubmit)
