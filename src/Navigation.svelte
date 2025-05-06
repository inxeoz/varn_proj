<script lang="ts">
    import music from './assets/music.svg';
    import about from './assets/about.svg';
    import link from './assets/link.svg';

    let activeTab = 'songs';

    function onTabClick(tab: string) {
        activeTab = tab;
    }
</script>

<div class="navigation_main global_center_div">
    <button
            class="tab songs global_center_div global_font {activeTab === 'songs' ? 'active_tab' : ''}"
            on:click={() => onTabClick('songs')}
            type="button"
    >
        <img src={music} alt="music" class="icon_songs" />
        <div class="title_song title {activeTab === 'songs' ? 'active_title' : ''}">
            Songs
        </div>
    </button>

    <button
            class="tab about global_center_div global_font {activeTab === 'about' ? 'active_tab' : ''}"
            on:click={() => onTabClick('about')}
            type="button"
    >
        <img src={about} alt="about" class="icon_about" />
        <div class="title_about title {activeTab === 'about' ? 'active_title' : ''}">
            About
        </div>
    </button>

    <button
            class="tab links global_center_div global_font {activeTab === 'links' ? 'active_tab' : ''}"
            on:click={() => onTabClick('links')}
            type="button"
    >
        <img src={link} alt="links" class="icon_links" />
        <div class="title_links title {activeTab === 'links' ? 'active_title' : ''}">
            Links
        </div>
    </button>
</div>

<style>
    .title {
        display: none;
    }
    .active_title {
        display: block;
        color: white;
    }
    .active_tab {
        color: white;
        padding: 0.8rem;
        background: #004b73;
        border: 1px solid white;
        border-radius: 50px;
        flex-direction: row;
        height: auto;
        width: auto;
        gap: 0.8rem;
    }
    .tab {
        color: white;
        padding: 0.8rem;
        border-radius: 50px;
        flex-direction: row;
        background: #003049;
        height: auto;
        border: 2px solid white;
    }
    .navigation_main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }
</style>
