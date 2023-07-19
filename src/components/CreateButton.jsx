export const CreateButton = (props) => {
  
  return (
    <>
      <button 
        className={`
          px-2 py-1 bg-primary border-2 border-current border-solid rounded-xl text-sm
          transition ease-in-out duration-100 
          active:translate-y-0.5 active:scale-95
          hover:bg-shadow 
          ${props.className}
          sm:px-2 sm:py-1 sm:font-medium sm:text-base`} 
        type = {props.type}
        title = {props.title}
        onClick={props.onClick}
      >
        {props.content}
      </button>
    </>
  );
}