export const PageR8 = () => {
  return (
    <>
    <section>
      <h2>Estados.</h2>
    </section>
    {/* React.useState */}
    <section>
      <h3>React.useState</h3>
      <p>Para agregar estados a los componentes que no se crearon como clases, sino como funciones, se utiliza el hook <b>React.useState( <i>value</i>, <i>setValue</i> )</b>. Este hook requiere dos variables:</p>
      <ul className="ml-4 list-disc list-inside">
        <li>la variable que contendrá los valores y por la que se podrán utilizar los valores</li>
        <li>la función que modifica el valor de la variable.</li>
      </ul>
      <p>El hook puede inicializarse con cualquier valor, desde números hasta objetos. Además se puede utilizar de dos maneras:</p>
      <p className="italic">Importando y declarando que es una extensión de react dessde el inicio:</p>
      <code className="code-block">
        import React from "react";<br/>
        import <b>&#123; useState &#125;</b> from "react";<br/><br/>
        const [ valor, setValor ] = <b>useState( [ ] )</b>;
      </code>
      <p className="italic">O declarando que es una extensión de react en el momento en que se utiliza:</p>
      <code className="code-block">
        import <u>React</u> from "react";<br/><br/>
        const [ valor, setValor ] = <b><u>React</u>.useState( [ ] )</b>;
      </code>
      <p className="italic">React.useState( <i>const</i>, <i>newConst</i> ) es como una forma de crear una constante cuyo valor se podrá modificar.</p>
      <p>En el siguiente ejemplo se cambiará el parentesis del <i>return</i> por corchetes para poder convertirlo en un array y poder mandar más de un elemento separados por comas (aunque también se puede utilizar React.Fragment o algún otro método):</p>
      <code className="code-block">
        <p className="text-title">src/FormInput.js</p>
        ...<br/>
        function FormInput( ) &#123;<br/><br/>
        <span className="block indent-4 font-bold">const [ message, setMessage ] = React.useState( 'Vos has escrito algo' );</span>
        <span className="block indent-4 font-light italic">&#123;/* El valor inicial es = 'Vos has escrito algo' */&#125;</span><br/>
        <span className="block indent-4">return[</span>
        <span className="block indent-8">&#60;input </span>
        <span className="block indent-12">className="form-input"</span>
        <span className="block indent-12 font-light italic">&#123;/* Cuando el input cambie, se modificará el valor del estado message */&#125;</span>
        <span className="block indent-12">onChange=&#123; ( ) =&#62; <b>setMessage( 'Seguí escribiendo =B' )</b> &#125;</span>
        <span className="block indent-8">/&#62;,</span>
        <span className="block indent-8">&#60;p&#62;&#123; <b>message</b> &#125;&#60;/p&#62;</span>
        <span className="block indent-4">];</span>
        &#125;<br/>...
      </code>
    </section>
    {/* Ejemplo practico del estado. */}
    <section>
      <h3>Ejemplo practico del estado.</h3>
      <p>Un ejemplo práctico sería que apareciera en otra etiqueta lo que se esta escribiendo en el input:</p>
      <code className="code-block">
        <p className="text-title">src/FormInput.js</p>
        import React from "react";<br/><br/>
        function FormInput( ) &#123;<br/><br/>
        <span className="block indent-4 font-bold">const [ message, setMessage ] = React.useState( ' ' );</span><br/>
        <span className="block indent-4">const valueChange = (event) =&#62; &#123;</span>
        <span className="block indent-8 font-light italic">&#123;/* Se le asigna a message el valor que contenga el input */&#125;</span>
        <span className="block indent-8 font-bold">setMessage( event.target.value );</span>
        <span className="block indent-4">&#125;</span><br/>
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;React.Fragment&#62;</span>
        <span className="block indent-12">&#60;input </span>
        <span className="block indent-16">className="form-input"</span>
        <span className="block indent-16 font-light italic">&#123;/* &#11088; Para <u>conectar el hook con el elemento</u> input,</span>
        <span className="block indent-16 font-light italic">se le asigna el valor original del hook a la propiedad "value" */&#125;</span>
        <span className="block indent-16">value=&#123; message &#125;</span>
        <span className="block indent-16">onChange=&#123; valueChange &#125;</span>
        <span className="block indent-12">/&#62;,</span>
        <span className="block indent-12">&#60;p&#62;&#123; <b>message</b> &#125;&#60;/p&#62;</span>
        <span className="block indent-12 font-light italic">&#123;/* El elemento "p" cambiará su contenido de acuerdo al estado */&#125;</span>
        <span className="block indent-8">&#60;/React.Fragment&#62;</span>
        <span className="block indent-4">);</span>
        &#125;<br/>
        export &#123; FormInput &#125;;
      </code>
      <p>Ahora, retomando la idea del ejemplo anterior, para compartir los valores del hook con otros componentes se le coloca al componente FormInput dos propiedades (props) que serán los valores que utiliza el hook (React.useState), de esta forma se podrán obtener estos valores desde el componente padre (App) y así poder compartir los valores con otros componentes:</p>
      <code className="code-block">
        <p className="text-title">src/FormInput.js</p>
        import React from "react";<br/><br/>
        <span className="block font-light italic">&#123;/* Se agregan como propiedades del componente a message y a setMessage<br/> para que los valores le sean pasados desde el componente padre (App) */&#125;</span><br/>
        function FormInput( <b>&#123; message, setMessage &#125;</b> ) &#123;<br/><br/>
        <span className="block indent-4">const <u>valueChange</u> = ( event ) =&#62; &#123;</span>
        <span className="block indent-8 font-bold">setMessage( event.target.value );</span>
        <span className="block indent-4">&#125;<br/></span>
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;input </span>
        <span className="block indent-12">className="form-input"</span>
        <span className="block indent-12">value=&#123; <b>message</b> &#125;</span>
        <span className="block indent-12">onChange=&#123; <u>valueChange</u> &#125;</span>
        <span className="block indent-8">/&#62;</span>
        <span className="block indent-4">);</span>
        &#125;<br/>
        export &#123; FormInput &#125;;
      </code>
      <p className="italic">En el componente App, se agrega un estado y se mandan las propiedades al componente FormInput.</p>
      <code className="code-block">
        <p className="text-title">src/App.js</p>
        import React from "react";<br/>
        import &#123; FormInput &#125; from "./FormInput";<br/><br/>
        function App( ) &#123;<br/>
        <span className="block indent-4 font-bold">const [ message, setMessage ] = React.useState( ' ' );</span>
        <span className="block indent-4">&#60;FormInput</span>
        <span className="block indent-8 font-bold">message=&#123; message &#125;</span>
        <span className="block indent-8 font-bold">setMessage=&#123; setMessage &#125;</span>
        <span className="block indent-4">/&#62;</span>
        ...
      </code>
    </section>
    </>
  )
}
