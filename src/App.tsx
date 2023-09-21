import { MainRoutes } from "./routes/MainRoutes"

function App() {
  return (
    <div className='container mx-auto py-4'>
      <h1 className="font-bold text-2xl py-4">Galeria de fotos</h1>
      <hr />
      <div>
        <MainRoutes />
      </div>
    </div>
  )
}

export default App
