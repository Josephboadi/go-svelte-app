<script>
    
    import {loginUser} from "../store"
  

   

    let loginDetail = {} 

    const submitLoginUser = () => {
        if (loginDetail.email !== "" || loginDetail.password !== "") {
            const response = loginUser(loginDetail)

            console.log(response);

         
        }
        
    } 

</script>

<div class="flex h-screen">
    <div class="m-auto">

        <form class="mt-5 sm:mt-6" >
            <h1 class="text-2xl text-center">Login user</h1>
        
            <div class="py-1 px-2 my-4">
                <label for="" >Email</label>
                <input bind:value={loginDetail.email} type="email" class="px-2 py-1 w-full rounded border"/>
            </div>

            <div class="py-1 px-2 my-4">
                <label for="" >Password</label>
                <input bind:value={loginDetail.password} type="password" class="px-2 py-1 w-full rounded border"/>
            </div>



            <button on:click={submitLoginUser} type="button" class='bg-blue-600 px-2 text- py-1 rounded ml-2 border' >
                login
            </button>
            

        </form>
    </div>
</div>