import UsersDatatableassistido from "../../components/usedatatable/user-tadatable";
import FichaPrincipal from "../../fichaassistido/page";


export default function ProcessoAssistido(){
    return(
        <>

        <FichaPrincipal/>

        <div>
            <UsersDatatableassistido users={[]} />
        </div>

        </>
    )
}