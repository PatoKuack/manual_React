export const PageR2 = () => {
  return (
    <>
      <section>
        <h2>Introducción a React.</h2>
        <p><strong>React</strong> facilita la forma de escribir HTML y CSS desde JavaScript utilizando JSX dándole un orden al código (React es más librería que framework).</p>
        <p><strong>JSX</strong> es una sintaxis especial de JavaScript combinada con HTML que se utiliza para escribir elementos y componentes de React más fácilmente.</p>
        <p>Cuando una parte del código esta encerrada entre llaves se transforma en JavaScript, ésto es útil cuando se utlizan variables globales con variables que no son fijas.</p>
        <p>Para asignarle clases a los elementos, se utiliza <b>className=' '</b> en vez del <b>class=' '</b> de HTML, esto evita confuciones con las clases para objetos de JavaScript.</p>
        <p>Los elementos y componentes deben abrirse y cerrarse (&#60;Component&#62;&#60;/Component&#62;) o deben autocerrarse (&#60;Component/&#62;)</p>
      </section>
      {/* virtualDOM, ciclo de vida, estados, eventos, componentes, elementos */}
      <section>
        <p>El <strong>Virtual DOM</strong> es una copia del DOM real, el DOM real es el que se crea cuando se ejecuta una página web. El Virtual DOM se crea al usar React y al detectar cambios de estado o eventos activados en la página web, este se compara con el DOM real para detectar los cambios puntuales del DOM y renderiza la parte específica donde se ejecuta el cambio evitando que se renderice toda la página mejorando el desempeño de la página web.</p>
        <p>El <b>Ciclo de Vida</b> es una serie de etapas de un elemento en las que se crea, tiene un propósito y al cumplir este propósito desaparece.</p>
        <p>El <b>Estado</b> se encarga de mantener o transmitir valores entre componentes para que los componentes reaccionen de acuerdo con el estado, el estado se crea por medio de interacciones en la página web.</p>
        <p>Los <b>Eventos</b> desencadenan acciones a través de interacciones en la página en la página web.</p>
        <p>Los <b>Hooks</b> son funciones que ayudan a controlar el ciclo de vida de los componentes funcionales, también conectan de una forma fácil a los componentes con los estados o eventos.</p>
        <p>Los <b>Elementos</b> <i className="font-light">(son las etiquetas de JSX)</i> reciben atributos o eventos y (casi siempre) se transforman en etiquetas de HTML.</p>
      </section>
      <footer>
        <h3>Referencias:</h3>
        <a className="link" href="https://platzi.com/blog/ui-stack/" target="_blank" rel="noopener noreferrer">5 estados clave para crear interfaces coherentes.</a>
      </footer>
    </>
  )
}
