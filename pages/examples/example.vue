<template>
   <div class="context">

        <h1 class="title">
            Welcome to Systemvetardagen!
        </h1>

        <Button
            :link="localePath('/catalog/' + '/')"
            class="button"
            width="14rem"
            bColor="gradient"
            >{{ $t("catalog_btn_title") }}</Button
            >

        </div>
</template>
  
<script>
    import Button from "@/components/Button.vue";
    
    export default {
        name: "example",

        data() {
            // Data bindings from Template
        
        },
        created() {
    
        },
        mounted() {
            
        },
        computed: {
            
        },
         methods: {
            // Methods that can be called by buttons, other methods, etc. 
        },
    
    };
    components: {
        Button;
    }
</script>
  
<style>
  
    .context {
        /* Normal CSS */

        
    }
  
    .buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
  
 
  </style>