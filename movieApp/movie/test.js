// name : Tarek Bdarny 
// id :325347086

const url = './movies.json';

// Create a function to fetch the JSON data
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Call the fetchData function to get the JSON data
fetchData(url)
  .then(data => {
    if (data) {
        let grid = document.querySelector('main');
        let form = document.createElement('form')
        form.innerHTML = `
            <div class="searchInput"> 
            <input type="Text" placeholder="Movie" id="input" class="search" autocomplete = "off">
            <i class="fa-solid fa-magnifying-glass" id="searchMenu"></i>
            </div>
        
            <div class="categoryMenu">
            <i class="fa-solid fa-bars" id="i"></i>
            <div class="categoryWrapper">
            <div class='theme'>
            <i class="fa-sharp fa-solid fa-moon" id="darkMode">Dark mode</i>
            <i class="fa-solid fa-house home">Home</i>
            </div>
            <span for="action" class="actionSpan">Action</span>
        
            <span  class="dramaSpan">Drama</span>
        
            <span  class="romanceSpan">Romance</span>
        
            <span class="comedySpan">Comedy</span>
        
            <span class="mysterySpan">Mystery</span>
            
            </div>
            </div>
        
        `
        let stickyDiv = document.createElement('div')
        stickyDiv.classList.add('sticky')
        stickyDiv.appendChild(form)
        grid.append(stickyDiv)
        
        document.querySelector('#i').addEventListener('click' , (e) =>{
        
            const cWrapper = document.querySelector('.categoryWrapper');
         if( cWrapper.classList.contains('showCategory')){
         cWrapper.classList.remove('showCategory')
         e.target.className = 'fa-solid fa-bars';
         
        }
        else{
            cWrapper.classList.add('showCategory')
        
            e.target.className = 'fa-solid fa-xmark';
        
         }
        })
        
        
        const createGrid = () =>
        {
            let main = document.createElement('div');
            let wrapDiv = document.createElement('div');
            wrapDiv.classList.add('wrapper')
            main.classList.add('mainW');
            main.appendChild(wrapDiv);
        
        
        
            for(let i =0 ; i < data.movies.length ; i++) {
                let movie =document.createElement('div');
                movie.classList.add('card');
                movie.classList.add('animate')
            
                 let info = data.movies[i];
            movie.innerHTML = `
                <div class="movie">
                            <img src="${info.path}" alt="${info.name}" id="img1">
                            <div class="movie-info">
                            <h3  id="year">${info['release-date']}</h3>
                            <span  class="${aboveAverage(info.rating)}">${info.rating}</span>
                        </div>
                        <div class="name">${info.name} 
                            <div class="desc">${info.desc}</div>
                        </div> 
                </div>  
                `
            wrapDiv.appendChild(movie);
            }
            grid.appendChild(main);
        }
        
        const aboveAverage =(x) =>
        {
            return x >= 8 ? 'green' : x >=5 && x <8 ? "orange" : 'red';
        }
        
        createGrid();
         // a function that checks the movie name in the input and if there is a movie it appears in the html 
        const checkValues = (movieName) =>
        {
        
            let main = document.createElement('div');
            let wrapDiv = document.createElement('div');
            wrapDiv.classList.add('wrapper')
            main.classList.add('mainW');
            main.appendChild(wrapDiv);
            let flag = true;
            
            for (let i = 0; i < data.movies.length; i++)
            {
                let info = data.movies[i];
        
                if(data.movies[i].name === movieName)
                    {
                        let rs =document.createElement('div');
                        rs.classList.add('card');
                    rs.innerHTML = `
                    <div class="movie">
                                <img src="${info.path}" alt="${info.name}" id="img1">
                                <div class="movie-info">
                                <h3  id="year">${info['release-date']}</h3>
                                <span  class="${aboveAverage(info.rating)}">${info.rating}</span>
                            </div>
                            <div class="name" >${info.name} 
                                <div class="desc">${info.desc}</div>
                            </div> 
                    </div>  
                    `
                wrapDiv.appendChild(rs);
                        flag = false;
                }
            }
            if(flag){
                getInValidSearch(movieName);
        
            }
            else
            grid.appendChild(main);
        }
          
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const search = document.querySelector('#input').value;
        
            if(search){
                grid.removeChild(grid.children[1])
                checkValues(search);
                document.querySelector('#input').value = "";
            }
            if(search === ''){
                createGrid();
                grid.removeChild(grid.children[1]);
            }
            
            
        }) ;
        
        const getInValidSearch = (search) => {
            
                
            let error = document.createElement('div');
            error.classList.add('errorDiv');
            let errorImage = document.createElement('img');
            errorImage.src = 'error-icon.jpg';
            let errorMessage = document.createElement('h1');
            errorMessage.innerHTML = `Sorry we couldn't find any matches for`;
            let errorSearchInfo = document.createElement('h1');
            errorSearchInfo.innerHTML = search;
            errorMessage.appendChild(errorSearchInfo);
            let errorSpan = document.createElement('span');
            errorSpan.innerHTML = "Please try searching with another Movie Name";
            error.append(errorImage , errorMessage , errorSpan);
            grid.appendChild(error);
            // grid.removeChild(grid.children[1]);
            
        }
        
        document.querySelector('#darkMode').addEventListener('click' , (e) =>
        {
            e.target.className === 'fa-sharp fa-solid fa-moon' ?   e.target.className ="fa-sharp fa-solid fa-sun" : e.target.className ='fa-sharp fa-solid fa-moon'
            e.target.innerHTML === 'Dark mode' ?   e.target.innerHTML =" Light mode" : e.target.innerHTML ='Dark mode';
        
            if(e.target.className === "fa-sharp fa-solid fa-sun"){
                document.querySelector('.mainW').classList.add('lightMode');
            }
            else{
                document.querySelector('.mainW').classList.remove('lightMode');
             
            }
            
        })
        
        document.querySelector('#searchMenu').onclick = () =>{
            const input = document.querySelector('input');
                input.classList.add('show'); 
        }
        
        document.querySelector('.mainW').onclick = () =>{
            document.querySelector('input').classList.remove('show');
            document.querySelector('.categoryWrapper').classList.remove('showCategory');
        }
        document.querySelector('.home').onclick= () =>{
            window.location.assign('index.html')
        }
        // for every span (category) that clicks on call a function that displays the movie 
        const spans = document.querySelectorAll('.categoryWrapper span').forEach(span => {
            span.addEventListener('click', (e) =>{
                let cat = e.target.innerHTML;
                grid.removeChild(grid.children[1]);
                getSameCategory(cat);
            })
        });
        // a function that shows the movie based on the category
        
        const getSameCategory = (category) => {
        
            let wrapDiv = document.createElement('div');
            wrapDiv.classList.add('wrapper')
            let main = document.createElement('div');
            main.classList.add('mainW');
            main.appendChild(wrapDiv);
        
            for (let i = 0; i < data.movies.length; i++)
            {
                let info = data.movies[i];
                if(info.category === category)
                    {
                        let rs =document.createElement('div');
                        rs.classList.add('card');
                    rs.innerHTML = `
                    <div class="movie">
                                <img src="${info.path}" alt="${info.name}" id="img1">
                                <div class="movie-info">
                                <h3  id="year">${info['release-date']}</h3>
                                <span  class="${aboveAverage(info.rating)}">${info.rating}</span>
                            </div>
                            <div class="name" >${info.name} 
                                <div class="desc">${info.desc}</div>
                            </div> 
                    </div>  
                    `
            wrapDiv.appendChild(rs);
                }
                
            grid.appendChild(main);
            }
        }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });


