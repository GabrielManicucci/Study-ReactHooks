import { DiReact } from "react-icons/di"
import { BiLogoTypescript } from "react-icons/bi"
import { SiVite } from "react-icons/si"
import { SiReactrouter } from "react-icons/si"

export default function Introduction() {
  return (
    <div id="introduction">
      <div className="">
        <h2 className="text-3xl font-semibold">Hello World App</h2>
        <div className="mt-14 mb-7">
          <h3 className="text-2xl font-medium mb-3">
            Bem-vindo à React Hooks Doc
          </h3>
          <p>
            Seja bem-vindo à documentação oficial da API "React Hooks Doc". Esta
            Essa documentação foi desenvolvida com o intuito de mostrar o uso
            básico dos React Hooks com respectivos exemplos. Além disso, seria
            uma forma de documentar o meu estudo e habilidades com o ReactJS.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-medium mb-3">Stack usada</h3>

          <div className="flex items-center">
            <DiReact className="text-[#3492d1]" size={48} />
            <BiLogoTypescript className="text-[#3186e0] mx-4" size={48} />
            <SiVite className="text-[#9234d1]" size={40} />
            <SiReactrouter className="text-[#db3a3a] mx-4" size={48} />
          </div>
        </div>
      </div>
    </div>
  )
}
