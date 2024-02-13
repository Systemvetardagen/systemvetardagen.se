<template>
  <main class="wrapper" id="top">
    <section v-if="post">
      <article class="post" id="post">
        <h1 v-if="isPreview" class="preview-title">This is a preview of the page</h1>

        <!-- BANNER -->
        <Banner :post="this.post"/>

        <!-- PLACEMENT -->
        <Placement :post="this.post"></Placement>

        <!-- LOGO AREA -->
        <LogoArea :post="this.post" :locale="this.locale"/>

        <!-- ARTICLE MAIN CONTENT -->
        <div class="post-content">
          <h3>{{ post.slogan }}</h3>
          <p>{{ post.about_us[locale] }}</p>

          <!-- COMPANY INFO -->
          <CompanyInfo :post="this.post" :locale="this.locale"/>

          <!-- PARTNER CONTENT -->
          <PartnerContent v-if="post.sponsor" :post="this.post"/>

          <!-- MATCH LIST -->
          <MatchList :post="this.post" :locale="this.locale"/>

        </div>
        <!-- END MAIN CONTENT -->

        <!-- COMPANY CONTACT -->
        <CompanyContact :post="this.post"/>


        <!-- MAP -->
        <!--         <div class="map-section">
          <h3 v-if="showEnglishMessage">Visit {{ post.title }} at:</h3>
          <h3 v-else>Visit {{ post.title }} at:</h3>
          <p>Location</p>
          <div class="map"><p>Map</p></div>
        </div> -->
        <!-- END MAP -->

        <!-- BOTTOM BUTTONS -->
        <div class="bottom-buttons">
          <a
            :href="localePath('/companies/')"

            class="btn"
            >{{ $t("company_page.go-back") }}</a
          >

          <a
            href="#top"
            class="btn"
            >{{ $t("company_page.go-top") }}
        </a>
        </div>
        <!-- END BOTTOM BUTTONS -->
      </article>
    </section>
  </main>
</template>

<script>
import Button from "@/components/Button.vue";
import marked from "marked";
import Banner from "@/components/subViews/company/banner.vue"
import LogoArea from "../../components/subViews/company/logoArea.vue";
import Placement from "../../components/subViews/company/placement.vue";
import CompanyInfo from "@/components/subViews/company/companyInfo.vue"
import PartnerContent from "@/components/subViews/company/partnerContent.vue"
import MatchList from "@/components/subViews/company/matchList.vue"
import CompanyContact from "@/components/subViews/company/companyContact.vue"

import {
  API_Call_Company,
  API_Call_Company_Details,
  image_url
} from "@/app/companyCall.js";


