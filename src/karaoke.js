class Karaoke {
    constructor() {
        this.songs = [
            { title: "Song 1", artist: "Artist 1", lyrics: "Lyrics for song 1..." },
            { title: "Song 2", artist: "Artist 2", lyrics: "Lyrics for song 2..." },
            // Add more songs as needed
        ];
        this.currentSongIndex = 0;
        this.audio = new Audio();
        this.lyricsElement = document.getElementById('lyrics');
        this.addEventListeners();
    }

    addEventListeners() {
        document.getElementById('play-button').addEventListener('click', () => this.playSong());
        document.getElementById('stop-button').addEventListener('click', () => this.stopSong());
    }

    playSong() {
        const song = this.songs[this.currentSongIndex];
        this.audio.src = `path/to/songs/${song.title}.mp3`; // Update with actual song path
        this.audio.play();
        this.lyricsElement.textContent = song.lyrics;
    }

    stopSong() {
        this.audio.pause();
        this.audio.currentTime = 0; // Reset to the beginning
        this.lyricsElement.textContent = '';
    }

    nextSong() {
        this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
        this.playSong();
    }

    previousSong() {
        this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
        this.playSong();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Karaoke();
});
