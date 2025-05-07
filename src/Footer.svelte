<script lang="ts">

    import mail from './assets/mail.svg'
    import youtube from './assets/youtube.svg'

    import insta from './assets/insta.svg';

    import K from './assets/K.svg'
</script>
<div
        class="footer_main global_center_div">

    <div class="footer_links global_center_div global_font">
        <div class="insta_link global_center_div"

             on:click={() => window.open('https://www.instagram.com/meinvarn/', '_blank', 'noopener,noreferrer')

             }
        >
            <img src={insta} alt="instagram id">
            @meinvarn
        </div>
        <div class="yt_links global_center_div"

             on:click={() => window.open('https://www.youtube.com/@VARN.MUSIC777', '_blank', 'noopener,noreferrer')

             }
        >
            <img src={youtube} alt="youtube channel">
            @VARN.MUSIC777
        </div>
        <div class="mail_addr global_center_div"

             on:click={() => window.open('https://www.youtube.com/@VARN.MUSIC777', '_blank', 'noopener,noreferrer')

             }
        >
            <img src={mail} alt="email addr">
            Not provided
        </div>
    </div>

    <div class="footer_logo global_center_div">
        <img src={K} alt="varn logo">
    </div>
</div>

<style>

    .yt_links, .mail_addr, .insta_link {
        gap : 1rem;
        cursor: pointer;
    }

    .footer_main {
        background: #004b73;
        height: 200px;
        width: 100%;
        gap: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        justify-content: space-evenly;
    }

    .footer_links {
        flex-direction: column;
        align-items: start;
        color: #95c5de;
        padding-left: 1rem;
        gap: 1rem;
    }

</style>