
<<<<<<< HEAD
import { MedicalRecord } from "./MedicalRecord";
import { PrescriptionStatus } from "./PrescriptionStatus";

export class Prescription {
    idPrescription?: number;
    medicalRecord?: MedicalRecord;
    medication!: string;
    dosage!: string;
    instructions!: string;
    issueDate!: string;
    status!: PrescriptionStatus;
=======
import { Consultation } from "./Consultation";
import { MedicalRecord } from "./MedicalRecord";

export class Prescription {
    idPrescription?: number;
    medicalRecord!: MedicalRecord; // Lien vers le dossier médical
    consultation!: Consultation; // Lien vers une consultation
    medication!: string;
    dosage!: string;
    instructions!: string;
    issueDate!: Date;

    constructor(medicalRecord: MedicalRecord, medication: string, dosage: string, instructions: string, issueDate: Date) {
        this.medicalRecord = medicalRecord;
        this.medication = medication;
        this.dosage = dosage;
        this.instructions = instructions;
        this.issueDate = issueDate;
    }
>>>>>>> blogfront
}
