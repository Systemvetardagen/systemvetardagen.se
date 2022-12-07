<template>
    <div class="btn-out" :style="hoverCol" @mouseover="mouseOver()">
        <a :href="link" :style="colorVar" class="btn"> {{ title }} </a>
    </div>
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
           
        },
        computed: {
            colorVar () {
                if (this.bColor != "gradient") {
                    return 'background: var(' + this.bColor + '); color: var(' + this.tColor + ')'
                }

                    
                    //'Background-color: var(' + this.htColor + ')',
                    //'Background-color: var(' + this.hbColor + ')', 
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

        /* color: var(--clr-white); */
        border: none;

        text-align: center center;
        text-decoration: none;
        display: inline-block;
        font-size: 1.2rem;
        margin-top: 2rem;
        padding:0.6em 2em;
        border-radius: 9px;

        background: linear-gradient(90deg, var(--clr-blue), var(--clr-yellow));
        color: var(--clr-white);

    }
    .btn-out {
        margin: 5px;
    }
</style>