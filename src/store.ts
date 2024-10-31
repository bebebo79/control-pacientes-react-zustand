import { create } from "zustand"
import { devtools, persist} from "zustand/middleware"
import { DraftPatient, Patient } from "./types"
import {v4 as uuidv4} from "uuid"




// type que tiene que tener el state de Patientes ( state, funciones)
type PatientesState = {
    patients: Patient[]
    activeId : Patient['id']

    addPatient : (data : DraftPatient)=>void
    deletePatient : (id: Patient['id']) =>void
    getPatientById : (id:Patient['id']) =>void
    updatePatient : (data :DraftPatient) =>void
}

//funcion para poner el id al paciente del draft
const createPatient = ( patient : DraftPatient) : Patient => {
    return {...patient, id : uuidv4()}
}



// nombramos nuestro Store de paciente
export const usePatientStore = create<PatientesState>()(
    devtools(
    persist( 
        (set) => ({
        patients: [],
        activeId :'',

        addPatient : (data) =>{
            const newPatient = createPatient(data)
            set((state)=>({
                patients : [...state.patients, newPatient]

            }))
        
        },

        deletePatient : (id) =>{ 
            set((state) =>({
                patients : state.patients.filter(patient => patient.id !== id)
            }))
        },

        getPatientById : (id) => {
        set(() =>({
                activeId : id
        }))
        },

        updatePatient : (data) => {
            set((state)=>({
                patients : state.patients.map(patient => patient.id === state.activeId ? {id: patient.id , ...data} : patient),
                activeId : ''
                
            }))
        }
    
    }),{
        name:'patient-storage'
    })
))