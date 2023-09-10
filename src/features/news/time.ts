export let minutosTranscurridos = 0

export const time = (props: any) => {
  const ahora = new Date();
  minutosTranscurridos = Math.floor(
    (ahora.getTime() - props.fecha.getTime()) / 60000
  );
}