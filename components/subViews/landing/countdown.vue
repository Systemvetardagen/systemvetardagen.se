<template>
  <div id="countdown">
    <div>
      <h2 id="countdown-date" style="color: var(--clr-pink-600)">
        21 February, 2024
      </h2>
      <h3 id="countdown-timer">
        {{ days }} days & {{ pad(hours) }}:{{ pad(minutes) }}:{{ pad(seconds) }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Countdown",

  data() {
    return {
      // set the time zone and foramat of count down time
      countDownTime: new Date(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Europe/Stockholm",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date("2024-02-21T10:00:00"))
      ),
      intervalId: null,
      currentTime: Date.now(),
    };
  },

  computed: {
    // caculate and return the days, hours, minutes, seconds from current time to count down time
    timeLeft() {
      let distance = this.countDownTime - this.currentTime;
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    },
    days() {
      return this.timeLeft.days;
    },
    hours() {
      return this.timeLeft.hours;
    },
    minutes() {
      return this.timeLeft.minutes;
    },
    seconds() {
      return this.timeLeft.seconds;
    },
  },

  created() {
    console.log("created");
    this.intervalId = setInterval(() => {
      this.currentTime = Date.now();
    }, 1000);
  },

  beforeDestroy() {
    clearInterval(this.intervalId);
  },

  methods: {
    // uniform the format of calculated result, fill with 0 from the start when the
    // result is less than two digits
    pad(num) {
      return num.toString().padStart(2, "0");
    },
  },
};
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
