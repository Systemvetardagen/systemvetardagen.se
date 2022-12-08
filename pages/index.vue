<template>
  <div class="wrapper">
		<hero/>
		<Button title="See Map" link="map"/>
	</div>
</template>
<style>
	

</style>

<script>
import hero from '@/pages/index-subviews/hero.vue'
import Button from '@/components/Button.vue'
export default {
	components: {hero},
  	name: 'IndexPage'
}

	components: {
		hero
		Button
}
</script>
