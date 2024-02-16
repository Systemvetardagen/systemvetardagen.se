<template>
    <div class="schedule">
        <h2>Aula Nod Program</h2>
        <div class="list">
            <div class="item" v-for="lecture in this.lectures" :key="lecture.time">
                <div class="time">{{ lecture.time }}</div>
                <h3 class="company">{{ lecture.company }}</h3>
                <div class="title">{{ lecture.title }}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                lectures: [
                    {time: "11:00—11:45", company: "Truesec", title: "The Russian Use of Malware in the Cyberwar Against Ukraine"},
                    {time: "12:00—12:45", company: "Arbetsförmedlingen", title: "IT på Arbetsförmedlingen - inte vad du tror"}
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
            justify-content: baseline;
            
        }
        .company {
            font-size: 1.5rem;
        }
    }
</style>