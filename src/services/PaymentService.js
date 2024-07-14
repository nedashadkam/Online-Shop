export const payment = (totalPrice) => {
    return fetch('http://localhost:3000/totalPrice', {
        method: 'POST',
        body: JSON.stringify({
            totalPrice : totalPrice
        })
      }
    )
}