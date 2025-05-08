
import { writable } from 'svelte/store';
export const StartChnageMusicTimingFromSlider = writable(false);
export const CurrentTab = writable("Songs");
export const activeMusicId = writable<number | null>(null);


export  enum MusicState {
    Playing = 0,
    Paused = 1,
}
