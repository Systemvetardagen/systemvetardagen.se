<!-- The 'contact us' section on the bottom of the landing page. -->
<template>
  <section class="contact" id="contact">
    <form class="contact-form" id="contact-form" @submit.prevent="submit">

      <!-- TITLE -->
      <h2 style="color: var(--clr-grey-900)">
        {{ $t("contact-form-title") }}
      </h2>

      <!-- INPUTS -->
      <div class="inputs">
        <!-- Name -->
        <input
          type="text"
          :placeholder="this.$t('contact-form-name')"
          name="name"
          v-model="name"
          required
        />

        <!-- E-Mail -->
        <input
          type="email"
          :placeholder="this.$t('contact-form-email')"
          name="email"
          v-model="email"
          required
        />

        <!-- Company -->
        <input
          type="text"
          :placeholder="this.$t('contact-form-company')"
          name="company"
          v-model="company"
          required
        />

        <!-- Honeypot -->
        <input
          v-model="botmsg"
          autocomplete="off"
          type="text"
          id="form-title"
          name="title"
          placeholder="Title"
          style="display: none"
        />

        <!-- Message -->
        <textarea
          class="form-message"
          name="message"
          :placeholder="this.$t('contact-form-message')"
          v-model="message"
          rows="3"
          style="resize: none"
        ></textarea>
      </div>

      <!-- BUTTON -->
      <!-- the custom button didn't work for the form; therefore, we used the standard button and styled it accrdingly. -->
      <button type="submit" class="btn-form">
        {{ $t("contact-form-button") }}
      </button>
    </form>


    <!-- BLOB -->
    <!-- The blob image disappears on mobile. -->
    <img
      class="contact-blob-nod"
      src="@/assets/img/blob-6d-nodImage-white.png"
      alt="Blob Contact Nod"
    />
  </section>
</template>
 <script>
import Button from "@/components/Button.vue";

export default {
  methods: {
    // This function is called upon completion of the form. It takes the entered data and sends it to a cloudflare worker from where the data is send to the info.systemvetardagen@disk.su.se via.
    submit(event) {
      event.preventDefault();
      
      // while filling the form, the data is stored in the vue data properties defined below, which are connected to the input tags in the template via v-model. In this function these data tags ( e.g., this.name) are added to a dictionary.
      try {
        let body = {
          name: this.name,
          email: this.email,
          company: this.company,
          message: this.message,
          botField: this.botmsg,
        };

        // This dictionary is then parsed as json and posted to the worker. 
        fetch(this.url, {
          method: "POST",
          body: JSON.stringify(body),
        }).then((response) => {
          console.log(response.status);
        });
        this.clearForm();
        alert("Your message has been sent!");
      } catch (err) {
        console.log(err);
        alert("Oops, something went wrong!");
      }
    },

    clearForm() {
      this.name = "";
      this.email = "";
      this.company = "";
      this.message = "";
    },
  },
  data() {

    // These are the properties that store the form inputs. They are connected to the template via v-model. 
    return {
      name: "",
      email: "",
      company: "",
      message: "",
      botmsg: "",
      url: "https://contact-form.systemvetardagen.workers.dev/",
    };
  },
  name: "contact",
};
components: {
  Button;
}
</script>


<style scoped>

/* CONTAINERS */
.contact {
  padding-top: 0;
  display: flex;
  flex-direction: row;
  background: var(--clr-blue-100);
  justify-content: space-between;
  padding-right: 0;
  padding-bottom: 5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;

  border-radius: nullpx;
  text-align: left;

  /* Black/900 */
  color: #303030;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  padding-top: 10rem;
}

/* INPUTS */

.inputs {
  display: flex;
  flex-direction: column;
}


input,
textarea {
  margin: 0;
  margin-bottom: 1rem;
  padding: 0.8rem 1rem;
  width: 22rem;
  max-width: 100%;
  background-color: white;
  border-radius: 0.4rem;
  color: var(--clr-grey-500);
  transition: outline 0.2s;
  border: none;
}

input:focus,
textarea:focus {
  outline: solid 0.25rem var(--clr-blue-600);
}

/* placeholder (for different client systems) */
input::-moz-placeholder,
textarea::-moz-placeholder {
  color: var(--clr-grey-700);
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: var(--clr-grey-700);
}

input::placeholder,
textarea::placeholder {
  color: var(--clr-grey-700);
}


/* SUBMIT BUTTON */

.button-form {
  margin-top: 0;
  width: 12rem;
  align-self: flex-start;
}

.btn-form {
  font-weight: 500;
  border: none;
  text-align: center center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.22rem;
  padding: 0.4em 2.5em;
  border-radius: 0.5rem;
  background: var(--clr-pink-600);
  color: var(--clr-white);
}


/* MEDIA QUERRIES */

@media (min-width: 1024px) {
  .inputs {
    flex-direction: column;
  }
  .inputs-left-col {
    margin-right: 1rem;
  }

  .contact-blob-nod {
    padding-top: 10rem;
    visibility: visible;
  }
}

@media (max-width: 1024px) {
  .contact-blob-nod {
    visibility: hidden;
  }
}
</style>