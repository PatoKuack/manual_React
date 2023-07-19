export const PageR13 = () => {
  return (
    <>
    <section>
      <h2>Composición de componentes.</h2>
    </section>
    {/* División de componentes. */}
    <section>
      <h2>División de componentes.</h2>
      <p>Para reducir la <i>"deuda técnica</i> en un proyecto con React, se pueden dividir los componentes entre los que consumen el estado general de la aplicación (componentes de UI, stateless) y los que crean sus propios estados (stateful).</p>
      <code className="code-block">
        function App( ) &#123;<br/>
        const [ ejemplo, setEjemplo ] = React.useState( ' ' );
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;EjProvider&#62;</span>
        <span className="block indent-12">&#60;React.Fragment&#62;</span>
        <span className="block indent-16">&#60;Ejemplo1 ejemplo=&#123; ejemplo &#125; /&#62;</span>
        <span className="block indent-16">&#60;Ejemplo2&#62;</span>
        <span className="block indent-20">&#60;Ejemplo3 setEjemplo=&#123; setEjemplo &#125; /&#62;</span>
        <span className="block indent-16">&#60;/Ejemplo2&#62;</span>
        <span className="block indent-12">&#60;/React.Fragment&#62;</span>
        <span className="block indent-8">&#60;/EjProvider&#62;</span>
        <span className="block indent-4">);</span>
        &#125;<br/><br/>
        function Ejemplo1( &#123; ejemplo &#125; ) &#123;<br/>
        <span className="block indent-4">return(</span>
        <span className="block indent-8">...</span>
        <span className="block indent-4">);</span>
        &#125;<br/><br/>
        function Ejemplo2( &#123; children &#125; ) &#123;<br/>
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;React.Fragment&#62;</span>
        <span className="block indent-12">&#123; children &#125;</span>
        <span className="block indent-8">&#60;/React.Fragment&#62;</span>
        <span className="block indent-4">);</span>
        &#125;<br/><br/>
        function Ejemplo3( &#123; setEjemplo &#125; ) &#123;<br/>
        <span className="block indent-4">return(</span>
        <span className="block indent-8">...</span>
        <span className="block indent-4">);</span>
        &#125;
      </code>
      <p>Si se manera esta forma de utilizar los componentes, incluso se puede evitar utilizar React Context y solo usar hooks, de esta manera el código será más legible y fácil de comprender.</p>
    </section>
    <footer>
      <h3>Referencias:</h3>
      <a className="link" href="https://refactorizando.com/stateful-vs-stateless-arquitectura/" target="_blank" rel="noopener noreferrer">Arquitecturas Stateful y Stateless.</a>
    </footer>
    </>
  )
}
