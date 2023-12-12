<template>
    <div class="match-list">
          <h3>
            {{ post.title }}
            {{ $t("looking-for") }}
          </h3>
          <div class="match-items">
            <div class="match-list-items">
              <ul>
                <p style="font-weight: 700">{{ $t("programs") }}</p>
                <li v-for="program in post.programs_data[locale]" :key="program.id">
                  {{ program }}
                </li>
              </ul>
              <ul>
                <p style="font-weight: 700">{{ $t("positions") }}</p>
                <li v-for="position in post.positions_data[locale]" :key="position.id">
                  {{ position }}
                </li>
              </ul>
            </div>
            <div v-if="post.qualifications" class="match-qualifications">
              <p style="font-weight: 700">{{ $t("qualifications") }}</p>
              <p>{{ post.qualifications[locale] }}</p>
            </div>
          </div>
          <a
            v-if="post.link_to_positions"
            :href="post.link_to_positions"
            class="link"
            >{{ $t("company-learn-more") }} {{ post.title }} ></a
          >
        </div>
</template>

<script>
    export default {
        props: {
            post: Object,
            locale: Object
        }
    }

</script>

<style scoped>
    /* MATCH LIST */
.match-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
}

.match-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  border-top: 2px var(--clr-grey-300) solid;
  border-bottom: 2px var(--clr-grey-300) solid;
}

.match-list-items {
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-around;
  width: clamp(30ch, 80vw, 60ch);
}

.match-list > ul > li {
  font-weight: 10px;
}

</style>
