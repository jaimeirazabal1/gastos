import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="flex min-h-screen justify-center items-center">
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <img
            className="w-full"
            src="https://economipedia.com/wp-content/uploads/Gastos-de-administraci%C3%B3n.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Tus Gastos</div>
            <p className="text-grey-darker text-base">
              <form>
                  <input className="mt-2 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Ingresa el nombre" type="text" name="name"/>
                  <select className="mt-2 bottom-2 select-auto placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" name="categoria">
                    <option>Categoria</option>
                    <option>Salud</option>
                    <option>Comida</option>
                    <option>Auto</option>
                    <option>Hijos</option>
                    <option>Ropa</option>
                  </select>
                  <input className="mt-2 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Cantidad USD" type="text" name="cantidad"/>
                  <input type="file" className="mt-2 block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-red-400
      hover:file:bg-violet-100"/>
                  <div className="text-center">
                    <button className="bg-red-400 p-2 mt-2 center text-white">Guardar Gasto</button>
                  </div>

              </form>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
