let audioElement = new Audio('./assets/Jonas Blue - Rise ft. Jack & Jack (Official Video).mp3');

let playButton = document.querySelector(".pause-play");

let volumeBar = document.querySelector(".volume-bar")

let progressBar = document.querySelector(".progress-bar");

let curr_time = document.querySelector(".curr-time");

let heart = document.querySelector(".fa-heart");

let previousButton = document.querySelector(".previous-song");

let nextButton = document.querySelector(".next-song");

let searchButton = document.querySelector(".search");

let homeButton = document.querySelector(".home");

let searchBar = document.querySelector(".sticky-nav-search");

let songs = [
    {pic_address:"./assets/songpic1.png", song_address:"./assets/Jonas Blue - Rise ft. Jack & Jack (Official Video).mp3", name:"Rise", artists:"Jonas Blue, Jack & Jack"},
    {pic_address:"./assets/songpic2.png", song_address:"./assets/Imagine Dragons - Believer (Official Music Video).mp3", name:"Believer", artists:"Imagine Dragons"},
    {pic_address:"./assets/songpic3.png", song_address:"./assets/Imagine Dragons  Birds Animated Video.mp3", name:"Birds", artists:"Imagine Dragons"},
    {pic_address:"./assets/songpic4.png", song_address:"./assets/Justin Bieber  Sorry Lyric Video.mp3", name:"Sorry", artists:"Justin Beiber"},
    {pic_address:"./assets/songpic5.png", song_address:"./assets/The Chainsmokers  Closer Official Video ft Halsey.mp3", name:"Closer", artists:"Chainsmokers (ft Hasley)"},
];

let curr_song=0;

heart.addEventListener('click', () => {
    if(heart.classList.contains("fa-regular")){
        heart.classList.add("fa-solid");
        heart.classList.remove("fa-regular");
    }
    else {
        heart.classList.add("fa-regular");
        heart.classList.remove("fa-solid");
    }
})

playButton.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        playButton.src = "./assets/pause_icon.jpeg";
    }
    else {
        audioElement.pause();
        playButton.src = "./assets/player_icon3.png";
    }
})

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
    let time = parseInt(audioElement.currentTime);
    let min = parseInt(time/60);
    let sec = time - (min*60);
    if (sec<10) {
        sec = "0"+sec;
    }
    curr_time.innerText = `${min}:${sec}`;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value*audioElement.duration/100;
})

volumeBar.addEventListener('change', () => {
    audioElement.volume = volumeBar.value/100;
})

nextButton.addEventListener('click', () => {
    if (curr_song==4) {
        curr_song-=5;
    }
    curr_song++;
    document.querySelector(".album-pic img").src = songs[curr_song].pic_address;
    document.querySelector(".album-content-name").innerText = songs[curr_song].name;
    document.querySelector(".album-content-info").innerText = songs[curr_song].artists;
    audioElement.src = songs[curr_song].song_address;
    progressBar.value = 0;
    audioElement.play();
    playButton.src = "./assets/pause_icon.jpeg";
})

previousButton.addEventListener('click', () => {
    if (curr_song==0) {
        curr_song+=5;
    }
    curr_song--;
    document.querySelector(".album-pic img").src = songs[curr_song].pic_address;
    document.querySelector(".album-content-name").innerText = songs[curr_song].name;
    document.querySelector(".album-content-info").innerText = songs[curr_song].artists;
    audioElement.src = songs[curr_song].song_address;
    progressBar.value = 0;
    audioElement.play();
    playButton.src = "./assets/pause_icon.jpeg";
})

// homeButton.style.opacity = 1;

searchButton.addEventListener('click', () => {
    console.log("Search button clicked");
    searchBar.style.display = "flex";
    if (searchButton.classList.contains("selected")==false) {
        searchButton.classList.add("selected");
    }
    if (homeButton.classList.contains("selected")) {
        homeButton.classList.remove("selected");
    }
})

homeButton.addEventListener('click', () => {
    console.log("Home button was clicked");
    searchBar.style.display = "none";
    if (searchButton.classList.contains("selected")) {
        searchButton.classList.remove("selected");
    }
    if (homeButton.classList.contains("selected")==false) {
        homeButton.classList.add("selected");
    }
})
