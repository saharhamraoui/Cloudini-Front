
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
}
