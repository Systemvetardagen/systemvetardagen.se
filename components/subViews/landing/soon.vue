<template>
    <section class="soon">
        <div class="soon-text">
            <h2 style="color:var(--clr-pink-600); text-align: center; ">{{ $t('landing_page.info.it_is_almost_time!') }}</h2>
            <p class="p" style="color: black;">{{ $t('landing_page.info.disk_introduction1') }}<a
            class="inline-link" style="color: black; text-align: left;" href=https://disk.su.se>{{ $t('landing_page.info.disk') }}</a>
            {{ $t('landing_page.info.disk_introduction2') }}
            </p>
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
<style>
.soon {
  display: flex;
  justify-content: center;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("assets\img\MicrosoftTeams-image.png");
  background-position: center;
  background-size: cover;
  /* height: 100vh; */
  background-repeat: no-repeat;
}
.soon-text {
  background-color: var(--clr-white);
  padding: 2rem;
  border-radius: 1rem;
}
@media (max-width: 600px) {
  .soon-text {
    width: 100%;
  }
}
@media (min-width: 601px) {
  .soon-text {
    max-width: 45ch;
  }
}
</style>