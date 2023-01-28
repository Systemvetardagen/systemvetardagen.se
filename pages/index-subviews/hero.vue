<template>
  <div id="home" class="hero">
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

    <div class="hero-content">
      <!-- Hero Text -->
      <div class="hero-content-text">
        <h1 class="hero-heading" style="color: var(--clr-blue-600)">
          {{ $t("hero_title") }}
        </h1>
        <h3 style="color: var(--clr-blue-900)">
          {{ $t("event_description") }}
        </h3>
      </div>

      <!-- Hero Buttons -->
      <div class="hero-buttons">
        <Button title="Katalog" bColor="gradient">Katalog</Button>
        <Button
          title="Kontakta oss"
          link=""
          bColor="--clr-blue-200"
          tColor="--clr-black-900"
          >Kontakta oss</Button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
//import { text } from 'body-parser';

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
    this.lines = require("@/content/bg_text.json").lines;
    this.concatLines = this.lines.concat([]);

    setInterval(() => {
      this.highlightedIndex = Math.floor(
        Math.random() * this.concatLines.length
      );
      setTimeout(() => {
        this.highlightedIndex = null;
      }, 1200);
    }, 2000);
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
    // getting the chracter size from a test span and the div size of the image
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
    // calculate how many characters are needed to cover the image
    // coefficient to be adjusted according to font
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
      let linesLen = this.concatLines.reduce(
        (acc, line) => acc + line.length,
        0
      );
      // if provided array is not enough to cover the image
      while (neededLen > linesLen) {
        this.concatLines = this.concatLines.concat(this.lines);
        linesLen = this.concatLines.reduce((acc, line) => acc + line.length, 0);
      }
      // hide the test span and show the needed spans
      this.generated = true;
    },

    // delete the elements of the array that go beyond visible area
    // otherwise when a generated highlightedIndex belongs to a hidden span
    // the highlighting would not be visible
    spliceText() {
      this.spans = this.$el.querySelectorAll(".displaying-spans");
      let hiddenIndex;
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
.hero {
  height: 100vh;
  /* background-position: center; */
  /* background-repeat: no-repeat; */
  justify-content: flex-end;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("@/assets/img/hero-img-provisional.png");
  background-size: cover;
  position: relative;
  overflow: hidden;
}

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
.hero-bg-span {
  color: var(--clr-pink-100);
  font-family: "OverpassMono";
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 150%;
  word-break: break-all;
  transition: 0.4s;
}

.highlighted {
  color: var(--clr-pink-600);
}

/* .hero::before {    
      content: "";
      background-image: url('@/assets/img/hero-img-provisional.png');
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.5;
} */
.hero-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* line-height: 200%; */
  z-index: 2;
}

.hero-content-text {
  max-width: 45ch;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
}

.hero-heading {
  max-width: 85%;
}
</style>