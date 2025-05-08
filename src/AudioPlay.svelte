<script lang="ts">
    export let src: string;
    export let title: string | undefined; // optional, fallback to filename if not provided
    // Optional callback props for parent
    export let onPlay: ((info: { currentTime: number; duration: number; progress: number }) => void ) | undefined;
    export let onPause: ((info: { currentTime: number; duration: number; progress: number }) => void ) | undefined;
    export let onProgress: ((info: { currentTime: number; duration: number; progress: number }) => void) | undefined;
    // Callback prop for sending audio info to parent
    export let onInfo: ((info: { title: string; duration: number }) => void) | undefined;

    let audio: HTMLAudioElement;
    export let isPlaying = false;
    export let currentTime = 0;
    export let duration = 0;
    export let progress = 0;

    //
    // $: if (audio && src) {
    //     audio.pause();
    //     audio.currentTime = 0;
    //     isPlaying = false;
    // }


    export function play() {
        audio?.play();
    }
    export function pause() {
        audio?.pause();
    }
    export function stop() {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    export function toggleMute() {
        if (audio) audio.muted = !audio.muted;
    }

    function updateStatus() {
        currentTime = audio.currentTime;
        duration = audio.duration || 0;
        progress = duration ? (currentTime / duration) * 100 : 0;
    }

    function handlePlay() {
        isPlaying = true;
        updateStatus();
        onPlay?.({ currentTime, duration, progress });
    }
    function handlePause() {
        isPlaying = false;
        updateStatus();
        onPause?.({ currentTime, duration, progress });
    }
    function handleTimeUpdate() {
        updateStatus();
        onProgress?.({ currentTime, duration, progress });
    }

    // This is the new function to let parent seek to a specific time
    export function seek(time: number) {
        if (audio && !isNaN(time) && time >= 0 && time <= (audio.duration || 0)) {
            audio.currentTime = time;
        }
    }

    function handleLoadedMetadata() {
        duration = audio.duration;
        let resolvedTitle = title;
        if (!resolvedTitle) {
            // Extract filename from src if no title provided
            try {
                resolvedTitle = decodeURIComponent(src.split('/').pop() || 'Unknown');
            } catch {
                resolvedTitle = src;
            }
        }
        onInfo?.({ title: resolvedTitle, duration });
    }
</script>

<audio
        bind:this={audio}
        {src}
        loop
        hidden
        on:play={handlePlay}
        on:pause={handlePause}
        on:timeupdate={handleTimeUpdate}
        on:loadedmetadata={handleLoadedMetadata}
/>
