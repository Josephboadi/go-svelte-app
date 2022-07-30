<script>
    import { onMount } from "svelte";
    import { Link } from "svelte-navigator"
    import { flip } from "svelte/animate";
  import { cubicIn, quintOut } from "svelte/easing";
    import {tweened} from "svelte/motion"
import FilterUser from "./FilterUser.svelte"
import NewUser from "./NewUser.svelte"
import User from "./User.svelte"
import {addNewUser,  getUsers, remove} from "../store"
    




    let res
     onMount(async() => {
        res = await getUsers()

        
     })

     
     $: filteredUsers = $res || []

     

    const filter = ({detail}) => {
        if (detail === 'null'){
            return filteredUsers = $res || []
        }
        const active = detail === "true";
        filteredUsers = $res.filter((user) => user.status === active )
        
    }

   
    
    
    

     
    
</script>

<div >
    <h1 class="text-2xl text-center mt-10">List of Users</h1>

    <div class="flex justify-between mx-4 items-center">
        <FilterUser on:filter={filter} />
    
        <NewUser on:newUser={addNewUser} />
    </div>
   
  
    
    

    {#each filteredUsers as user, i (user.id)}
    <div animate:flip={{ delay: 250, duration: 1000, easing: quintOut }}>

        <User on:remove={remove} {user} {i} />
    </div>
    
    {:else}
    
    <div class="w-full items-center justify-center flex h-[60vh]">
        <Link class="px-4 py-1 bg-blue-800 text-white rounded cursor-pointer" to="/login">Login</Link>
    </div>
    
    {/each}
</div>