// Define song list
const songs = [
    {
        title: "Naa Cheli Rojave",
        artist: "Artist One",
        src: "Naa Cheli Rojave.mp3",
    },
    {
        title: "Animal_Nanna nuvvu na pranam",
        artist: "Artist Two",
        src: "Nanna Nuv Naa Pranam.mp3",
    },
    {
        title: "pachandanamey",
        artist: "Artist Three",
        src: "Pachchadanamey.mp3",
    },
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
let isPlaying = false;

// Load initial song
const loadSong = (index) => {
    const song = songs[index];
    audio.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
};

// Play or pause the audio
const togglePlayPause = () => {
    if (isPlaying) {
        audio.pause();
        playPauseButton.textContent = "▶️";
    } else {
        audio.play();
        playPauseButton.textContent = "⏸";
    }
    isPlaying = !isPlaying;
};

// Play the previous song
const playPrevSong = () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    isPlaying = true;
    playPauseButton.textContent = "⏸";
};

// Play the next song
const playNextSong = () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    isPlaying = true;
    playPauseButton.textContent = "⏸";
};

// Event listeners
playPauseButton.addEventListener("click", togglePlayPause);
prevButton.addEventListener("click", playPrevSong);
nextButton.addEventListener("click", playNextSong);

// Initialize player
loadSong(currentSongIndex);
