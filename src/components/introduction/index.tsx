import "./styles.css"
import { DiReact } from "react-icons/di"
import { BiLogoTypescript } from "react-icons/bi"
import { SiVite } from "react-icons/si"
import { SiReactrouter } from "react-icons/si"

export default function Introduction() {
  return (
    <div id="introduction">
      <div className="Wrapper">
        <div className="Headline">
          <h2 id="title">Hello World App</h2>
          <h3>Bem-vindo à React Hooks Doc</h3>
          <p>
            Seja bem-vindo à documentação oficial da API "React Hooks Doc". Esta
            Essa documentação foi desenvolvida com o intuito de mostrar o uso
            básico dos React Hooks com respectivos exemplos. Além disso, seria
            uma forma de documentar o meu estudo e habilidades com o ReactJS.
          </p>
        </div>

        <div className="Stack">
          <h3>Stack usada</h3>

          <div className="frameworks">
            <DiReact className="react" size={48} />
            <BiLogoTypescript className="typescript" size={48} />
            <SiVite className="vite" size={40} />
            <SiReactrouter className="reactRouter" size={48} />
          </div>
        </div>
      </div>
    </div>
  )
}
