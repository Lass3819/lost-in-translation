const apiURL = 'https://noroff-api-production-f6a1.up.railway.app'
const apiKey = 'ep1AJJI8eRB3hRT6VF5ETTXvk9WYddiSDPi0tyMqweudP0TH1e6liYkN2B9CjMLI'

const userId = 2 // Update user with id 1

/* fetch(`${apiURL}/translations/${userId}`, {
        method: 'PATCH', // NB: Set method to PATCH
        headers: {
            'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Provide new translations to add to user with id 1
            translations: ['easy', 'i love javascript'] 
        })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not update translations history')
      }
      return response.json()
    })
    .then(updatedUser => {
      // updatedUser is the user with the Patched data
    })
    .catch(error => {
    }) */



/* fetch(`${apiURL}/translations`)
    .then(response => response.json())
    .then(results => {
        console.log(results[0]);}
    ).catch(error => {
    })
 */



fetch(`${apiURL}/translations`, {
    method: 'POST',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
        username: 'hej', 
        translations: [] 
    })
})
.then(response => {
  if (!response.ok) {
    throw new Error('Could not create new user')
  }
  return response.json()
})
.then(newUser => {
  // newUser is the new user with an id
})
.catch(error => {
})