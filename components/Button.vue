<template>
    <!-- <div class="btn-out" :style="hoverCol" @mouseover="mouseOver()"> -->
        <a :href="link" :style="btnCustStyle" class="btn"> {{ title }} </a>
    <!-- </div> -->
</template>

<script>
import { variableDeclaration } from '@babel/types';
import { computed } from '@vue/reactivity';

    export default {
        props: {
            title: String,
            link: String,
            tColor: String,
            bColor: String,
            hbColor: String,
            htColor: String,
            width: String,
            borderCol: String,

           
        },
        computed: {
            btnCustStyle () {
                if (this.bColor != "gradient" && this.bColor != "transparent") {
                    return 'background: var(' + this.bColor + '); color: var(' + this.tColor + '); width:' + this.width 
                } else if (this.bColor == "transparent") {
                    return 'background: none; border: solid 0.2rem; border-color: var('+this.borderCol + '); color: var(' + this.tColor + '); width:' + this.width
                } else {
                    return 'width:' + this.width
                }

                    
                    //'Background-color: var(' + this.htColor + ')',
                    //'Background-color: var(' + this.hbColor + ')', 
            },
            btnWidth () {
                return 'width:' + this.width 
            },

            hoverCol () {
                return 'background-color:' + this.hovering ? this.hbColor: 'red'
            },
        },
        data () {
            return {
                hovering: false
            }
        },
        methods: {
            mouseOver () {
                this.hovering = !this.hovering
                //console.log(String(this.hovering))
                
            }
        }
    }
</script>

<style>
    .btn {
        /* background-color: var(--clr-blue); */
        font-weight: 500;
        display: flex;
        /* color: var(--clr-white); */
        border: none;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1.22rem;
        /* margin-top: 2rem; */
        padding:0.4em 2.5em;
        border-radius: 0.5rem;

        background: linear-gradient(90deg, var(--clr-blue-600), var(--clr-pink-600), var(--clr-yellow-600));
        color: var(--clr-white);
        margin: 5px;

    }
    .btn-out {
        margin: 5px;
    }
</style>