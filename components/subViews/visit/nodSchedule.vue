<template>
    <div class="schedule">
        <h2>Aula Nod Program</h2>
        <div class="list">
            <div class="item" v-for="lecture in this.lectures" :key="lecture.time">
                <div class="time">{{ lecture.time }}</div>
                <h3 class="company">{{ lecture.company }}</h3>
                <div v-if="lecture.title" class="title">{{ lecture.title }}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                lectures: [
                    {time: "10:00—10:30", company: "Zimply"},
                    {time: "11:00—11:40", company: "Truesec", title: "From Infection to Encryption: A Deep Dive into Threat Actors Malicious Code"},
                    {time: "12:00—12:30", company: "Accenture"},
                    {time: "14:00—15:00", company: "Google", title: "Generative AI - LLMs and all that jazz"}
                ]
            }
        }
    }
</script>
<style scoped>
    .schedule {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin: 1rem;
        margin-top: 2rem;
        border: solid var(--clr-grey-500);
        padding: 0.5rem;
        border-radius: 1.875rem;
        max-width: 50rem;
        
    }
    h2 {
        text-align: center;
    }
    .list {
        
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;


    }
    
    .time {
        text-decoration: underline;
        text-wrap: nowrap;
    }
    .company {
       margin: 0;
       font-weight: 600;
    }
    .title {
        text-align: center;
 
    }

    @media screen and (min-width: 1024px) {
        .schedule {
            padding: 1rem;
        }
        .item {
            flex-direction: row;
            gap: 1rem;
            align-items: baseline;
            
        }
        .company {
            font-size: 1.5rem;
        }
        .title {
            text-align: left;
            text-wrap: wrap;
        }
    }
</style>