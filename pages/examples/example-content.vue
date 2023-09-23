<template>
    <p >{{ post.founded }}</p>
</template>

<script>

    export default {
        async asyncData({ $content, params, error, i18n }) {
            let post;
            try {
            post = await $content(
                "companies",
                params.companies + "." + i18n.locale // Specifies that the fetch function should see difference between the same cms entry in different languages 
            ).fetch();
            } catch (e) {
            error({ message: "Entry not found" });
            }
            return { post };
        },
    }
</script>

