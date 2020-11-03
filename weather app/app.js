
    let temp_degree = document.getElementById("temperature-degree");
    let temp_desc = document.getElementById("temperature-description");
    let timeZone = document.querySelector('.location p');
    
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}api.openweathermap.org/data/2.5/weather?q=london&appid=6a44a3e8b96e3664ded3042f19834b9a&units=metric`;
       fetch(api) 
        .then((response) => { 
            return response.json();
        })
        .then(data => { 
            console.log(data);
                const temp  = data['main']['temp']; 
                temp_degree.innerHTML = temp;
                const name =  data['name'];
                timeZone.textContent = name;
               let weather = data['weather']['0']['description']; 
              temp_desc.innerHTML = weather; 
              
        }) ;
    
