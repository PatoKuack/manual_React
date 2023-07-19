export const PageR5 = () => {
  return (
    <>
    <section>
      <h2>Propiedades.</h2>
      <p>Los atributos de los elementos como className=' ', src=' ', title=' ', etc. son considerados como propiedades. Las propiedades de los componentes son lo que serían parámetros o atributos</p>
      <p>Las propiedades permiten mandar un valor o estado en forma de atributo en el momento en que se invoca el componente, entonces componente actualizará su contenido con los valores o estados que se han mandado por medio de la invocación.</p>
    </section>
    {/* props. */}
    <section>
      <h3>props.</h3>
      <p>Hay diferentes formas de recibir propiedades, una de ellas es utilizando la palabra "props" que es una convención (no una palabra reserbada) para utilizar propiedades, ejemplo:</p>
      <p className="italic">Se invoca un componente (App) y se le manda una propiedad denominada "saludo" con un string como valor.</p>
      <code className="code-block">
        <p className="text-title">src/index.js</p>
        ...<br/>
        ReactDOM.render(<br/>
        <span className="block indent-4">&#60;App <b>saludo="Ola k ace?"</b> /&#62;,</span>
        ...
      </code>
      <p className="italic">En el archivo del componente, se le indica al componente que recibirá propiedades por medio de la palabra "porps", y para utilizar las propiedades recibidas se escribe dentro de llaves la palabra props.<u>nombre de la propiedad</u></p>
      <code className="code-block">
        <p className="text-title">src/App.js</p>
        ...<br/>
        function App(<b>props</b>) &#123;<br/>
          <span className="block indent-4">return ( ...</span>
          <span className="block indent-8">&#60;a ...&#62;</span>
          <span className="block indent-12"><b>&#123; props.saludo &#125;</b></span>
          <span className="block indent-8">&#60;/a&#62;</span>
          ...
      </code>
      <p>En el caso anterior se anexará el valor ("Ola k ace?") de la propiedad saludo en el contenido de la etiqueta &#60;a&#62; &#60;/a&#62;</p>
    </section>
    {/* children. */}
    <section>
      <h3>children.</h3>
      <p>A los componentes también se les pueden agregar una propiedad especial llamada <b>children</b> que permite insertar todos los elementos y propiedades que contenga un componente, ejemplo:</p>
      <p className="italic">Se invoca un componente (App) y se le agrega un atributo como propiedad, aparte, adentro del componente se le insertan elementos.</p>
      <code className="code-block">
        <p className="text-title">src/index.js</p>
        ...<br/>
        ReactDOM.render(<br/>
        <span className="block indent-4">&#60;App <b>pregunta="¿Cómo t va?"</b>&#62;</span>
        <span className="block indent-8 font-bold">&#60;h1&#62;Saludo&#60;/h1&#62;</span>
        <span className="block indent-8 font-bold">&#60;p&#62;holi holilla&#60;/p&#62;</span>
        <span className="block indent-4">&#60;/App&#62;,</span>
        ...
      </code>
      <p className="italic">En el archivo del componente, se resiven las propiedades por medio de la palabra "props". Para utilizar los elementos y componentes que se resiven, se escribe dentro de llaves la palabra props.children.</p>
      <code className="code-block">
        <p className="text-title">src/App.js</p>
        ...<br/>
        function App( <b>props</b> ) &#123;<br/>
        <span className="block indent-4">return ( ...</span>
        <span className="block indent-8"><b>&#123; props.children &#125;</b></span>
        <span className="block indent-8">&#60;a ...&#62;</span>
        <span className="block indent-12"><b>&#123; props.pregunta &#125;</b></span>
        <span className="block indent-8">&#60;/a&#62;</span>
        ...
      </code>
      <p className="italic">El resultado del ejemplo quedaría:</p>
      <div className="pk-code">
        <p className="mt-0 text-xl">Saludo</p>
        <p className="mt-0">holi holilla</p>
        <p className="mt-0 text-blue-500 underline cursor-pointer">¿Cómo estás?</p>
      </div>
    </section>
    {/* key. */}
    <section>
      <h3>key.</h3>
      <p>Cuando se importa un componente y este componente tiene una lista de valores, se debe agregar una propiedad especial llamada <b>key=&#123; &#125;</b> para renderizar los elementos de la lista, esto ayuda a que React identifique los elementos mutables e inmutables ayudando a que se actualicen, eliminen o agreguen elementos en el componente y solo en el componente donde se aplican las key, evitando que se actualice toda la aplicación innecesariamente.</p>
      <p>Se puede utilizar el index de los arrays en la key, pero esto es una MALA PRACTICA debido a que al eliminar algún elemento, el array se actualiza y, por lo tanto, los ID también lo hacen; de esta manera, los primeros index del array siguen existiendo, pero en elementos distintos, lo cual confunde un poco a React, haciendo que adquiera valores de elementos eliminados. Esto se evita utilizando un ID único en la key que no dependa de la manipulación de un array.</p>
      <p className="italic">En el archivo de un componente se le indica al componente que resivirá propiedades y se indica con props.text en donde se renderizará la propiedad "text":</p>
      <code className="code-block">
        <p className="text-title">src/OtroComponente.js</p>
        import React from 'react';<br/><br/>
        function OtroComponente( props )&#123;<br/>
        <span className="block indent-4">return(</span>
        <span className="block indent-12">&#60;li&#62;El item es: &#123; props.text &#125;&#60;/li&#62;</span>
        <span className="block indent-4">);</span>
        &#125;<br/>
        export &#123; OtroComponente &#125;;
      </code>
      <p className="italic">Se importa el componente en donde se utilizará y mediante un map se pide que se utilice el código del componente importado (OtroComponente) con cada elemento del array (listItems).</p>
      <code className="code-block">
        <p className="text-title">src/App.js</p>
          import React from 'react';<br/>
          import &#123; OtroComponente &#125; from './OtroComponente';<br/><br/>
          const listItems = [<br/>
          <span className="block indent-4">&#123; text: "Uno", completed: false &#125;,</span>
          <span className="block indent-4">&#123; text: "Dos", completed: false &#125;,</span>
          <span className="block indent-4">&#123; text: "Tres", completed: false &#125;,</span>
          ];<br/><br/>
          function App( )&#123;<br/>
          <span className="block indent-4">return(</span>
          <span className="block indent-8">&#60;ul&#62;</span>
          <span className="block indent-12">&#123; listItems.map ( eItem =&#62; (</span>
          <span className="block indent-16">&#60;OtroComponente</span>
          <span className="block indent-20">key=&#123; eItem.text &#125;</span>
          <span className="block indent-20">text=&#123; eItem.text &#125;</span>
          <span className="block indent-16">/&#62;</span>
          <span className="block indent-12">) ) &#125;</span>
          <span className="block indent-8">&#60;/ul&#62;</span>
          <span className="block indent-4">);</span>
          &#125;
      </code>
      <p className="italic">El renderizado quedaría:</p>
      <div className="pk-code">
        <ul className="list-disc list-inside">
          <li>El item es: Uno</li>
          <li>El item es: Dos</li>
          <li>El item es: Tres</li>
        </ul>
      </div>
    </section>
    {/* Propiedades directas. */}
    <section>
      <h3>Propiedades directas.</h3>
      <p>Otra forma de recibir propiedades es mandando la propiedad con el nombre con el que lo recibirá el otro componente <span className="italic">nombre=&#123;variable&#125;</span>.</p>
      <p>Si simplemente se manda el nombre de la variable, se estaría mandando un true o false de acuerdo al contenido o existencia de la variable.</p>
      <code className="code-block">
        <p className="text-title">src/Componente.js</p>
        import React from "react";<br/>
        import &#123; OtroComponente &#125; from "./OtroComponente";<br/><br/>
        function Componente( ) &#123;
        <span className="block indent-4">const <b><u>var1</u></b> = &#123; &#125;;</span>
        <span className="block indent-4">const <b><u>var2</u></b> = "Hello";</span>
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;OtroComponente</span>
        <span className="block indent-8 font-light italic">&#123;/* Las propiedades se suelen enviar renombrandolas con</span>
        <span className="block indent-8 font-light italic">el mismo nombre para evitar confuciones */&#125;</span>
        <span className="block indent-12"><b>var1</b>=&#123; <b><u>var1</u></b> &#125;</span>
        <span className="block indent-12"><b>var2</b>=&#123; <b><u>var2</u></b> &#125;</span>
        <span className="block indent-8">/&#62;</span>
        <span className="block indent-4">);</span>
        ...
      </code>
      <p className="italic">Y se suelen recibir encerradas entre llaves:</p>
      <code className="code-block">
        <p className="text-title">src/OtroComponente.js</p>
        ...<br/>
        function Componente( <b>&#123; <u>var1</u>, <u>var2</u> &#125;</b> ) &#123;<br/>
        <span className="block indent-4">console.log(<b><u>var1</u></b>);</span>
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;p&#62;<b>&#123; <u>var2</u> &#125;</b>&#60;/p&#62;</span>
        <span className="block indent-4">);</span>
        &#125;<br/>...
      </code>
    </section>
    <footer>
      <h3>Referencias:</h3>
      <a href="https://platzi.com/blog/react-keys/" target="_blank" rel="noopener noreferrer" className="link">Blobk: implementación de keys en React.js</a>
    </footer>
    </>
  )
}
