<template>
    <div v-if="job" class="tout">

        <h1>Job Details</h1>

        <div> 
            <h2>{{ job.titre }}</h2>
            <p>{{ job.description }}</p>
            <p>Salary: {{ job.salaire }}</p>
        </div>
        <div class="butt">
            <router-link :to="'/edit/' + job.id">  <button> Edit </button>  </router-link>
            <button type="button" @click="deletee"> Delete </button>
            <button type="button" @click="returnlist"> Return </button>
        </div>
        

    </div>
</template>
  
<script>
export default {
name: 'DetailsJob',
props:["id"],

data(){
    return {
        job : null
    };
},

async mounted(){
    await this.fetchJob();
},

methods : {
    async deletee(){
        try{
            const confirm = window.confirm("Êes vous sûrs de supprimer?");
            if(!confirm){
                return;
            }
            const response = await fetch(`http://localhost:3002/jobs/${this.id}`,{
            method: 'DELETE'});

            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            this.$router.push('/'); // return to home after adding job 
        }
        catch (error) {
            console.error("Error adding job:", error);
        }

    },
    returnlist(){
        this.$router.push('/');
    },
    async fetchJob(){
        try{
            const response = await fetch(`http://localhost:3002/jobs/${this.id}`);
            this.job = await response.json();
        }
        catch (error) {
            console.error("Error fetching jobs:", error);
        }
    }
}
}
</script>


<style scoped>


.tout {
    border: 2px solid #ddd; 
    border-radius: 10px; 
    padding: 20px; 
    margin: 50px auto; 
    max-width: 800px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    background-color : #f9f9f9;
    font-family:Arial, Helvetica, sans-serif;
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


.butt{
  display:flex;
  justify-content: center; 
  flex-direction:row;
  gap : 7px
}



</style>
