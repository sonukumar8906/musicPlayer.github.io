
const songs = [
  {
      name: "sonu1",
      image:"kumar1",
      title:"love",
  },
  {
      name: "sonu2",
      image:"kumar2",
      title:"remix",
  },
  {
      name: "sonu3",
      image:"kumar3",
      title:"breakUp",
  },
  {
      name: "sonu4",
      image:"kumar4",
      title:"lonelyness",
  },
  {
      name: "sonu5",       
      image:"kumar5",
      title:"apne to apne",
      
  },
  {
      name: "sonu6",       
      image:"kumar6",
      title:"self believe",
      
  }
];

// getting references and variable
const music = document.querySelector('audio');
const image = document.querySelector('.img_container img')
const title = document.querySelector('h3');
const next = document.querySelector('#next');
let progress = document.querySelector('.progress');
let  start_time = document.querySelector('.start_time');
let total_time = document.querySelector('.final_time');
const progress_div = document.querySelector('.progress_baar');
let isPlaying = false;
let nextMusic = 0;

const playMusic = () =>{
    isPlaying = true;
  music.play();
  play.classList.replace("fa-play" , "fa-pause");
  image.classList.add('aNine')
}
const pauseMusic = () =>{
    isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause" , "fa-play");
  image.classList.remove('aNine')
}
play.addEventListener('click', () =>{
 if(isPlaying){
    // console.log (isPlaying)
   pauseMusic();
 }else{
    playMusic();
    console.log(isPlaying)
 }
// or
//  isPlaying ? pauseMusic() : playMusic();
});
// here music ,image and title change fucntion
const loadMusic = (musics) => {
title.textContent = musics.title;
music.src = "music/" + musics.name + ".mp3";
image.src = "images/" + musics.image + ".jpg";
}


// click the next button for change songs
const nextSong = () =>{
  nextMusic = (nextMusic + 1) % songs.length;
  loadMusic(songs[nextMusic]);
  music.play();
  image.classList.add('aNine')
  play.classList.replace("fa-play" , "fa-pause");
}

  // click for previous songs
  const prevSong = () => {
    nextMusic = (nextMusic - 1) % songs.length;
    loadMusic(songs[nextMusic]);
    music.play();
    image.classList.add('aNine')
    play.classList.replace("fa-play" , "fa-pause");
  }

  //  updating the music
  music.addEventListener("timeupdate", (e) =>{
    // const {currentTime , duration} = e.srcElement;
    // or
    const currentTime  = e.srcElement.currentTime;
    const duration = e.srcElement.duration;
    
    let progressTime = currentTime / duration * 100;
    progress.style.width = `${progressTime}%`

    // updating the duration time
 let final_minute = Math.floor(duration/60);
 let final_second = Math.floor(duration % 60);
 if(duration){
total_time.innerText = `${final_minute}:${final_second}`;
 }

//  updating current Time 
 let initial_minute = Math.floor(currentTime/60);
 let initial_second = Math.floor(currentTime % 60);
 
 if(initial_second < 10){
  initial_second = `0${initial_second}`
 }
 if(initial_minute < 10){
  initial_minute = `0${initial_minute}`
 }
 start_time.innerText = `${initial_minute}:${initial_second}`;
 });
 progress_div.addEventListener('click',(e) =>{
  const {duration} = music;
   let update_time = (e.offsetX/e.srcElement.clientWidth) * duration;
  //  console.log(duration)
  //  console.log(update_time)
   music.currentTime = update_time;
 });
 
  music.addEventListener('ended', nextSong)
  next.addEventListener('click', nextSong);
  previous.addEventListener('click', prevSong)



