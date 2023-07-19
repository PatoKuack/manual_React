export const PageR10 = () => {
  return (
    <>
    <section>
      <h2>React Context.</h2>
      <p>Es una herramienta de React que permite utilizar Providers y Consumers para que los estados de los componentes se puedan compartir entre los diferentes componentes de la aplicación, para esto se crea una carpeta en la que se alojará el archivo con el código necesario para compartir estados entre los componentes.</p>
    </section>
    {/* Provider y Consumers. */}
    <section>
      <h3>Provider y Consumers.</h3>
      <p><b>React.createContext()</b> es una herramienta de React que permite crear contextos los cuales permiten crear providers y consumers.</p>
      <p><b>&#60;<u>My</u>Context.Provider&#62;&#60;/<u>My</u>Context.Provider&#62;</b> se utiliza para envolver toda la aplicación del componente principal que por defecto suele ser App.js.</p>
      <p><b>&#60;<u>My</u>Context.Consumer&#62;&#60;/<u>My</u>Context.Consumer&#62;</b> se utiliza en cualquier lugar de los componentes que requiera información de algún estado compartido. El Consumer se puede utilizar sin importar que el componente al que se le coloca el Consumer es un hijo o nieto del componente que contenga el Provider.</p>
      <p className="italic">Lo primero que se hace es crear el archivo donde se alojará el contexto, el Consumer y el Provider:</p>
      <code className="code-block">
        <p className="text-title">src/EjemploContext/index.js</p>
        import React from 'react';<br/><br/>
        const EjemploContext = React.createContext( );<br/><br/>
        <i className="font-light">&#123;/* La siguiente función se utiliza para compartir</i><br/>
        <i className="font-light">información del provider al consumer. */&#125;</i><br/>
        function EjemploProvider( props ) &#123;<br/>
        <span className="block indent-4">return (</span>
        <span className="block indent-8">&#60;EjemploContext.Provider&#62;</span>
        <span className="block indent-12 font-light italic">&#123;/* Cualquier componente que llame al componente EjemploProvider</span>
        <span className="block indent-12 font-light italic">será mandado al siguiente props.children y podrá utilizar el consumidor */&#125;</span>
        <span className="block indent-12">&#123; props.children &#125;</span>
        <span className="block indent-8">&#60;/EjemploContext.Provider&#62;</span>
        <span className="block indent-4">);</span>
        &#125;
      </code>
      <p className="italic">Continuando con el archivo anterior, se colocan los estados y elementos que se compartirán entre componentes y se exporta el Provider:</p>
      <code className="code-block">
        <p className="text-title">src/EjemploContext/index.js</p>
        import React<span className="font-bold">, &#123;useState&#125;</span> from 'react';<br/><br/>
        const EjemploContext = React.createContext( );<br/><br/>
        function EjemploProvider( props ) &#123;
        <span className="block indent-4 font-light italic">&#123;/* Antes del return se coloca el código que abarca los estados que</span>
        <span className="block indent-4 font-light italic">se van a compartir (variables, constantes, funciones, etados, etc.) */&#125;</span>
        <span className="block indent-4 font-bold">const [ ejemplo, setEjemplo ] = React.useState( ' ' );</span>
        <span className="block indent-4">return (</span>
        <span className="block indent-8 font-light italic">&#123;/* Para indicarle al Provider cuales son los estados que se</span>
        <span className="block indent-8 font-light italic">compartirán en los componentes, se utiliza la propiedad value */&#125;</span>
        <span className="block indent-8 font-light italic">&#123;/* Se utilizan dos llaves porque la primera indica el contenido de value</span>
        <span className="block indent-8 font-light italic">y la segunda llave es porque se mandará un objeto */&#125;</span>
        <span className="block indent-8">&#60;EjemploContext.Provider <b>value=&#123; &#123;</b></span>
        <span className="block indent-12 font-light italic">&#123;/* Aquí se colocan todas las propiedades que se compartiran</span>
        <span className="block indent-12 font-light italic">en los estados (utilizar sintaxis .js no .jsx) */&#125;</span>
        <span className="block indent-12 font-bold">ejemplo,</span>
        <span className="block indent-12 font-bold">setEjemplo</span>
        <span className="block indent-8"><b>&#125; &#125;</b>&#62;</span>
        <span className="block indent-12">&#123;props.children&#125;</span>
        <span className="block indent-8">&#60;/EjemploContext.Provider&#62;</span>
        <span className="block indent-4">);</span>
        &#125;<br/><br/>
        <i className="font-light">&#123;/* Se exporta el contexto y el atajo Provider. */&#125;</i><br/>
        <b>export &#123; EjemploContext, EjemploProvider &#125;</b>
      </code>
      <p className="italic">Después se importa el Provider y Consumer en el archivo que vincula todo el contenido que suele ser App.js o App/index.js, o también se puede inportar directamente en los archivos que utilizarán el contexto.</p>
      <p>Para que un componente pueda consumir un estado guardado dentro del Context, se debe llamar al Consumer dentro del Provider.</p>
      <p>Los componentes o componentes dentro de otros componentes, pueden utilizar el Consumer para compartir estados.</p>
      <code className="code-block">
        <p className="text-title">src/App/index.js</p>
        import &#123; EjemploContext, EjemploProvider &#125; from ../EjemploContext;<br/>
        import React from 'react';<br/><br/>
        function App( ) &#123;<br/>
        <span className="block indent-4">return(</span>
        <span className="block indent-8 font-bold">&#60;EjemploProvider&#62;</span>
        <span className="block indent-12">...</span>
        <span className="block indent-12 font-bold">&#60;EjemploContext.Consumer&#62;</span>
        <span className="block indent-16 font-light italic">&#123;/* Aquí van elementos o componentes</span>
        <span className="block indent-16 font-light italic">que utilicen los valores compartidos. */&#125;</span>
        <span className="block indent-12 font-bold">&#60;/EjemploContext.Consumer&#62;</span>
        <span className="block indent-12">...</span>
        <span className="block indent-8 font-bold">&#60;/EjemploProvider&#62;</span>
        <span className="block indent-4">);</span>
        &#125;<br/><br/>
        export default App;
      </code>
      <p>Dentro del Consumer se utiliza una sintaxis llamada Render Props que implica enviar el código .jsx dentro de una función.</p>
      <p>Los Consumer pueden colocarse depués o antes de otros elementos o componentes, también pueden colocarse dentro en los archivos de componentes que sean llamados por el componente que contenga el Provider.</p>
      <code className="code-block">
        &#60;EjemploContext.Consumer&#62;<br/>
        <span className="block indent-4 font-light italic">&#123;/* Se manda a llamar a la propiedad value del componente</span>
        <span className="block indent-4 font-light italic">&#60;EjemploContext.Provider&#62; para poder recibir toda su información. */&#125;</span>
        <span className="block indent-4">&#123; value =&#62; &#123;</span>
        <span className="block indent-8">return (</span>
        <span className="block indent-12 font-light italic">&#123;/* Dentro del return se utilizan los componentes</span>
        <span className="block indent-12 font-light italic">que usarán la información de value. */&#125;</span>
        <span className="block indent-12 font-light italic">&#123;/* Cada que se utilice un valor de value</span>
        <span className="block indent-12 font-light italic">se utilizará de la siguiente forma: */&#125;</span>
        <span className="block indent-12">&#60;ComponentEjemplo&#62;</span>
        <span className="block indent-16">&#123; value.ejemplo ... &#125;</span>
        <span className="block indent-16">&#123; value.setEjemplo(...) &#125;</span>
        <span className="block indent-12">&#60;/ComponentEjemplo&#62;</span>
        <span className="block indent-8">);</span>
        <span className="block indent-4">&#125; &#125;</span>
        &#60;/EjemploContext.Consumer&#62;
      </code>
      <p>Si al componente anterior se le quisieran pasar los datos del contexto como propiedades, se tendrían que agregar los estados que se desean pasar.</p>
      <p>Para evitar colocar el value en cada valor que se quiera llamar desde el Context, se insertan los estados directamente (separados por comas) en vez de colocar el value:</p>
      <code className="code-block">
        &#60;EjemploContext.Consumer&#62;<br/>
        <span className="block indent-4 font-light italic">&#123;/* En vez del value se abre un bloque de llaves</span>
        <span className="block indent-4 font-light italic">se colocan adentro los estados a utilizar. */&#125;</span>
        <span className="block indent-4">&#123; ( &#123; ejemplo, setEjemplo &#125; ) =&#62; &#123;</span>
        <span className="block indent-8">return (</span>
        <span className="block indent-12">&#60;ComponentEjemplo</span>
        <span className="block indent-16">ejemplo = &#123; ejemplo &#125;</span>
        <span className="block indent-16">setEjemplo = &#123; setEjemplo &#125;</span>
        <span className="block indent-12">/&#62;</span>
        <span className="block indent-8">);</span>
        <span className="block indent-4">&#125; &#125;</span>
        &#60;/EjemploContext.Consumer&#62;
      </code>
      <p>Una manera más óptima de utilizar el Context, es llamando a los estados que se utilizarán atravez del hook <b>React.useContext()</b> y así evitar utilizar llamar al componente Consumer</p>
      <code className="code-block">
        import &#123; EjemploContext &#125; from '../EjemploContext/';<br/>
        ...<br/>
        function ComponentEjemplo( ) &#123;<br/>
        <span className="block indent-4 font-light italic">&#123;/* Se puede utilizar la variable "value" del Provider o</span>
        <span className="block indent-4 font-light italic">directamente colocar los estados que se utilizarán, en vez de:</span>
        <span className="block indent-4 font-light italic underline">const value = React.useContext(EjemploContext);</span>
        <span className="block indent-4 font-light italic">para evitar llamar a value.error o value.loading se utiliza: */&#125;</span>
        <span className="block indent-4">const &#123; ejemplo, setEjemplo &#125; = React.useContext( EjemploContext );</span>
          <span className="block indent-4">return (</span>
          <span className="block indent-8">&#60;AnotherComponent&#62;</span>
          <span className="block indent-12">&#123; ejemplo ... &#125;</span>
          <span className="block indent-12">&#123; setEjemplo(...) &#125;</span>
          <span className="block indent-8">&#60;/AnotherComponent&#62;</span>
          <span className="block indent-4">);</span>
        &#125;
      </code>
      <p>Esta forma de utilizar el Consumer se utiliza en cualquier componente que se encuentre dentro (ya sea hijo o bisnieto) del componente que utilice el Provider.</p>
    </section>
    <section>
      <p>Si se utiliza React.router no se coloca nada del contexto, Provider o Consumer en el archivo App que es donde se suelen colocar las rutas, se colocan directamente los contextos en los archivos padres que utilizan las variables compartidas:</p>
      <code className="code-block">
        <p className="text-title">src/ComponentePadreEj/index.js</p>
        import &#123; EjemploContext, EjemploProvider &#125; from ../EjemploContext;<br/>
        import React from 'react';<br/><br/>
        function ComponentePadreEj( ) &#123;<br/>
        <span className="block indent-4">...</span>
        <span className="block indent-4">return(</span>
        <span className="block indent-8 font-bold">&#60;EjemploProvider&#62;</span>
        <span className="block indent-12 font-bold">&#60;EjemploContext.Consumer&#62;</span>
        <span className="block indent-16 font-bold">&#123;(&#123;</span>
        <span className="block indent-20 font-bold">ejemplo,</span>
        <span className="block indent-20 font-bold">setEjemplo,</span>
        <span className="block indent-16 font-bold">&#125;)&#125; =&#62; &#123;</span>
        <span className="block indent-20">return(</span>
        <span className="block indent-20">...</span>
        <span className="block indent-20">);</span>
        <span className="block indent-16 font-bold">&#125;&#125;</span>
        <span className="block indent-12 font-bold">&#60;/EjemploContext.Consumer&#62;</span>
        <span className="block indent-8 font-bold">&#60;/EjemploProvider&#62;</span>
        <span className="block indent-4">);</span>
        &#125;<br/><br/>
        export default ComponentePadreEj;
      </code>
    </section>
    <footer>
      <h3>Referencias:</h3>
      <a className="link" href="https://reactjs.org/docs/context.html#api" target="_blank" rel="noopener noreferrer">React.createContext</a>
    </footer>
    </>
  )
}
