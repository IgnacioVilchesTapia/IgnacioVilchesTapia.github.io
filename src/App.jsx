import { useState, useEffect } from "react"

const textoHero = "Hola, soy Ignacio Vilches Tapia, estudiante de Ingeniería en Informática"
const anioActual = new Date().getFullYear()

const tecnologias = [
  { nombre: "Python", logo: "/logos/python.svg" },
  { nombre: "pandas", logo: "/logos/pandas.svg", invertir: true },
  { nombre: "NumPy", logo: "/logos/numpy.svg" },
  { nombre: "Matplotlib", logo: "/logos/matplotlib.svg" },
  { nombre: "SQL", logo: "/logos/sql.svg" },
  { nombre: "Java", logo: "/logos/java.svg" },
  { nombre: "Spring Boot", logo: "/logos/spring.svg" },
  { nombre: "Kotlin", logo: "/logos/kotlin.svg" },
  { nombre: "JavaScript", logo: "/logos/javascript.svg" },
  { nombre: "React", logo: "/logos/react.svg" },
  { nombre: "HTML", logo: "/logos/html.svg" },
  { nombre: "CSS", logo: "/logos/css.svg" },
]

const proyectos = []

function App() {
  const [oscuro, setOscuro] = useState(() => {
    const temaGuardado = localStorage.getItem("tema")
    if (temaGuardado) {
      return temaGuardado === "oscuro"
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })
  const [texto, setTexto] = useState("")
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    if (oscuro) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("tema", oscuro ? "oscuro" : "claro")
  }, [oscuro])

  useEffect(() => {
    if (texto.length < textoHero.length) {
      const timer = setTimeout(() => {
        setTexto(textoHero.slice(0, texto.length + 1))
      }, 70)
      return () => clearTimeout(timer)
    }
  }, [texto])

  useEffect(() => {
    const moverMouse = (e) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", moverMouse)
    return () => window.removeEventListener("mousemove", moverMouse)
  }, [])

  const colorResplandor = oscuro ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0.10)"

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-200">
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, ${colorResplandor}, transparent 80%)`,
        }}
      ></div>

      <header className="sticky top-0 z-20 border-b border-gray-200 bg-gray-50/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="text-xl font-bold tracking-tight">
            IVT
          </a>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#sobre-mi" className="hover:text-blue-600 dark:hover:text-blue-400">Sobre mí</a>
            <a href="#tecnologias" className="hover:text-blue-600 dark:hover:text-blue-400">Tecnologías</a>
            <a href="#proyectos" className="hover:text-blue-600 dark:hover:text-blue-400">Proyectos</a>
            <a href="#contacto" className="hover:text-blue-600 dark:hover:text-blue-400">Contacto</a>
          </nav>

          <button
            onClick={() => setOscuro(!oscuro)}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            {oscuro ? "Modo claro" : "Modo oscuro"}
          </button>
        </div>
      </header>

      <main className="relative mx-auto max-w-5xl px-6">
        <section id="inicio" className="flex min-h-[80vh] flex-col justify-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Portafolio
          </p>
          <h1 className="min-h-[2.5em] text-4xl font-bold leading-tight md:text-5xl">
            {texto}
            <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
          </h1>
          <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-400">
            DUOC UC, sede San Joaquín. Mención en Ciencia de Datos.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Ver proyectos
            </a>
            <a
              href="[LINK CV]"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              Descargar CV
            </a>
          </div>
        </section>

        <section id="sobre-mi" className="scroll-mt-20 py-20">
          <h2 className="mb-6 text-2xl font-bold">Sobre mí</h2>
          <div className="max-w-3xl space-y-4 leading-relaxed text-gray-600 dark:text-gray-400">
            <p>
              Soy estudiante de segundo año de Ingeniería en Informática en DUOC UC, sede San Joaquín,
              con mención en Ciencia de Datos.
            </p>
            <p>
              Durante la carrera he trabajado en desarrollo web con HTML, CSS, JavaScript y React, en
              backend con Java y Spring Boot, en bases de datos relacionales con SQL y Oracle PL/SQL,
              en análisis de datos con Python usando pandas, NumPy y Matplotlib, y en aplicaciones
              móviles con Kotlin.
            </p>
            <p>
              Cuento con las certificaciones CS50P de Harvard, Python Essentials 1 de Cisco y Microsoft
              Azure Data Fundamentals (DP-900). Mi objetivo es especializarme en el área de datos.
            </p>
          </div>
        </section>

        <section id="tecnologias" className="scroll-mt-20 py-20">
          <h2 className="mb-6 text-2xl font-bold">Tecnologías</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {tecnologias.map((tecnologia, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 rounded-lg border border-gray-200 bg-white p-5 text-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
              >
                <img
                  src={tecnologia.logo}
                  alt={tecnologia.nombre}
                  className={tecnologia.invertir ? "h-10 w-10 dark:invert dark:hue-rotate-180" : "h-10 w-10"}
                />
                <span>{tecnologia.nombre}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="scroll-mt-20 py-20">
          <h2 className="mb-6 text-2xl font-bold">Proyectos</h2>
          {proyectos.length === 0 ? (
            <div className="rounded-lg border border-dashed border-gray-300 p-10 text-center dark:border-gray-700">
              <p className="font-semibold">En proceso</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Los proyectos se agregarán próximamente.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {proyectos.map((proyecto, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                >
                  <h3 className="mb-2 text-lg font-semibold">{proyecto.titulo}</h3>
                  <p className="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-400">{proyecto.descripcion}</p>
                  <a
                    href={proyecto.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Ver proyecto
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="contacto" className="scroll-mt-20 py-20">
          <h2 className="mb-6 text-2xl font-bold">Contacto</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Puede contactarme a través de los siguientes medios.
          </p>
          <ul className="space-y-2">
            <li>
              GitHub:{" "}
              <a href="https://github.com/IgnacioVilchesTapia" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
                github.com/IgnacioVilchesTapia
              </a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:i.vilches@duocuc.cl" className="text-blue-600 hover:underline dark:text-blue-400">
                i.vilches@duocuc.cl
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="relative border-t border-gray-200 py-6 text-center text-sm text-gray-500 dark:border-gray-800">
        <p>
          © {anioActual} Ignacio Vilches Tapia. Desarrollado con React y Tailwind CSS.
        </p>
        <a href="#inicio" className="mt-2 inline-block hover:text-blue-600 dark:hover:text-blue-400">
          Volver arriba
        </a>
      </footer>
    </div>
  )
}

export default App
