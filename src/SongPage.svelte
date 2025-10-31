<script lang="ts">
    import MusicCard from "./MusicCard.svelte";
    import Separator from "./Separator.svelte";

    let songs = [
        {
            song_title: "Coffin prod.@Jaymonbeats",
            audioSrc:
                "https://varn-music-list.s3.ap-south-1.amazonaws.com/Coffin+VARN+New+rap+song+2023+prod.+%40Jaymonbeats.mp3",
            poster_svg: "/images/coffin.svg",
            poster_background_color: "#eb5e28",
        },

        {
            song_title: "lost ",
            audioSrc:
                "https://varn-music-list.s3.ap-south-1.amazonaws.com/Lost+-+VARN+x+DAN14+-+Prod.by+-+elzio.mp3",
            poster_svg: "/images/lost.svg",
            poster_background_color: "#fb6376",
        },

        {
            song_title: "Desperation - VARN - prod.@theskybeats",
            audioSrc:
                "https://varn-music-list.s3.ap-south-1.amazonaws.com/Desperation+-+VARN+-+prod.%40theskybeats+-+OFFICIAL+MUSIC+VIDEO.mp3",
            poster_svg: "/images/dehs.svg",
            poster_background_color: "#82c0cc",
        },

        {
            song_title: "King - VARN - MV - @prodbyaneeq",
            audioSrc:
                "https://varn-music-list.s3.ap-south-1.amazonaws.com/King+-+VARN+-+MV+-+%40prodbyaneeq.mp3",
            poster_svg: "/images/king.svg",
            poster_background_color: "#1b9aaa",
        },

        {
            song_title: "IN Waqt - VARN - Prod. by - ‪@hiyori730‬",
            audioSrc:
                "https://varn-music-list.s3.ap-south-1.amazonaws.com/Waqt+-+VARN+-+Prod.+by+-+%40hiyori730.mp3",
            poster_svg: "/images/waqt.svg",
            poster_background_color: "#22e45c",
        },

        {
            song_title: "Intzar ",
            audioSrc:
                "https://varn-music-list.s3.ap-south-1.amazonaws.com/INTZAR+-+VARN+-+VISUALISER.mp3",
            poster_svg: "/images/intezar.svg",
            poster_background_color: "#0466c8",
        },
    ];
</script>

<div class="song_page_main global_center_div">
    {#each songs as song, index}
        <MusicCard
            poster_svg={song.poster_svg}
            poster_background_color={song.poster_background_color}
            song_title={song.song_title}
            audioSrc={song.audioSrc}
            music_id={index}
            separator={true}
        />
    {/each}
</div>

<style>
    .song_page_main {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        height: 100%;
    }
</style>
