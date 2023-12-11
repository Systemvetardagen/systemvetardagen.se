<template>
    <section>
        <div class="info">
          <h2 class="info-heading">{{ $t('info_heading') }}</h2>
          <div class="info-lists">
            <div>
                <h3 style="color: var(--clr-pink-600); text-align: center;">{{ $t('before_the_fair') }}</h3>
                <p><ul class="list">
                    <li>{{ $t('before_the_fair_description1') }}</li>
                    <li>{{ $t('before_the_fair_description2') }}</li>
                    <li>{{ $t('before_the_fair_description3') }}</li>
                </ul></p>
                <p>{{ $t('before_the_fair_description4') }}</p>
            </div>
            <div>
                <h3 style="color: var(--clr-pink-600); text-align: center;">{{ $t('during_the_fair') }}</h3>
                <p><ul>
                    <li>{{ $t('during_the_fair_description1') }}</li>
                    <li>{{ $t('during_the_fair_description2') }}</li>
                    <li>{{ $t('during_the_fair_description3') }}</li>
                </ul></p>
            </div>
          </div>
        </div>

	</section>

</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "heroSection",
};
components: {
  Button;
}
</script>
<style scoped>
.info-heading {
  margin-bottom: 2rem;
  text-align: center;
  color: var(--clr-blue-600);
}

.info-lists {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  text-align: left;
}

.info-text {
  display: flex;
  flex-direction: column;
}
</style>