export default {
  data() {
    return {
      isPreview: this.$preview
    }
  },
  methods: {
    ImageLink(cmsImg) {
      const link = "/_nuxt/assets" + cmsImg;
      //console.log(link);
      return link;
    },
  },
  props: {
    // bannerLink: "@/assets" + this.post.banner
  },
  //Gets a specific entry from the cms in the specified folder based on the value of params.
  async asyncData({ $content ,params, error, i18n }) {
    let companyName = params.companies;
    let locale = i18n.locale;
    let post;
    try {
      post = await API_Call_Company(companyName);
      // if (post.status !== "published"){
      //   if(params.companies.indexOf("draft") === -1){
      //     throw new Error('Post not found');
      //   }
      // }
      post.title = companyName;
      post.logo = image_url(post.logo);
      post.banner = post.banner ? image_url(post.banner) : null;
      post.sponsor_images = [];
      if (post.sponsor_image1){
        post.sponsor_images.push(image_url(post.sponsor_image1));
      }
      if (post.sponsor_image2){
        post.sponsor_images.push(image_url(post.sponsor_image2));
      }
      if (post.sponsor_image3){
        post.sponsor_images.push(image_url(post.sponsor_image3));
      }
      const ids = {
        //regular programs and master programs now get combined, we can change this later
        programs: post.programs || [],
        programsMaster: post.master_programs || [],
        positions: post.positions || [],
        contacts: post.contacts || [],
        translations: post.translations || [],
      };
      const data_detail = await API_Call_Company_Details(ids);
      post.programs_data_master = {
        sv: [],
        en: []
      }
      post.programs_data_bachelor = {
        sv: [],
        en: []
      }

      data_detail.programs.forEach(item => {
        const { languages_code, program, is_master } = item;
        if (languages_code === 'en') {
          if(is_master) post.programs_data_master.en.push(program);
          else post.programs_data_bachelor.en.push(program);
        } else if (languages_code === 'sv') {
          if(is_master) post.programs_data_master.sv.push(program);
          else post.programs_data_bachelor.sv.push(program);
        }
      });


      post.positions_data = {
        sv: [],
        en: []
      }

      data_detail.positions.forEach(item => {
        const { languages_id, position } = item;
        if (languages_id === 'en') {
          post.positions_data.en.push(position);
        } else if (languages_id === 'sv') {
          post.positions_data.sv.push(position);
        }
      });

      post.contact_persons = data_detail.contact_persons;

      let langCode = {
        en: 0,
        sv: 0
      }

      if(data_detail.translations[0].languages_code === "en"){
        langCode["en"]=0;
        if(data_detail.translations.length > 1 && data_detail.translations[1].languages_code === "sv"){
          langCode["sv"]=1;
        }
      } else if (data_detail.translations[0].languages_code === "sv"){
        langCode["sv"]=0;
        if(data_detail.translations.length > 1 && data_detail.translations[1].languages_code === "en"){
          langCode["en"]=1;
        }
      }

      if(data_detail.translations[0].about_us){
        post.about_us = {
          en: data_detail.translations[langCode.en].about_us,
          sv: data_detail.translations[langCode.sv].about_us
        }
      }

      if(data_detail.translations[0].area_of_business){
        post.area_of_business = {
          en: data_detail.translations[langCode.en].area_of_business,
          sv: data_detail.translations[langCode.sv].area_of_business
        }
      }

      if(data_detail.translations[0].qualifications){
        post.qualifications = {
          en: data_detail.translations[langCode.en].qualifications,
          sv: data_detail.translations[langCode.sv].qualifications
        }
      }

    } catch (e) {
      error({ message: "Entry not found" });
    }

    return { post, companyName, locale };
  },
  components: {
    Button,
    CompanyInfo,
    Banner,
    PartnerContent,
    MatchList,
    CompanyContact,
    LogoArea,
    Placement
},
  computed: {
    showEnglishMessage() {
      // Checks if the current chosen language is swedish.
      return this.$i18n.locale === "sv";
    },
    markdownToHtml() {
      return marked.parse(this.post.sponsor_extra_text);
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
}


/* MAIN COMPANY CONTENT */
.post-content {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  max-width: 60ch;
  padding: 0 1.5rem;
  width: 100%;
}
.post-content > p {
  padding-bottom: 2rem;
}

/* MAP */
.map-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
}
.map {
  background: var(--clr-yellow-200);
  width: clamp(30ch, 80vw, 60ch);
  height: 10rem;
}

/* BUTTOM BUTTONS */
.bottom-buttons {
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  gap: 2rem;
}

.btn {
    /* Alignment */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    /* Shape and Background */
    padding: 0.6em 1.5em;
    border: none;
    border-radius: 3rem;

    /* Text */
    font-weight: 500;
    text-decoration: none;
    font-size: 1.22rem;
    color: var(--clr-grey-900);
    border: solid 0.15rem var(--clr-grey-900);
  }

  .btn.hovered {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgb(245, 245, 245);
  }

/* DESKTOP MODIFICATIONS */
@media only screen and (min-width: 768px) {
  .gallery {
    flex-direction: row;
  }
  .match-list-items {
    flex-direction: row;
  }

  .table {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 0.5rem;
    padding: 2rem 0;
  }
  .table-left {
    font-weight: 600;
  }
  .table-right {
    text-align: right;
  }
  .bottom-buttons {
    flex-direction: row;
  }
  .bb {
    margin-right: 3rem;
  }
  .preview-title {
  text-decoration: underline;
  margin-bottom: 1rem;
}
}
</style>

