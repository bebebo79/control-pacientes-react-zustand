// type de Paciente que se queda grabado y genera un id
export type Patient = {
    id :string,
    name : string,
    caretaker : string,
    email : string,
    date : Date,
    symptoms : string
}


// type para paciente en modo borrador, sin el id
export type DraftPatient = Omit<Patient, 'id'>