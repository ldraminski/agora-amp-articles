
(function(){

    console.log('DOM MANIPULATION');

    let frame = document.getElementById('customframe');
    frame.textContent += 'Hello world!';

    frame.addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                frame.textContent += ' \n' + json.title + ' \n';
            })
    });
    
})();