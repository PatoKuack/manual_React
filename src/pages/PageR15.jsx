export const PageR15 = () => {
  return (
    <>
    <section>
      <h2>React.cloneElement y React.Children.</h2>
    </section>
    {/* React.cloneElement */}
    <section>
      <h3>React.cloneElement</h3>
      <p>Sirve para poder pasar propiedades especiales a los componentes hijos de los componentes contenedores. Su desventaja es que aunque pueda mandar varias propiedades al elemento clonado, solamente puede recibir un elemento para ser clonado.</p>
      <code className="code-block">
        import React from 'react';<br/>
        import EjHijo from './EjHijo';<br/><br/>
        function <u>App</u>( ) &#123;<br/>
        const [ loading, objectList ] = React.useState( true );
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;EjPadre loading=&#123; loading &#125;&#62;</span>
        <span className="block indent-12">&#60;EjHijo /&#62;</span>
        <span className="block indent-8">&#60;/EjPadre&#62;</span>
        <span className="block indent-4">);</span>
      </code>
      <code className="code-block">
        function <u>EjPadre</u>( <b>&#123; children, loading &#125;</b> ) &#123;
          <span className="block indent-4">return(</span>
          <span className="block indent-8">&#60;section&#62;</span>
          <span className="block indent-12 font-light italic">&#123;/* Recibirá el elemento del contenido (EjHijo)</span>
          <span className="block indent-12 font-light italic">y le mandará la propiedad loading */&#125;</span>
          <span className="block indent-12 font-bold">React.cloneElement(child, &#123; loading: loading &#125; )</span>
          <span className="block indent-8">&#60;/section&#62;</span>
          <span className="block indent-4">);</span>
        &#125;
      </code>
    </section>
    {/* React.Children */}
    <section>
      <h3>React.Children</h3>
      <p>Tiene muchos métodos para ayudar a utilizar el contenido que se le pasa a los componentes.</p>
      <ul className="mb-4 ml-4 list-disc list-inside">
        <li>React.Children<u>.toArray( children )</u></li>
      </ul>
      <p>Recibe el contenido del componente (children) y devuelve un array con los comonentes o elementos que se reciban, no importa si no recibe elementos o si recibe solo uno, siempre devuelve un array con los componentes y elementos como contenido.</p>
      <code className="code-block">
        import React from 'react';<br/>
        import EjHijo1 from './EjHijo1';<br/>
        import EjHijo2 from './EjHijo2';<br/><br/>
        function <u>App</u>( ) &#123;<br/>
        const [ loading, objectList ] = React.useState( true );
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;EjPadre loading=&#123; loading &#125;&#62;</span>
        <span className="block indent-12">&#60;EjHijo1 /&#62;</span>
        <span className="block indent-12">&#60;EjHijo2 /&#62;</span>
        <span className="block indent-8">&#60;/EjPadre&#62;</span>
        <span className="block indent-4">);</span>
      </code>
      <code className="code-block">
        function <u>EjPadre</u>( <b>&#123; children, loading &#125;</b> ) &#123;
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;section&#62;</span>
        <span className="block indent-12 font-light italic">&#123;/* Recibirá el elemento del contenido (EjHijo) */&#125;</span>
        <span className="block indent-12">&#123; React.Children</span>
          <span className="block indent-16 font-light italic">&#123;/* Transformará el contenido en un Array */&#125;</span>
          <span className="block indent-16">.toArray(children)</span>
          <span className="block indent-16 font-light italic">&#123;/* Con cada elemento del array se usará React.cloneElement */&#125;</span>
        <span className="block indent-16">.map( ( child ) =&#62;</span>
        <span className="block indent-20">React.cloneElement( child, &#123; loading: loading &#125; )</span>
        <span className="block indent-16">)</span>
        <span className="block indent-12">&#125;</span>
        <span className="block indent-8">&#60;/section&#62;</span>
        <span className="block indent-4">);</span>
        &#125;
      </code>
    </section>
    <footer>
      <h3>Referencias:</h3>
      <a className="link" href="https://frontarm.com/james-k-nelson/passing-data-props-children/" target="_blank" rel="noopener noreferrer">How to pass data to props.children.</a>
      <a className="link" href="https://medium.com/@justynazet/passing-props-to-props-children-using-react-cloneelement-and-render-props-pattern-896da70b24f6" target="_blank" rel="noopener noreferrer">Using React.cloneElement.</a>
      <a className="link" href="https://reactjs.org/docs/react-api.html#reactchildren" target="_blank" rel="noopener noreferrer">React.Children.</a>
    </footer>
    </>
  )
}
