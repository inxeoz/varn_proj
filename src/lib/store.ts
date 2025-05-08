
import { writable } from 'svelte/store';
export const StartChnageMusicTimingFromSlider = writable(false);
export const CurrentTab = writable("Songs");
export const activeMusicId = writable<number | null>(null);


export enum MusicState {
    Playing = 'playing',
    Paused = 'paused',
}

export const OnTimeMusicStateChange = writable<MusicState>(MusicState.Paused);
export const LastPlaybackTime = writable(0)
