import { writable, type Writable } from 'svelte/store';

// Playlist and current index
export const playlist: Writable<string[]> = writable([
    "./Desperation - VARN - prod.@theskybeats - OFFICIAL MUSIC VIDEO.mp3",
    "another-track.mp3"
]);
export const currentIndex: Writable<number> = writable(0);
export const MusicInLoop = writable(false);
// Current track source
export const musicSrc: Writable<string> = writable("");

// Keep musicSrc in sync with playlist and currentIndex
playlist.subscribe((list) => {
    currentIndex.subscribe((i) => {
        musicSrc.set(list[i] || "");
    });
});

// Navigation helpers
export function nextTrack() {
    playlist.update((list) => {
        currentIndex.update((i) => (i + 1) % list.length);
        return list;
    });
}

export function prevTrack() {
    playlist.update((list) => {
        currentIndex.update((i) => (i - 1 + list.length) % list.length);
        return list;
    });
}
