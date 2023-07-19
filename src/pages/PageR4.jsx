export const PageR4 = () => {
  return (
    <>
      <section>
        <h2>Componentes.</h2>
        <p>Los componentes son grupos de elementos que reciben propiedades (props) y pueden crear estados o efectos.</p>
        <img src="../assets/sintaxis-react-edteam.jpg" alt="Sintaxis basica de React" title="Sintaxis de React-EDteam" className="rounded-2xl sm:rounded-[2rem]" />
      </section>
      <section>
        <p>Cada componente de React necesita ser <b>nombrado con la primera letra en mayúscula</b>, además necesita <b>contener solamente un componente o elemento</b>, por lo que se debe anexar todo el contenido en un componente, elemento (&#60;div&#62; &#60;/div&#62;), elemento vacío (&#60;&#62; &#60;/&#62;) o en un componente &#60;React.Fragment&#62; &#60;/React.Fragment&#62;, este último requiere importar react en el documento (<i>import React from 'react'</i>) y se convierte en una etiqueta invisible al renderizarse (es importante colocarle las primeras letras de las palabras en mayúsculas porque es un componente).</p>
        <p><i>La desventaja de utilizar elementos div para encapsular es que al renderizar la página se creará una etiqueta div por cada componente pudiendo crear problemas en el CSS, además de crear código de más.</i> Esto lo soluciona React.Fragment</p>
        <code className="code-block">
          <p className="text-title">EGComponente.js</p>
          function EGComponente() &#123;<br/>
          <span className="block indent-4">
            return (
          </span>
          <span className="block indent-8">
            &#60;React.Fragment&#62;
          </span>
          <span className="block indent-12">
            ...<br/>
          </span>
          <span className="block indent-8">
            &#60;/React.Fragment&#62;
          </span>
          <span className="block indent-4">
            );
          </span>
          &#125;
        </code>
        <p>Cuando se crea un componente se debe crear su propio archivo en la carpeta <b>src</b> y exportarlo a <b>App.js</b>:</p>
        <code className="code-block">
          <p className="text-title">src/EGComponent.js</p>
          <i className="font-light">/* En cada componente se importa el método React desde la librería de react */</i><br/>
          import React from 'react';<br/><br/>
          function EGComponent()&#123;
          <span className="block indent-4">
            return (
          </span>
          <span className="block indent-8">
            <i className="font-light">/* Se coloca el código a utilizar */</i><br/>
          </span>
          &emsp;);<br/>
          &#125;<br/>
          <i className="font-light">/* Se puede exportar el componente de 2 maneras: */</i><br/>
          <i className="font-light">/* Exportación por default: permite renombrar al componente cuando se importe en otro componente */</i><br/>
          export default EGComponent;<br/>
          <i className="font-light">/* Exportación nombrada: no permite renombrar el componente al importarlo en otro componente */</i><br/>
          export &#123; EGComponent &#125;";<br/>
        </code>
        <code className="code-block">
          <p className="text-title">src/App.js</p>
          import React from 'react';<br/>
          <i className="font-light">/* Con la exportación por default: */</i><br/>
          import ExGratComp from './EGComponent';<br/>
          <i className="font-light">/* Con la exportación nombrada: */</i><br/>
          import &#123; EGComponent &#125; from './EGComponent';
        </code>
        <img src="https://edteam-media.s3.amazonaws.com/blogs/original/e239e17c-4636-4a07-8ca7-acadffaf75ab.png" alt="explicación de EDteam sobre componentes en React" title="Componentes de React-EDteam" />
      </section>
      <footer>
        <h3>Referencias:</h3>
        <a className="link" href="https://www.youtube.com/watch?v=Nh2He5m_Eps&t=713s" target="_blank" rel="noopener noreferrer">Tipos de Componentes</a>
        <a className="link" href="https://dev.to/ajpalacios/tipos-de-componentes-en-react-js-4epg" target="_blank" rel="noopener noreferrer">Tipos de Componentes en React.</a>
      </footer>
    </>
  )
}
