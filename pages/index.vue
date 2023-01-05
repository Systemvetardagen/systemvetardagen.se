<!-- use option (alt) + Z to wrap text in vs code -->

<template>
  <div class="wrapper">
		<hero/>
		<soon/>
		<oldCatalog/>
		<!-- <Button title="See Map" link="map"/> -->
	</div>
</template>
<style>
	

</style>

<script>
import hero from '@/pages/index-subviews/hero.vue'
import soon from '@/pages/index-subviews/soon.vue'
import Button from '@/components/Button.vue'
import oldCatalog from './index-subviews/oldCatalog.vue'
export default {
	components: {hero, soon, oldCatalog},
  	name: 'IndexPage'
}

	components: {
		hero
		soon
		Button
		oldCatalog
}
</script>
