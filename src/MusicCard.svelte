<script lang="ts">

    import pauseIcon from './assets/pause.svg';
    import playIcon from './assets/play.svg';
    import Slider from "./Slider.svelte";
    import { CurrentMusicState, MusicState, StartChnageMusicTimingFromSlider, activeMusicId } from "./lib/store";

    import { playMusic, setSrcMusic, seekMusic, stopMusic, pauseMusic, toggleMuteMusic, audioInstance } from './lib/audioStore';

    import { onMount, onDestroy } from "svelte";
    import {musicSrc} from "./lib/musicStore";

    export let poster_background_color = '#eb5e28';
    export let song_title = "(0_1)";
    export let poster_svg: string;
    export let music_id = 0;
    export let audioSrc = "https://varn-music-list.s3.ap-south-1.amazonaws.com/INTZAR+-+VARN+-+VISUALISER.mp3";

    let sliderValue = 0;
    let audioDuration = 0;
    let local_music_state = MusicState.Stopped;
    let progress = 0;
    let currentTime = 0;
    let audioTitle = '';

    // Set the audio source when component mounts or audioSrc changes
    //$: setSrcMusic(audioSrc);

    // Audio event handlers
    function handlePlay() {

        if ($activeMusicId !== music_id) {
          return;
        }
        local_music_state = MusicState.Playing;
    }
    function handlePause() {
        if ($activeMusicId !== music_id) {
            return;
        }

        local_music_state = MusicState.Paused;
    }
    function handleTimeUpdate() {

        if ($activeMusicId !== music_id) {
            return;
        }

        currentTime = $audioInstance.currentTime;
        audioDuration = $audioInstance.duration || 0;
        progress = audioDuration ? (currentTime / audioDuration) * 100 : 0;
        sliderValue = currentTime / (audioDuration || 1);
    }
    function handleLoadedMetadata() {

        if ($activeMusicId !== music_id) {
            return;
        }

        audioDuration = $audioInstance.duration;
        try {
            audioTitle = decodeURIComponent(audioSrc.split('/').pop() || 'Unknown');
        } catch {
            audioTitle = audioSrc;
        }
    }

    function handleSliderChange(val: number) {
        if ($activeMusicId !== music_id) {
            return;
        }

        if ($StartChnageMusicTimingFromSlider) {
            seekMusic(val * audioDuration);
        } else {
            sliderValue = val;
        }
    }

    function jumpTo30() {
        seekMusic(30);
    }

    function ToggleMusicState() {

        if ($activeMusicId !== music_id) {
            activeMusicId.set(music_id);
            musicSrc.set(audioSrc);
        }

        if (local_music_state === MusicState.Playing) {
            local_music_state = MusicState.Paused;
            pauseMusic();
        } else {
            local_music_state = MusicState.Playing;
            playMusic();
        }
    }

    // Listen for global music state changes
    const unsubscribe = activeMusicId.subscribe(id => {
        if (id !== music_id && local_music_state === MusicState.Playing) {
            local_music_state = MusicState.Paused;
            stop();
        }
    });

    onMount(() => {
        // Attach event listeners
        $audioInstance.addEventListener('play', handlePlay);
        $audioInstance.addEventListener('pause', handlePause);
        $audioInstance.addEventListener('timeupdate', handleTimeUpdate);
        $audioInstance.addEventListener('loadedmetadata', handleLoadedMetadata);
    });

    onDestroy(() => {
        unsubscribe();
        // Remove event listeners
        $audioInstance.removeEventListener('play', handlePlay);
        $audioInstance.removeEventListener('pause', handlePause);
        $audioInstance.removeEventListener('timeupdate', handleTimeUpdate);
        $audioInstance.removeEventListener('loadedmetadata', handleLoadedMetadata);
    });

</script>

<div class="music_card_main global_center_div" style="--poster-background-color: {poster_background_color}">
    <div class="music_card_player global_center_div">
        <div class="music_poster">
            <img src={poster_svg} alt="coffin music">
        </div>
        <div class="music_player global_center_div">
            <div class="play_pause global_center_div" on:click={ToggleMusicState}>
                {#if local_music_state === MusicState.Playing }
                    <img src={pauseIcon} alt="pause music">
                {:else}
                    <img src={playIcon} alt="play music">
                {/if}
            </div>
            <Slider
                    value={sliderValue}
                    onChange={handleSliderChange}
                    width={150}
                    knobSize={16}
                    barHeight={5}
                    leftColor={poster_background_color}
                    rightColor="#ffffff"
                    knobColor="#ffffff"
            />
        </div>
    </div>
    <div class="music_info global_font">{song_title}</div>
</div>


<style>

    .play_pause {
        max-height: 20px;
        max-width: 20px;
        cursor: pointer;
    }

    .music_info {
        color: #fff;
        font-style: italic;
        font-weight: bold;
    }

    .music_card_main {
        flex-direction: column;
        gap: 20px;
        padding-bottom: 10px;
    }


    .music_card_player {
        background: var(--poster-background-color);
        padding: 20px;
        flex-direction: column;


        border-width: 2px;
        border-color: rgb(255, 255, 255);
        border-style: solid;
    }

    .music_player {
        height: 50px;
        width: 100%;
        background: #000000;
        justify-content: space-evenly;
        gap: 2px;

    }

</style>