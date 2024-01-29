<template>
  <section id="FAQ" class="faq">
    <h2 style="color: var(--clr-blue-600); align-self: center">
      {{ $t("landing_page.info.frequently_asked_questions") }}
    </h2>
    <div class="faq-questions">
      <div class="faq-question">
        <h3 style="color: var(--clr-pink-600)">{{ $t("landing_page.info.question1") }}</h3>
        <p>
          {{ $t("landing_page.info.answer1") }}
        </p>
      </div>
      <div class="faq-question">
        <h3 style="color: var(--clr-pink-600)">{{ $t("landing_page.info.question2") }}</h3>
        <p>
          {{ $t("landing_page.info.answer2") }}
        </p>
      </div>
      <div class="faq-question">
        <h3 style="color: var(--clr-pink-600)">{{ $t("landing_page.info.question3") }}</h3>
        <p>
          {{ $t("landing_page.info.answer3") }}
        </p>
      </div>
      <div class="faq-question">
        <h3 style="color: var(--clr-pink-600)">{{ $t("landing_page.info.question4") }}</h3>
        <p>
          {{ $t("landing_page.info.answer4") }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "faq",
};
</script>
<style>
.faq {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.faq-questions {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.faq-question {
  max-width: 100%;
}

@media (min-width: 850px) {
  .faq-questions {
    max-width: 45ch;
  }
}
</style>