// selector

const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');

// song list 

const songList = [
	{
		path : "audio/audio1.mp3",
		songName : "Nasheed 1"
	},
	{
		path : "audio/audio2.mp3",
		songName : "Nasheed 2"
	},
	{
		path : "audio/audio3.mp3",
		songName : "Nasheed 3"
	},
	{
		path : "audio/audio4.mp3",
		songName : "Nasheed 4"
	},
]

let song_Playing = false;

// play song

function playSong(){
	song_Playing = true;
	audio.play();
	playPause.classList.add('active')
	playPause.innerHTML = '<i class="fas fa-pause"></i>';
}

// pause song

function pauseSong(){
	song_Playing = false;
	audio.pause()
	playPause.classList.remove('active')
	playPause.innerHTML = '<i class="fas fa-play"></i>';
}

//play or pause on click 

playPause.addEventListener('click', () => (song_Playing ? pauseSong() : playSong()));

// load song

function loadSong(songList){
	title.textContent = songList.songName;
	audio.src = songList.path;
}

// current song

let i = 0;

// on load - select first song form song list

loadSong(songList[i])


function prevSong(){
	i++;
	if(i < 0){
		i = songList.length - 1;
	}
	loadSong(songList[i])
	playSong()
}

prev.addEventListener('click' , prevSong)

function nextSong(){
	i++;
	if(i > songList.length - 1){
		i = 0;
	}
	loadSong(songList[i])
	playSong()
}

next.addEventListener('click' , nextSong)

