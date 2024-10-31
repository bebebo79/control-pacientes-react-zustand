

export default function Error({children} : {children : React.ReactNode}) {
  return (
    <p className="text-center bg-red-600 text-white font-bold uppercase my-4 p-3 text-sm">{children}</p>
  )
}
