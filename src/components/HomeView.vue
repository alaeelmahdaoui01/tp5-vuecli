<template>
    <div class="tout">

        <h1>Available Jobs</h1>
        <div class="butt"><router-link to="/add"><button> Add Job </button></router-link></div>
        <div class="butt1">
            <div><button type="button" @click="toggleFilter">Filter</button></div>
            <div><FilterNav v-if="showFilter" @filter-jobs="filterJobs"/></div>
        </div>
        
        <div class="jobs">
            <div v-for="job in filteredJobs" :key="job.id" class="job">
                <router-link :to="'/jobs/' + job.id" class="link">{{ job.titre }}</router-link>
            </div>
        </div>

    </div>
  </template>
  
<script>

import FilterNav from "./FilterNav.vue";

export default {
name: 'HomeView',
components : {FilterNav},
data(){
    return {
        showFilter : false ,
        jobs : [],
        filteredJobs: [],
    };
},
async mounted(){
    await this.fetchJobs();
},
methods:{
    async fetchJobs(){
        try{
            const response = await fetch("http://localhost:3002/jobs");
            this.jobs = await response.json();
            this.filteredJobs=this.jobs;
        }
        catch (error) {
            console.error("Error fetching jobs:", error);
        }
    },
    
    toggleFilter() {
        this.showFilter = !this.showFilter; // Toggle the visibility of the FilterNav component
        },
    filterJobs(text){
        const search = text.toLowerCase();
        this.filteredJobs = this.jobs.filter( (job) => job.titre.toLowerCase().includes(search) );
},
},

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
    border: 1px solid #f0eded;
    border-radius: 8px;
    width: 50%;
    background-color: #f9f9f9;
    box-shadow: 0 4px 6px rgba(134, 133, 133, 0.1);
    cursor:pointer; 
}

.job:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.link{
    text-decoration : none; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #06376b;
    transition: color 0.2s;
}
.link:hover {
    color: #246ab6;
    text-decoration: underline;
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
    width : 200px;
}
.butt{
    display: flex;
    justify-content: center; 
    margin: 20px 0;
    margin-bottom : 50px;
}
.butt1{
    display: flex;
    flex-direction : column; 
    margin: 20px 0;
    margin-bottom : 50px;
    gap : 10px;
    align-items:center ;
}
button:hover {
    background-color: #06386e;
}
.tout {
    border: 2px solid #ddd; /* Bordure grise */
     /* Couleur de fond grise */
    border-radius: 10px; /* Coins arrondis pour un design plus moderne */
    padding: 20px; /* Espacement interne pour éviter que le contenu touche la bordure */
    margin: 50px auto; /* Centrer le conteneur horizontalement */
    max-width: 800px; /* Limiter la largeur maximale */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ajouter une ombre légère */
}
</style>