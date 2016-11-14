'use strict';

import store from '../store';
import { changeTrackLine } from '../actions';
import { togglePlay } from '../actions';

export default class ApiMusic {
    constructor() {
        this.context = new window.AudioContext();
        this.startOffset = 0;
        this.startTime = 0;
        this.trackTime = 0;
    }

    //Метод который подгружает аудиозапись и декодирует ее
    loadSoundFile(url) {
        fetch(url)
            .then((response) => {
                return response.arrayBuffer();
            })
            .then((arrayBuffer) => {
                return this.context.decodeAudioData(arrayBuffer);
            })
            .then((decodeAudioData) => {
                this.buffer = decodeAudioData;
                if (this.source) {
                    this.stopAction();
                    this.startOffset = 0;
                    this.startTime = 0;
                    this.trackTime = 0;
                    store.dispatch(changeTrackLine(this.trackTime, (this.buffer.duration).toFixed(0)));
                }
                this.playAction();
            })
            .catch((e) => {
                console.log('Error decoding file', e);
            });
    }

    //Метод, который запускает проигравание аудио
    playAction() {
        let resultVolume = store.getState().volume.volume/100;

        this.startTime = (this.context.currentTime).toFixed(0);

        this.source = this.context.createBufferSource();
        this.source.buffer = this.buffer;
        this.destination = this.context.destination;

        this.gainNode = this.context.createGain();
        this.gainNode.gain.value = resultVolume;

        this.source.connect(this.gainNode);
        this.gainNode.connect(this.destination);

        this.source.start(0, this.startOffset % this.buffer.duration);

        //Запускаем таймер
        this.startTimer = setInterval(() => {
            this.trackTime++;
            store.dispatch(changeTrackLine(this.trackTime, (this.buffer.duration).toFixed(0)));
        }, 1000);

        //Останавливаем таймер через this.buffer.duration
        this.stopTimer = setTimeout(() => {
            clearInterval(this.startTimer);
            this.startOffset = 0;
            this.startTime = 0;
            this.trackTime = 0;
            store.dispatch(changeTrackLine(this.trackTime, (this.buffer.duration).toFixed(0)));
            this.source.stop(0);
            console.log("END");
        }, ((this.buffer.duration).toFixed(0) - this.trackTime) * 1000);

        console.log("PLAY");
    }

    //Метод, который делает паузу при проигрывании аудио
    stopAction() {
        this.source.stop(0);

        clearInterval(this.startTimer);
        clearTimeout(this.stopTimer);

        this.startOffset += (this.context.currentTime).toFixed(0) - this.startTime;

        console.log("PAUSE");
    }

    //Метод, который устанавливает громкость звука
    setVolumeValue(value) {
        let result = value/100;

        if (this.gainNode) {
            this.gainNode.gain.value = result;
        }
    }

    //Метод, который устанавливает текущее время воспроизведения
    setTimerValue(value) {
        this.startOffset = value;
        this.trackTime = value;
        this.stopAction();
    }
}
