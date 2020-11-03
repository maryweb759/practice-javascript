
const characterList =  document.getElementById('characterlist'); 
const searchBar = document.getElementById("searchbar");
let hpCharacters = [] ; 
searchBar.addEventListener('keyup', (e) => { 
  const inputEntred = e.target.value.toLowerCase(); 
  const filteredValue = hpCharacters.filter((character) => { 
    return ( character.name.toLowerCase().includes(inputEntred)|| 
    character.house.toLowerCase().includes(inputEntred)

);
  });
  specialCharacter(filteredValue);
});


const displayCharacters = async () => { 
  const res = await fetch('http://hp-api.herokuapp.com/api/characters'); 
  hpCharacters = await res.json(); 
  specialCharacter( hpCharacters); 
}
const specialCharacter = (Characters) => { 
  const characterRow = Characters.map((character) => { 
    return `
      <li class="character">
        <h2> ${character.name} </h2> 
        <p> ${character.house} </p> 
        <img src="${character.image}"> </img>
      </li>
    `; 
  }).join(''); 
  characterList.innerHTML = characterRow;
}
displayCharacters();







/*
searchBar.addEventListener('keyup', (e) => { 
 const searchString = e.target.value.toLowerCase(); 
 const searchFilterd = hpCharacters.filter((character) => { 
   return (character.name.toLowerCase().includes(searchString) || 
           character.house.toLowerCase().includes(searchString)
   ) ;
 }); 
 displayCharacters(searchFilterd);
});
let link = 'http://hp-api.herokuapp.com/api/characters';
const loadCharacters = async () => { 
    try {
      let res = await fetch('http://hp-api.herokuapp.com/api/characters'); 
      hpCharacters = await res.json() ; 
      displayCharacters(hpCharacters);
    } catch (error) {
        console.error(error);
    }
  
} 
const  displayCharacters = (characters) => { 
    const htmlString = characters.map((character) => { 
      return ` 
       <li class="character"> 
         <h2> ${character.name} </h2> 
         <p> ${character.house} </p> 
         <img src="${character.image}"> </img> 
       </li> `;
    }).join(''); 
    characterList.innerHTML = htmlString;
}
loadCharacters(); */