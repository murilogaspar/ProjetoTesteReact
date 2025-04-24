import UsersDatatable from "@/components/datatable/_components/users-datatable";

    // pega os dados da API 
    async function fetchUsers(){

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    return response.json();
    
    }
   
    export default async function Defensoria() {

    const users = await fetchUsers();

    return(

    
    <>
   
    <UsersDatatable users={users} />
   
    
    </>
    
  
  
  )
    
  }

