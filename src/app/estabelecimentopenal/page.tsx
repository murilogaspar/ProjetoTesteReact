import UsersDatatableestabelecimento from "./components/userdatatable/user-datatable";

    // pega os dados da API 
    async function fetchUsers(){

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    return response.json();
    
    }
    export default async function EstabelecimentoPenal() {

    const users = await fetchUsers();

    return(

    
    <>
   
    <UsersDatatableestabelecimento users={users} />
   
    
    </>
    
  
  
  )
    
  }





















