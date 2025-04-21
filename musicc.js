let currentAudio = null;

function playMusic(song, lyrics, button) {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    
    if (currentAudio) {
        currentAudio.pause();
    }

    audioSource.src = song;
    audioPlayer.load();
    audioPlayer.play();
    currentAudio = audioPlayer;

    const currentImage = document.getElementById('currentImage');
    const currentTitle = document.getElementById('currentTitle');
    const currentArtist = document.getElementById('currentArtist');
    const currentLyrics = document.getElementById('currentLyrics');

    currentImage.src = button.parentElement.querySelector('.song-image').src;
    currentTitle.innerHTML = button.parentElement.querySelector('h3').innerHTML;
    currentArtist.innerHTML = button.parentElement.querySelector('p').innerHTML;
    currentLyrics.innerHTML = lyrics;
}

function searchSongs() {
    const input = document.getElementById('searchBar');
    const filter = input.value.toLowerCase();
    const musicList = document.getElementById('musicList');
    const musicItems = musicList.getElementsByClassName('music-item');

    for (let i = 0; i < musicItems.length; i++) {
        const songTitle = musicItems[i].getElementsByTagName('h3')[0];
        const artistName = musicItems[i].getElementsByTagName('p')[0];
        
        if (songTitle.innerHTML.toLowerCase().indexOf(filter) > -1 || artistName.innerHTML.toLowerCase().indexOf(filter) > -1) {
            musicItems[i].style.display = "";
        } else {
            musicItems[i].style.display = "none";
        }
    }
}
