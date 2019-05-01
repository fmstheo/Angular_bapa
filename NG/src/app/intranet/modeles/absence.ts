export interface Absence {
    idFAbs: number;
    dateDebutAbs: string;
    heureDebutAbs: string;
    dateFinAbs: string;
    heureFinAbs: string;
    dateReprise: string;
    heureReprise: string;
    motifAbs: string;
    dateDebutCongesEx: string;
    dateFinCongesEx: string;
    etatValidationFAbs: string; // enum('En attente','Accepté','Refusé','Validation manager')
    motifRefusAbs: string;
    pdf_arret_path: string;
    pdf_demande_absence: string;
}
