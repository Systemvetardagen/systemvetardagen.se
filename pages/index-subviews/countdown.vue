<!-- all hardcoded text here, replace with var if needed -->
<template>
    <div id="countdown">
        <div>
            <h2 id="countdown-date" style="color: var(--clr-pink-600)">15 February, 2023</h2>
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
            countDownDate: new Date(new Intl.DateTimeFormat('en-US', {
                timeZone: 'Europe/Stockholm',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }).format(new Date('2023-02-15T10:00:00'))),
            intervalId: null,
            currentTime: new Date().getTime()
        }
    },

    computed: {
        timeLeft() {
            let distance = this.countDownDate - this.currentTime
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
        this.intervalId = setInterval(() => {
            this.currentTime = new Date().getTime()
        }, 1000)
    },

    beforeDestroy() {
        clearInterval(this.intervalId)
    },

    methods: {
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