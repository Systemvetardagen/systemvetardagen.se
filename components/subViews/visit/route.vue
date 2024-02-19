<template>
    <div class="route">
        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=NOD-huset,%20Borgarfjordsgatan%2012,%20164%2055%20Kista+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>

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
</script>
<style scoped>
    .route {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
        width: 100%;
    }
    h2 {
      margin-bottom: 0;
    }

    .text {
        max-width: 30rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-top: 1rem;
        /*padding: 1.5rem;*/
        /*min-width: 100%;*/
        overflow-wrap: anywhere;
    }

    .mode-head {
        font-weight: 600;
    }

    iframe {
      max-width: 1200px;
    }
</style>
