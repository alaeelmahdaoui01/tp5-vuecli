<template>
  <div>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/add"> Add Job </router-link> |
  
      <router-link to="/edit/1"> Edit Job </router-link>
    </nav>

    <router-view></router-view>

  </div>
</template>

<style>
nav {
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(134, 133, 133, 0.1);
  padding: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 22px;
}

nav a {
  text-decoration: none;
  color: #b31307;
  font-weight: bold;
  

}

nav a:hover {
  text-decoration: underline;
}

.router-link-active {
  color: #06386e; /* Couleur différente pour le lien actif */
  font-weight: bolder;
  text-decoration: underline;
}
</style>
