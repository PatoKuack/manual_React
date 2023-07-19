export const PageR7 = () => {
  return (
    <>
    <section>
      <h2>Eventos.</h2>
      <p>Los eventos se declaran en formato camelCase</p>
      <p>Las acciones que se desencadenarán al activar el evento se formulan en forma de función, todos los eventos reciben una función colocada entre llaves.</p>
      <p>Al evento se le debe colocar una función que React pueda ejecutar, por lo que no se puede mandar directamente un console.log() ni un alert(), porque aunque ambas son funciones, al ponerles los paréntesis estas se ejecutan directamente sin necesidad de activar el evento en el momento en que se renderiza el elemento, y no se deben ejecutar directamente, solo se deben enviar las funciones y React se debe encargar de ejecutarlas.</p>
      <p>Existen diferentes maneras de pasarle funciones al evento.</p>
    </section>
    {/* Evento con función directa. */}
    <section>
      <h2>Evento con función directa.</h2>
      <p>Se puede declarar la función directamente en el evento, ejemplo:</p>
      <p className="italic">Cuando el evento detecte un clic en el elemento, se imprimirá en consola el string "clic".</p>
      <code className="code-block">
        <p className="text-title">src/FormButton.js</p>
        import React from "react";<br/>
        import './FormButton.css';<br/><br/>
        function FormButton( ) &#123;<br/>
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;button </span>
        <span className="block indent-12">className="form-button"</span>
        <span className="block indent-12 font-light italic">&#123;/* evento=&#123; función &#125; */&#125;</span>
        <span className="block indent-12 font-bold">onClick=&#123; ( ) =&#62; console.log('clic') &#125;</span>
        <span className="block indent-8">&#62;</span>
        <span className="block indent-12">Texto de botón</span>
        <span className="block indent-8">&#60;/button&#62;</span>
        <span className="block indent-4">);</span>
        &#125;<br/><br/>
        export &#123; FormButton &#125;;
      </code>
    </section>
    {/* Evento llamando una función. */}
    <section>
      <h2>Evento llamando una función.</h2>
      <p>También se puede colocar la función del evento en una constante para tener un código más limpio y poder reutilizar la función, ejemplo:</p>
      <code className="code-block">
        <p className="text-title">src/FormButton.js</p>
        import React from "react";<br/>
        import './FormButton.css';<br/><br/>
        function FormButton( ) &#123;<br/><br/>
        <span className="block indent-4">const <u>handleClick</u> = ( ) =&#62; &#123;</span>
        <span className="block indent-8">console.log('clic');</span>
        <span className="block indent-4">&#125;</span><br/>
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;button </span>
        <span className="block indent-12">className="form-button"</span>
        <span className="block indent-12"><i className="font-light">&#123;/* evento=&#123; función &#125; */&#125;</i></span>
        <span className="block indent-12">onClick=&#123; <u>handleClick</u> &#125;</span>
        <span className="block indent-8">&#62;</span>
        <span className="block indent-12">&#60;Texto de botón</span>
        <span className="block indent-8">&#60;/button&#62;</span>
        <span className="block indent-4">);</span>
        &#125;<br/><br/>
        export &#123; FormButton &#125;;
      </code>
    </section>
    {/* Evento con una función con parámetro. */}
    <section>
      <h2>Evento con una función con parámetro.</h2>
      <p>Si se mandara un parámetro en la función se tendría que mandar envuelta en otra función para que no se ejecute automaticamente, ejemplo:</p>
      <code className="code-block">
        <p className="text-title">src/FormButton.js</p>
        import React from "react";<br/>
        import './FormButton.css';<br/><br/>
        function FormButton( ) &#123;<br/><br/>
        <span className="block indent-4">const onClickButton = ( <u>message</u> ) =&#62; &#123;</span>
        <span className="block indent-8">console.log( <u>message</u> );</span>
        <span className="block indent-4">&#125;</span><br/>
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;button </span>
        <span className="block indent-12">className="form-button"</span>
        <span className="block indent-12"><i className="font-light">&#123;/* evento=&#123; función( )&#123; función &#125; &#125; */&#125;</i></span>
        <span className="block indent-12">onClick=&#123; ( ) =&#62; onClickButton( "<u>se ha cliqueado</u>" ) &#125;</span>
        <span className="block indent-8">&#62;</span>
        <span className="block indent-12">Texto de botón</span>
        <span className="block indent-8">&#60;/button&#62;</span>
        <span className="block indent-4">);</span>
        &#125;<br/><br/>
        export &#123; FormButton &#125;;
      </code>
    </section>
    {/* Ejemplo de eventos */}
    <section>
      <h2>Eventos.</h2>
      <section>
        <h3>onSubmit=&#123; &#125;</h3>
        <p>Este evento <b>detecta</b> (no captura) el envío del formulario, ejecutando la función que se le coloque entre las llaves.</p>
        <code className="code-block">
          const <u>submiting</u> = ( ) =&#62; &#123;
          <span className="block indent-4">...</span>
          &#125;<br/><br/>
          &#60;form <b>onSubmit=&#123; <u>submiting</u> &#125;</b>&#62;
          <span className="block indent-4">&#60;label&#62;...&#60;/label&#62;</span>
          <span className="block indent-4">&#60;textarea&#62;&#60;/textarea&#62;</span>
          <span className="block indent-4">&#60;button <b>type="submit"</b>&#62;</span>
          <span className="block indent-8">Enviar</span>
          <span className="block indent-4">&#60;/button&#62;</span>
          &#60;/form&#62;
        </code>
        <p>Se puede capturar el evento que envía el formulario con <i>event</i>, en el caso del ejemplo anterior, el <i>event</i> capturaría el contenido del textarea al mandarse el formulario.</p>
        <p>Además con el método event.preventDefault() se puede evitar que la página se recargue al enviar los datos del formulario.</p>
        <code className="code-block">
          const printing = ( <b>event</b> ) =&#62; &#123;
          <span className="block indent-4 font-light italic">&#123;/* Imprimirá en consola el contenido del input textarea */&#125;</span>
          <span className="block indent-4">console.log( <b>event.target.value</b> );</span>
          &#125;<br/>
          const <u>submiting</u> = ( <b>event</b> ) =&#62; &#123;
            <span className="block indent-4 font-light italic">&#123;/* Prevendrá que el formulario recargue la página */&#125;</span>
          <span className="block indent-4 font-bold">event.preventDefault()</span>
          &#125;<br/><br/>
          &#60;form <b>onSubmit=&#123; <u>submiting</u> &#125;</b>&#62;
          <span className="block indent-4">&#60;label&#62;...&#60;/label&#62;</span>
          <span className="block indent-4">&#60;textarea&#62;&#60;/textarea&#62;</span>
          <span className="block indent-4">&#60;button <b>type="submit"</b>&#62;</span>
          <span className="block indent-8">Enviar</span>
          <span className="block indent-4">&#60;/button&#62;</span>
          &#60;/form&#62;
        </code>
      </section>
    </section>
    <footer>
      <h3>Referencias:</h3>
      <a href="https://platzi.com/blog/react-forms/" target="_blank" rel="noopener noreferrer" className="link">Blobk: Buenas y malas prácticas para crear formularios en React.</a>
    </footer>
    </>
  )
}
