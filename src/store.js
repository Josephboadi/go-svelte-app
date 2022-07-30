import axios from "axios";
import { onMount } from "svelte";
import { navigate } from "svelte-navigator";
import { writable } from "svelte/store";
import user1 from "./assets/images/user1.png";
import user2 from "./assets/images/user2.png";
import user3 from "./assets/images/user3.png";

const url = "https://go-users-auth.herokuapp.com/api/users"

var storedData 






 export const getUsers = async() => {
 
  const token = localStorage.getItem('key')
  
    const data = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    storedData= writable(data.data)

  return storedData;
};




export const remove = async({ detail }) => {

const token = localStorage.getItem('key')


   await axios.delete(`${url}/${detail}`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
   
  });

  storedData.update((_users) => _users.filter((user) => user.id !== detail));
};

export const addNewUser = async({ detail }) => {
  
  const token = localStorage.getItem('key')
  
  const body = {
    name: detail.name,
          email: detail.email,
          status: detail.active === "true" ? true : false
  }
    const data = await axios.post(url, body, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "content-type": "application/json"
      },
     
    });

    
    storedData.update((_users) => [
    data.data,
    ..._users,
  ]);
};

export const loginUser = (detail) => {
  
  const store = writable(new Promise(() => {}));
  const load = async () => {
    const { data } = await axios.post(
      `https://go-users-auth.herokuapp.com/api/login`,
      {
        email: detail.email,
        password: detail.password,
      }
    );

    localStorage.setItem("key", data.token)
    navigate('/')
    
  };

  load();

  

};
