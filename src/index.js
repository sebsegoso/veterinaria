import Mascota from './Mascota'

const Boton = document.getElementById("Boton");
Boton.addEventListener("click", () => {
    let mascota = new Mascota()

    if (mascota.nombreDueno === "" || mascota.direccion === "" || mascota.telefono === "" || mascota.nombreMascota === "" || mascota.especie === "" || mascota.motivo === "") {
        alert("Para ingresar la consulta correctamente debes completar todos los campos")
        return false
    }

    let lista = document.getElementById("Lista");
    lista.innerHTML = `<tr>
                    <td scope="row">${mascota.nombreDueno}</td>
                    <td scope="row">${mascota.direccion}</td>
                    <td scope="row">${mascota.telefono}</td>
                    <td scope="row">${mascota.nombreMascota}</td>
                    <td scope="row">${mascota.especie}</td>
                    <td scope="row">${mascota.motivo}</td>
                    <td scope="row">${mascota.id}</td>
                    </tr>` + lista.innerHTML;
})