<template>
  <section id="FAQ" class="faq">
    <h2 style="color: var(--clr-blue-600); align-self: center">
      {{ $t("frequently_asked_questions") }}
    </h2>
    <div class="faq-questions">
      <div class="faq-question">
        <h3 style="color: var(--clr-pink-600)">{{ $t("question1") }}</h3>
        <p>
          {{ $t("answer1") }}
        </p>
      </div>
      <div class="faq-question">
        <h3 style="color: var(--clr-pink-600)">{{ $t("question2") }}</h3>
        <p>
          {{ $t("answer2") }}
        </p>
      </div>
      <div class="faq-question">
        <h3 style="color: var(--clr-pink-600)">{{ $t("question3") }}</h3>
        <p>
          {{ $t("answer3") }}
        </p>
      </div>
      <div class="faq-question">
        <h3 style="color: var(--clr-pink-600)">{{ $t("question4") }}</h3>
        <p>
          {{ $t("answer4") }}
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