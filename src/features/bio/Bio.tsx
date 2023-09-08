import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";  
import { ButtonStyle, ContainerButtonStyle, ContainerStyle, DescriptionStyle, ImgStyle, NameStyle } from "./styled"    

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <ButtonStyle
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        $Active= {bioActiva.id === nombre}
      >
        {nombre}
      </ButtonStyle>
    ));
  };

  return (
    <ContainerStyle>
      <ContainerButtonStyle>{crearBotones()}</ContainerButtonStyle>
      <div>
        <div>
          <ImgStyle
            src={bioActiva.image}
            alt={bioActiva.nombre}
          />
        </div>
        <div>
          <NameStyle>{bioActiva.nombre}</NameStyle>
          <DescriptionStyle>{bioActiva.descripcion}</DescriptionStyle>
        </div>
      </div>
    </ContainerStyle>
  );
};

export default Bio;
