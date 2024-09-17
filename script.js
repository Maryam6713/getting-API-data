function scrollToRecipes() {
    const recipesSection = document.getElementById('recipes-section');
    recipesSection.scrollIntoView({ behavior: 'smooth' });
}
//---------------changes images
const images = [
    'food7.png',
    'food3.png',
    'food8.png',
    'food11.png',
    'food2.png'
];

let currentImageIndex = 0;

// Get the image element
const imageElement = document.getElementById('circle');

// Add click event listener to the image
imageElement.addEventListener('click', function() {
    // Increment the image index
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Update the image source to the next image in the array
    imageElement.src = images[currentImageIndex];
});
//---------------------getting API
const containerRecipes = document.getElementById('recipes');
//const containerProducts = document.getElementById('products-container');

// Function to fetch and display recipes
function displayRecipes() {
    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            // Clear previous recipe results
            containerRecipes.innerHTML = '';

            // Assuming 'data.recipes' holds the array of recipes
            data.recipes.forEach(item => {
                const card = document.createElement('div');
card.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mt-3');

card.innerHTML = `
    <div class="card text-center" style="width: 18rem;">
        <img src="${item.image}" class="card-img card-img-top img-fluid" alt="${item.name}">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <a href="#" class="btn btn-warning">Select</a>
        </div>
    </div>
`;

document.getElementById('recipes').appendChild(card);



                containerRecipes.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching recipes:', error);
        });
}
displayRecipes()