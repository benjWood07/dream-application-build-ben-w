// Dream Application - Muscic Discovery Hub

// Imported readline-sync for user interaction
const readlineSync = require('readline-sync');

console.log("Welcome to the Music Discovery Hub!\n");

// Module 1: Values, Data Types, and Operations
// Skill: Working with different data types and performing operations on them
// Declaring variables using different data types for our music app
let myAppName = "Music Discovery Hub ";                 // Exapmle: String data type
let appVersionMaybe = 1.12;                         // Exapmle: Number data type - decimal
let totalSongsDiscovered = 0;                       // Exapmle: Number data type - integer
let isUserLoggedIn = false;                         // Exapmle: Boolean data type
let currentCreatedPlaylist = null;                  // Exapmle: Null data type (no playlist selected yet)
// Performing operations on these values
let appTitle = myAppName + " v" + appVersionMaybe;                    // Example: String concatenation
let totalSongLimit = 365;                                             // Example: Number value
let songsRemaining = totalSongLimit - totalSongsDiscovered;          // Example: Mathematical operation - subtraction
let hasRoomForMore = songsRemaining > 0;                              // Example: Comparison operation - boolean result
// Testing outputs with console.log to verify data types and operations
console.log("App Title - using string concatenation:", appTitle);
console.log("Total Songs Discovered - number:", totalSongsDiscovered);
console.log("Songs Remaining - basic math operation:", songsRemaining);
console.log("Has Room for More Songs - boolean value:", hasRoomForMore);
console.log("Current Playlist - null baseline:", currentCreatedPlaylist);
console.log("Data type of myAppName:", typeof myAppName);
console.log("Data type of appVersionMaybe:", typeof appVersionMaybe);
console.log("Data type of isUserLoggedIn:", typeof isUserLoggedIn);
console.log("");

// Module 2: Stringing Characters Together
// Skill: String manipulation showcasing validation methods like .trim() and .toLowerCase()

// Psuedocode: Get user input and trim it for validation
// - Prompt user for username with readline-sync
// - Cleam the input using .trim() to remove spaces
// - Covert to lowercase using .toLowerCase() for consistent comparison
// - Validate the cleaned input meets requirements

// Use readline-sync to get user input
console.log("First, you'll need to loggin");
let userInputName = readlineSync.question('Enter your username: ');
let userInputGenre = readlineSync.question('Enter a prefered music genre: ');
console.log("\nUpdated user information:");
console.log("Username entered: '" + userInputName + "'");
console.log("Genre selected: '" + userInputGenre + "'");
// Validated user inputs using string methods
let trimmedUserName = userInputName.trim().toLowerCase();           // Remove spaces, convert to lowercase
let trimmedGenre = userInputGenre.trim().toLowerCase();             // Trim the genre input
let displayUsername = trimmedUserName.charAt(0).toUpperCase() + trimmedUserName.slice(1);  // Capitalize first letter for display
// Created formatted strings using concatenation
let welcomeMessage = "Welcome to the app, " + displayUsername + "!";
let genreMessage = "Your favorite genre is: " + trimmedGenre.toUpperCase();
let profileBuild = displayUsername + " | Genre: " + trimmedGenre;
// Validating string length for username
let usernameLength = trimmedUserName.length;
let isUsernameValid = usernameLength >= 3 && usernameLength <= 20;    // ** IntellSense suggested this Check for length requirements
// Testing string operations and validation
console.log("\nCleaned and formatted strings:");
console.log("Clean Username:", trimmedUserName);
console.log("Display Username:", displayUsername);
console.log("Clean Genre:", trimmedGenre);
console.log("Welcome Message:", welcomeMessage);
console.log("Genre Message:", genreMessage);
console.log("Profile String:", profileBuild);
console.log("Username Length:", usernameLength);                     // ** IntellSense suggested this Check for length requirements
console.log("Is Username Valid (3-20 chars):", isUsernameValid);

// Update login status based on validation
if (isUsernameValid) {
    isUserLoggedIn = true;
    console.log("Login successful!");
} else {
    console.log("Login failed - username must be 3-20 characters");
}
console.log("");

