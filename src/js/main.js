//classwork
let lorem = document.querySelector('.lorem-text');
let col = document.querySelector('.col');
let textHolder = document.querySelector('.text-holder');
let text = document.querySelector('p');

// lorem.addEventListener('click', (e) => {
//     alert('lorem');
// });

// col.addEventListener('click', (e) => {
//     alert('col');
// });

text.addEventListener('click', (e) => {
    let newText = document.createElement('p');
    newText.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores perferendis cumque rerum, architecto voluptatibus est a corrupti natus modi consequuntur molestiae eaque exercitationem quis ad deleniti, consequatur error dolore!';
    text.appendChild(newText);
});


//div and textarea

let paragraph = document.createElement('p');
let loremText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis a distinctio consequatur voluptatem accusantium. Ullam qui voluptate possimus eveniet enim soluta! Neque voluptatem incidunt natus labore quam officia ipsum.'

paragraph.innerHTML = loremText;

let divText = document.querySelector('.lorem-text-holder');
let textArea = document.getElementById('textarea');

divText.appendChild(paragraph);

textArea.hidden = true;

document.addEventListener("keydown", function (event) {

    if (event.code == 'KeyE' && (event.ctrlKey)) {
        event.preventDefault();

        divText.hidden = true;
        textArea.hidden = false;
        textArea.innerHTML = loremText;
    }
})

document.addEventListener("keydown", function (event) {
    
    if (event.ctrlKey && (event.key === '+')) {
        event.preventDefault();

        loremText = document.getElementById('textarea').value;
        paragraph.innerHTML = loremText;

        textArea.hidden = true;
        divText.hidden = false;
    }
})





