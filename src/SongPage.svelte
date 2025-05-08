<script lang="ts">

    import coffin_song from "./assets/coffin_song.svg";
    import MusicCard from "./MusicCard.svelte";
    import Separator from "./Separator.svelte";
    import lost_song from './assets/lost_song.svg'
    import desparation_song from './assets/desparation_song.svg'
    import king_song from './assets/king_song.svg'
    import waqt_song from './assets/waqt_song.svg'

    // let songs = [
    //     {
    //         song_title: "Coffin prod.@Jaymonbeats",
    //         audioSrc: "https://varn-music-list.s3.ap-south-1.amazonaws.com/INTZAR+-+VARN+-+VISUALISER.mp3",
    //         poster_svg: coffin_song,
    //         poster_background_color: "#eb5e28"
    //     },
    //
    //     {
    //         song_title: "lost ",
    //         audioSrc: "https://varn-music-list.s3.ap-south-1.amazonaws.com/INTZAR+-+VARN+-+VISUALISER.mp3",
    //         poster_svg: lost_song,
    //         poster_background_color: "#fb6376"
    //     },
    //
    //     {
    //         song_title: "Desperation - VARN - prod.@theskybeats",
    //         audioSrc: "https://varn-music-list.s3.ap-south-1.amazonaws.com/Desperation+-+VARN+-+prod.%40theskybeats+-+OFFICIAL+MUSIC+VIDEO.mp3",
    //         poster_svg: desparation_song,
    //         poster_background_color: "#82c0cc"
    //     },
    //
    //     {
    //         song_title: "King - VARN - MV - @prodbyaneeq",
    //         audioSrc: "https://varn-music-list.s3.ap-south-1.amazonaws.com/King+-+VARN+-+MV+-+%40prodbyaneeq.mp3",
    //         poster_svg: king_song,
    //         poster_background_color: "#1b9aaa"
    //     },
    //
    //     {
    //         song_title: "IN Waqt - VARN - Prod. by - ‪@hiyori730‬",
    //         audioSrc: "https://varn-music-list.s3.ap-south-1.amazonaws.com/Waqt+-+VARN+-+Prod.+by+-+%40hiyori730.mp3",
    //         poster_svg: waqt_song,
    //         poster_background_color: "#22e45c"
    //     },
    //
    // ];


    let songs = [
        {
            song_title: "Coffin prod.@Jaymonbeats",
            audioSrc: "https://varn-music-list.s3.ap-south-1.amazonaws.com/Coffin+VARN+New+rap+song+2023+prod.+%40Jaymonbeats.mp3",
            poster_svg: coffin_song,
            poster_background_color: "#eb5e28"
        },

        {
            song_title: "lost ",
            audioSrc: "https://varn-music-list.s3.ap-south-1.amazonaws.com/Lost+-+VARN+x+DAN14+-+Prod.by+-+elzio.mp3",
            poster_svg: lost_song,
            poster_background_color: "#fb6376"
        },

        {
            song_title: "Desperation - VARN - prod.@theskybeats",
            audioSrc: "https://varn-music-list.s3.ap-south-1.amazonaws.com/Desperation+-+VARN+-+prod.%40theskybeats+-+OFFICIAL+MUSIC+VIDEO.mp3",
            poster_svg: desparation_song,
            poster_background_color: "#82c0cc"
        },

        {
            song_title: "King - VARN - MV - @prodbyaneeq",
            audioSrc: "https://varn-music-list.s3.ap-south-1.amazonaws.com/King+-+VARN+-+MV+-+%40prodbyaneeq.mp3",
            poster_svg: king_song,
            poster_background_color: "#1b9aaa"
        },

        {
            song_title: "IN Waqt - VARN - Prod. by - ‪@hiyori730‬",
            audioSrc: "https://varn-music-list.s3.ap-south-1.amazonaws.com/Waqt+-+VARN+-+Prod.+by+-+%40hiyori730.mp3",
            poster_svg: waqt_song,
            poster_background_color: "#22e45c"
        },

    ];
</script>

<div class="song_page_main global_center_div">
    {#each songs as song, index}
        <MusicCard poster_svg={song.poster_svg} poster_background_color={song.poster_background_color}
                   song_title={song.song_title}
                   audioSrc={song.audioSrc}
                   music_id={index}/>
        <Separator/>
    {/each}
</div>

<style>

    .song_page_main {
        flex-direction: column;
        justify-content: space-evenly;
        gap: 2rem;

    }
</style>