//MODELO como en netbeans
//Clase lleva primera letra mayuscula
class Configuracion {
    //TAMBIEN PUEDEN CREAR VARIABLES AFUERA DEL CONSTRUCTOR
    ID = 0;
    iva = .16;
    //Contructor en un obj: Inicializa variables
    constructor(pAudio, pSonido, pDificultad) {
        // var nombre = ""; //Variable local
        /*
        Propiedades estáticas
        Producto.nombre = ""; 
         Producto.detalle = ";
         Producto.precio = 0;*/

        //FORMA CORRECTA
        this.Audio = pAudio;
        this.Sonido = pSonido;
        this.Dificultad = pDificultad;

    }
    //OTROS CONSTRUCTORES
    static CrearProductoSinDetalle(pNombre, pPrecio) {

        var producto = new Producto(pNombre, "", pPrecio);

        return producto;
    }

    static CrearProductoConNombre(pNombre) {
        var producto = new Producto(pNombre, "", 0);

        return producto;
    }

    static CrearProducto() {
        var producto = new Producto("", "", 0);

        return producto;
    }

    //FUNCIONES
    obtenerPrecioFinal() {
        return this.precio + (this.precio * this.iva);
    }

}