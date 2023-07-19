export const PageR12 = () => {
  return (
    <>
    <section>
      <h2>Deploy con React.</h2>
    </section>
    {/* GitHub-pages con React. */}
    <section>
      <h3>GitHub-pages con React.</h3>
      <p>Desde la terminal y posicionandose en la raíz del proyecto se utiliza la siguiente instrucción:</p>
      <code className="code-block">
        npm install --save-dev gh-pages
      </code>
      <p>Esta instrucción ayuda a mandar el código del proyecto a <i>GitHub pages</i> para visualizar su funcionamiento.</p>
      <p>Después, en el archivo <b>package.json</b> se le anexa la siguiente instrucción para indicarle a la dependencia de desarrollo que se instaló (gh-pages) donde se debe subir el proyecto:</p>
      <code className="code-block">
        &#123;<br/>
        &emsp;...<br/>
        &emsp;"scripts": &#123;<br/>
        &emsp;&emsp;...,<br/>
        &emsp;&emsp;"predeploy": "npm run build",<br/>
        &emsp;&emsp;"deploy": "gh-pages -d <u><b>build</b></u>"<br/>
        &emsp;&emsp;<i className="font-light opacity-80">/* Este último "build" es el nombre de la carpeta de compilación, suele también llamarse "dist",</i><br/>
        &emsp;&emsp;<i className="font-light opacity-80">/* Para ejecutar el deploy se debe primero ejecutar "build",</i><br/>
        &emsp;&emsp;<i className="font-light opacity-80">para ahorrarse una instrucción se utiliza un "pre" */</i><br/><br/>
        &emsp;&emsp;<i className="font-light opacity-80">/* El "pre___" se ejecutará automáticamente cuando se</i><br/>
        &emsp;&emsp;<i className="font-light opacity-80">detecte que se va a ejecutar el comando original, es decir,</i><br/>
        &emsp;&emsp;<i className="font-light opacity-80">en este caso si se ejecuta "deploy" se ejecutará</i><br/>
        &emsp;&emsp;<i className="font-light opacity-80">automáticamente "predeploy" el cual ejecuta "build" */</i><br/>
        &emsp;&#125;,<br/>
        &emsp;...<br/>
        <i className="font-light opacity-80">/* La siguiente parte se agrega automáticamente al completar la instalación de gh-pages */</i><br/>
          &emsp;"devDependencies": &#123;<br/>
          &emsp;&emsp;"gh-pages": "^3.2.3"<br/>
          &emsp;&#125;,<br/>
        <i className="font-light opacity-80">/* ----------------- */</i><br/>
        &emsp;"homepage": "https://<b><u>user-name en GitHub</u></b>.github.io/<b><u>repository-name del proyecto</u></b>"<br/>
          &#125;<br/>
      </code>
      <p>Al final se hace un git push con sus respectivos códigos (git add . || git commit -m "..." || git pull origin main || git push origin main) y después se ejecuta <b>npm run deploy</b> para desplegar el proyecto a GitHub pages.</p>
      <code className="code-block">
        git add .<br/>
        git commit -m "<span className="font-light italic">Corta descripción del commit</span>"<br/>
        git pull origin main<br/>
        git push origin main<br/>
        npm run deploy
      </code>
      <p>Todo esto genera una rama llamada <b>gh-pages</b> en el repositorio de la página de github, esta rama es la que se debe utilizar para la publicación de la página.</p>
    </section>
    {/* Deploy a Netlify */}
    <section>
      <h3>Deploy a Netlify.</h3>
      <p>Para que el proyecto se visualice en internet se puede subir a <a href="webpack --config webpack.config.dev.js --watch" target="_blank" rel="noopener noreferrer">Netlify</a>.</p>
      <p>Primero se debe crear en la raíz del proyecto el archivo <b>netlify.toml</b> y se especifica en éste atraves de un buld, que carpeta del proyecto se debe publicar y el comando que se utilizará para desplegar la aplicación.</p>
      <code className="code-block">
        <p className="text-title">netlify.toml</p>
        [build]<br/>
        <i className="font-light opacity-80">// Se coloca el nombre de la carpeta resultante del comando "npm run build", a veces se llama "build", pero en este caso es "dist". Después se coloca el comando.</i><br/>
        &emsp;publish: "dist"<br/>
        &emsp;command: "npm run build"<br/>
        <i className="font-light opacity-80">// Si se sube un proyecto de React se coloca el command<br/>
        &emsp;command: "CI='' npm run build"</i>
      </code>
      <p>A través de la página de Netlify se despliega un nuevo proyecto, en las opciones de despliegue se elige el repositorio, la rama y se colocan: el comando y la carpeta que se especifica en el archivo <i>netlify.toml</i>.</p>
      <p>Después, si se tienen variables de ambiente, se crea en la raíz del proyecto la carpeta <b>scripts</b> y adentro de esta carpeta se crea el archivo <b>create-env.js</b> y en este script se coloca el siguiente código:</p>
      <code className="code-block">
        <p className="text-title">create-env.js</p>
        <i className="font-light opacity-80">// Se llama un recurso para crear archivos de forma local.</i><br/>
        const fs = require('fs');<br/>
        <i className="font-light opacity-80">// Se crea el archivo .env y se le agrega de contenido el ejemplo de variable de entorno antes visto.</i><br/>
        fs.writeFileSync('./.env', `API=$&#123;process.env.API&#125;\n`);
      </code>
      <p>Para que Netlify acepte las variables de entorno fue necesario crear el archivo anterior además de que en la página de Netlify se deben agregar en las sección <b>Build & deploy</b> en la parte de <b>variables de entorno</b> se agregan las variables del proyecto y así solamente Netlify podrá ver y usar estas variables.</p>
      <p>Por último se compila el proyecto.</p>
    </section>
    <footer>
      <h3>Referencias:</h3>
      <a href="https://docs.netlify.com/integrations/frameworks/vite/#deploy-your-vite-project-with-netlify-cli" target="_blank" rel="noopener noreferrer" className="link">Documentación: deploy a Netlify con Vite.</a>
      <a href="https://www.youtube.com/watch?v=-Euov0WKuV8" target="_blank" rel="noopener noreferrer" className="link">Video: Subir proyecto a Netlify.</a>
    </footer>
    </>
  )
}
