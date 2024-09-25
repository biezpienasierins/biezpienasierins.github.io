// Function to generate a random 4-character alphanumeric string
function generateRandomString() {
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < 4; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}

// Generate the random string
let randomString = generateRandomString();

// Construct the Google search URL
let googleSearchURL = `https://www.google.com/search?q=allinurl:${randomString}+site:www.youtube.com/watch`;

// Redirect to the generated URL
window.location.href = googleSearchURL;
