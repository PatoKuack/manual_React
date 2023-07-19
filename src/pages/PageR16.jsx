export const PageR16 = () => {
  return (
    <>
    <section>
      <h2>High Order Components.</h2>
      <p>Retornan componentes y funciones heredando un conjunto de información de todo, por esto es útil para compartir información entre componentes.</p>
      <p>Tiene una desventaja, y es que funcionan bien mientras no se requiera compartir mucha información de distintos HOCs en un mismo componente, ya que genera poca escalabilidad en el código, aunque se puede evitar esto creando una <i>función compose</i> o utilizando la <i>función compose</i> de una libreria.</p>
    </section>
    {/* High Order Functions */}
    <section>
      <h3>High Order Functions.</h3>
      <p>Las HOF son funciones que retornan otras funciones.</p>
      <code className="code-block">
        function highOrderFunc( ) &#123;
        <span className="block indent-4">return function normalFunc( ) &#123;</span>
        <span className="block indent-8">return( ... );</span>
        <span className="block indent-4">&#125;</span>
        &#125;
      </code>
      <p>Ya que son funciones, se les pueden mandar argumentos.</p>
      <code className="code-block">
        function hof( var1 ) &#123;
        <span className="block indent-4">return function normalFunction( var2 ) &#123;</span>
        <span className="block indent-8">return var1 + var2;</span>
        <span className="block indent-4">&#125;</span>
        &#125;<br/><br/>
        const sumando1 = hof( 1 );<br/>
        const sumaTotal = sumando1( 2 );
      </code>
    </section>
    {/* High Order Components */}
    <section>
      <h3>High Order Components</h3>
      <p>Los HOCs también son <u>funciones que retornan</u> funciones, pero las funciones retornadas son <u>Componentes</u>.</p>
      <code className="code-block">
        function highOrderComp( CompEnvuelto ) &#123;
        <span className="block indent-4">return function OtroComp( props ) &#123;</span>
        <span className="block indent-8">return(</span>
        <span className="block indent-12">&#60;CompEnvuelto</span>
        <span className="block indent-16">algoEspecial=&#123; props.algoEspecial &#125;</span>
        <span className="block indent-12">/&#62;</span>
        <span className="block indent-8">);</span>
        <span className="block indent-4">&#125;</span>
        &#125;
      </code>
      <p>Cuando los componentes se colocan como parámetros en los HOC se dice que son <i>componentes envueltos</i>, estos <i>componentes envueltos</i> recibirán automaticamente las propiedades de todos los componentes involucrados en el HOC.</p>
      <code className="code-block">
        <p className="text-title">./App/withApi.js</p>
        import React from 'react';<br/><br/>
        <span className="block font-light italic">&#123;/* El HOC recibirá una url como parámetro */&#125;</span>
        function withApi( <u>apiURL</u> ) &#123;
        <span className="block indent-4 font-light italic">&#123;/* retornará otro HOC que recibirá un Componente como parámetro */&#125;</span>
        <span className="block indent-4">return function withApiUrl( <u>WrappedComponent</u> ) &#123;</span>
        <span className="block indent-8">const dataApi = fetchApi( <u>apiURL</u> );</span><br/>
        <span className="block indent-8 font-light italic">&#123;/* El HOC hijo retornará un Componente */&#125;</span>
        <span className="block indent-8">return function WrappedComponentWithApi( props ) &#123;</span>
        <span className="block indent-12">if ( dataApi.loading ) return &#60;p&#62;;Loading&#60;/p&#62;;</span>
        <span className="block indent-12">return (</span>
        <span className="block indent-16 font-light italic">&#123;/* Se retornará el Componente recibido en el 2° HOC</span>
        <span className="block indent-16 font-light italic">mandandole como propiedad la URL procesada del 1° HOC */&#125;</span>
        <span className="block indent-16">&#60;<u>WrapperdComponent</u> data=&#123; dataApi.json &#125; /&#62;</span>
        <span className="block indent-12">);</span>
        <span className="block indent-8">&#125;</span>
        <span className="block indent-4">&#125;</span>
      &#125;<br/><br/>
      export &#123; withApi &#125;;
      </code>
      <code className="code-block">
        <p className="text-title">./App/index.js</p>
        import React from 'react';<br/>
        import &#123; withApi &#125; from './withApi.js';<br/><br/>
        function CompBox( props ) &#123;
        <span className="block indent-4">return (</span>
        <span className="block indent-8">&#60;p&#62;Tu nombre es &#123; props.data.name &#125;&#60;/p&#62;</span>
        <span className="block indent-4">);</span>
        &#125;<br/><br/>
        <span className="block font-light italic">&#123;/* Se guarda en una constante el llamado del HOC</span>
        <span className="block font-light italic">mandandole los parámetros que requiere, la URL y el Componente */&#125;</span>
        const CompBoxWithApi = withApi( 'https://api.com' )( CompBox );<br/><br/>
        export &#123; CompBoxWithApi &#125;;
      </code>
      <p>En el ejemplo anterior se anidan dos HOCs y dos Componentes. Dentro de un HOC se pueden pasar todos los Componentes, funciones y HOCs que se deseen, pero es IMPORTANTE que el <b>último retorno sea un Componente</b>.</p>
      <p>Por convención los HOCs empiezan por la palabra <b>with</b> y los parámetros que recibirán Componentes se les llama <b>WrappedComponent</b> (wrapped = envuelto).</p>
    </section>
    <footer>
      <h3>Referencias:</h3>
      <a className="link" href="https://es.javascript.info/currying-partials" target="_blank" rel="noopener noreferrer">Currificación.</a>
      <a className="link" href="https://reactjs.org/docs/higher-order-components.html" target="_blank" rel="noopener noreferrer">Higher-Order Components.</a>
    </footer>
    </>
  )
}
