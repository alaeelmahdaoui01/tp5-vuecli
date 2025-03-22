<template>
  <div class="tout">
    <h1>Edit Job</h1>
    <form @submit.prevent="editjob" class="jobs">
      
      <div class="job"><input v-model="job.titre" required /></div>
      <div class="job"><input v-model="job.description" required /> </div>
      <div class="job"><input v-model="job.salaire" required /> </div>
      <div class="job">
        <div class="butt">
          <div><button type="submit"> Edit </button></div>
          <div><button type="button" @click="returnlist"> Return </button></div>
        </div>
      </div>
      
    </form>
  </div>
</template>

<script>



export default {
  name: 'EditJob',
  props: ['id'],
  data(){
    return {
      job : {titre:'', description:'', salaire:''},
    };
  },
  async mounted(){
    await this.fetchJob();
  },
  methods: {
    async fetchJob(){
      try{
          const response = await fetch(`http://localhost:3002/jobs/${this.id}`);
          this.job = await response.json();
      }
      catch (error) {
          console.error("Error fetching jobs:", error);
      }
    },


    async editjob(){
        try{
            const response = await fetch(`http://localhost:3001/jobs/${this.id}`,{
              method: 'PATCH',
              headers: {'Content-Type' : 'application/json'},
              body: JSON.stringify(this.job)
              }
            );

            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            this.$router.push('/'); // return to home after adding job 
        }
        catch (error) {
            console.error("Error adding job:", error);
        }
    },


    returnlist(){
        this.$router.push('/');
    }
}
}
</script>


<style scoped>
.jobs {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin-bottom: 50px;
}

.job {
    text-align : center;
    padding: 15px;
    
    width: 50%;

}





h1 {
    font-family: 'Arial', sans-serif;
    font-size: 28px;
    color: #333;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #b31307;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
    width : 150px;
}

button:hover {
    background-color: #06386e;
}

.tout {
    border: 2px solid #ddd; 
    border-radius: 10px; 
    padding: 20px; 
    margin: 50px auto; 
    max-width: 800px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    background-color : #f9f9f9;
}

input {
  border-radius : 5px;
  padding : 10px;
  font-family:Arial, Helvetica, sans-serif;
}

.butt{
  display:flex;
  justify-content: center; 
  flex-direction:row;
  gap : 7px
}

</style>
s

