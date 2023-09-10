export let titulo = "" 

export const upperCase = (props : any) =>{

      titulo = props.titulo
      .split(" ")
      .map((str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      })
      .join(" ");
}
