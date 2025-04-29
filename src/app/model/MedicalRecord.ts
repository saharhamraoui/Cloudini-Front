import { Patient } from "./Patient";
import { Medecin } from "./Medecin";
import { Prescription } from "./Prescription";

export class MedicalRecord {
    idMedicalRecord?: number;
    patient!: Patient; // Lien vers l'objet Patient
    doctor!: Medecin; // Lien vers l'objet Medecin
    createdAt!: Date;
    prescriptions: Prescription[] = []; // Liste des prescriptions
    diagnosis!: string;
    notes!: string;

    constructor(patient: Patient, doctor: Medecin, diagnosis: string, notes: string) {
        this.patient = patient;
        this.doctor = doctor;
        this.diagnosis = diagnosis;
        this.notes = notes;
        this.createdAt = new Date(); // Initialisation automatique
    }
}
