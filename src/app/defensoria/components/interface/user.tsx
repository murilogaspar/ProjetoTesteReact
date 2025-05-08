/*export interface Userdefensoria {
    
    id:number;

    name:string;

    username:string;

    email:string;

    company:{
        name:string;
    }
}*/

export interface Defensoria {
	id: number;
	codigo: string;
	name: string;
	areaDeAtuacao: string;
	comarca: string;
	email: string;
	telefone: string;
    actions:string;
}
