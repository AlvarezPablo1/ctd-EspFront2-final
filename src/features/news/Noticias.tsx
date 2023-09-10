import { ContenedorNoticias, TituloNoticias } from "./styled";
import NoticeList from "./NoticeList";



const Noticias = () => {
  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <NoticeList/>
    </ContenedorNoticias>
  );
};

export default Noticias;
