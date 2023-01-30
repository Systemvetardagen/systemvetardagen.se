<template>
    <section>
        <div class="studentnode">
                <h2 style=" color:var(--clr-blue-600); text-align: center;">{{ $t('book_session') }}</h2>
                <p>{{$t('student_node_intro')}}</p>
                <p>{{$t("student_node_howtoapply")}}</p>
                <p><ul>
                    <li>{{ $t('student_node_step1') }}<a style="color: var(--clr-blue-600);" href=https://mitt.systemvetardagen.se> {{ $t('student_node_link') }}</a></li>
                    <li>{{ $t('student_node_step2') }}</li>
                    <li>{{ $t('student_node_step3') }}</li>
                    <li>{{ $t('student_node_step4') }}</li>
                    <li>{{ $t('student_node_step5') }}</li>
                    <li>{{ $t('student_node_step6') }}</li>
                </ul></p>

        </div>
	</section>
</template>


<script>
export default {
  name: "studentnode",
};
</script>

<style>
.studentnode {
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: left;
  height: 100vh;
  max-width: 45ch;
  background-repeat: no-repeat;
  margin-bottom: 0rem;
  margin-top: 0rem;
  padding-bottom: 12%;
  padding-top: 12%;
}
</style>