const imageUrl = 'https://example.com/image.jpg';  // Replace with your desired image URL

// Create an img element
const imageElement = document.createElement('img');

// Set the source of the image element
imageElement.src = imageUrl;

// Optional: Set alternative text for the image
imageElement.alt = 'Descriptive text';

// Append the image to the container
document.getElementById('image-container').appendChild(imageElement);