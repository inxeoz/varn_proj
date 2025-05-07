<script lang="ts">

import coffin_song from "./assets/coffin_song.svg";
import MusicCard from "./MusicCard.svelte";
import Separator from "./Separator.svelte";

import lost_song from './assets/lost_song.svg'
</script>

<div class="song_page_main global_center_div">
    <MusicCard poster_svg={coffin_song} />
    <Separator/>
    <MusicCard poster_svg={lost_song} />
</div>

<style>

    .song_page_main{
        flex-direction: column;
        justify-content: space-evenly;
        gap: 2rem;

    }
</style>