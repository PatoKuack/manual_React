export const PageR6 = () => {
  return (
    <>
    <section>
      <h2>Estilos.</h2>
      <p>Existen dos formas de agregar CSS en un proyecto en React, directamente en los componentes o importando estilos de otros archivos.</p>
    </section>
    {/* Directamente en archivos javascript. */}
    <section>
      <h3>Directamente en archivos javascript.</h3>
      <h4>Estilos en línea dentro del componente:</h4>
      <p>En las formas que implican usar CSS en archivos JavaScript se deben colocar las propiedades sin guiones y con formato <b>camelCase</b>, además de que los valores se colocan entre comillas como strings (backgroundColor: 'pink',).</p>
      <p>Se crea un objeto que contendrá los estilos y éste objeto será colocado en el elemento principal que agrupa todo en el return (no funciona en React.Fragment por ser un elemento invisible en el navegador), ejemplo:</p>
      <code className="code-block">
        import React from 'react';<br/><br/>
        function AComponent() &#123;<br/>
        <span className="block indent-4">return(</span>
        <span className="block font-light indent-8"><i className="coment">/* Se tiene que colocar doble llave. */</i></span>
        <span className="block font-bold indent-8">&#60;div style=&#123; &#123;</span>
        <span className="block font-bold indent-12">backgroundColor: 'rgb(22, 143, 141)',</span>
        <span className="block font-bold indent-12">color: 'aliceblue',</span>
        <span className="block font-bold indent-8">&#125; &#125;&#62;</span>
        <span className="block indent-12">...</span>
        <span className="block font-bold indent-8">&#60;/div&#62;</span>
        <span className="block indent-4">);</span>
        &#125;
      </code>
      <h4>Estilos en línea fuera del componente:</h4>
      <p>Otra manera de agregar estilos en línea (similar a la anterior) es creando un objeto afuera de la función, ejemplo:</p>
      <code className="code-block">
        import React from 'react';<br/><br/>
        <b>const <u>estilos</u> = &#123;<br/>
        <span className="block indent-4">backgroundColor: "rgb(22, 143, 141)",</span>
        &#125;</b><br/><br/>
        function AComponent( ) &#123;<br/>
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;div <b>style=&#123;<u>estilos</u>&#125;</b>&#62;</span>
        <span className="block indent-12">...</span>
        <span className="block indent-8">&#60;/div&#62;</span>
        <span className="block indent-4">);</span>
        &#125;
      </code>
    </section>
    {/* Importando documentos de estilo. */}
    <section>
      <h3>Importando documentos de estilo.</h3>
      <p>Otra forma es importando un documento de estilo (como css o scss), en el documento de estilo se utiliza sintaxis normal, este documento se crea dentro de la carpeta <i>src</i>.</p>
      <p>En el archivo javascript se le deben colocar las clases a los elementos con el atributo <b>classNameName=" "</b>, ejemplo:</p>
      <code className="code-block">
        <p className="text-title">src/Menu.js</p>
        import React from "react";<br/>
        <b>import "menu.css";</b><br/><br/>
        function Menu( ) &#123;<br/>
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;nav <b>classNameName="menu"</b>&#62;</span>
        <span className="block indent-12">...</span>
        <span className="block indent-8">&#60;/nav&#62;</span>
        <span className="block indent-4">);</span>
        &#125;
      </code>
    </section>
    {/* Condicionales en las clases. */}
    <section>
      <h3>Condicionales en las clases.</h3>
      <p>Si se utilizan clases de estilos, pueden definirse usando código de JavaScript para manipularlas de acuerdo a condicionales. Se tiene que utilizar <b>comillas invetidas</b> ( ` ` ), ejemplo:</p>
      <code className="code-block">
        <p className="text-title">src/FormItems.js</p>
        import React from "react";<br/><br/>
        function FormItems(props) &#123;
        <span className="block indent-4">return(</span>
        <span className="block indent-8">&#60;li classNameName="class-item"&#62;</span>
        <span className="block indent-12 italic font-light">/* Al elemento p se le agregará la clase "class-item__p"</span>
        <span className="block indent-12 italic font-light">solamente si la propiedad especificada (props.completed) marca true,</span>
        <span className="block indent-12 italic font-light">se le anexará una segunda clase "class-item__completed" */</span>
        <span className="block indent-12">&#60;p classNameName=&#123;</span>
        <span className="block indent-16 font-bold">` className-item__p $&#123; props.completed && 'class-item__completed' &#125; `</span>
        <span className="block indent-12">&#125;&#62;</span>
        <span className="block indent-16">&#123;props.text&#125;</span>
        <span className="block indent-12">&#60;/p&#62;</span>
        <span className="block indent-8">&#60;/li&#62;</span>
        <span className="block indent-4">);</span>
        &#125;<br/>
        ...
      </code>
      <p className="italic">Continuando con el ejemplo y retomando el ejemplo de la key, así se mandarían las propiedades:</p>
      <code className="code-block">
        <p className="text-title">src/App.js</p>
        ...<br/>
        &#60;React.Fragment&#62;<br/>
        <span className="block indent-4">&#60;Form&#62;</span>
        <span className="block indent-8">&#123; listItems.map( item =&#62; (</span>
        <span className="block indent-12">&#60;FormItems</span>
        <span className="block indent-16">key=&#123; item.text &#125;</span>
        <span className="block indent-16">text=&#123; item.text &#125;</span>
        <span className="block indent-16">completed=&#123; item.completed &#125;</span>
        <span className="block indent-12">/&#62;</span>
        <span className="block indent-8">) ) &#125;</span>
        <span className="block indent-4">&#60;/Form&#62;</span>
        <span className="highlight">
          &#60;/React.Fragment&#62;<br/>
          ...
        </span>
      </code>
    </section>
    <footer>
      <h3>Referencias:</h3>
      <a className="link" href="https://platzi.com/blog/tutorial-como-crear-una-animacion-de-carga-de-contenido-tipo-facebook/" target="_blank" rel="noopener noreferrer">Loading skeletons (Blog).</a>
      <a className="link" href="https://skeletonreact.com/" target="_blank" rel="noopener noreferrer">Loading skeletons (Código).</a>
      <a className="link" href="https://material.io/design/iconography/system-icons.html" target="_blank" rel="noopener noreferrer">Guía sobre diseño de íconos.</a>
    </footer>
    </>
  )
}
