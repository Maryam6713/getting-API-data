//--------automatic scrolling section 
function scrollToRecipes() {
    var recipesSection = document.getElementById('recipes-section');
    recipesSection.scrollIntoView({ behavior: 'smooth' });
}
//---------------changes images
var images = [
    'food7.png',
    'food3.png',
    'food8.png',
    'food11.png',
    'food2.png'
];
var currentImageIndex = 0;

// -------------Get the image element
const imageElement = document.getElementById('circle');

//------------ Add click event listener to the image
imageElement.addEventListener('click', function() {

    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex];
});
//---------------------getting API
var containerRecipes = document.getElementById('recipes');

function displayRecipes() {
    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            
            (data.recipes || []).forEach(item => {
                var card = `
                    <div class="col-lg-3 col-md-4 col-sm-6 mt-3">
                        <div class="card text-center" style="width: 18rem;">
                            <img src="${item.image}" class="card-img card-img-top img-fluid" alt="${item.name}">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <a href="#" class="btn btn-warning">watch recipe</a>
                            </div>
                        </div>
                    </div>`;
                
        
                containerRecipes.innerHTML += card;
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
}


displayRecipes();
