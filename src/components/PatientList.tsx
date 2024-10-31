import { usePatientStore } from "../store"
import PatientsDetails from "./PatientsDetails"

export default function PatientList() {

    const patients  = usePatientStore( (state) => state.patients)

  
    return (
      <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
          {patients.length ? (
            <>
              <h2 className="text-center text-3xl font-black">Listado de Pacientes</h2>
              <p className="text-center text-xl mt-5 mb-10">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
              </p>
              {patients.map(patient => (
                <PatientsDetails
                key={patient.id}
                patient = {patient}
                />

              ))}
            </>

          ):(
            <>
              <h2 className="text-center text-3xl font-black">No hay Pacientes</h2>
              <p className="text-center text-xl mt-5 mb-10 ">
                Comienza agragando pacientes y {''}
                <span className="text-indigo-600 font-bold">apareceran en el listado</span>
              </p>
            
            
            
            </> 
         

          )}

      </div>
    )
}
