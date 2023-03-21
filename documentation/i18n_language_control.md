# I18n, Language Control

Here is how to implement language control.

the below code block in nuxt.config.js is the configuration code of I18n:
```json
modules: ["@nuxtjs/i18n", "@nuxtjs/content", "@nuxt/image"],
i18n: {
locales: ["en", "sv"],
defaultLocale: "sv",
vueI18n: {
    fallbackLocale: "sv",
    messages: { en, sv },
},
},
```

In the folder 'locales', there are two files.
They are used to define the text in corresponding language.

for example:

there are 
```json
"login": "log in",
```
in en.json

and
```json
"login": "logga in"
```
in sv.json

Then in index.vue.
they can be used like this:
```javascript
<h2>{{ $t('login') }}</h2>
```

if you want to use it inside tag,
here is example:
```javascript
<input
    type="text"
    :placeholder="this.$t('login')"
    name="name"
    v-model="name"
    required
/>
```