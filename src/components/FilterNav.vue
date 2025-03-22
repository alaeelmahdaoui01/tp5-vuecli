<template>
    <div>
        <input type="text"  v-model="search" placeholder="Search a Job" @input="Filter" required />
    </div>
</template>

<script>
    export default {
        name : 'FilterNav',
        data(){
            return {
                search : "" , 
            };
        }, 
        methods : {
            Filter(){
                this.$emit("filter-jobs", this.search);
            },
        },
    };
</script>

<style scoped>
    
input {
  border-radius : 5px;
  padding : 10px;
  font-family:Arial, Helvetica, sans-serif;
}
</style>