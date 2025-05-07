<script lang="ts">
    import music from './assets/music.svg';
    import about from './assets/about.svg';
    import link from './assets/link.svg';
    import {CurrentTab} from "./lib/store";

    let activeTab = 'Songs';

    function onTabClick(tab: string) {
        activeTab = tab;
        CurrentTab.set(tab);
    }
</script>

<div class="navigation_main global_center_div">
    <button
            class="tab songs global_center_div global_font {activeTab === 'Songs' ? 'active_tab' : ''}"
            on:click={() => onTabClick('Songs')}
            type="button"
    >
        <img src={music} alt="music" class="icon_songs" />
        <div class="title_song title {activeTab === 'Songs' ? 'active_title' : ''}">
            Songs
        </div>
    </button>

    <button
            class="tab about global_center_div global_font {activeTab === 'About' ? 'active_tab' : ''}"
            on:click={() => onTabClick('About')}
            type="button"
    >
        <img src={about} alt="about" class="icon_about" />
        <div class="title_about title {activeTab === 'About' ? 'active_title' : ''}">
            About
        </div>
    </button>

    <button
            class="tab links global_center_div global_font {activeTab === 'Links' ? 'active_tab' : ''}"
            on:click={() => onTabClick('Links')}
            type="button"
    >
        <img src={link} alt="links" class="icon_links" />
        <div class="title_links title {activeTab === 'Links' ? 'active_title' : ''}">
            Links
        </div>
    </button>
</div>

<style>

    .tab, .active_tab {
        transition:
                background 0.4s cubic-bezier(.4,0,.2,1),
                color 0.4s ease,
                border 0.4s cubic-bezier(.4,0,.2,1);
    }

    .title, .active_title {
        transition:
                color 0.4s ease,
                opacity 0.4s cubic-bezier(.4,0,.2,1),
                max-width 0.4s cubic-bezier(.4,0,.2,1),
                transform 0.4s cubic-bezier(.4,0,.2,1);
    }

    .title {
        opacity: 0;
        max-width: 0;
        overflow: hidden;
        display: inline-block;
        color: white;
        transform: translateY(12px); /* subtle slide up */
        pointer-events: none;
        font-style: italic;
        font-weight: 900;
        font-size: 18px;
        border-radius: 50%;
    }

    .active_title {
        opacity: 1;
        max-width: 200px;
        color: white;
        transform: translateY(0);
        pointer-events: auto;
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
