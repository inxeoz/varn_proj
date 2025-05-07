<script lang="ts">

    import pause from './assets/pause.svg'
    import play from './assets/play.svg'
    import Slider from "./Slider.svelte";
    import {StartChnageMusicTimingFromSlider} from "./lib/store";

    let continue_music = false;
    export let poster_background_color = '#eb5e28'
    export let song_title = "(0_1)";
    export let poster_svg;

    let sliderValue = 0;
    let audioDuration = 0;

    function handleSliderChange(val: number) {

        if ($StartChnageMusicTimingFromSlider) {
            playerRef.seek(val * audioDuration);
            console.log("setting music --> ", val * audioDuration)
        } else {
            sliderValue = val
        }
    }

    import AudioPlay from "./AudioPlay.svelte";

    let playerRef: {
        play: () => void;
        pause: () => void;
        stop: () => void;
        toggleMute: () => void;
        seek: (time: number) => void; // add this!

    };
    let audioTitle = '';

    export let audioSrc = "https://varn-music-list.s3.ap-south-1.amazonaws.com/INTZAR+-+VARN+-+VISUALISER.mp3"

    // Callback for play event
    function handlePlay(info: { currentTime: number; duration: number; progress: number }) {
        console.log('Audio started:', info);
        // You can do anything here, e.g., update state, show a message, etc.
    }

    // Callback for pause event
    function handlePause(info: { currentTime: number; duration: number; progress: number }) {
        console.log('Audio paused:', info);
        // You can do anything here, e.g., update state, show a message, etc.
    }

    let progress = 0;
    let currentTime = 0;

    // let duration = 0;

    function handleProgress(info: { currentTime: number; duration: number; progress: number }) {
        progress = info.progress;
        currentTime = info.currentTime;
        audioDuration = info.duration;
        console.log("--> ", currentTime, '--Pr ', progress, 'duration--', audioDuration)

        handleSliderChange(currentTime / audioDuration);

    }

    function jumpTo30() {
        playerRef.seek(30);
    }

    function handleAudioInfo(info: { title: string; duration: number }) {
        audioTitle = info.title;
        audioDuration = info.duration;
        console.log('info --> ', audioTitle, audioDuration)
    }


</script>

<AudioPlay
        bind:this={playerRef}
        src={audioSrc}
        title={audioTitle}
        onPlay={handlePlay}
        onPause={handlePause}
        onProgress={handleProgress}
        onInfo={handleAudioInfo}

/>

<div class="music_card_main global_center_div" style="--poster-background-color: {poster_background_color}">

    <!--    <div class="controls">-->
    <!--        <button on:click={() => playerRef.play()}>Play</button>-->
    <!--        <button on:click={() => playerRef.pause()}>Pause</button>-->
    <!--        <button on:click={() => playerRef.stop()}>Stop</button>-->
    <!--        <button on:click={() => playerRef.toggleMute()}>Toggle Mute</button>-->
    <!--        <button on:click={jumpTo30}>Jump to 30s</button>-->
    <!--    </div>-->

    <div class="music_card_player global_center_div">
        <div class="music_poster">
            <img src={poster_svg} alt="coffin music">
        </div>

        <div class="music_player global_center_div">


            {#if continue_music}

                <div
                        class="play_pause global_center_div" on:click={() => {
                    continue_music = false
                    playerRef.pause();
                }}>
                    <img src={pause} alt="pause music">
                </div>


            {:else }

                <div
                        class="play_pause global_center_div" on:click={()=> {

                   continue_music = true
                   playerRef.play();
                }}>
                    <img src={play} alt="play music">
                </div>

            {/if}

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

    <div class="music_info global_font">

        {
            song_title
        }

    </div>
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