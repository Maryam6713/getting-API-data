//--------automatic scrolling section 
function scrollToRecipes() {
    var recipesSection = document.getElementById('recipes-section');
    recipesSection.scrollIntoView({ behavior: 'smooth' });
}

//---------------changes images
var images = [
    'food2.png',
    'food7.png',
    'food8.png',
    'food11.png',
    'food3.png',

];
var currentImageIndex = 0;

// -------------Get the image element
var imageElement = document.getElementById('circle');

//------------ Add click event listener to the image
imageElement.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex];
});

//---------------------getting API
var containerRecipes = document.getElementById('recipes');

// Function to dynamically display recipes
function displayRecipes() {
    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {

            // Loop through each recipe and create a card
            (data.recipes || []).forEach((item, index) => {

                // For demonstration, we are assigning random YouTube links
                var youtubeLinks = [
                    'https://www.youtube.com/watch?v=qQrZFAIc3XM',
                    'https://www.youtube.com/watch?v=CODVdfrBnzk&t=16s',
                    'https://www.youtube.com/watch?v=jjTvhhvOucQ',
                    'https://www.youtube.com/watch?v=IhCnswKdqyg',
                    'https://www.youtube.com/watch?v=5EAgEwjHaSk',
                    'https://www.youtube.com/watch?v=q41O51rzggc',
                    'https://www.youtube.com/watch?v=kzLTMAUQWkI',
                    'https://www.youtube.com/watch?v=co4dxLIXGkM',
                    'https://www.youtube.com/watch?v=hKZCM2VHBh8',
                    'https://www.youtube.com/watch?v=f97C_QII9Uo',
                    'https://www.youtube.com/watch?v=uFa6urPkK4c',
                    'https://www.youtube.com/watch?v=3d6DrdOEuY4',
                    'https://www.youtube.com/watch?v=ewat8Dt52l8',
                    'https://www.youtube.com/watch?v=pZfT0-BKNTU',
                    'https://www.youtube.com/watch?v=7aMYiEtQ3k8' ,
                    'https://www.youtube.com/watch?v=UDy9fV2mcD4' ,
                    'https://www.youtube.com/watch?v=1YYHpllT3OM' ,
                    'https://www.youtube.com/watch?v=lqUtV6lT1n4'  ,
                    'https://www.youtube.com/watch?v=BrT97UjAeNI' ,
                    'https://www.youtube.com/watch?v=7EHmt8DLNj4',
                    'https://www.youtube.com/watch?v=-pHyO6kwsUM',
                    'https://www.youtube.com/watch?v=_XMJiQSYLpE',
                    'https://www.youtube.com/watch?v=y8wsRxt0xf4',
                    'https://www.youtube.com/watch?v=eZgv-9gtuqo',
                    'https://www.youtube.com/watch?v=Q7HSqukRZTs',
                    'https://www.youtube.com/watch?v=ueM9Q6tlPs8',
                    'https://www.youtube.com/watch?v=YYCDBKreJBo',
                    'https://www.youtube.com/watch?v=9Aq2zdlnNtg',
                    'https://www.youtube.com/watch?v=PRciaYxo9JI',
                    'https://www.youtube.com/watch?v=r8ouA39rG1Q'

                ];

                var card = `
                    <div class="col-lg-3 col-md-4 col-sm-6 mt-3">
                        <div class="card text-center" style="width: 18rem;">
                            <img src="${item.image}" class="card-img card-img-top img-fluid" alt="${item.name}">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">${item.description || 'Delicious recipe for you!'}</p>
                                <a href="${youtubeLinks[index % youtubeLinks.length]}" class="btn btn-warning" target="_blank">Watch Recipe</a>
                            </div>
                        </div>
                    </div>`;
                
                // Append each card to the container
                containerRecipes.innerHTML += card;
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
}

displayRecipes();

//============= image animations

var imageBoxes = document.querySelectorAll('.image-box');

// Array of random positions for the images
var positions = [
    { top: '10%', left: '15%' },
    { top: '90%', left: '90%' },
    { top: '30%', left: '50%' },
    { top: '80%', left: '10%' },
    { top: '15%', left: '80%' }
];

// Function to set random positions and animations
imageBoxes.forEach((box, index) => {
    // Setting random positions from the array
    box.style.top = positions[index].top;
    box.style.left = positions[index].left;

    // Randomly adding left or right animation
    if (Math.random() > 0.5) {
        box.classList.add('animate-left');
    } else {
        box.classList.add('animate-right');
    }
});
