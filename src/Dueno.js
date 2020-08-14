class Dueno {
    constructor() {
        this.nombreDueno = document.getElementById("Dueno").value 
        this.direccion = document.getElementById("Direccion").value 
        this.telefono = document.getElementById("Telefono").value 
        this.id = Date.now()
    }
    datosMascota(){
        return{
            animalNombre : document.getElementById("Nombre").value ,
            animalEspecie : document.getElementById("Especie").value ,
            animalMotivo : document.getElementById("Motivo").value 
        }
    }
}

export default Dueno