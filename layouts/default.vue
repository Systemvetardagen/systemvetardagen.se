<template>
  <div>
    <Navbar />
    <Nuxt
      keep-alive
      :keep-alive-props="{ include: ['pages/companies/index.vue'] }"
    />
    <Footer />
  </div>
</template>