<script lang="ts">

    import coffin_song from "./assets/coffin_song.svg";
    import MusicCard from "./MusicCard.svelte";
    import Separator from "./Separator.svelte";
    import lost_song from './assets/lost_song.svg'
    import desparation_song from './assets/desparation_song.svg'
    import king_song from './assets/king_song.svg'

    import waqt_song from './assets/waqt_song.svg'
</script>

<div class="song_page_main global_center_div">
    <MusicCard poster_svg={coffin_song} song_title="Coffin prod.@Jaymonbeats"/>
    <Separator/>
    <MusicCard poster_svg={lost_song} poster_background_color="#fb6376"/>
    <Separator/>
    <MusicCard poster_svg={desparation_song} poster_background_color="#82c0cc"
               audioSrc="https://varn-music-list.s3.ap-south-1.amazonaws.com/Desperation+-+VARN+-+prod.%40theskybeats+-+OFFICIAL+MUSIC+VIDEO.mp3"/>
    <Separator/>

    <MusicCard poster_svg={king_song} poster_background_color="#1b9aaa"
               audioSrc="https://varn-music-list.s3.ap-south-1.amazonaws.com/Desperation+-+VARN+-+prod.%40theskybeats+-+OFFICIAL+MUSIC+VIDEO.mp3"/>
    <Separator/>


    <MusicCard poster_svg={waqt_song} poster_background_color="#22e45c"
               audioSrc="https://varn-music-list.s3.ap-south-1.amazonaws.com/Desperation+-+VARN+-+prod.%40theskybeats+-+OFFICIAL+MUSIC+VIDEO.mp3"/>
    <Separator/>
</div>

<style>

    .song_page_main {
        flex-direction: column;
        justify-content: space-evenly;
        gap: 2rem;

    }
</style>