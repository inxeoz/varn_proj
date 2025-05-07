<script lang="ts">

    import dp from './assets/dp.png'
</script>

<div class="about_main global_center_div global_font">

    <div class="profile_card global_center_div">

            <img src={dp} alt="dp varn" height="100px" width="100px" class="dp_varn">

        <div class="basic_details global_center_div">
            <div class="year">
                21y
            </div>

            <div class="name">
                VARN
            </div>

        </div>
    </div>

    <div class="info_text global_center_div">
        <div class="motto">
            “I never waited for anyone to believe in me — I just did it myself.”
        </div>
        <div class="details">
            Varn started with nothing but a love for music and dance since childhood. He never needed approval—just belief in himself.
<br> <br>
            Taught himself everything from scratch. Quiet hustle, real progress.
<br> <br>
            Now 10 songs deep, and he’s only getting started.
        </div>
    </div>
</div>

<style>

    .about_main {
        flex-direction: column;
        color: #95c5de;
        gap: 2rem;
    }
    .profile_card {
       width: 100%;
        justify-content: space-around;
        gap: 3rem;
    }
    .basic_details {
        flex-direction: column;
        gap: 1rem;
        font-weight: 1000;
        font-size: 2rem;


    }

    .dp_varn {
        border: 2px solid #95c5de;
    }

    .motto {
        font-family: arial,serif;
        font-style: italic;
        font-size: 1.2rem;

    }

    .info_text {
        gap: 2rem;
        flex-direction: column;

        text-align: left;
    }
</style>