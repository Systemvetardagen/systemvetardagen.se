<template>
   
    <section  class="contact">
                 <form class="contact-form">
                     <h2 style="color: var(--clr-grey-1000)" >{{ $t('contact_us') }}</h2>
                     <div class="inputs">
                         
                             
                        <input type="text" placeholder="name" name="name" required>
                        <input type="email" placeholder="email" name="email" required>
                        <input type="text" placeholder="company" name="company" required>
                        <input autocomplete="off" type="text" id="form-title" name="title" placeholder="Title"
                            style="display: none">

                         <textarea class="form-message" name="message" placeholder="message" rows="3"
                             style="resize: none;"></textarea>
                     </div>
                     <button type="submit" class="button button-blue button-form" form="contact-form">{{('send')}}</button>
                 </form>
             </section>
 
 </template>
 <script>
export default {
    name: 'contact'
}
</script>
<style>
.contact {
  padding-top: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--clr-blue-200);
  justify-content: space-between;

}

.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

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
  align-self: flex-end;
}

</style>