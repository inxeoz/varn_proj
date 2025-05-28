<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { PlayDisk } from "./lib/store.js";
    import { writable } from "svelte/store";

    export let name: string = "VARN";
    export let diskColor: string = "black";
    export let labelColor: string = "#4b0082";
    export let strokeColor1: string = "#00ffff";
    export let strokeWidth: number = 4;
    export let fontSize: number = 48;
    export let diskRadius: number = 240;
    export let labelRadius: number = 80;
    export let showWaves: boolean = false;
    export let size: string = "90vmin";
    export let labelImage: string | null = null;
    export let imageAsLabel: boolean = false;


    // Rotation control variables
    let rotation = 0; // current rotation degrees
    let speed = 0;    // current speed in degrees per second
    const maxSpeed = 10; // max degrees per second (1 full rotation in 4s)
    const acceleration = 180; // degrees per second squared

    // Subscribe to PlayDisk store
    let playing = false;
    const unsubscribe = PlayDisk.subscribe(val => playing = val);

    let lastTimestamp: number | null = null;
    let rafId: number;

    function animate(timestamp: number) {
        if (lastTimestamp !== null) {
            const dt = (timestamp - lastTimestamp) / 1000; // delta time in seconds

            // Accelerate or decelerate speed smoothly toward target
            if (playing) {
                speed += acceleration * dt;
                if (speed > maxSpeed) speed = maxSpeed;
            } else {
                speed -= acceleration * dt;
                if (speed < 0) speed = 0;
            }

            rotation += speed * dt;
            // rotation %= 360;
        }
        lastTimestamp = timestamp;
        rafId = requestAnimationFrame(animate);
    }

    onMount(() => {
        rafId = requestAnimationFrame(animate);
    });

    onDestroy(() => {
        cancelAnimationFrame(rafId);
        unsubscribe();
    });

    function togglePlay() {
        PlayDisk.update(v => !v);
    }
</script>

<style>
    .disk-wrapper {
        width: 100%;
        height: 100%;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    svg {
        display: block;
    }

    .wave {
        stroke-dasharray: 20 10;
        stroke-linecap: round;
        animation: wavePulse 2s linear infinite;
    }

    @keyframes wavePulse {
        0%   { stroke-dashoffset: 0; stroke: #00ffff; }
        50%  { stroke: #ff00ff; }
        100% { stroke-dashoffset: 60; stroke: #00ffff; }
    }
</style>

<div
        class="disk-wrapper"
        style="width: {size}; height: {size};"
        on:click={() => window.open('https://www.youtube.com/watch?v=jx2JeKjVtLg', '_blank', 'noopener,noreferrer')}
        aria-label="Toggle disk rotation"
        role="button"
        tabindex="0"
        on:keydown={(e) => { if(e.key === "Enter" || e.key === " ") togglePlay(); }}
>
    <svg
            viewBox="0 0 500 500"
            style="transform: rotate({rotation}deg); transition: transform 0.1s linear;"
    >
        {#if showWaves}
            <circle
                    class="wave"
                    cx="250"
                    cy="250"
                    r={diskRadius + 5}
                    fill="none"
                    stroke={strokeColor1}
                    stroke-width={strokeWidth}
            />
        {/if}

        <circle cx="250" cy="250" r={diskRadius} fill={diskColor} />

        {#if labelImage && imageAsLabel}
            <clipPath id="labelClip">
                <circle cx="250" cy="250" r={labelRadius} />
            </clipPath>
            <image
                    href={labelImage}
                    x={250 - labelRadius}
                    y={250 - labelRadius}
                    width={labelRadius * 2}
                    height={labelRadius * 2}
                    clip-path="url(#labelClip)"
                    preserveAspectRatio="xMidYMid slice"
            />
        {:else}
            <circle cx="250" cy="250" r={labelRadius} fill={labelColor} />
        {/if}

        <circle cx="250" cy="250" r="8" fill="#cccccc" />

        {#if !labelImage || !imageAsLabel}
            <text
                    x="250"
                    y="265"
                    font-family="Arial, sans-serif"
                    font-size={fontSize}
                    fill="white"
                    text-anchor="middle"
                    dominant-baseline="middle"
            >
                {name}
            </text>
        {/if}
    </svg>
</div>
