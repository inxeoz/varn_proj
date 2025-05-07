<script lang="ts">
  import TitleName from "./TitleName.svelte";
  import Navigation from "./Navigation.svelte";
  import SongPage from "./SongPage.svelte";
  import {CurrentTab} from "./lib/store";

</script>

<div class="main global_center_div">
  <TitleName/>
  <Navigation/>

  {#if $CurrentTab === "Songs" }
    <SongPage/>

    {:else if $CurrentTab === "About"}

    {:else if $CurrentTab === "Links" }
    {:else}
    {/if}
</div>

<style>

  .main {
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-top: 3.5rem;
    flex-direction: column;
    gap: 4rem;

  }
</style>
