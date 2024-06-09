import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Runge() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="text-lg font-bold" href="/runge">
            Runge-Kutta
          </Link>
          <nav className="flex gap-4">
            <Link className="hover:underline" href="/">
              Inicio
            </Link>
            <Link className="hover:underline" href="/hermite">
              Interpolacion de Hermite
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-12 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Runge-Kutta</h1>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="function">
                Ecuacion diferencial
              </label>
              <textarea
                className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-gray-800"
                id="function"
                placeholder="Enter the differential equation"
                rows={3} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="initialCondition">
                Condicion Inicial
              </label>
              <input
                className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-gray-800"
                id="initialCondition"
                placeholder="Enter the initial condition"
                type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="initialValue">
                Valor Inicial
              </label>
              <input
                className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-gray-800"
                id="initialValue"
                placeholder="Enter the initial value"
                type="number" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="timeInterval">
                Intervalo de tiempo
              </label>
              <div className="flex gap-4">
                <input
                  className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-gray-800"
                  id="startTime"
                  placeholder="Start Time"
                  type="number" />
                <input
                  className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-gray-800"
                  id="endTime"
                  placeholder="End Time"
                  type="number" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="stepSize">
                Numero de pasos
              </label>
              <input
                className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-gray-800"
                id="stepSize"
                placeholder="Enter the step size"
                type="number" />
            </div>
            <div className="flex items-center justify-between">
              <Button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Calcular
              </Button>
            </div>
          </form>
          <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Resultado</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Solucion</h3>
                <p>La solucion para la ecuacion diferencial es:</p>
                <pre className="bg-gray-200 p-4 rounded" />
              </div>
              <div>
                <h3 className="font-bold">Grafica</h3>
                <p>La grafica de la solucion es:</p>
                <div className="h-64 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-4 px-6">
        <div className="container mx-auto text-center">
          <p>©Runge-Kutta</p>
        </div>
      </footer>
    </div>)
  );
}
