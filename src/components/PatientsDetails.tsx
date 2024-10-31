import { Patient } from "../types"
import { toast } from "react-toastify"
import PatientsDetailsItem from "./PatientsDetailsItem"
import { usePatientStore } from "../store"


//generamos el type props
type PatientsDetailsProps = {
    patient : Patient
}



export default function PatientsDetails({patient} : PatientsDetailsProps) {
    
    // llamamos a la funcion de borrar
    const deletePatient =  usePatientStore((state) =>state.deletePatient)
    const getPatientById =  usePatientStore((state)=>state.getPatientById)

    const handleClick = () => {
        deletePatient(patient.id)
        toast.error('Paciente Eliminado')

    }




  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientsDetailsItem label="ID: " data={patient.id}/>
        <PatientsDetailsItem label="Nombre: " data={patient.name}/>
        <PatientsDetailsItem label="Propietario: " data={patient.caretaker}/>
        <PatientsDetailsItem label="Email:  " data={patient.email}/>
        <PatientsDetailsItem label="Fecha de Alta: " data={patient.date.toString()}/>
        <PatientsDetailsItem label="Sintomas: " data={patient.symptoms}/>

        <div className="flex flex-col md:flex-row justify-between gap-3 mt-10">
            <button type="button" onClick={()=>getPatientById(patient.id)}  className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md">
                Editar
            </button>
            <button  type="button" onClick={handleClick} className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md">
                Eliminar
            </button>
            
        </div>              
    </div>
  )
}
