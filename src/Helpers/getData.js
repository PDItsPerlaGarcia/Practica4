export const getData = async() => {

    const url = `http://scratchya.com.ar/react/datos.php`
    const resp = await fetch(url); 
    const  info  = await resp.json();
  
    return info;
}