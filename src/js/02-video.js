import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENTTIME_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(CURRENTTIME_KEY, data.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem(CURRENTTIME_KEY));
