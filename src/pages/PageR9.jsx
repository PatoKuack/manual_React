export const PageR9 = () => {
  return (
    <>
    <section>
      <h2>Hooks.</h2>
      <p>Los React Hooks conectan de una forma muy fácil a los componentes con propiedades, información, estados y eventos; por esto es super útil para compartir información entre compoentes.</p>
      <p>Son como funciones normales, solo que los cambios dentro de los React Hooks hacen validaciones y le avisan a React que debe hacer un nuevo render del componente; por esto también se utilizan para maquetar y hacer renders de partes especificas del código dependiendo de algunas condiciones. Es efectivo utilizarlos en maquetación.</p>
      <p>Los custom hook siempre comienzan por la palabra <b>use</b> (ejemplo: useEffect) y como es una función debe recibir mínimo 2 parámetros.</p>
      <p>Los hooks de React se pueden utilizar importandolos o llamando a React al ustilizar el hook, ejemplo:</p>
      <code className="code-block">
        import React &#123; useEffect, useRef &#125; from 'react';<br/>
        useEffect(...);
      </code>
      <code className="code-block">
        import React from 'react';<br/>
        React.useEffect(...);
      </code>
    </section>
    {/* useEffect. */}
    <section className="pk-section__v2">
      <h3>useEffect.</h3>
      <p>Un hook muy útil es <b>React.useEffect( )</b>, este hook ejecuta un código cuando la aplicación esta cargada y está lista para renderizarse, pero aún no se renderiza.</p>
      <code className="code-block">
        console.log("Queso");<br/>
        React.useEffect(
        <span className="block indent-4">console.log("Carne");</span>
        );<br/>
        console.log("Pan");<br/>
        <i>
          --------impresión en consola:--------<br/>
          Queso<br/>Pan<br/>Carne
        </i>
      </code>
      <p>En el ejemplo anterior se imprime primero Queso y Pan porque React realiza los cálculos del código y genera las impresiones en consola y después de realizar los cálculos y preparar la aplicación, se ejecuta el hook useEffect y por último se renderízaría la página.</p>
      <p>Ya que el hook se activa cada que la aplicación esta lista para renderizarse, se suele activar mucho, pero para que no se ejecute siempre que se renderice la aplicación se le colocan dos argumentos: como primer argumento una función y como segundo argumento un array, este arrray le indicará al hook cuando ejecutarse.</p>
      <ul className="ml-2 mb-4 list-disc list-inside">
        <li>Si no se coloca un segundo argumento, el hook se ejecutará cada vez que haya un render en la página.</li>
        <li>Si se coloca un arrray vacío, el hook se ejecutará solo la primera vez que se vaya a renderizar la página (solo se ejecuta una sola vez).</li>
        <li>Si al array se le coloca un componente, el hook se ejecutará cuando se realice un cámbio en ese componente.</li>
      </ul>
      <code className="code-block">
        React.useEffect( ( ) =&#62; &#123;
        <span className="block indent-4">console.log("Carne");</span>
        &#125;, [ myState ] );
      </code>
      <p>Por lo regular se hacen llamadas a API’s dentro de este hook, pero se puede cometer un error muy grave a la hora de implementar async await. Nunca se debe enviar una función asíncrona directamente como primer argumento para su efecto, pero sí se puede enviar una función normal y dentro de esta crear o llamar a la función ahora sí asíncrona.</p>
      <code className="code-block">
        <span className="line-through">React.useEffect( async () =&#62; &#123; ... &#125;</span><br/>
        React.useEffect( () =&#62; &#123;<br/>
        <span className="block indent-4">const fetchData = async () =&#62; &#123; ... &#125;;</span>
        &#125;
      </code>
    </section>
    {/* useLayoutEffect. */}
    <section className="pk-section__v2">
      <h3>useLayoutEffect.</h3>
      <p>Otro hook parecido es <b>React.useLayoutEffect()</b>, este hook ejecuta el código cuando la aplicación se acaba de renderizar (casi nunca se utiliza).</p>
    </section>
    {/* useRef. */}
    <section className="pk-section__v2">
      <h3>useRef.</h3>
      <p>Este hook es una forma de acceder al DOM adquiriendo la referencia de un elemento.</p>
      <p>Cuando se obtiene la referencia de un elemento, se puede utilizar la palabra <i>current</i> para indicar que se quiere referir al valor actual y después se pueden concatenar otras palabras como:</p>
      <ul className="ml-2 mb-4 list-disc list-inside">
        <li><b>el.current.focus( )</b> hace focus al elemento.</li>
        <li><b>el.current.value</b> obtiene el valor (contenido) actual del elemento.</li>
        <li><b>el.current.checked</b> si el check esta marcado devuelve un true, sino un false.</li>
      </ul>
      <code className="code-block">
        function ComponentElement( ) &#123;
          <span className="block indent-4 font-bold">const ejemElement = useRef( null );</span>
          <span className="block indent-4">const onButtonClick = ( ) =&#62; &#123;</span>
          <span className="block indent-8">console.log( <b>ejemElement.current.checked</b> );</span>
          <span className="block indent-4">&#125;</span>
          <span className="block indent-4">return(</span>
          <span className="block indent-8">&#60;React.Fragment&#60;</span>
          <span className="block indent-12">&#60;input type="checkbox" ref=&#123; <b>ejemElement</b> &#125; /&#62;</span>
          <span className="block indent-12">&#60;button onClick=&#123; onButtonClick &#125;&#62; print check value &#60;/button&#62;</span>
          <span className="block indent-8">&#60;/React.Fragment&#60;</span>
          <span className="block indent-4">);</span>
        &#125;
      </code>
      <h3>formData</h3>
      <p>formData permite adquirir los valores de los inputs de un formulario a través del useRef y elatributo name de los inputs.</p>
      <code className="code-block">
        const <u>loginForm</u> = useRef( null );<br/>
        const getFormInfo = ( event ) =&#62; &#123;
        <span className="block indent-4">event.preventDefault( );</span>
        <span className="block indent-4 font-light italic">&#123;/* Obtiene la referencia del formulario */&#125;</span>
        <span className="block indent-4 font-bold">const formData = new FormData( <u>loginForm</u>.current );</span>
        <span className="block indent-4 font-light italic">&#123;/* Imprime el contenido del input con el name=ejName */&#125;</span>
        <span className="block indent-4 font-bold">console.log( formData.get( 'ejName' ) );</span>
        &#125;<br/><br/>
        return(
        <span className="block indent-4">&#60;React.Fragment&#62;</span>
        <span className="block indent-8">&#60;form action="/" ref=&#123; <u>loginForm</u> &#125;&#62;</span>
        <span className="block indent-12">&#60;label htmlFor="ejName"&#62; Ingresa tu nombre: &#60;/label&#62;</span>
        <span className="block indent-12">&#60;input <b>name="ejName"</b> id="ejName" /&#62;</span>
        <span className="block indent-8">&#60;/form&#62;</span>
        <span className="block indent-4">&#60;/React.Fragment&#62;</span>
        );
      </code>
    </section>
    {/* Creación de hooks. */}
    <section className="pk-section__v2">
      <h3>Creación de hooks.</h3>
      <p>Para crear un custom hook es necesario:</p>
      <ul className="list-disc list-inside">
        <li>Definir en dónde se guardará la variable.</li>
        <li>Implementar una funcion que se encargue de actualizar el valor de la variable.</li>
        <li>Retornar la variable y la funcion en forma de array.</li>
      </ul>
      <p>Lo primero es crear el hook mediante una función, el nombre de la función debe empezar con la palabra <b>use</b> y se le agrega una palabra o dos que describan la acción del hook en formato camelCase:</p>
      <code className="code-block">
        function useEjemplo( ) &#123; &#125;
      </code>
      <p>Después se le coloca al hook la lógica, los parámetros y los valore que retornará.</p>
      <p>Si se retorna un valor, se coloca un return con parentesis, para retornar dos valores se utilizan corchetes en el return y para retornar más de dos valores se utilizan llaves en el return.</p>
      <code className="code-block">
        function useEjemplo( <b>itemVariable, itemValue</b> ) &#123;<br/>
          <span className="block indent-4 font-light italic">&#123;/* Aquí se coloca el código */&#125;</span>
          <span className="block indent-4 font-bold">return &#123;</span>
          <span className="block indent-8 font-bold">item,</span>
          <span className="block indent-8 font-bold">setItem,</span>
          <span className="block indent-8 font-bold">error</span>
          <span className="block indent-4 font-bold">&#125;</span>
        &#125;
      </code>
      <p className="italic">Es conveniente, para evitar confusiones, llamar a las variables incluyendo la palabre "item", ya que el hook se utilizará para obtener y utilizar diferentes valores.</p>
      <p>El hook se utiliza llamandolo como a un hook normal.</p>
      <p>Para conseguir los valores retornados se pueden guardar directamente en una constante, se utiliza un array (para uno o dos valores retornados) o un objeto (para más de dos valores retornados).</p>
      <code className="code-block">
        const &#123; ejemplo, setEjemplo, error &#125; = useEjemplo( "a1", "x");
      </code>
      <p>Para modificar el nombre de las variables recibidas y asegurarse del orden en que se recibiran, se colocan las variables de la siguiente forma:</p>
      <code className="code-block">
        const &#123;
          <span className="block indent-4">ejemplo: <u>pato</u>,</span>
          <span className="block indent-4">setEjemplo: <u>setPato</u>,</span>
          <span className="block indent-4">error</span>
          <span className="block indent-4 font-light italic">&#123;/* En este caso, error no se renombrará, así que solo se llama a la variable */&#125;</span>
        &#125; = useEjemplo( "a1", "x");
      </code>
    </section>
    <footer>
        <h3>Referencias:</h3>
          <a className="link" href="https://reactjs.org/docs/hooks-reference.html#useref" target="_blank" rel="noopener noreferrer">useRef</a>
          <a className="link" href="https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects" target="_blank" rel="noopener noreferrer">formData</a>
    </footer>
    </>
  )
}
