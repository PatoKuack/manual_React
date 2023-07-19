import { useParams } from 'react-router-dom';
import {NotFound} from '../pages/NotFound';
import { PageR2 } from '../pages/PageR2';

export const Content = ( props ) => {

  const { slug } = useParams();

  function findContent() {
    let content;
    if(props.syllabus1 && props.syllabus1.find(item => item.path === slug)) {
      content = props.syllabus1.find(item => item.path === slug);
    } else if(props.syllabus2 && props.syllabus2.find(item => item.path === slug)) {
      content = props.syllabus2.find(item => item.path === slug);
    } else if(slug == undefined) {
      return <PageR2 />
    } else {
      // console.warn("Revisa el código del Content");
      return <NotFound />
    }
    return(content.content)
  }
  
  return (
    <>
      {findContent()}
    </>
  )
}
