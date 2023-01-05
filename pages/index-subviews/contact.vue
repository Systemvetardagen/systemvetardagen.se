<template>
   
    <section  class="contact">
                 <form class="contact-form">
                     <h2 class="text-blue">{{ ('Contact_us')}}</h2>
                     <div class="inputs">
                         <div class="inputs-left-col">
                             
                             <input class="form-name" type="text" placeholder="name" name="name" required>
                             <input class="form-email" type="email" placeholder="email" name="email" required>
                             <input class="form-company" type="text" placeholder="company" name="company" required>
                             <input autocomplete="off" type="text" id="form-title" name="title" placeholder="Title"
                                 style="display: none">
                         </div>
                         <textarea class="form-message" name="message" placeholder="message" rows="3"
                             style="resize: none;"></textarea>
                     </div>
                     <button type="submit" class="button button-blue button-form" form="contact-form">{{('send')}}</button>
                 </form>
             </section>
 
 </template>