// Module 3: Control Structures and Logic

// Skill: Using if/else statements and logical operators to handle decisions
// Get user preferences using readline-sync
let userAge = readlineSync.questionInt('Enter your age: ');
let wantsPremium = readlineSync.keyInYN('Do you want to upgrade to premium? ');

console.log("User age:", userAge);
console.log("Upgrading to premium?:", wantsPremium);

// Pseudocode: Determine user access level and features
// If user is 18 or older AND wants premium
//   Then grant full premium access
// Else If user is 18 or older AND doesn't want premium  
//   Then grant standard adult access
// Else If user is under 18
//   Then apply parental restrictions
// Else handle edge cases

// Control: Determine access level using logical operators
let levelAccessed = "";
let dailySongLimit = 0;
let addedParentalControl = false;

if (userAge >= 18 && wantsPremium) {
    levelAccessed = "Premium Adult";
    dailySongLimit = 999;  // Unlimited (represented as high number)
    addedParentalControl = false;
    console.log("Premium Access Confirmed!");
    console.log("✓ Unlimited streaming");
    console.log("✓ HD audio quality");
} else if (userAge >= 18 && !wantsPremium) {
    levelAccessed = "Standard Adult";
    dailySongLimit = 50;
    addedParentalControl = false;
    console.log("Standard Access Confirmed!");
    console.log(" 50 songs per day limit");
    console.log(" Standard audio quality");
} else if (userAge < 18) {
    levelAccessed = "Minor Account";
    dailySongLimit = 25;
    addedParentalControl = true;
    console.log("Minor Account Confirmed!");
    console.log(" 25 songs per day limit");
    console.log(" Parental controls active");
    console.log(" Explicit content unavailable");
} else {
    levelAccessed = "Unknown";
    console.log("Access level could not be determined.");
}

console.log("Access Level:", levelAccessed);
console.log("Daily Song Limit:", dailySongLimit);
console.log("");

// Module 4: Working with Loops
// Skill: Using for loops to iterate through data and perform repetitive tasks
// Randomly created sample data for loop demonstrations
let availableGenres = ["indie", "rock", "edm", "folk", "jazz", "hip-hop", "pop"];
let genrePopularity = [85, 92, 78, 65, 58, 88, 95];  // Popularity scores out of 100

console.log("Available music genres in our database:");

// Pseudocode: Display all genres with their popularity using a for loop
// For each index from 0 to length of genres array
//   Get the genre name at current index
//   Get the popularity score at current index  
//   Display formatted information
//   Increment counter

// Loop: Calculate statistics using loops
console.log("\nGenre Statistics");
let totalPopularity = 0;
let highestScore = 0;
let mostPopularGenre = "";
let genreCount = availableGenres.length;

for (let i = 0; i < genrePopularity.length; i++) {
    totalPopularity = totalPopularity + genrePopularity[i];  // Add to running total
    
    // Find highest scoring genre
    if (genrePopularity[i] > highestScore) {
        highestScore = genrePopularity[i];
        mostPopularGenre = availableGenres[i];
    }
}

let averagePopularity = totalPopularity / genreCount;

console.log("Total Genres Available:", genreCount);
console.log("Average Popularity Score:", averagePopularity.toFixed(1));
console.log("Most Popular Genre:", mostPopularGenre.toUpperCase() + " (" + highestScore + " points)");

// Module 5: Building Arrays
// Skill: Creating arrays and adding elements to store music data collections

// Pseudocode: Build arrays to store user's music data
// - Create empty arrays for user's personal collections
// - Add elements using .push() method based on user input
// - Build nested arrays for complex music library structure

// Start with empty arrays for user's personal music collections
let userPlaylists = [];                    // Empty array for playlist names
let favoriteSongs = [];                    // Empty array for favorite songs
let discoveredArtists = [];                // Empty array for discovered artists
let songRatings = [];                      // Empty array for song ratings

console.log("Building your personal music collection...");
console.log("Starting with empty arrays:");
console.log("User Playlists:", userPlaylists);
console.log("Favorite Songs:", favoriteSongs);
console.log("Discovered Artists:", discoveredArtists);

