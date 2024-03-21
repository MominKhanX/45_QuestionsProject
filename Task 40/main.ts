// Define a function named make_album to create an album object with optional tracks
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    // Create an album object with artist and title properties
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create three albums using the make_album function with different arguments
let album1 = make_album('Jay Chou', 'Greatest Works of Art');
let album2 = make_album('Susan Boyle', 'I Dreamed a Dream', 12); // With tracks
let album3 = make_album('Norah Jones', 'Come Away with Me');

// Print each album object
console.log(album1);
console.log(album2);
console.log(album3);
