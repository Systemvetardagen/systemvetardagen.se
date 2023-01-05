<!-- use option (alt) + Z to wrap text in vs code -->

<template>
  <div class="wrapper">
		<hero/>
		<soon/>
        <info/>
		<oldCatalog/>
		<!-- <Button title="See Map" link="map"/> -->
		<contact/>
	</div>
</template>
<style>
	

</style>

<script>
import hero from '@/pages/index-subviews/hero.vue'
import soon from '@/pages/index-subviews/soon.vue'
import Button from '@/components/Button.vue'
import info from '@/pages/index-subviews/info.vue'
import oldCatalog from './index-subviews/oldCatalog.vue'
import contact from '@/pages/index-subviews/contact.vue'
export default {
	components: {hero, soon, info, oldCatalog, contact},
  	name: 'IndexPage'
}

	components: {
		hero
		soon
        info
		Button
		oldCatalog
		contact
}
</script>
