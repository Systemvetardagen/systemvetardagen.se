<template>
    <div id="oldCatalog" class="oldCatalog">

       <!-- <div class="catpic"> -->
        <img class="catpicmedia" src="@/assets/img/chessboard.png" alt="Old Calalog Placeholder">
       <!-- </div> -->
      
       <div class="oldcatcontent">
            <h2 style="color: var(--clr-blue-700)">Kolla in förra årets katalog!</h2>
            <p>oojium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore </p>
            <Button title="Catalog" link="" bColor="--clr-pink-700" tColor="--clr-grey-100"></Button>
       </div>

        
    </div>

</template>

<script>
    import Button from '@/components/Button.vue'
    //import { text } from 'body-parser';

    export default {
        name: 'oldCatalog'
    }
    components: {
        Button
    }

</script>
    
<style>
    .oldCatalog {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10% 5%;
        align-items: center;
        gap: 20px;
        
      
    }
    .catpicmedia {
        width:90%; 
        height: auto;
    }

    @media (min-width: 1024px) {
		 .oldCatalog {
            flex-direction: row;
            padding: 20%;
            padding-left: 7%;
            padding-right: 13%;
         }
         .oldcatcontent {
            padding-left: 5%;
        }
	  }


</style>
