<script lang="ts">
  import TitleName from "./TitleName.svelte";
  import Navigation from "./Navigation.svelte";
  import MusicCard from "./MusicCard.svelte";
  import Separator from "./Separator.svelte";
  import Slider from "./Slider.svelte";
</script>

<div class="main global_center_div">
  <TitleName/>
  <Navigation/>
  <MusicCard/>
  <Separator/>
  <Slider/>
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
