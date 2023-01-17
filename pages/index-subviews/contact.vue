<template>
   
    <section  class="contact">
                 <form class="contact-form" id="contact-form" @submit.prevent="submit">
                     <h2 style="color: var(--clr-grey-1000)" >{{ $t('contact-form-title') }}</h2>
                     <div class="inputs">
                         
                             
                        <input 
                            type="text" 
                            :placeholder="this.$t('contact-form-name')" 
                            name="name" 
                            v-model="name"
                            required>
                        <input 
                            type="email" 
                            :placeholder="this.$t('contact-form-email')" 
                            name="email" 
                            v-model="email"
                            required>
                        <input 
                            type="text" 
                            :placeholder="this.$t('contact-form-company')" 
                            name="company" 
                            v-model="company"
                            required>

                        <input v-model="botmsg" autocomplete="off" type="text" id="form-title" name="title" placeholder="Title"
                            style="display: none">

                         <textarea 
                            class="form-message" 
                            name="message" 
                            :placeholder="this.$t('contact-form-message')" 
                            v-model="message"
                            rows="3"
                            style="resize: none;"></textarea>
                     </div>
                     <button type="submit" class="btn-form"> {{ $t('contact-form-button') }} </button>
                     <!-- <Button 
                        :title="this.$t('contact-form-button')" 
                        bColor="--clr-pink-700" 
                        v-type="submit"
                        form="contact-form"
                        ></Button> -->
                 </form>

                 <img class="contact-blob-nod" src="assets/img/contact-blob-nod.png" alt="Blob Contact Nod"/>
                 
             </section>
 
 </template>
 <script>
 import Button from '@/components/Button.vue'
import { file } from '@babel/types';
export default {
  methods: {
     submit(event) {
        console.log('Step 0')
        event.preventDefault();
        console.log('Step 1 complete')
        try {
            let body = {
                name: this.name,
                email: this.email,
                company: this.company,
                message: this.message,
                botField: this.botmsg,
        };
        console.log(body);
        fetch(this.url, {
            method: "POST",
            body: JSON.stringify(body),
        });
        this.clearForm();
        alert("Your message has been sent!");
        } catch (err) {
            console.log(err);
            alert("Oops, something went wrong!");
        }
    },

    clearForm() {
    this.name = '';
    this.email = '';
    this.company = "";
    this.message = "";
    }
  },
  data () {
    return {
        name: '',
        email: '',
        company: '',
        message: '',
        botmsg: '',
        url: 'https://contact-form.systemvetardagen.workers.dev/'
    }
  },
    name: 'contact'
}
components: {
    Button
}
</script>
<style>
.contact {
  padding-top: 0;
  display: flex;
  flex-direction: column;
  background: var(--clr-blue-200);
  justify-content: space-between;

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

.inputs {
  display: flex;
  flex-direction: column;


}


@media (min-width: 1024px) {
  .inputs {
    flex-direction: column;
  }
  .inputs-left-col {
    margin-right: 1rem;
  }
}
input,
textarea {
  margin: 0;
  margin-bottom: 1rem;
  padding: 0.8rem 1rem;
  width: 24rem;
  max-width: 100%;
  background-color: white;
  border-radius: 0.4rem;
  color: var(--clr-grey-500);
  /* transition: border-color 0.2s; */
  border: none;
}

input {
    height: 2rem;
}

input:focus,
textarea:focus {
  /* border-color: var(--clr-blue); */
  outline: none;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: var(--clr-grey-500);
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: var(--clr-grey-500);
}

input::placeholder,
textarea::placeholder {
  color: var(--clr-grey-500);
}

.button-form {
  margin-top: 0;
  width: 12rem;
  align-self: flex-start;
}

    .btn-form {
        /* background-color: var(--clr-blue); */
        font-weight: 500;

        /* color: var(--clr-white); */
        border: none;

        text-align: center center;
        text-decoration: none;
        display: inline-block;
        font-size: 1.22rem;
        /* margin-top: 2rem; */
        padding:0.4em 2.5em;
        border-radius: 0.5rem;

        background: var(--clr-pink-700);
        color: var(--clr-white);

    }



.contact-blob-nod {
    width: 50%;
    height: auto;
}



</style>