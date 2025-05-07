//import UsersDatatableservidor from "./components/userdatatable/user-datatable";
//import UsersDatatable from "./components/userdatatable/user-datatable";
import UsersDatatableassistido from "./components/usedatatable/user-tadatable";
//import UsersDatatabledefensoria from "./components/userdatatable/user-datatable";



async function fetchUsers() {
  const response = await fetch("http://localhost:7000/livre/api/v1/defensorias/", {
    headers: {
      "Accept": "application/json",
      "Authorization": "Basic bXVyYXVxOmFkbWlu", // Substitua pela sua chave correta
    },
    cache: "no-store", // evita cache, sempre traz dados novos
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar dados da API");
  }

  return response.json();

}


export default async function Servidor() {
  const users = await fetchUsers();

  return (
    <UsersDatatableassistido users={users} />
  );
}



    /* pega os dados da API 
    async function fetchUsers(){

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    return response.json();
    
    }
    export default async function servidor() {

    const users = await fetchUsers();

    return(

    <>
   
    <UsersDatatabledefensoria users={users} />
   
    
    </>
    
  
  
  )
    
  }
  */