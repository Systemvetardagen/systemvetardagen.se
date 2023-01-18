<template>
    <div id="home" class="hero">

        <div id="hero-text-block" ref="heroTextBlock">
            <span class="hero-bg-span" v-if="!generated" id="span-for-calculation">dummy text</span>
            <span class="hero-bg-span displaying-spans" v-if="generated" v-for="(line, index) in concatLines" :key="index" :class="{ highlighted: index === highlightedIndex }">{{ line }} </span>
        </div>

        <div class="hero-content">
             <!-- Hero Text -->
            <div>
                <h1 class="hero-heading" style="color: var(--clr-blue-600)" >{{ $t('hero_title') }}</h1>
                <h3 style="color: var(--clr-blue-900)">{{ $t('event_description') }}</h3>
            </div>

        <!-- Hero Buttons -->
            <div class="hero-buttons">
                <Button title="Katalog" link="" bColor="gradient"/>
                <Button title="Kontakta oss" link="" bColor="--clr-blue-200" tColor="--clr-black-900"/>
            </div>

        </div>

        
    </div>

</template>

<script>
    import Button from '@/components/Button.vue'
    //import { text } from 'body-parser';

    export default {
        name: 'heroSection',
        
        data() {
            return {
                lines: [],
                concatLines: [],
                divRect: null,
                charactersNeededPrev: 0,
                generated: false,
                highlightedIndex: null,
                textBlock: null,
                spans: null
            }
        },
        
        created() {
            this.lines = require('@/content/bg_text.json').lines
            this.concatLines = this.lines.concat([])

            setInterval(() => {
                this.highlightedIndex = Math.floor(Math.random() * this.concatLines.length)
                setTimeout(() => {
                    this.highlightedIndex = null
                }, 1200)
            }, 2000)
        },

        mounted() {
            window.addEventListener('resize', this.handleResize)
            // getting the chracter size from a test span and the div size of the image
            this.textBlock = this.$refs.heroTextBlock
            const span = this.$el.querySelector('#span-for-calculation')
            const computedStyle = window.getComputedStyle(span)
            this.divRect = this.textBlock.getBoundingClientRect()
            if (!this.divRect.width) return
            this.characterWidth = parseFloat(computedStyle.fontSize)
            this.characterHeight = span.getBoundingClientRect().height
            this.generateText()

            this.$nextTick(() => this.spliceText())
        },

        computed: {
            // calculate how many characters are needed to cover the image
            // coefficient to be adjusted according to font
            charactersNeeded() {
                return Math.floor(this.divRect.width / (this.characterWidth * 0.625)) * Math.floor(this.divRect.height / (this.characterHeight * 1.25))
            }
        },

        methods: {
            handleResize() {
                if (!this.divRect.width) return
                this.divWidth = this.textBlock.offsetWidth
                this.generateText()
                this.spliceText()
            },

            generateText() {
                // don't generate again when the viewport is resized but charactersNeeded stays the same
                if (this.charactersNeededPrev === this.charactersNeeded) return
                this.charactersNeededPrev = this.charactersNeeded

                let neededLen = this.charactersNeeded
                let linesLen = this.concatLines.reduce((acc, line) => acc + line.length, 0)
                // if provided array is not enough to cover the image
                while (neededLen > linesLen) {
                    this.concatLines = this.concatLines.concat(this.lines)
                    linesLen = this.concatLines.reduce((acc, line) => acc + line.length, 0)
                }
                // hide the test span and show the needed spans
                this.generated = true
            },

            // delete the elements of the array that go beyond visible area
            // otherwise when a generated highlightedIndex belongs to a hidden span
            // the highlighting would not be visible
            spliceText() {
                this.spans = this.$el.querySelectorAll('.displaying-spans')
                let hiddenIndex
                for (let i = 0; i < this.spans.length; i++) {
                    if (this.spans[i].getBoundingClientRect().bottom > this.divRect.bottom) {
                        hiddenIndex = i
                        break
                    }
                }
                this.concatLines.splice(hiddenIndex)
            }
        }

    }
    components: {
        Button
    }

</script>

<style>
    .hero {
        height: 100vh;
        /* background-position: center; */
        /* background-repeat: no-repeat; */
        justify-content: flex-end;
        background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('@/assets/img/hero-img-provisional.png');
        background-size: cover;
        position: relative;
        overflow: hidden;
    }

    #span-for-calculation {
        color: transparent;
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

    /* temporary style, to be finalised by design/css team, font size needs to be in px */
    .hero-bg-span {
        color: rgba(238,238,238,0.25);
        font-family: 'Courier New', Courier, monospace;
        font-size: 16px;
        font-weight: bold;
        word-break: break-all;
    }

    .highlighted {
        color: #aaa;
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
        max-width: 50%;
        /* line-height: 200%; */
        z-index: 2;
    }

    .hero-buttons {
        display: flex;
        margin-bottom: 80px;
    }

    .hero-heading {
        max-width: 85%;
    }
</style>