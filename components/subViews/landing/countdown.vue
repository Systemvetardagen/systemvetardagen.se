<template>
  <div class="container">
    <p class="countdown-text">
      {{ $t("landing_page.countdown.countdown_text") }}
    </p>
    <table class="countdown">
      <tr>
        <td>
          <h1 class="countdown-timer">{{ days }}</h1>
          <p class="time-unit">
            {{ $t("landing_page.countdown.day") }}
          </p>
        </td>
        <td>
          <h1 class="countdown-timer">{{ pad(hours) }}</h1>
          <p class="time-unit">
            {{ $t("landing_page.countdown.hour") }}
          </p>
        </td>
        <td>
          <h1 class="countdown-timer">{{ pad(minutes) }}</h1>
          <p class="time-unit">
            {{ $t("landing_page.countdown.min") }}
          </p>
        </td>
        <td>
          <h1 class="countdown-timer">{{ pad(seconds) }}</h1>
          <p class="time-unit">
            {{ $t("landing_page.countdown.sec") }}
          </p>
        </td>
      </tr>
    </table>
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
          // replace with the new date of this year
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

  mounted() {
    // do not try to calculate the time once and -1 sec here,
    // for some reason (maybe it's Nuxt), same components are
    // getting instantiated repeatedly, subtracting would
    // result in -3 per second or so
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

<style scoped>
.container {
  padding: 0rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.countdown-text {
  color: black;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.02rem;
}
.countdown {
  margin-top: 0.5rem;
}
.countdown td {
  padding-left: 1.2rem;
  padding-right: 1.2rem;
}

.countdown-timer {
  color: black;
  font-variant-numeric: tabular-nums;
}

.time-unit {
  font-weight: bold;
  text-align: center;
}

@media only screen and (min-width: 768px) {
  .container {
    padding: 0rem 3rem;
  }
}
</style>
