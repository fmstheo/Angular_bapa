export interface Conges{
    id:number;
    idPersonnel:number;
    dateDebutConges:string;
    heureDebutConges:string;
    dateFinConges:string;
    heureFinConges:string;
    dateRepriseEffective:string;
    motifConges:string;
    modifCongesExceptionnels?:string;
}