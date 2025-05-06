<script lang="ts">
    import coffin_song from './assets/coffin_song.svg'
    import pause from './assets/pause.svg'
</script>

<div class="music_card_main">
    <div class="music_card_player global_center_div">

        <div class="music_poster">
            <img src={coffin_song} alt="coffin music">
        </div>

        <div class="music_player global_center_div">
            <img src={pause} alt="pause music">
            <div class="bar global_center_div">
                <div class="played_bar">
                </div>
                <div class="bar_point">
                </div>
                <div class="remain_bar">
                </div>
            </div>
        </div>
    </div>
    <div class="music_info">
        Coffin prod.@Jaymonbeats
    </div>
</div>

<style>
    .bar {
        height: 4px;
        width: 150px;
    }

    .bar_point {
        width: 10px;
        height: 10px;
        background: #f6e8e8;
        border-radius: 50%;
    }

    .played_bar {
        height: 4px;
        width: 40px;
        background: #e28c45;
    }

    .remain_bar {
        height: 4px;
        width: 80px;
        background: #685757;
    }

    .music_card_player {
        background: #eb5e28;
        padding: 20px;
        flex-direction: column;
    }

    .music_player {
        height: 50px;
        width: 100%;
        background: #000000;
        gap: 10px;
    }

</style>