const songs = [
    {
        title: "Song 1",
        artist: "Artist 1",
        src: "music/song1.mp3"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        src: "music/song2.mp3"
    },
    {
        title: "Song 3",
        artist: "Artist 3",
        src: "music/song3.mp3"
    }
];

let currentIndex = 0;
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

function loadSong(index) {
    const song = songs[index];
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
}

function playSong() {
    audio.play();
    playBtn.textContent = 'Pause';
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = 'Play';
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : songs.length - 1;
    loadSong(currentIndex);
    playSong();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < songs.length - 1) ? currentIndex + 1 : 0;
    loadSong(currentIndex);
    playSong();
});

// Initial load
loadSong(currentIndex);
