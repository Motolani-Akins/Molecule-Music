let now_playing = document.querySelector(".now-playing");
let album_art = document.querySelector(".album-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
  
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

let track_list = [
    {
      name: "Night Owl",
      artist: "Broke For Free",
      image: "Image URL",
      path: "Night_Owl.mp3"
    },
    {
      name: "Enthusiast",
      artist: "Tours",
      image: "Image URL",
      path: "Enthusiast.mp3"
    },
    {
      name: "Shipping Lanes",
      artist: "Chad Crouch",
      image: "Image URL",
      path: "Shipping_Lanes.mp3",
    },
    {
        name: "Night Owl",
        artist: "Broke For Free",
        image: "Image URL",
        path: "Night_Owl.mp3"
      },
      {
        name: "Enthusiast",
        artist: "Tours",
        image: "Image URL",
        path: "Enthusiast.mp3"
      },
      {
        name: "Shipping Lanes",
        artist: "Chad Crouch",
        image: "Image URL",
        path: "Shipping_Lanes.mp3",
      },

      {
        name: "Night Owl",
        artist: "Broke For Free",
        image: "Image URL",
        path: "Night_Owl.mp3"
      },
      {
        name: "Enthusiast",
        artist: "Tours",
        image: "Image URL",
        path: "Enthusiast.mp3"
      },
      {
        name: "Shipping Lanes",
        artist: "Chad Crouch",
        image: "Image URL",
        path: "Shipping_Lanes.mp3",
      },
      {
        name: "Night Owl",
        artist: "Broke For Free",
        image: "Image URL",
        path: "Night_Owl.mp3"
      },
      {
        name: "Enthusiast",
        artist: "Tours",
        image: "Image URL",
        path: "Enthusiast.mp3"
      },
      {
        name: "Shipping Lanes",
        artist: "Chad Crouch",
        image: "Image URL",
        path: "Shipping_Lanes.mp3",
      },
  ];



function changeControl(boolean, id) {
  console.log(boolean, id);

  const playControl = document.getElementById(
    `${id}-play-control`
  )

  let playButton = `<div onclick="changeControl(true, '${id}')">
  <svg class="music-icon icon-expand" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM10.185 7.6395C10.0729 7.55965 9.9409 7.51221 9.80358 7.50238C9.66627 7.49254 9.52889 7.52069 9.40651 7.58374C9.28413 7.64679 9.18147 7.74231 9.10976 7.85983C9.03806 7.97735 9.00008 8.11233 9 8.25V15.75C9.00008 15.8877 9.03806 16.0227 9.10976 16.1402C9.18147 16.2577 9.28413 16.3532 9.40651 16.4163C9.52889 16.4793 9.66627 16.5075 9.80358 16.4976C9.9409 16.4878 10.0729 16.4403 10.185 16.3605L15.435 12.6105C15.5322 12.5411 15.6115 12.4495 15.6661 12.3433C15.7208 12.2371 15.7494 12.1194 15.7494 12C15.7494 11.8806 15.7208 11.7628 15.6661 11.6567C15.6115 11.5505 15.5322 11.4589 15.435 11.3895L10.185 7.6395Z" fill="#F6AAC1"/>
  </svg>
</div>`;

  let pauseButton = `<div onclick="changeControl(false, '${id}')">
  <svg class="music-icon icon-contract" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519941 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C24 10.4241 23.6896 8.8637 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913445C15.1363 0.310389 13.5759 0 12 0V0ZM9.6 15.6C9.6 15.9183 9.47358 16.2235 9.24853 16.4485C9.02349 16.6736 8.71826 16.8 8.4 16.8C8.08174 16.8 7.77652 16.6736 7.55148 16.4485C7.32643 16.2235 7.2 15.9183 7.2 15.6V8.4C7.2 8.08174 7.32643 7.77651 7.55148 7.55147C7.77652 7.32643 8.08174 7.2 8.4 7.2C8.71826 7.2 9.02349 7.32643 9.24853 7.55147C9.47358 7.77651 9.6 8.08174 9.6 8.4V15.6ZM16.8 15.6C16.8 15.9183 16.6736 16.2235 16.4485 16.4485C16.2235 16.6736 15.9183 16.8 15.6 16.8C15.2817 16.8 14.9765 16.6736 14.7515 16.4485C14.5264 16.2235 14.4 15.9183 14.4 15.6V8.4C14.4 8.08174 14.5264 7.77651 14.7515 7.55147C14.9765 7.32643 15.2817 7.2 15.6 7.2C15.9183 7.2 16.2235 7.32643 16.4485 7.55147C16.6736 7.77651 16.8 8.08174 16.8 8.4V15.6Z" fill="#F6AAC1"/>
      </svg> 
</div> `

  if(boolean) {
    playControl.innerHTML = pauseButton;
  } else {
    playControl.innerHTML = playButton;
  }
}

//