fetch('http://localhost:3000/pups')
.then(response => response.json())
.then(data => {
    data.forEach(dog => {
        renderDog(dog)
    })
})

function renderDog(dog){
    const div = document.querySelector("#dog-bar")
    
    let span = document.createElement('span')
    span.innerText = dog.name
    span.dataset.id = dog.id

    div.append(span)

    span.addEventListener('click', (event) => {
        const div2 = document.querySelector('#dog-info')

        let img = document.createElement('img')
        img.src = dog.image
        img.alt = `${dog.name} Image`

        let h2 = document.createElement('h2')
        h2.innerText = dog.name

        let button = document.createElement('button')
        button.innerText = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"

        div2.append(img, h2, button)
    })
}