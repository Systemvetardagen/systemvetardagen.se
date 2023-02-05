<!-- use option (alt) + Z to wrap text in vs code -->
<template>
  <div class="wrapper">
		<hero/>
		<sponsors/>
		<soon/>
		<studentnode/>
        <info/>
		<faq/>
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
import studentnode from '@/pages/index-subviews/studentnode.vue'
import Button from '@/components/Button.vue'
import info from '@/pages/index-subviews/info.vue'
import faq from '@/pages/index-subviews/faq.vue'
import oldCatalog from './index-subviews/oldCatalog.vue'
import contact from '@/pages/index-subviews/contact.vue'
import sponsors from './index-subviews/sponsors.vue'
export default {
	components: {hero, soon,studentnode, info, faq, oldCatalog, contact, sponsors},
  	name: 'IndexPage'
}

	components: {
		hero
		soon
		studentnode
        info
		faq
		Button
		oldCatalog
		contact
		sponsors
  }
</script>