// Interactive array building - let user add their favorite songs
let numberOfSongs = readlineSync.questionInt('How many favorite songs would you like to add (1-5)? ');

// Validated input
if (numberOfSongs > 5) numberOfSongs = 5;
if (numberOfSongs < 1) numberOfSongs = 1;

console.log("Adding " + numberOfSongs + " songs to your collection:");

// Used a loop to build arrays based on user input
for (let i = 0; i < numberOfSongs; i++) {
    let songTitle = readlineSync.question('Enter song title #' + (i + 1) + ': ');
    let artistName = readlineSync.question('Enter artist name for "' + songTitle + '": ');
    let rating = readlineSync.questionInt('Rate this song (1-5 stars): ');
    
    // Validate rating
    if (rating > 5) rating = 5;
    if (rating < 1) rating = 1;
    
    // Add elements to different arrays using .push()
    favoriteSongs.push(songTitle.trim());           // Add song to favorites
    discoveredArtists.push(artistName.trim());      // Add artist to discovered list
    songRatings.push(rating);                       // Add rating to ratings array
}

// Build a nested array structure for complete song data
// Each element is an array containing: [songTitle, artist, rating, genre]
let completeSongCollection = [];

for (let i = 0; i < favoriteSongs.length; i++) {
    let songData = [
        favoriteSongs[i],        // Song title
        discoveredArtists[i],    // Artist name  
        songRatings[i],          // Rating
        trimmedGenre               // User's favorite genre from earlier
    ];
    completeSongCollection.push(songData);
}

console.log("\n✓ Your music collection has been built!");
console.log("User Playlists:", userPlaylists);
console.log("Favorite Songs:", favoriteSongs);
console.log("Discovered Artists:", discoveredArtists);
console.log("Song Ratings:", songRatings);
console.log("Complete Song Collection (nested arrays):");
for (let i = 0; i < completeSongCollection.length; i++) {
    console.log("  Song " + (i + 1) + ":", completeSongCollection[i]);
}
console.log("");

// Module 6: Using Arrays
// Skill: Accessing, searching, and manipulating array data with nested loops

// Create a complex nested structure: Music Library with Artists, Albums, and Songs
// Pseudocode: Create a music library array with nested arrays for artists, albums, and songs
// - Each artist is an array with name, genre, and albums  
let musicLibrary = [
    [
        "Arcade Fire",     // Artist name [0]
        "Indie Rock",          // Genre [1]  
        [                      // Albums array [2]
            [
                "Suburban War",    // Album name [0]
                2010,                     // Year [1]
                [                         // Songs array [2]
                    ["The Suburbs", "3:47", 4.8],
                    ["Suburban War", "4:35", 4.2],
                    ["Rococo", "2:14", 3.9]
                ]
            ],
            [
                "Funeral", 
                2004,
                [
                    ["Rebellion", "3:27", 4.1],
                    ["Wake Up", "3:30", 4.9],
                    ["Haiti", "3:22", 4.7]
                ]
            ]
        ]
    ],
    [
        "Molcolm Todd",
        "Indie Pop",
        [
            [
                "Molcolm Todd",
                2025,
                [
                    ["Bleed", "4:23", 4.6],
                    ["Original", "3:15", 4.4],
                    ["Dance, "4:44", 4.3]
                ]
            ]
        ]
    ]
];

// Pseudocode: Use nested loops to display and search the music library
// - For each artist in the music library (outer loop)
//  - Display artist name and genre
//   - For each album by current artist (middle loop)  
//    - Dsiplay album name and year
//     - For esch song in current album (inner loop)
//       - Display song title, duration, and rating

// Triple-nested loop to access all data levels
    
// Loop through albums for current artist
        
// Loop through songs for current album

// Interactive array searching
// Pseudocode: Allow user to search for artists by name
// - Prompt user for search term

// Search through the nested array structure

// Check if artist name contains the search term

// Count total songs for this artist

// Final statistics using array manipulation

// Calculate comprehensive statistics using nested loops
