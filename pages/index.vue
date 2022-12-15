<template>
  <div class="wrapper">
		<hero/>
		<soon/>
		<Button title="See Map" link="map"/>
	</div>
</template>
<style>
	

</style>

<script>
import hero from '@/pages/index-subviews/hero.vue'
import soon from '@/pages/index-subviews/soon.vue'
import Button from '@/components/Button.vue'
export default {
	components: {hero, soon},
  	name: 'IndexPage'
}

	components: {
		hero
		soon
		Button
}
</script>
