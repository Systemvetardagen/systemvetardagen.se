<template>
    <div id="countdown">
        <div>
            <!-- dummy date here, to be changed according to the actual date -->
            <h2 id="countdown-date" style="color: var(--clr-pink-600)">15 February, 2024</h2>
            <h3 id="countdown-timer">
                {{ days }} days & {{ pad(hours) }}:{{ pad(minutes) }}:{{ pad(seconds) }}
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'heroSection',

    data() {
        return {
            // set the time zone and foramat of count down time
            countDownTime: new Date(new Intl.DateTimeFormat('en-US', {
                timeZone: 'Europe/Stockholm',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            // dummy date here, to be changed according to the actual date
            }).format(new Date('2024-02-15T10:00:00'))),
            intervalId: null,
            currentTime: new Date().getTime()
        }
    },

    computed: {
        // caculate and return the days, hours, minutes, seconds from current time to count down time
        timeLeft() {
            let distance = this.countDownTime - this.currentTime
            return {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            }
        },
        days() {
            return this.timeLeft.days
        },
        hours() {
            return this.timeLeft.hours
        },
        minutes() {
            return this.timeLeft.minutes
        },
        seconds() {
            return this.timeLeft.seconds
        }
    },

    mounted() {
        // get current time every second, in reality this would get executed 3 times
        // per second, since the index contains components that trigger multiple lifecycle
        // reloads concurrently, can't avoid.
        // ATTENTION FOR WORKING WITH LIFECYCLE HOOKS HERE: do not assume they would get
        // triggered only once. good luck if someone tries to reduce the reloads.
        this.intervalId = setInterval(() => {
            this.currentTime = new Date().getTime()
        }, 1000)
    },

    beforeDestroy() {
        clearInterval(this.intervalId)
    },

    methods: {
        // uniform the format of calculated result, fill with 0 from the start when the
        // result is less than two digits
        pad(num) {
            return num.toString().padStart(2, '0')
        }
    }
}
</script>

<style>
#countdown {
    display: flex;
    justify-content: center;
    padding: 5%;
}

#countdown-timer {
    font-variant-numeric: tabular-nums;
    text-align: center;
}
</style>