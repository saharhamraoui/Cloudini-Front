<<<<<<< HEAD
import { Bilan } from "./Bilan";
import { Consultation } from "./Consultation";
import { Medecin } from "./Medecin";
import { Patient } from "./Patient";
=======
import { Patient } from "./Patient";
import { Medecin } from "./Medecin";
>>>>>>> blogfront
import { Prescription } from "./Prescription";

export class MedicalRecord {
    idMedicalRecord?: number;
<<<<<<< HEAD
    patient!: Patient;
    doctor!: Medecin;
    createdAt?: string;
    prescriptions?: Prescription[];
    consultations?: Consultation[];
    bilans?: Bilan[];
    diagnosis?: string;
    notes?: string;
    allergies?: string;

    
=======
    patient!: Patient; // Lien vers l'objet Patient
    doctor!: Medecin; // Lien vers l'objet Medecin
    createdAt!: Date;
    prescriptions: Prescription[] = []; // Liste des prescriptions
    diagnosis!: string;
    notes!: string;

>>>>>>> blogfront
    constructor(patient: Patient, doctor: Medecin, diagnosis: string, notes: string) {
        this.patient = patient;
        this.doctor = doctor;
        this.diagnosis = diagnosis;
        this.notes = notes;
<<<<<<< HEAD
=======
        this.createdAt = new Date(); // Initialisation automatique
>>>>>>> blogfront
    }
}
