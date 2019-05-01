export interface ContratTravail {
    idContrat: number;
    idPersonnel: number;
    intitule: string;
    nomP: string;
    prenomP: string;
    typeContrat: string;
    dateDeb: string;
    dateFin?: string;
    nbHeureSem: string;
    echelon?: number;

}
