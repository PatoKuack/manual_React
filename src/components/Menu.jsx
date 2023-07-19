import { NavLink } from 'react-router-dom';

export const Menu = ( props) => {

  const activeStyle = 'uderline underline-offset-4 font-bold';

  return (
    <>
      {!props.hideMenu && <div
        className={`fixed w-screen h-screen top-0 left-0 bg-transparent-dark transition-colors duration-300 z-0`}
        onClick={()=>props.setHideMenu(true)}
      ></div>}

      <div className={`fixed top-[64px] left-0 flex flex-row-reverse content-start max-h-[calc(100vh-64px)] transition-transform opacity-90 sm:top-[80px] ${props.hideMenu && 'translate-x-[-176px] sm:translate-x-[-320px]'}`}>
        <button
          className={"h-fit px-2 py-1 border-2 border-current border-solid border-l-0 rounded-r-2xl rounded-l-none text-sm bg-secondary -translate-x-0.5 sm:text-xl sm:px-3"}
          type={"button"}
          title={"Menú"}
          onClick={()=>props.setHideMenu(!props.hideMenu)}
        >
          <span className={`block transition-transform duration-700 ease-linear ${!props.hideMenu && 'rotate-y-180'}`}>&#62;</span>
        </button>
        <nav className="inline-block w-44 overflow-y-scroll border-2 border-current border-solid rounded-br-2xl bg-secondary sm:w-80">
          <ol className='p-4 module sm:p-6'>
            <li>Básico.
              <ol className='submodule'>
                {props.syllabus1.map( item =>
                  <MenuItems
                    key={item.id}
                    id={item.id}
                    path={item.path}
                    text={item.text}
                    subitem={item.subitem}
                    content={item.content}
                    activeStyle={activeStyle}
                  />
                )}
              </ol>
            </li>
            <li>Intermedio.
              <ol className='submodule'>
                {props.syllabus2.map( item =>
                  <MenuItems
                    key={item.id}
                    id={item.id}
                    path={item.path}
                    text={item.text}
                    subitem={item.subitem}
                    content={item.content}
                    activeStyle={activeStyle}
                  />
                )}
              </ol>
            </li>
          </ol>
        </nav>
      
      </div>
    </>
  )
}

function MenuItems(props){
  if(!props.subitem.length){
    return(
      <li><NavLink
        className={({ isActive }) => isActive ? props.activeStyle : 'no-underline' }
        to={props.path}
      >
        {props.text}.
      </NavLink></li>
    )
  } else if(props.subitem[0] === ''){
    return(<></>);
  } else {
    return(
      <li>
        {props.text}.
        <ol className='subsubmodule'>
          {props.subitem.map((item, index) =>
            <li
              key={`${props.id}.${index}`}
            ><NavLink
              className={({ isActive }) => isActive ? props.activeStyle : 'no-underline' }
              to={`/${item.toLowerCase().replace(' ', '-').replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u').replace('ñ', 'n')}`}
            >
              {item}.
            </NavLink></li>
          )}
        </ol>
      </li>
    );
  }
}