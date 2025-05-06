<script lang="ts">
    import { StartChnageMusicTimingFromSlider } from "./lib/store";

    export let value: number = 0.5; // 0 to 1
    export let width: number = 400;
    export let knobSize: number = 40;
    export let barHeight: number = 8;
    export let leftColor: string = '#77dd77';
    export let rightColor: string = '#ff6961';
    export let knobColor: string = '#4f8cff';
    export let onChange: (value: number) => void = () => {};
    let dragging = false;

    const minX = 0;
    let maxX = width - knobSize;
    let x: number = minX + value * (width - knobSize);

    // Keep x in sync if value or width/knobSize changes
    $: maxX = width - knobSize;
    $: x = minX + value * (width - knobSize);

    function setValueFromX(newX: number) {
        value = (newX - minX) / (width - knobSize);
        onChange(value);
    }

    function startDrag(clientX: number) {
        dragging = true;
        const offsetX: number = clientX - x;

        function move(clientX: number) {
            let newX = clientX - offsetX;
            newX = Math.max(minX, Math.min(maxX, newX));
            x = newX;
            setValueFromX(newX);
        }

        function onMouseMove(e: MouseEvent) {
            move(e.clientX);
        }

        function onTouchMove(e: TouchEvent) {
            move(e.touches[0].clientX);
        }

        function stopDrag() {
            dragging = false;
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', stopDrag);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', stopDrag);

            // Set the store to false when drag ends
            StartChnageMusicTimingFromSlider.set(false);
        }

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', stopDrag);
        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('touchend', stopDrag);
    }

    function handleMouseDown(event: MouseEvent) {
        StartChnageMusicTimingFromSlider.set(true);
        startDrag(event.clientX);
    }

    function handleTouchStart(event: TouchEvent) {
        StartChnageMusicTimingFromSlider.set(true);
        startDrag(event.touches[0].clientX);
    }

    $: leftWidth = x + knobSize / 2;
    $: rightWidth = width - leftWidth;
</script>

<style>
    .slider-container {
        position: relative;
        user-select: none;
        touch-action: none;
    }

    .knob {
        position: absolute;
        top: 50%;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        cursor: grab;
        z-index: 2;
        transform: translateY(-50%);
        transition: box-shadow 0.2s;
        touch-action: none;
    }

    .knob:active {
        cursor: grabbing;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    }


    .knob {
        position: absolute;
        top: 50%;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        cursor: grab;
        z-index: 2;
        transform: translateY(-50%);
        transition:
                left 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                box-shadow 0.2s;
        touch-action: none;
    }
    .knob.dragging {
        transition: none;
    }
    .knob:active {
        cursor: grabbing;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    }

    .bar {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 4px;
        z-index: 1;
        height: 8px;
        transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

</style>

<div
        class="slider-container"
        style="width: {width}px; height: {Math.max(knobSize, 2 * barHeight)}px;"
>
    <div
            class="bar left"
            style="
      width: {leftWidth}px;
      left: 0;
      background: {leftColor};
      height: {barHeight}px;
    "
    ></div>
    <div
            class="knob"
            style="
      left: {x}px;
      width: {knobSize}px;
      height: {knobSize}px;
      background: {knobColor};
    "
            on:mousedown={handleMouseDown}
            on:touchstart={handleTouchStart}
    ></div>
    <div
            class="knob {dragging ? 'dragging' : ''}"
            style="
        left: {x}px;
        width: {knobSize}px;
        height: {knobSize}px;
        background: {knobColor};
    "
            on:mousedown={handleMouseDown}
            on:touchstart={handleTouchStart}
    />

</div>
