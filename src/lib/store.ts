
import { writable } from 'svelte/store';
export enum MusicState {
    Playing,
    Stopped,
    Paused,
}

export const StartChnageMusicTimingFromSlider = writable(false);

export const CurrentTab = writable("Songs");
export const CurrentMusicState = writable(MusicState.Stopped);
export const activeMusicId = writable<number | null>(null);

