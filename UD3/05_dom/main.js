window.onload = () => {
    // Listar todos los divs
    const divs = document.getElementsByTagName('div');
    console.log(`divs ${divs.length}`);

    // Listar todos los elementos con class == buttons
    let buttons = document.getElementsByClassName('buttons');
    console.log(`buttons ${buttons.length}`);

    buttons = document.querySelectorAll('.buttons');
    console.log(`buttons ${buttons.length}`);

    // Listar 1 div con class == buttons
    let button = document.querySelector('div.buttons');
    console.log(`button ${button.innerHTML}`);

    // Listar TODOS los divs con class == buttons
    buttons = document.querySelectorAll('div.buttons');
    console.log(`buttons ${buttons.length}`);
}
