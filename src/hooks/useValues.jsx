import {useState} from 'react';
import {PageR1} from '../pages/PageR1';
import {PageR2} from '../pages/PageR2';
import {PageR3} from '../pages/PageR3';
import {PageR4} from '../pages/PageR4';
import {PageR5} from '../pages/PageR5';
import {PageR6} from '../pages/PageR6';
import {PageR7} from '../pages/PageR7';
import {PageR8} from '../pages/PageR8';
import {PageR9} from '../pages/PageR9';
import {PageR10} from '../pages/PageR10';
import {PageR11} from '../pages/PageR11';
import {PageR12} from '../pages/PageR12';
import {PageR13} from '../pages/PageR13';
import {PageR14} from '../pages/PageR14';
import {PageR15} from '../pages/PageR15';
import {PageR16} from '../pages/PageR16';

function addingId(syllabus, countStart) {
  let contador = countStart;
  syllabus.map(data => {
    contador = contador + 1;
    data.id = contador;
  })
}

function useValues() {

  const [ hideMenu, setHideMenu ] = useState(true);

  /* Los subitem se colocan con un subitem:[''] y se debe tener cuidado al nombrar el path ya que debe coincidir con el string de la variable text cambiando ñ por n, quitando acentos, colocando todo en minúsculas y cambiando espacios por guiones altos: Piña y Cúrcuma = pina-y-curcuma */
  /* Para declarar items solo de debe tener la precaución de colocar un array vacío en el subitem:[] */
  /* Para declarar un subitem se debe colocar el item padre con un path:'', los nombres de los subitems en el array del subitem:['x', 'y'] y se le coloca en content:<></> */

  const syllabus1 = [
    {path:'frameworks_y_librerias', text:'Frameworks y librerías', subitem:[], content:<PageR1/>},
    {path:'introduccion', text:'Introducción', subitem:[], content:<PageR2/>},
    {path:'instalacion', text:'Instalación', subitem:[], content:<PageR3/>},
    {path:'componentes', text:'Componenetes', subitem:[], content:<PageR4/>},
    {path:'propiedades', text: 'Propiedades', subitem:[], content:<PageR5/>},
    {path:'estilos', text: 'Estilos', subitem:[], content:<PageR6/>},
    {path:'eventos', text: 'Eventos', subitem:[], content:<PageR7/>},
    {path:'estados', text: 'Estados', subitem:[], content:<PageR8/>},
    {path:'hooks', text: 'Hooks', subitem:[], content:<PageR9/>},
    {path:'reactcontext', text: 'ReactContext', subitem:[], content:<PageR10/>},
    {path:'reactportals', text: 'ReactPortals', subitem:[], content:<PageR11/>},
    {path:'deploy', text: 'Deploy', subitem:[], content:<PageR12/>},
  ];
  const syllabus2 = [
    {path:'composición_de_componentes', text: 'Composición de componentes', subitem:[], content:<PageR13/>},
    {path:'render_props_y_reder_functions', text: 'Render props y reder functions', subitem:[], content:<PageR14/>},
    {path:'cloneelement_y_children', text: 'cloneElement y Children', subitem:[], content:<PageR15/>},
    {path:'high_order_components', text: 'High Order Components', subitem:[], content:<PageR16/>},
  ];

  addingId(syllabus1, 0);
  addingId(syllabus2, syllabus1.length);

  // los syllabus y el state se utilizan en src/routes/App.jsx
  return {
    hideMenu,
    setHideMenu,
    syllabus1,
    syllabus2,
  }
}

export { useValues }
