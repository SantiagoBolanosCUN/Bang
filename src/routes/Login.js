import React from "react";
import Logoinicio from "../assets/Logoinicio.png";
import "../components/modalInicio.css";

export default function Login() {
  return (
    <section className="grid place-items-center min-h-screen bg-gradient-to-r from-indigo-900 via-fuchsia-900 to-indigo-900">
      <div className="text-center sm:text-left p-4 max-w-5xl grid gap-4 sm:grid-cols-2">
        <div className="sm: self-center">
          <h1 className="text-4xl sm:text-5xl font-bold sm:col-span-2 text-white ">
            ¿Estás listo para <br /> vivir esta aventura?
          </h1>
          <p className="pt-4 pb-4 text-white">
            Bienvenido a nuestra fantástica galaxia. Aquí vas a despertar tu
            potencial creativo y formular increíbles proyectos de innovación.
          </p>

          <button class="border border-white text-white  py-1.5 px-2 rounded-full inline-flex items-center">
            {/* <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg> */}
            <a
              className="font-['Montserrat'] border-none rounded-full py-1.5 px-8 font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500"
              href="/Home"
            >
              Ingresar
            </a>
          </button>
        </div>
        <div className="grid  place-items-center">
          <img className="h-[300px] sm:h-[450px]" src={Logoinicio} />
        </div>
      </div>
    </section>
  );
}
