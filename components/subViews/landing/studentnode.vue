<template>
    <section>
        <div class="studentnode_main">
            <img class="SNimage" src="@/assets/img/StudentNodeimage.jpg">
            <div class="studentnode">
                    <h2 style=" color:var(--clr-blue-600); text-align: center;">{{ $t('landing_page.student_node.book_session') }}</h2>
                    <p>{{$t('landing_page.student_node.intro')}}</p>
                    <p style="padding-top:1rem">{{$t("landing_page.student_node.howtoapply")}}</p>
                    <p style="padding-bottom:5%; padding-top:0rem"><ol>
                        <li>{{ $t('landing_page.student_node.step1') }}<a style="color: var(--clr-blue-600);" href=https://mitt.systemvetardagen.se> {{ $t('landing_page.student_node.link') }}</a></li>
                        <li>{{ $t('landing_page.student_node.step2') }}</li>
                        <li>{{ $t('landing_page.student_node.step3') }}</li>
                        <li>{{ $t('landing_page.student_node.step4') }}</li>
                        <li>{{ $t('landing_page.student_node.step5') }}</li>
                        <li>{{ $t('landing_page.student_node.step6') }}</li>
                    </ol></p>     
                    <Button link="https://mitt.systemvetardagen.se/" bColor="--clr-pink-600" tColor="--clr-white">Register Now</Button> 
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
.studentnode_main {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    padding: 10% 5%;
    align-items: flex-start;
    gap: 2rem;
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
@media (min-width: 1024px) {
		 .studentnode_main {
            flex-direction: row;
            padding: 20%;
            padding-left: 7%;
            padding-right: 13%;
         }
         .studentnode {
            padding-left: 5%;
        }
	  }
</style>