<!-- This custom button template creates buttons according to the SvD button style guidlines. Different kinds of buttons can be created by modifying background and text color, width. Additionally, a border can be added. When no color is specified the button has the gradient background color which is hard coded. It works best with links. There is no hover effect -->
<template>
  <a :href="link" class="btn" :class="{ 'hovered': hover }" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    link: String,
    tColor: String,
    bColor: String,
    width: String,
    borderCol: String,
  },
  computed: {
    /*
    // The function bellow creates a custom css style string based on the inputs used when implementing this component, which is applied to the a tag in the template above.
    btnCustStyle () {
      // background color, text color
      if (this.bColor != "gradient" && this.bColor != "transparent") {
          return 'background: var(' + this.bColor + '); color: var(' + this.tColor + '); width:' + this.width

      // transparent background with a solid border
      } else if (this.bColor == "transparent") {
          return 'background: none; border: solid 0.2rem; border-color: var('+this.borderCol + '); color: var(' + this.tColor + '); width:' + this.width

      // default background color: hard coded linear gradient
      } else {
          return 'width:' + this.width
      }
    },
    */
  },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    onMouseOver: function(){
      this.hover = !this.hover;
      console.log(this.hover)
    },
    onMouseLeave: function() {
      this.hover = !this.hover;
      console.log(this.hover)
    }
  }
}
</script>

<style>
  .btn {
    /* Alignment */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    /* Shape and Background */
    padding:0.6em 2.5em;
    border: none;
    border-radius: 3rem;

    /* Text */
    font-weight: 500;
    text-decoration: none;
    font-size: 1.22rem;
    color: var(--clr-white);
    border: solid 0.15rem white;
  }

  .btn.hovered {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgb(245, 245, 245);
  }
</style>
