export const PageR14 = () => {
  return (
    <>
    <section>
      <h2>Render props y reder functions.</h2>
    </section>
    {/* Render props */}
    <section>
      <h3>Render props</h3>
      <p>Es un patrón igual que los componentes, delega la responsabilidad de su contenido a otros componentes de una manera más específica determinando qué, cuándo y dónde se va a renderizar cada elemento del componentes. Manda las funciones o información del componente por medio de las propiedades de los componentes y no por medio del contenido.</p>
      <p>Es una forma comoda y ordenada de trabajar. Proveen propiedades, información y actualizadores de estados, hacen validaciones y renderizan o no componentes.</p>
      <p>Es muy útil para maquetar porque ayudan a proteger los componentes para que no haya errores y para que la maquetación sea correcta.</p>
      <code className="code-block">
        &#60;RenderProps
        <span className="block indent-4">renderProp=&#123; <b>info =&#62; (</b> &#60;OtroComp &#123; ...info &#125; /&#62; <b>)</b> &#125;</span>
        /&#62;
      </code>
    </section>
    {/* Render functions */}
    <section>
      <h3>Render functions</h3>
      <p>Es un patrón igual que el Consumer, permite entregar la información de los componentes a través de los parámetros de funciones.</p>
      <p>Es útil para compartir información mientras no se requiera mucha información de distintas render functions, ya que puede generar poca escalabilidad en el código.</p>
      <code className="code-block">
        &#60;RenderFunction&#62;
        <span className="block indent-4">&#123; <b>info =&#62; (</b></span>
        <span className="block indent-8">&#60;OtroComp &#123; ...info &#125; /&#62;</span>
        <span className="block indent-4"><b>)</b> &#125;</span>
        &#60;/RenderFunction&#62;
      </code>
      <p>Ejemplo de composición de componentes con Render props y Render functions:</p>
      <code className="code-block">
        import React from 'react';<br/>
        import Empty from './Empty';<br/>
        import ObjectItem from './ObjectItem';<br/><br/>
        function <u>App</u>( ) &#123;<br/>
        const [ loading, objectList ] = React.useState( true );
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;EjList</span>
        <span className="block indent-12">loading = &#123; loading &#125;</span>
        <span className="block indent-12">objectList = &#123; objectList &#125;</span>
        <span className="block indent-12">onEmpty = &#123; ( ) =&#62; &#60;Empty/&#62; &#125;</span>
        <span className="block indent-12 font-light italic">&#123;/* La propiedad render mandará una función con un componente. */&#125;</span>
        <span className="block indent-12">render = &#123; e =&#62; (</span>
        <span className="block indent-16">&#60;ObjectItem</span>
        <span className="block indent-20">key=&#123;object.text)</span>
        <span className="block indent-20">text=&#123;object.text)</span>
        <span className="block indent-16">/&#62;</span>
        <span className="block indent-12">);</span>
        <span className="block indent-8">/&#62;</span>
        <span className="block indent-4">);</span>
        &#125;
      </code>
      <code className="code-block">
        import React from 'react';<br/>
        function <u>EjList</u>( props ) &#123;<br/>
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;section&#62;</span>
        <span className="block indent-12 font-light italic">&#123;/* Si la propiedad loading no es true (o no tiene contenido)</span>
        <span className="block indent-12 font-light italic">y si objectList es 0 (o false o null)</span>
        <span className="block indent-12 font-light italic">se ejecutará la propiedad función onEmpty */&#125;</span>
        <span className="block indent-12">&#123; ( !props.loading && !props.objectList.lenght ) && props.onEmpty( ) &#125;</span>
        <span className="block indent-12 font-light italic">&#123;/* Por cada elemento de la lista objectList</span>
        <span className="block indent-12 font-light italic">se ejecutará la propiedad render. */&#125;</span>
        <span className="block indent-12">&#123; ( props.objectList.map ( props.render ) ) &#125;</span>
        <span className="block indent-8">&#60;/section&#62;</span>
      </code>
    </section>
    </>
  )
}
