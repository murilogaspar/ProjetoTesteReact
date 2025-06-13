"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Buttonedit(){
    
    return(
        
        <Link href="/defensoria/cadastrar">
            <span>
                <Button className="bg-blue-600 hover:bg-blue-800 text-white">
                Editar
                </Button>
            </span>
        </Link>
    );
}