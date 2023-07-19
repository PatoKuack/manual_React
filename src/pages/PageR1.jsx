export const PageR1 = () => {
  return (
    <>
      <section>
        <h2>Frameworks y librerías.</h2>
        <dl>
          <dt>Website y Webapp.</dt>
          <dd>Un sitio web que únicamente se encarga de mostrar información, es considerado un Website, pero cuando se involucra al usuario, permitiendole manipular la página, ingresar datos, procesarlos y demás, es cuando se vuelve una Webapp y para esto es cuando se utiliza JavaScript.</dd>
          <dt>Componentes.</dt>
          <dd>Con JavaScript se puede crear elementos de HTML, a estos elementos se les llama componentes</dd>
          <dt>Composición de componentes.</dt>
          <dd>
            <p className="mt-0">Es posible crear componentes utilizando componentes como por ejemplo formularios que se conforman por otros componentes como botónes, etiquetas, campos, etc. A esta union de componentes se le llama composición de componentes.</p>
            <p className="mt-0">Se pueden identificar componentes que tienen un mismo objetivo y agruparlos creando composiciones de componentes. Si se tienen muchos tipos de un solo componente es señal de desorden, hay que estandarizar las cantidades de componentes.</p>
          </dd>
          <dt>Paradigma.</dt>
          <dd>Formas de pensar y traducir ideas al código.</dd>
          <dt>Reactividad.</dt>
          <dd>
            <p className="mt-0">Es un paradigma que debe seguir 2 reglas:</p>
            <ol>
              <li>Responsive, es decir, deben ser resilientes (siempresabe qué hacer tanto con acciones esperadas, como con errores) y escalables (no importa con cuánta información se trabaja o cuántos usuarios entran a la aplicación, la aplicación debe poder seguir funcionando sin problemas).</li>
              <li>Message Driven (Arquitectura basada en mensajes). Deben de haber emisores y receptores de mensajes. Los mensajes se entregan de manera asíncrona.</li>
            </ol>
          </dd>
          <dt>Estado o state.</dt>
          <dd>Es el lugar donde se guarda la información reactiva de los componentes. Son variables a las que se pueden suscribir para recibir una actualización cada vez que cambian sus valores.</dd>
          <dt>Render o renderizado.</dt>
          <dd>Es el proceso por el cuál el HTML pasa a ser información visual en el DOM.</dd>
        </dl>
        <p className="mt-0">Las aplicaciones funcionan creando componentes, cada componente tendrá un estado, de acuerdo al estado se va a renderizar la página para que el usuario interactue con la misma y de esa interacción se actualicen los estados y crear un cíclo de state-&#62;render-&#62;user.</p>
      </section>
      {/* Ecosistema de Librerías y Frameworks JS */}
      <section>
        <h3>Ecosistema de Librerías y Frameworks JS.</h3>
        <dl>
          <dt>Librerías.</dt>
          <dd>Es un conjunto de piezas de código y herramientas para un fin en específico.</dd>
          <dt>Frameworks.</dt>
          <dd>Es un grupo mayor de librerías y herramientas que trabajan en un proyecto completo bajo ciertas reglas.</dd>
        </dl>
        <h3>Empaquetadores.</h3>
        <p className="mt-0">Empaquetan un conjunto de archivos para mandarlos al navegador de una forma más optimizada y ligera.</p>
        <ul>
          <li><b>Webpack:</b> Requiere la configuración de un archivo para especificar como se empaquetarán los archivos. Pueden ser empaquetadas todas las herramientas o solamente algunas.</li>
          <li><b>Parcel:</b> Evita cualquier configuracion, trae todo listo para que construya todo el empaquetado, pero no se tiene control de como empaqueta.</li>
          <li><b>Rollup:</b> Se especializa en tener todo optimizado con una tecnica especial donde elimina el código inútil (se utiliza más para construir librerías de JavaScript).</li>
        </ul>
        <h3>Transpilador.</h3>
        <ul><li><b>Babel:</b> Transforma cualquier código de tipo JavaScript a un código JavaScript que cualquier navegador pueda entender.</li></ul>
        <h3>Subset.</h3>
        <ul><li><b>TypeScript:</b> Es un lenguaje tipado y orientado a objetos. Permite entender más fácil los errores en JavaScript.</li></ul>
        <h3>Herramienta para UI.</h3>
        <p className="mt-0">Son para encargarse de las vistas y renderizado de componentes para la interacción con los usuarios.</p>
        <ul>
          <li><b>React.</b></li>
          <li><b>Svelt.</b></li>
          <li><b>Vue.</b></li>
        </ul>
        <h3>Preprocesadores CSS.</h3>
        <p className="mt-0">Permiten manejar estilos más facilmente con su propia sintaxis basada en CSS para que al final se compile todo y se obtenga un archivo con lenguaje CSS.</p>
        <ul>
          <li><b>Sass.</b></li>
          <li><b>Less.</b></li>
          <li><b>Stylus.</b></li>
          <li><b>PostCSS.</b></li>
        </ul>
        <h3>CSS-in-JS.</h3>
        <p className="mt-0">Permite desarrollar en un mismo componente los 3 lenguajes HTML CSS y JS.</p>
        <ul>
          <li><b>Styled Components.</b></li>
          <li><b>Emotion.</b></li>
        </ul>
        <h3>Router.</h3>
        <p className="mt-0">Es la forma en la que se hace la navegación de la aplicación.</p>
        <ul>
          <li><b>React Router.</b></li>
          <li><b>Vue Router.</b></li>
          <li><b>Svelte Router.</b></li>
          <li><b>LitElement Router.</b></li>
          <li><b>Whatever Router.</b></li>
        </ul>
        <h3>Frameworks.</h3>
        <p className="mt-0">Son elementos todo en uno, que se encargan de todos los apartados ya que todo lo contiene. Trabajar con un Framework acelera el desarrollo de páginas web.</p>
        <ul><li><b>Angular:</b> Es todo poderoso, pero por ser tan grande es bastante difícil de integrar con otras herramientas que no sean especiales para ANGULAR.</li></ul>
        <h3>Entornos de desarrollo.</h3>
        <p className="mt-0">Son un todo en uno, un grupo de librerías configuradas para trbajar con mas librerías. Se suelen llamar CLI (Comand Line Interface) y desde la consola se puede elegir lo que se desea configurar y utilizar (React, consola, stylus, etc.).</p>
        <ul>
          <li><b>Create React App.</b></li>
          <li><b>Vue CLI.</b></li>
          <li><b>Svelte CLI.</b></li>
          <li><b>Polymer CLI.</b></li>
          <li><b>Whatever CLI.</b></li>
        </ul>
        <h3>Manejo del estado.</h3>
        <p className="mt-0">Son las librerías que pueden definir un estandar de flujo de datos constante y predecible dentro de la aplicación, en vez de que cada componente se comunique entre sí de forma diferente, se puede tener un centro de comunicación dandole un mismo orden a la comunicación entre componentes.</p>
        <ul>
          <li><b>Redux.</b></li>
          <li><b>XState.</b></li>
          <li><b>MobX.</b></li>
        </ul>
        <h3>Consulta de datos.</h3>
        <p className="mt-0">Son formas o protocolos para comunicarse con el backend para enviar y recibir información.</p>
        <ul>
          <li><b>API REST.</b></li>
          <li><b>GraphQL.</b></li>
        </ul>
        <img src="../assets/librerias-react.jpg" alt="Imágen de librerías de React." title="Librerías" />
      </section>
      {/* Frameworks */}
      <section>
        <h3>Frameworks.</h3>
        <p className="mt-0">Elegir frameworks o librerías de JavaScript para un proyecto web es una gran responsabilidad. Las preferencias personales deben ser el último factor a considerar. Lo realmente relevante son el tiempo, presupuesto, requisitos técnicos y el conocimiento + experiencia del equipo de desarrollo con cada tecnología.</p>
        <p className="mt-0">Un framework provee casi todas las herramientas que se necesitan para construir un sitio o aplicación web (guía de estilos predefinida, manejo de formularios, facilidad para elegir el tipo de routing, estrategia de render, entre otras).</p>
        <p className="mt-0">Por su parte, las librerías responden a un objetivo más específico y menos general. Una parte importante del desarrollo será elegir qué librerías integrar y realizar la configuración para que funcionen correctamente en conjunto.</p>
        <p className="mt-0">También se debe considerar que el costo/dificultad de integrar librerías con librerías suele ser muy bajo. Donde realmente aumenta la complejidad es configurando frameworks de JavaScript para trabajar en conjunto con librerías que no fueron específicamente diseñadas para ese framework en particular.</p>
        <img src="../assets/frameworks-edteam.jpg" alt="Imágen de las diferencia entre Angular, Vue y React by edTeam" title="Frameworks" />
      </section>
      <footer>
        <h3>Recursos:</h3>
        <a href="https://es.reactjs.org/docs/thinking-in-react.html" target="_blank" rel="noopener noreferrer" className="link">Pensando en react.</a>
        <a className="link" href="https://threejs.org/" target="_blank" rel="noopener noreferrer">Three.js, librería para creación 3D</a>
        <a className="link" href="https://shopify.github.io/draggable/" target="_blank" rel="noopener noreferrer">draggable, librería para touch</a>
      </footer>
    </>
  )
}
