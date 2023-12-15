<template>
    <div v-if="post.contact_persons" class="post-contact">
          <h3>{{ $t("company-contact") }}</h3>

          <div
            v-for="contact in this.post.contact_persons"
            class="company-contact"
            :key="contact.id"
          >
            <p v-if="contact.name">
              <b>{{ contact.name }}</b>
            </p>
            <a
              v-if="contact.email"
              class="email link"
              :href="'mailto:' + contact.email"
              >{{ contact.email }}
            </a>
            <p v-if="contact.email">{{ contact.phone_number }}</p>
          </div>
        </div>
</template>

<script>
    export default {
        props: {
            post: Object
        }
    }

</script>

<style scoped>
    /* COMPANY CONTACT */
.post-contact {
  width: clamp(30ch, 80vw, 60ch);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.company-contact {
  padding-bottom: 1rem;
}

.link {
  margin-top: 2rem;
  color: var(--clr-blue-600);
}



</style>
