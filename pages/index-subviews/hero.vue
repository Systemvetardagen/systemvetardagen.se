<template>
  <div id="home" class="hero">

    <!-- TEXT BLOCK BG -->
    <div id="hero-text-block" ref="heroTextBlock">
      <span
        class="hero-bg-span"
        v-if="!generated"
        id="span-for-calculation"
        style="color: transparent"
        >dummy text</span
      >
      <span
        class="hero-bg-span displaying-spans"
        v-for="(line, index) in concatLines"
        :key="index"
        :class="{ highlighted: index === highlightedIndex }"
        >{{ line }}
      </span>
    </div>
    <div></div>

    <!-- FOREGROUND CONTENT -->
    <div class="hero-content">
      <!-- HERO IMAGE -->
      <img
        class="hero-image"
        src="@/assets/img/hero-image.png"
        alt="Image of a group of people by their computers"
      />
      <!-- HERO TEXT -->
      <div class="hero-content-text">
        <h1 class="hero-heading" style="color: var(--clr-blue-600)">
          {{ $t("hero_title") }}
        </h1>
        <p class="subtitle" style="color: var(--clr-grey-900)">
          {{ $t("event_description") }}
        </p>
        <!-- HERO BUTTONS -->
        <div class="hero-buttons">
          <Button
            :link="localePath('/catalog/' + '/')"
            width="14rem"
            bColor="gradient"
            >{{ $t("catalog_btn_title") }}</Button
          >
          <Button
            link="#contact"
            bColor="--clr-blue-100"
            tColor="--clr-blue-900"
            >{{ $t("contact_us_btn") }}</Button
          >
        </div>
      </div>
    </div>

    <!-- HERO INFO -->
    <div class="hero-info-wrapper">
      <p class="hero-info-text">{{ $t("event_date") }}, 10:00 - 16:00</p>
      <p
        class="hero-info-text"
        style="color: var(--clr-grey-900); text-align: center"
      >
        Kista NOD, Borgarfjordsgatan 12
      </p>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "heroSection",

  data() {
    return {
      lines: [],
      concatLines: [],
      divWidth: 0,
      generated: false,
      highlightedIndex: null,
      textBlock: null,
      spans: null,
    };
  },

  created() {
    // read the text to cover the background with from the path '/content/bg_text.json'
    this.lines = require("@/content/bg_text.json").lines;
    this.concatLines = this.lines.concat([]);

    setInterval(() => {
      // every 2 seconds, generate a random index to highlight for 1.2 second
      this.highlightedIndex = Math.floor(
        Math.random() * this.concatLines.length
      );
      setTimeout(() => {
        this.highlightedIndex = null;
      }, 1200);
    }, 2000);
  },

  mounted() {
    // execute handleResize on the resize of viewport 
    window.addEventListener("resize", this.handleResize);
    // getting the character size from a test span and the div size of the image
    this.textBlock = this.$refs.heroTextBlock;
    const span = this.$el.querySelector("#span-for-calculation");
    const computedStyle = window.getComputedStyle(span);
    if (!this.textBlock.offsetWidth) return;
    this.divWidth = this.textBlock.offsetWidth;
    this.divHeight = this.textBlock.offsetHeight;
    this.characterWidth = parseFloat(computedStyle.fontSize);
    this.characterHeight = parseFloat(computedStyle.lineHeight);

    this.generateText();
    this.$nextTick(() => this.spliceText());
  },

  computed: {
    // calculate how many characters are needed to cover the image,
    // coefficient (0.6) to be adjusted according to font
    charactersNeeded() {
      return (
        Math.floor(this.divWidth / (this.characterWidth * 0.6)) *
        Math.floor(this.divHeight / this.characterHeight)
      );
    },
  },

  methods: {
    handleResize() {
      if (!this.textBlock.offsetWidth) return;
      this.divWidth = this.textBlock.offsetWidth;

      this.generateText();
      this.$nextTick(() => this.spliceText());
    },

    generateText() {
      let neededLen = this.charactersNeeded;
      // get the total string length of the concatLines array
      let linesLen = this.concatLines.reduce(
        (acc, line) => acc + line.length,
        0
      );
      // if provided array is not enough to cover the image,
      // repeat the array until the length's enough
      while (neededLen > linesLen) {
        this.concatLines = this.concatLines.concat(this.lines);
        linesLen = this.concatLines.reduce((acc, line) => acc + line.length, 0);
      }
      // hide the test span and show the needed spans
      this.generated = true;
    },

    // delete the elements of the string array that go beyond visible area.
    // otherwise when a generated highlightedIndex belongs to a hidden span,
    // the highlighting would not be visible
    spliceText() {
      this.spans = this.$el.querySelectorAll(".displaying-spans");
      let hiddenIndex;
      // check one span at a time, see if its top is exceeding the height of
      // the textBlock div and total string length till this span is enough
      // if yes, get the index of this span and delete spans after it
      for (let i = 0, linesLen = 0; i < this.spans.length; i++) {
        let span = this.spans[i];
        linesLen += span.innerText.length;
        if (
          span.offsetTop > this.textBlock.offsetHeight &&
          linesLen > this.charactersNeeded
        ) {
          hiddenIndex = i;
          break;
        }
      }
      if (hiddenIndex) {
        this.concatLines.splice(hiddenIndex);
      }
    },
  },
};
components: {
  Button;
}
</script>

<style>

/* CONTAINER */
.hero {
  min-height: 100vh;
  padding: 0;
  justify-content: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

/* TEXT BLOCK BG */
#hero-text-block {
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* temporary style, to be finalised by design/css team */
/* - haha good joke */
/* no jokes in the code pls */
/* jk this will stay lol */
.hero-bg-span {
  color: var(--clr-pink-100);
  font-family: "OverpassMono";
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 150%;
  -webkit-user-select: none;
  user-select: none;
  word-break: break-all;
  transition: 0.4s;
  z-index: 1;
}

.highlighted {
  color: var(--clr-pink-400);
}

/* FOREGROUND */
.hero-content {
  position: relative;
  padding: 1.5rem;
  display: flex;
  z-index: 2;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 3rem;
}

.hero-content-text {
  max-width: 45ch;
}

.hero-content-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 45ch;
}

.hero-image {
  max-width: 100%;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-heading {
  max-width: 85%;
}

.subtitle {
  font-weight: 700;
}

/* HERO INFO */
.hero-info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 2rem;
  z-index: 10;
  background-color: var(--clr-white);
  font-weight: bold;
  justify-self: flex-end;
}

.hero-info-text {
  font-family: OverpassMono;
  text-align: center;
  color: var(--clr-pink-600);
}
</style>