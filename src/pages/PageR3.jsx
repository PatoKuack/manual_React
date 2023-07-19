export const PageR3 = () => {
  return (
    <>
      <section>
        <h2>Instalación de React.</h2>
        <p>Existen dos maneras de instalar React, manualmente o con un simple comando:</p>
        <dl>
          <dt><a href="https://reactjs.org/docs/add-react-to-a-website.html" target="_blank" rel="noopener noreferrer">Configuración manual.</a></dt>
          <dd>Importando los scripts del código fuente de React, esta forma de utilizar React es poco utilizada porque no facilita el trabajo del desarrollo, sin embargo permite tener un control absoluto del entorno de desarrollo y optimiza el desempeño del proyecto.</dd>
          <dt><a href="https://reactjs.org/docs/create-a-new-react-app.html#create-react-app" target="_blank" rel="noopener noreferrer">Con create-react-app</a></dt>
          <dd>Con un simple comando se obtiene en cuestión de instantes un entorno de desarrollo totalmente configurado listo para trabajar.</dd>
          <dt><a href="https://vitejs.dev/guide/#scaffolding-your-first-vite-project" target="_blank" rel="noopener noreferrer">Con vite</a> ( o <a href="https://tailwindcss.com/docs/guides/vite" target="_blank" rel="noopener noreferrer">con Vite y Tailwind</a> )</dt>
          <dd>Vite es como webpack, pero facilisimo de utilizar, instalar y entender.</dd>
        </dl>
      </section>
      {/* Instalación con create-react-app */}
      <section>
        <h3>Instalación con create-react-app.</h3>
        <p>Desde la terminal se coloca la instrucción:</p>
        <code className="code-block">
          npx create-react-app <u>nombre-del-proyecto</u>
        </code>
        <p>El comando crea la carpeta con el nombre del proyecto alojando el proyecto en ella con la configuración de React ya lista.</p>
        <p><b>npx</b> instala temporalmente las herramientas para ejecutarlas y después eliminarlas de la computadora.</p>
        <p><b>create-react-app</b> crea un entorno de desarrollo con varios archivos esenciales para un proyecto.</p>
        <p className="note">
          <i>Nota:<br/>
          Si se tiene creada la carpeta donde se alojará el proyecto y se esta posicionada en ella desde la terminal, se escribe el comando:</i> <b>npx create-react-app ./</b>
        </p>
        <p>Después posicionandose dentro de la carpeta del proyecto se ejecuta el servidor de desarrollo utilizando la siguiente instrucción:</p>
        <code className="code-block">
          npm start
        </code>
        <p>Este comando inicia el entorno de desarrollo para tener el servidor corriendo en el puerto 3000, mantiene ocupada la terminal en la que se ejecuta. La página que abre el comando se refrescará automáticamente al guardar cualquier cambio en el proyecto.</p>
        <h3>Entorno de create-react-app</h3>
        <p>Dentro de este entorno existirá un archivo package.json en el que se encuentran los scripts, dependencias y metadatos del proyecto, también se tienen dos carpetas principales:</p>
        <dl>
          <dt>public/:</dt>
          <dd>Es la carpeta pública en donde se coloca el archivo HTML y algunos assets.</dd>
          <dt>src/:</dt>
          <dd>Es la carpeta fuente, en donde se colocan todos los archivos de trabajo como los assetss de imagenes o fuentes, estilos , archivos javascript, etc.</dd>
        </dl>
        <p>Dentro del index.html siempre existirá un div con el id='root', este div es la raíz del proyecto en React y se utiliza para empezar a construir con JavaScript:</p>
        <code className="code-block">
          <p className="text-title">index.html</p>
          &#60;div id='root'&#62;
        </code>
      </section>
      {/* Instalación con Vite */}
      <section>
        <h3>Instalación con Vite.</h3>
        <p>Se inicializa Vite desde la carpeta asignada para el proyecto.</p>
        <code className="code-block">npm create vite@latest ./</code>
        <p>Se pide que se instale npm y que se compile el proyecto.</p>
        <code className="code-block">npm install<br/>npm run dev</code>
        <p>Se inicializa el repositorio git.</p>
        <code className="code-block">git init</code>
        <p>Se vincula con el repositorio remoto (en este caso es GitHub).</p>
        <code className="code-block">git remote add origin <u>llave SSH o HTTPS</u></code>
        <p>Se guarda todo, se agrega todo al stack, se hace commit y se hace pull y push.</p>
        <code className="code-block">git add .<br/>git commit -m<br/>git pull origin main<br/>git push origin main</code>
      </section>
      {/* Renderización y código */}
      <section>
        <h3>Renderización y código.</h3>
        <p>El proyecto se crea con muchos archivos y mucho código y por ahora se explicará unicamente lo escencial del archivo (se puede eliminar lo que no se explique si no se considera importante):</p>
        <h3>public/index.html</h3>
        <p>Lo importante de este archivo es que en el body se crea la etiqueta div con el id='root' que será donde se trabajará todo el javascript.</p>
        <h3>src/index.js</h3>
        <p>Lo importante de este archivo es que se importan:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Los paquetes React y ReactDOM que proporcionan métodos específicos del DOM lo cual sirve para cosas como renderizar la página.</li>
          <li>El componente App en el cuál se vinculan todos los componentes del proyecto.</li>
          <li>Los estilos desde este archivo y se aplican a todos los demás archivos que utilice este archivo.</li>
        </ul>
        <p>También se crea la constante root en donde se manda a llamar el elemento raíz del index.html</p>
        <p>Y por último se utiliza esa constante root para pedir que se renderice el componente App, sin embargo en la página web no aparecerá ninguna etiqueta con el nombre "App", esto se debe a que los componentes son invisibles para HTML, pero si lo son para Rect; lo que sí renderiza React son los elementos que están en los componentes (como el &#60;div&#62;&#60;div/&#62;), estos elementos se transforman en etiquetas (gracias a Babel o algun otro transpilador) al compilar el código.</p>
        <p>Las importaciones de los archivos .js a los archivos .js no se suelen colocar con la extención por ejemplo: <i>import App from "./App</i>. En ese caso "./App" no tiene la extensión .js porque si se modifica la estructura de archivos dentro del proyecto, el código buscará una carpeta llamada App si no encuentra App.js y utilizará el index.js de esa carpeta.<br/>
        Entonces, si se importa el componente ./App sin colocarle la extensión (.js), el código buscará, no una, sino dos posibilidades: un archivo llamado App o una carpeta llamada App que contenga un archivo llamado index.js</p>
        <code className="code-block">
          <p className="text-title">index.js</p>
          import React from 'react';<br/>
          import ReactDOM from 'react-dom';<br/>
          import './index.css';<br/>
          import App from './App';<br/><br/>
          const root = ReactDOM.createRoot(document.getElementById('root'));<br/>
          root.render(<br/>
          <span className="block m-0 indent-4">
            &#60;React.StrictMode&#62;<br/>
          </span>
          <span className=" block m-0 indent-8">
            &#60;App /&#62;<br/>
          </span>
          <span className="block m-0 indent-4">
            &#60;/React.StrictMode&#62;<br/>
          </span>
          );
        </code>
        <h3>src/index.css y src/App.css</h3>
        <p>Los archivos de estilos se suelen colocar dentro de una carpeta llamada styles o css, pero se sigue colocando dentro de la carpeta src.</p>
        <h3>src/App.js</h3>
        <p>Se pueden importar elementos que se utilicen como paquetes, estilos o elementos.</p>
        <p>Este documento tiene una función, esta función es el componente App, se sabe que es un componente porque el nombre de la función inicia con mayúscula.</p>
        <p>El componente (función) App retorna, dentro de su return(), una serie de elementos que usan la sintaxis JSX.</p>
        <p>Al final se debe exportar el componente para poder utilizarlo en otros archivos.</p>
        <code className="code-block">
          function App() &#123;<br/>
          &emsp;return (<br/>
          &emsp;&emsp;&#60;div className="App"&#62;<br/>
          &emsp;&emsp;&#60;/div&#62;<br/>
          &emsp;);<br/>
          &#125;<br/><br/>
          export default App;
        </code>
        <p>En los ejemplos se manejará todo en la raíz de la carpeta <i>src</i>, pero es preferible crear una carpeta para cada componente, ejemplos:</p>
        <div className="flex justify-around">
          <ul className="code-block inline-block">
            <li>src<br/></li>
            <li>- App</li>
            <li>- - App.css</li>
            <li>- - index.js</li>
            <li>- Button</li>
            <li>- - Button.css</li>
            <li>- - index.js</li>
            <li>- index.css</li>
            <li>- index.js</li>
            <li>.package.json</li>
          </ul>
          <ul className="code-block inline-block">
            <li>src<br/></li>
            <li>- components</li>
            <li>- - App.js</li>
            <li>- - Button.js</li>
            <li>- styles</li>
            <li>- - App.css</li>
            <li>- - Button.css</li>
            <li>- - index.css</li>
            <li>- index.js</li>
            <li>.package.json</li>
          </ul>
        </div>
        <p>El archivo index.js que llama al componente principal (App.js) no se guarda en una carpeta porque es el que renderiza la aplicación y el entorno del proyecto lo necesita en la raíz del source (src).</p>
      </section>
    </>
  )
}
