import Dueno from './Dueno'

const dueno = new Dueno();
class Mascota extends Dueno {
    constructor() {
        super()
        this.nombreMascota = dueno.datosMascota().animalNombre
        this.especie = dueno.datosMascota().animalEspecie
        this.motivo = dueno.datosMascota().animalMotivo
    }
}

export default Mascota