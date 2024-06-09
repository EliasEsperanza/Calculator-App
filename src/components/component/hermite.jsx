import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function Hermite() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <CalculatorIcon className="h-6 w-6 mr-2" />
            <h1 className="text-xl font-bold">Interpolacion de Hermite</h1>
          </div>
          <nav className="flex space-x-4">
            <Link className="hover:underline" href="/">
              Home
            </Link>
            <Link className="hover:underline" href="/runge">
              Metodos de Runge-Kutta
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-8 px-6">
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Bienvenido a la calculadora del Metodo de Hermite</h2>
          <p className="text-gray-600 mb-8">
            Esta aplicación le permite calcular la interpolación Hermite de un conjunto de puntos de datos. Solo tienes que introducir tus datos
            puntos y valores, y la aplicación generará la interpolación por usted.
          </p>
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>Interpolacion de Hermite</CardTitle>
              <CardDescription>
              Introduzca los puntos de datos y los valores para calcular la interpolación de Hermite.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-3 gap-2">
                  <Label htmlFor="x">X</Label>
                  <Label htmlFor="y">Y</Label>
                  <Label htmlFor="derivative">Derivada</Label>
                </div>
                <Button>Agregar puntos</Button>
                <Button>Calcular</Button>
                <div>
                  <h3 className="text-lg font-medium">Resultado</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-4 px-6">
        <div className="flex justify-between items-center">
          <p>© 2024 Calculadora online</p>
          <nav className="flex space-x-4">
            <Link className="hover:underline" href="#">
              Terms
            </Link>
            <Link className="hover:underline" href="#">
              Privacy
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>)
  );
}

function CalculatorIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>)
  );
}
