<template>
    <div class="route">
        <!-- <div class="gmap">
            <iframe style="border:0" loading="lazy" allowfullscreen :src="gmapUrl()"></iframe>
        </div> -->

        <div class="text">
            <h2>{{$t('visit_page.route.heading')}}</h2>
            <div class="mode">
                <p class="mode-head">{{ $t('visit_page.route.metro_heading') }}</p>
                <p>{{ $t('visit_page.route.metro_text') }}</p>
            </div>
            <div class="mode">
                <p class="mode-head">{{ $t('visit_page.route.parking_heading') }}</p>
                <p>{{ $t('visit_page.route.parking_text') }}</p>
            </div>
            <p>{{ $t('visit_page.route.more_info') }} 
                <a href="https://dsv.su.se/en/about/find">{{ $t('visit_page.route.more_info_link') }}</a>.
            </p>
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