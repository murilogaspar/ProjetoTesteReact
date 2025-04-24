import UsersDatatableservidor from "./components/userdatatable/user-datatable";
//import UsersDatatable from "./components/userdatatable/user-datatable";


    // pega os dados da API 
    async function fetchUsers(){

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    return response.json();
    
    }
    export default async function servidor() {

    const users = await fetchUsers();

    return(

    
    <>
   
    <UsersDatatableservidor users={users} />
   
    
    </>
    
  
  
  )
    
  }