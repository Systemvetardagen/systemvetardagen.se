<template>
    <section>
        <div class="studentnode_main">
            <img class="SNimage" src="@/assets/img/StudentNodeimage.jpg">
            <div class="studentnode">
                    <h2 class="heading">{{ $t('landing_page.student_node.book_session') }}</h2>
                    <p>{{$t('landing_page.student_node.intro')}}</p>
                    <p style="padding-top:1rem">{{$t("landing_page.student_node.howtoapply")}}</p>
                    <p style="padding-bottom:5%; padding-top:0rem"><ol>
                        <li>{{ $t('landing_page.student_node.step1') }}<a style="color: var(--clr-blue-600);" href=https://mitt.systemvetardagen.se> {{ $t('landing_page.student_node.link') }}</a>.</li>
                        <li>{{ $t('landing_page.student_node.step2') }}</li>
                        <li>{{ $t('landing_page.student_node.step3') }}</li>
                        <!-- <li>{{ $t('landing_page.student_node.step4') }}</li> -->
                        <li>{{ $t('landing_page.student_node.step5') }}</li>
                        <li>{{ $t('landing_page.student_node.step6') }}</li>
                    </ol></p>     
                    <a
                        href="https://mitt.systemvetardagen.se/"
                        class="btn"
                        >{{$t('landing_page.student_node.button')}}
                    </a>
            </div>
        </div>
	</section>
</template>


<script>
export default {
  name: "studentnode",
};
</script>

<style>
section {
    align-self: center;
}
li {
    margin: 0.5rem;
}
.studentnode_main {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem 2rem;
    align-items: flex-start;
    gap: 2rem;
    max-width: 70rem;
}
.studentnode{
    max-width: 45ch;
}
.SNimage{
    width:90%; 
    height: auto;
    opacity: 0.5;
    align-self: center;
}
.heading {
 font-family: OverpassMedium;
 font-size: 1.5rem;
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
@media (min-width: 1024px) {
		 .studentnode_main {
            flex-direction: row;
            
         }
         .studentnode {
           
        }
	  }
</style>