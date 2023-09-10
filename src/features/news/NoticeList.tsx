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
import { INoticiasNormalizadas } from "./notices.types";
import { useEffect, useState } from "react";
import { obtenerNoticias } from "./fakeRest";
import { upperCase, titulo } from "./toUpperCase";
import { minutosTranscurridos, time } from "./time";

const NoticeList = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();
      const data = respuesta.map((n) => {
        
        upperCase(n)
        time(n)

        return {
          id: n.id,
          titulo,
          descripcion: n.descripcion,
          fecha: `Hace ${minutosTranscurridos} minutos`,
          esPremium: n.esPremium,
          imagen: n.imagen,
          descripcionCorta: n.descripcion.substring(0, 100),
        };
      });

      setNoticias(data);
    };

    obtenerInformacion();
  }, []);

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