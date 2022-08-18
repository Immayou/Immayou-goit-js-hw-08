import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe')
const player = new Player(iframe);

player.on('play', function() {
console.log('played the video!');
});

const onPlay = function({seconds}) {
   {
    localStorage.setItem('videoplayer-current-time', seconds)   //  localStorage.getItem("videoplayer-current-time", seconds)
    }
};

player.on('timeupdate', onPlay);

const timeAfterUpdate = localStorage.getItem('videoplayer-current-time')

player.setCurrentTime(timeAfterUpdate).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});