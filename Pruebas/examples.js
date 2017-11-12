/*codigo de nuestra función*/
function generateBC(url, separator) {
 //crea acronimo   
    function acronimo(palabras){
        var acronimo="";
        //Separamos por - y filtramos el index con las palabras a eliminar
        palabras=urlSeparada[i].split("-").filter(eliminar=> !/^(the|of|in|from|by|with|and|or|for|to|at|a)$/gi.test(eliminar));
        console.log("No Eliminadas-----"+palabras);
        //Hago la función acronimo, cojo las primera letra de cada palabra, la pongo en mayusculas y las uno en una palabra y lo añado a menu
    
        for(var j=0; j<palabras.length; j++){
            var aux=palabras[j].charAt(0);
            acronimo+=aux.toUpperCase(); 
        }
            console.log ("acronimo-----------" + acronimo);
            return acronimo;
}
    
    
  /*Quito el http[s]://, el index y las terminaciones .html|.htm|.php|.asp y 
  respetando los simbolos . y - sustituyo el resto por espacio vacio*/
  var urlConSeparador=url.replace(/^http[s]?:\/\//, '').replace(/\/index\..+/, '')
   .replace(/.html|.htm|.php|.asp/g, '').replace(/www./,'').replace(/\?.+|#.+/gi, '').replace(/\/$/, "");
  console.log("1. --Con separador--- "+ urlConSeparador);
   
  //Divido la url en "palabras"
  var urlSeparada=urlConSeparador.split("/");
  console.log("2. --Separada--- "+urlSeparada);     

  
  var contadorLetras=0;
  var texto = ""
  var link="/";
  var menu= ""
  //Si la url solo tiene un index la sustituyo por '<span class="active">HOME</span>'  
  if(urlSeparada.length === 1){
  urlSeparada= '<span class="active">HOME</span>';
    menu+=urlSeparada;
  } else{
  //Si la url tiene mas de 1 index entra aqui
    for(var i=0; i<urlSeparada.length; i++){
    //sustituimos el index0 del array por '<a href="/">HOME</a> '+separator
      if(urlSeparada[i]===urlSeparada[0]){
          urlSeparada[0]='<a href="/">HOME</a>'+separator;
          menu+=urlSeparada[0];
          
         /*Si el index no es 0 y no es la posición última del array hacemos:*/
      } else if(i!=0 && i<urlSeparada.length-1){
        var palabras = urlSeparada[i];

       // - Contamos las palabras 
        if(urlSeparada[i].length>30){
            link+=palabras+"/";   
            var acro=acronimo(palabras);
            menu+="<a href=\""+link+"\">"+acro+"</a>"+separator;
        //Si es menor de 30, remplazo los - por espacios en blanco y paso a mayusculas.
        } else{
          link += palabras+"/";
          texto = palabras.replace(/-/g, ' ');
          menu+="<a href=\""+link+"\">"+texto.toUpperCase()+"</a>"+separator;
        }
        //Si la última parte de la url es mayor de 30, acronimo y poner span
      }else{
          var ultima = urlSeparada[i];
          if(ultima.length>30){
              var acro=acronimo(ultima);
              console.log("Acronimo------- "+acro);
              urlSeparada[i]='<span class="active">'+acro+'</span>';
            menu+=urlSeparada[i];
            }else{
               //en la última posición del array no mayor a 30 sustituyo por '<span class="active">'+enlaceMayus[i]+'</span>'
                urlSeparada[i]='<span class="active">'+urlSeparada[i].replace(/-/g, ' ').toUpperCase()+'</span>';
                menu+=urlSeparada[i];
             }
        }
      console.log(urlSeparada[i]);
    }  
  } 
    return menu;  
}


// Node: make the functions public:
if (typeof(module) != 'undefined'){
   module.exports = {
      average: average,
      add: add
   };
}

