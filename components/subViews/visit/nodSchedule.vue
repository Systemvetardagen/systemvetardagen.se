<template>
    <div class="schedule">
        <div class="about-schedule">
          <h2>Aula NOD program</h2>
          <p>{{ $t("visit_page.about-program") }}</p>
        </div>
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
  * {
    box-sizing: border-box;
  }
    .schedule {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        /*margin: 1rem;*/
        /*margin-top: 2rem;*/
        /*border: 1px solid var(--clr-grey-300);*/
        padding: 2rem 3rem;
        border-radius: 1.875rem;
        max-width: 50rem;
        background-color: white;
        background: linear-gradient(45deg, #4158D0, #C850C0, #FFCC70);
        color: white;
    }
    .about-schedule {
      /*background-color: red;*/
      margin-bottom: 2rem;
      text-align: center;
      max-width: 25rem;
    }

    .about-schedule p {
      font-family: IBMPlexMono;
      font-size: 0.9rem;
    }

    h2 {
      text-align: center;
      font-weight: normal;
      font-size: 2.2rem;
      margin-bottom: 0;
    }
    .list {

        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;


    }

    .time {
        /*text-decoration: underline;*/
        text-wrap: nowrap;
    }
    .company {
       margin: 0;
       font-weight: 600;
       font-size: 1.8rem;
    }
    .title {
        text-align: center;
        max-width: 28rem;
    }

    /*
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
    }*/

    @media screen and (max-width: 400px) {
      .schedule {
        padding: 2rem 1rem;
      }
    }
</style>
