<template>
<div class="wrapper">
  <div class="user">
    <h1>User Page</h1>

    <div class= "profileupload">
    <h2>Company Logo</h2>
        <input type="file" @change="handleFileUpload">
      </div>
 
        <div class="company-info">
          <h3>Company Informationen</h3>
            <label for="companyyear">Company Founded:</label>
            <input type="number" id="companyyear" v-model="companyyear">
            
            <label for="employeesSE">employees in sweden:</label>
            <input type="number" id="employeesSE" v-model="employeesSE">
            
            <label for="employees">employees worldwide:</label>
            <input type="number" id="employees" v-model="employees">
            
            <label for="busniessareas">Area of Business:</label>
            <input type="textarea" id="busniessareas" v-model="busniessareas">

            <div class="contentButtons">
      
              <Button :link="localePath('/user-page') + '/'" > Save </Button> <!-- Translation needed-->
      </div>
        </div>
        <h2>Title</h2>
        <input type="textarea" v-model="title">

        <h2>About us</h2>
        <input type="text" v-model="about">

       <h2>Page Content</h2>
        <input type="file" @change="handleFileUpload"> 


        <!-- Button List missing-->

        

        <h2>Skills</h2>
        <textarea class="textarea" v-model="skills"></textarea>

        <h2>Contact</h2>
        <textarea class="textarea" v-model="contact"></textarea>

        <h2>URL</h2>
        <textarea class="textarea" v-model="url"></textarea>

        <h2>Marketing content</h2>
        <textarea class="textarea" v-model="marketing"></textarea>

        <div class="contentButtons">
    <Button :link="localePath('/user-page') + '/'" >Upload Content</Button><!-- Translation needed-->
      </div>
</div>
</div>
      

</template>

<script>
      
 




</script>


<style>
.user {
  align-items: center;
  display: grid;
  margin: auto;
  width: 50%;
  padding: 20px;
}
.contentButtons {
    display: flex;
    align-items: center;
}
.post-img {
  max-width: 100%;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.company-info {
  align-items: center;
  display: grid;
  margin: auto;
  width: 50%;
  border: 3px solid black;
  padding: 10px;
}
.profileupload{
  align-items: center;
  display: grid;
  margin: auto;
  width: 50%;
  border: 3px solid black;
  padding: 10px;
}
.textarea {
  height: 150px;
}
</style>