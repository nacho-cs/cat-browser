// api + some code from that api company
const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "DEMO_API_KEY"
let storedBreeds = []

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  storedBreeds = data;  
   for (let i = 0; i < storedBreeds.length; i++) {
    const breed = storedBreeds[i];
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = `${breed.name}`;
document.getElementById('breed_selector').appendChild(option);
    }
   getNewCat(0)
})
.catch(function(error) {
   console.log(error);
});

const catImageID0 = document.getElementById('catImage0')
const catImageID1 = document.getElementById('catImage1')
const catImageID2 = document.getElementById('catImage2')
const catImageID3 = document.getElementById('catImage3')
const catImageID4 = document.getElementById('catImage4')
const catImageID5 = document.getElementById('catImage5')
const catImageID6 = document.getElementById('catImage6')
const catImageID7 = document.getElementById('catImage7')
const catImageID8 = document.getElementById('catImage8')
const catImageID9 = document.getElementById('catImage9')
const button = document.getElementById('button')

function getNewCat(index) {
  fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${storedBreeds[index].id}`)
    .then(response => response.json())
    .then(json => {
      catImageID0.innerHTML = `<img src='${json[0].url}'  class='img'/>`
      catImageID1.innerHTML = `<img src='${json[1].url}'  class='img'/>`
      catImageID2.innerHTML = `<img src='${json[2].url}'  class='img'/>`
      catImageID3.innerHTML = `<img src='${json[3].url}'  class='img'/>`
      catImageID4.innerHTML = `<img src='${json[4].url}'  class='img'/>`
      catImageID5.innerHTML = `<img src='${json[5].url}'  class='img'/>`
      catImageID6.innerHTML = `<img src='${json[6].url}'  class='img'/>`
      catImageID7.innerHTML = `<img src='${json[7].url}'  class='img'/>`
      catImageID8.innerHTML = `<img src='${json[8].url}'  class='img'/>`
      catImageID9.innerHTML = `<img src='${json[9].url}'  class='img'/>`
    })
}

button.onclick = () => getNewCat(Math.floor(Math.random() * 68))