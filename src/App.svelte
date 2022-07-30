<style global lang="postcss">
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
</style>


<script>
import { onMount } from "svelte";

    
  import { Router, Route, Link } from "svelte-navigator"
import HomePage from "./page/HomePage.svelte";
import LoginPage from "./page/LoginPage.svelte";
import UsersPage from "./page/UsersPage.svelte";
// import {getUsers} from "./store"


  
  </script>

  <Router>
    
    

    <nav class="p-4 bg-blue-800 text-white">
      <Link class="mx-4 cursor-pointer hover:underline" to="/">Home</Link>
      <!-- {#if response === undefined }  -->
        <Link class="mx-4 cursor-pointer hover:underline" to="/users">Users</Link>
        <!-- {:else} -->
        <Link class="mx-4 cursor-pointer hover:underline" to="/login">Login</Link>
      <!-- {/if} -->
      
    </nav>

    <Route path="/">
      <HomePage/>
    </Route>

    <Route path="/users">
      <UsersPage />
    </Route>
    
    <Route path="/login">
      <LoginPage/>
    </Route>
    
  </Router>

  