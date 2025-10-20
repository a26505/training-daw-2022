window.onload = function(e) {
    console.log('documento cargado')
    let h2 = document.querySelector('h2')
    h2.innerText ='ejemplo'

    let id = document.getElementById('username')
    id.style.color = 'green'

    let first = document.querySelectorAll('article .first')
    first.forEach(element => {
        element.style.color = 'blue'
    });



    let li = document.querySelectorAll('li.item')
    console.log(li)
    // document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'
}