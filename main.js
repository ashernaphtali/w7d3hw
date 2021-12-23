console.log("hello world 2")

// fetch is an async function.. this method uses asyn/await
const getData= async () => {
    const web = "https://pokeapi.co/api/v2/pokemon/ditto";
    const res = await fetch(web);
    const data = await res.json();
    return data
}

getData();


// // create HTML elements
const createList = (name, photo) => {
    const html1 = document.createElement('a');
    const img1 = document.createElement('img');
    img1.src= photo
    document.body.append(img1)
    html1.innerHTML =  name;
    html1.className = "list-group-item list-group-item-action list-group-item-light";
    document.querySelector(".vanguard-list").insertAdjacentElement('beforeend', html1);
};

// // build loadData function which will be called onClick
const loadData = async () => {
    const data = await getData();
    // data.results.forEach(elem => {
    //     createList(elem.name, elem.url)
    const photo = data["sprites"]["front_default"]
    createList("ditto", photo)
    // }
    // )
};

// // clear student buton
// const clear_button = document.getElementById('clear-button');
// console.log(clear_button)
// clear_button.addEventListener('click', () => {clearData()});

// const clearData = () => {
//     document.querySelector('.vangard-list').innerHTML = ''
// };
