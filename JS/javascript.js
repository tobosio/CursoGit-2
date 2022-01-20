console.log(a); // Undefined
console.log(b); // Undefined
console.log(c); // Undefined
console.log(d); // Undefined

console.log(c === d); // true ---> ya que undefined = undefined

console.log(undefined == null); // true,---> se compara un vacio o ausencia de datos
console.log(undefined === null); // false ---> ya que valor es igual pero el tipo de dato es diferente

//El código arriba escrito corre y arroja esos valores siempre y cuando las variable a,b,c,d
//sean creadas después como en este caso; de lo contrario se genera un error y se detiene la
//interpretación del programa


 var b = "Alberto";
 var c = 1;
 var d = 2;
 var a=5;

console.log(b); //Alberto

b = null;
console.log(b); //null

a = undefined;
console.log("Valor de a: ", a); //undefined

// Nota: Estos valores de las variables se pueden cambiar en consola temporalmente pero no se
//guardaran en el archivo original o programa que las creo
console.log("Nuevo valor de a: ",a);
console.log("ültima modificación");
