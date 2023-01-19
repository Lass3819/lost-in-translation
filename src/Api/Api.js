const apiURL = 'https://noroff-api-production-f6a1.up.railway.app'
const apiKey = 'ep1AJJI8eRB3hRT6VF5ETTXvk9WYddiSDPi0tyMqweudP0TH1e6liYkN2B9CjMLI'

function getTranslations(){
    fetch(`${apiURL}/translations`)
    .then(response => response.json())
    .then(results => {
        return results[0].username}
    ).catch(error => {
    })
}

export default getTranslations;