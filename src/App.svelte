<script lang="ts">
  import TitleName from "./TitleName.svelte";
  import Navigation from "./Navigation.svelte";
  import SongPage from "./SongPage.svelte";
  import {CurrentTab} from "./lib/store";
  import Footer from "./Footer.svelte";
  import About from "./About.svelte";
  import OverlayGoUp from "./lib/OverlayGoUp.svelte";

</script>

<OverlayGoUp/>
<div class="main global_center_div">
  <TitleName/>
  <Navigation/>

  {#if $CurrentTab === "Songs" }
    <SongPage/>

    {:else if $CurrentTab === "About"}
    <About/>
    {:else if $CurrentTab === "Links" }
    {:else}
    {/if}

  <Footer/>
</div>

<style>

  .main {
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4rem;
    padding: 3.5rem 1.5rem 1.5rem;

  }
</style>
