export const PageR11 = () => {
  return (
    <>
    <section>
      <h2>React portals.</h2>
      <p>Permiten teletrasportar componentes a un nodo de HTML distinto al nodo donde hace render el resto de la aplicación el cual suele ser la etiqueta div con el id="root".</p>
    </section>
    <section>
      <p>React renderiza toda la aplicación gracias al elemento con el id="root" del archivo src/index.js, pero con los React portals se pueden renderizar los componentes de la página en otro nodo y aún así se pueden seguir comunicando los estados de los nodos.</p>
      <code className="code-block">
        <p className="text-title">src/Modal/index.js</p>
        import React from 'react';<br/>
        <b>import ReactDOM from 'react-dom';</b><br/><br/>
        function Modal( ) &#123;<br/>
        <span className="block indent-4 font-bold">return ReactDOM.createPortal(</span>
        <span className="block indent-8 font-light italic">&#123;/* Aquí se pueden colocar elementos o componentes</span>
        <span className="block indent-8 font-light italic">para mostrar algo especifico y estático o algo</span>
        <span className="block indent-8 font-light italic">dinámico que sea reutilisable */&#125;</span>
        <span className="block indent-4">);</span>
        &#125;
      </code>
      <p>Después se colocan los argumentos:</p>
      <ol>
        <li>En el primer argumento se coloca lo que se mandará en el portal (en el siguiente ejemplo será un children).</li>
        <li>En el segundo argumento se coloca el nodo del código HTML a donde se mandará el contenido del componente modal.</li>
      </ol>
      <code className="code-block">
        <p className="text-title">src/Modal/index.js</p>
        import React from 'react';<br/>
        import ReactDOM from 'react-dom';<br/><br/>
        function Modal( <b>&#123; children &#125;</b> ) &#123;<br/>
        <span className="block indent-4">return ReactDOM.createPortal(</span>
        <span className="block indent-8 font-bold">children,</span>
        <span className="block indent-8 font-bold">document.getElementById( 'modal' )</span>
        <span className="block indent-4">);</span>
        &#125;<br/>
        export &#123; Modal &#125;;
      </code>
      <code className="code-block">
        <p className="text-title">public/index.html</p>
        ...<br/>
        <span className="block indent-4">&#60;body&#62;</span>
        <span className="block indent-8">&#60;noscript&#62;...&#60;/noscript&#62;</span>
        <span className="block indent-8">&#60;div id="root"&#62;&#60;/div&#62;</span>
        <span className="block indent-8 font-bold">&#60;div id="modal"&#62;&#60;/div&#62;</span>
        <span className="block indent-4">&#60;/body&#62;</span>
        &#60;/html&#62;<br/>
      </code>
      <p>Después ya se utiliza en otros componentes. Si se crea un modal como en este caso, es recomendable mandarlo a llamar hasta el final de los componentes.</p>
      <code className="code-block">
        import &#123; Modal &#125; from "../Modal";<br/>
        import ...<br/><br/>
        function ...<br/>
        ...
        <span className="block indent-4">&#60;Modal&#62;</span>
        <span className="block indent-8">&#60;p&#62;¡Código para el modal!&#60;/p&#62;</span>
        <span className="block indent-4">&#60;/Modal&#62;</span>
        &#125;<br/><br/>export ...
      </code>
    </section>
    </>
  )
}
