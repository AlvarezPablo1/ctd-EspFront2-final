import {
  TarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  ListaNoticias,
  BotonLectura,
} from "./styled";
import Modal from "./Modal";
import useNew from "./useNew";


const NoticeList = () => {

  const {modal, noticias, setModal} = useNew()

  return (
    <ListaNoticias>
    {noticias.map((n) => (
      <TarjetaNoticia>
        <ImagenTarjetaNoticia src={n.imagen} />
        <TituloTarjetaNoticia>{n.titulo}</TituloTarjetaNoticia>
        <FechaTarjetaNoticia>{n.fecha}</FechaTarjetaNoticia>
        <DescripcionTarjetaNoticia>
          {n.descripcionCorta}
        </DescripcionTarjetaNoticia>
        <BotonLectura onClick={() => setModal(n)}>Ver más</BotonLectura>
      </TarjetaNoticia>
    ))}
      <Modal modal={modal} setModal={setModal}/>
  </ListaNoticias>
  )
}
export default NoticeList