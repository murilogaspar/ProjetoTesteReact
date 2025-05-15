"use client"
import FichaPrincipal from "../../fichaassistido/page";
import { dadosvisitas } from "./dados";
import UsersDatatablevisitas from "./datatable/userdatavisitas";

export default function VisitasAssistido(){

return(
    
    <>
        <div>

            <FichaPrincipal />

        </div>

        <UsersDatatablevisitas users={dadosvisitas} />
   
    </>
    
    
    )

}

