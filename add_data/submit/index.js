const fs = require('fs');
const fetch = require("node-fetch");
const minify = require('html-minifier').minify;

// https://imgbb.com/ - image hosting

const production = false;
const projectDirectory = '../Freenom TK Review/';
const fileContent = fs.readFileSync(projectDirectory + 'document.html', 'utf8');


/*
    title: [max-length=999]
    post: [max-length=9999]
    imageurl: [max-length=500]

    Available Categories:

        Articles
        News
        Product Reviews
        Guides
        Uncategorized
*/

const data = {
    "title": "The Pros And Cons Of Using A Free Domain Provider",                                           
    "post": minify(fileContent, { collapseWhitespace: true }),                       
    "category": "Articles",                                                   
    "imageurl": "https://i.ibb.co/7jxhtPK/pexels-karolina-grabowska-5632388-1-1.jpg", 
    "userid": 1                                                                       
}

console.log(data);
console.log(minify(fileContent, { collapseWhitespace: true }).length)

function submit() {
    fetch(production ? 
        'https://isak-tech.tk/protected/add-post' : 
        'http://localhost:8081/protected/add-post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': '5a02e4042cab4a50a491dbbc117a415756c8362a8014dabd5472ef77278503b9'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.log(err));   
}

for(let i = 0; i < 10; i++) {
    submit();
}