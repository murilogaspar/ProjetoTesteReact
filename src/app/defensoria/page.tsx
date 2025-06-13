
import UsersDatatabledefensoria from "./components/userdatatable/userdatatable1";

//import UsersDatatableservidor from "./components/userdatatable/user-datatable";
//import UsersDatatable from "./components/userdatatable/user-datatable";
//import UsersDatatableassistido from "./components/usedatatable/user-tadatable";
//import UsersDatatabledefensoria from "./components/userdatatable/user-datatable";

//import UsersDatatabledefensoria from "./components/userdatatable/userdatatable1";

//import UsersDatatableassistido from "../assistido/components/usedatatable/user-tadatable";




/*async function fetchUsers(): Promise<Defensoria[]> {
  const response = await fetch("http://localhost:7000/livre/api/v1/defensorias/", {
    headers: {
      "Accept": "application/json",
      "Authorization": "Basic bXVyYXVxOmFkbWlu", // substitua conforme necessário
    },
    cache: "no-store", // evita cache, sempre traz dados novos
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar dados da API");
  }

  const data = await response.json();

  // Aqui você pode fazer transformação, se necessário
  return data as Defensoria[]; // ou mapeie os campos se o formato não for direto
}

export default async function Servidor() {
  const users = await fetchUsers();

  return <UsersDatatabledefensoria users={users} />;
}
*/

    /* pega os dados da API*/ 

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

  
  