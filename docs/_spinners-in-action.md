# Spinners in action

Frame delay is the default (80 ms) where not specified.

##### dots (default)

<v-termynal>
    <vt-spinner type="dots" :duration="Infinity"/>
</v-termynal>

##### dots2

<v-termynal>
    <vt-spinner type="dots2" :duration="Infinity"/>
</v-termynal>

##### dots3

<v-termynal>
    <vt-spinner type="dots3" :duration="Infinity"/>
</v-termynal>

##### dots4

<v-termynal>
    <vt-spinner type="dots4" :duration="Infinity"/>
</v-termynal>

##### line (frame-delay: 130)

<v-termynal>
    <vt-spinner type="line" :duration="Infinity" :frame-delay="130"/>
</v-termynal>

##### line2 (frame-delay: 100)

<v-termynal>
    <vt-spinner type="line2" :duration="Infinity" :frame-delay="100"/>
</v-termynal>

##### simpleDots (frame-delay: 400)

<v-termynal>
    <vt-spinner type="simpleDots" :duration="Infinity" :frame-delay="400"/>
</v-termynal>

##### simpleDotsScrolling (frame-delay: 200)

<v-termynal>
    <vt-spinner type="simpleDotsScrolling" :duration="Infinity" :frame-delay="200"/>
</v-termynal>

##### bounce (frame-delay: 120)

<v-termynal>
    <vt-spinner type="bounce" :duration="Infinity" :frame-delay="120"/>
</v-termynal>

##### arc (frame-delay: 100)

<v-termynal>
    <vt-spinner type="arc" :duration="Infinity" :frame-delay="100"/>
</v-termynal>

##### circleQuarters (frame-delay: 180)

<v-termynal>
    <vt-spinner type="circleQuarters" :duration="Infinity" :frame-delay="180"/>
</v-termynal>

##### bouncingBar

<v-termynal>
    <vt-spinner type="bouncingBar" :duration="Infinity"/>
</v-termynal>

##### bouncingBall

<v-termynal>
    <vt-spinner type="bouncingBall" :duration="Infinity"/>
</v-termynal>

##### clock (frame-delay: 100)

<v-termynal>
    <vt-spinner type="clock" :duration="Infinity" :frame-delay="100"/>
</v-termynal>

##### christmas (frame-delay: 400)

<v-termynal>
    <vt-spinner type="christmas" :duration="Infinity" :frame-delay="400"/>
</v-termynal>

##### point (frame-delay: 125)

<v-termynal>
    <vt-spinner type="point" :duration="Infinity" :frame-delay="125"/>
</v-termynal>

##### aesthetic

<v-termynal>
    <vt-spinner type="aesthetic" :duration="Infinity"/>
</v-termynal>

<style>
.v-termynal::before,
.v-termynal::after {
    display: none;
}

.v-termynal {
    padding: 0.5rem 1rem;
    margin-top: 0.3rem;
}
</style>
