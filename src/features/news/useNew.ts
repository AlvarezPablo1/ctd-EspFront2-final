import { useEffect, useState } from "react";
import { INoticiasNormalizadas } from "./notices.types";
import { obtenerNoticias } from "./fakeRest";
import { upperCase, titulo } from "./toUpperCase";
import { minutosTranscurridos, time } from "./time";

const useNew = () => {
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

  return {noticias, setNoticias, modal, setModal}
}
export default useNew