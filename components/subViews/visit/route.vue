<template>
    <div class="route">
        <div class="gmap">
            <iframe style="border:0" loading="lazy" allowfullscreen :src="gmapUrl()"></iframe>
        </div>

        <div class="text">
            <h2>Getting to Systemvetardagen</h2>
            <div class="mode">
                <p class="mode-head">
                    Metro
                </p>
                <p>
                    You can travel with the blue metro line (number 11) from Kungsträdgården or T-Centralen (direction Akalla) to Kista (estimated travel time from T-Centralen is 20 minutes). 
                </p>
            </div>
            <div class="mode">
                <p class="mode-head">
                    Parking
                </p>
                <p>
                    You can park on Isafjordsgatan or in the Garage Parking in Kista Galleria. Parking is allowed for on Isafjordsgatan Monday to Friday 8:00-18:00, for two hours at a time. In Kista Galleria you can park for a half hour fee.
                </p>
            </div>
            <p>More detailed directions can be found at DSV’s website.</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                gapikey: process.env.GOOGLE_API_TOKEN
            }

        },
        methods: {
            gmapUrl() {
                const output =  `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJK5qoUOyeX0YRqd75dWHaTTI&key=${this.gapikey}&zoom=10`
                
                return output
            }
        }
    }
</script>
<style scoped>
    .route {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    .gmap > iframe {
        width: 100%;
        height: 100%;
    }
    .text {
        max-width: 30rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.5rem;
    }
 
    .mode-head {
        font-weight: 600;
    }
    @media screen and (min-width: 600px) {
        .gmap > iframe {
        width: 30rem;
        height: 15rem;
        }
    }
   @media screen and (min-width: 1024px) {
        .gmap > iframe {
            width: 50rem;
            height: 25rem;
        }
   } 
</style>