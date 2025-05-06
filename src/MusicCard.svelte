<script lang="ts">
    import coffin_song from './assets/coffin_song.svg'
    import pause from './assets/pause.svg'
    import play from './assets/play.svg'
    import circle from './assets/circle.svg'
    import Slider from "./Slider.svelte";

    let continue_music = false;
    let played_bar_width = 100;

    function playMusic() {
        continue_music = true
    }

    let sliderValue = 0.5;

    function handleSliderChange(val: number) {
        sliderValue = val;
        console.log('Slider value:', val);
    }

    import AudioPlay from "./AudioPlay.svelte";

    let playerRef: {
        play: () => void;
        pause: () => void;
        stop: () => void;
        toggleMute: () => void;
        seek: (time: number) => void; // add this!

    };


    let audioSrc = '/test_music.mp3'; // replace with your actual audio file path

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
    let duration = 0;

    function handleProgress(info: { currentTime: number; duration: number; progress: number }) {
        progress = info.progress;
        currentTime = info.currentTime;
        duration = info.duration;
        console.log("--> ", currentTime)
    }

    function jumpTo30() {
        playerRef.seek(30);
    }

</script>

<AudioPlay
        bind:this={playerRef}
        src={audioSrc}
        onPlay={handlePlay}
        onPause={handlePause}
        onProgress={handleProgress}
/>

<div class="music_card_main global_center_div">

    <div class="controls">
        <button on:click={() => playerRef.play()}>Play</button>
        <button on:click={() => playerRef.pause()}>Pause</button>
        <button on:click={() => playerRef.stop()}>Stop</button>
        <button on:click={() => playerRef.toggleMute()}>Toggle Mute</button>
        <button on:click={jumpTo30}>Jump to 30s</button>
    </div>

    <div class="music_card_player global_center_div">
        <div class="music_poster">
            <img src={coffin_song} alt="coffin music">
        </div>

        <div class="music_player global_center_div">


            {#if continue_music}

                <div
                        class="play_pause global_center_div" on:click={() => {
                    continue_music = false
                }}>
                    <img src={pause} alt="pause music">
                </div>


            {:else }

                <div
                        class="play_pause global_center_div" on:click={()=> {
                   continue_music = true
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
                    leftColor="#eb5e28"
                    rightColor="#ffffff"
                    knobColor="#ffffff"
            />
        </div>
    </div>

    <div class="music_info global_font">
        Coffin prod.@Jaymonbeats
    </div>
</div>

<style>

    .play_pause {
        max-height: 20px;
        max-width: 20px;
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

    .bar {
        height: 4px;
        width: 150px;
    }


    .played_bar {
        height: 4px;
        width: var(--played_bar_width);
        background: #e28c45;
        border-bottom-left-radius: 50px;
        border-top-left-radius: 50px;

    }

    .remain_bar {
        height: 4px;
        width: 100%;
        background: #685757;
        border-bottom-right-radius: 50px;
        border-top-left-radius: 50px;
    }


    .music_card_player {
        background: #eb5e28;
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