<script lang="ts">
    import coffin_song from './assets/coffin_song.svg'
    import pause from './assets/pause.svg'
    import play from './assets/play.svg'
    import circle from './assets/circle.svg'

    let continue_music = false;
    let played_bar_width = 100;

    function playMusic() {
        continue_music = true
    }
</script>

<div class="music_card_main global_center_div">

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


        <div class="bar global_center_div">
            <div class="played_bar" style="--played_bar_width: {played_bar_width}px">
            </div>
            <div class="bar_point global_center_div">
                <img src={circle} alt="slider handle">
            </div>
            <div class="remain_bar">
            </div>
        </div>
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