<!-- This custom button template creates buttons according to the SvD button style guidlines. Different kinds of buttons can be created by modifying background and text color, width. Additionally, a border can be added. When no color is specified the button has the gradient background color which is hard coded. It works best with links. There is no hover effect -->
<template>
        <a :href="link" :style="btnCustStyle" class="btn">
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
        },
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
        background: linear-gradient(90deg, var(--clr-blue-600), var(--clr-pink-600), var(--clr-yellow-600));
        padding:0.6em 2.5em;
        border: none;
        border-radius: 0.5rem;
        
        /* Text */
        font-weight: 500;
        text-decoration: none;
        font-size: 1.22rem;
        color: var(--clr-white);
    }
</style>