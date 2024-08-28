const areaTexto = document.querySelector(".text-area");
const mensaje = document.querySelector(".respuesta");

// Función para encriptar el texto
function encriptar(stringEn) {
    const matrizReglas = [
        ["a", "1"],
        ["b", "2"],
        ["c", "3"],
        ["d", "4"],
        ["e", "5"],
        ["f", "6"],
        ["g", "7"],
        ["h", "8"],
        ["i", "9"],
        ["j", "10"],
        ["k", "11"],
        ["l", "12"],
        ["m", "13"],
        ["n", "14"],
        ["o", "15"],
        ["p", "16"],
        ["q", "17"],
        ["r", "18"],
        ["s", "19"],
        ["t", "20"],
        ["u", "21"],
        ["v", "22"],
        ["w", "23"],
        ["x", "24"],
        ["y", "25"],
        ["z", "26"]
    ];
    stringEn = stringEn.toLowerCase();
    matrizReglas.forEach(([letra, codigo]) => {
        stringEn = stringEn.split(letra).join(codigo);
    });
    return stringEn;
}

// Función para desencriptar el texto
function desencriptar(stringDes) {
    const matrizReglas = [
        ["a", "1"],
        ["b", "2"],
        ["c", "3"],
        ["d", "4"],
        ["e", "5"],
        ["f", "6"],
        ["g", "7"],
        ["h", "8"],
        ["i", "9"],
        ["j", "10"],
        ["k", "11"],
        ["l", "12"],
        ["m", "13"],
        ["n", "14"],
        ["o", "15"],
        ["p", "16"],
        ["q", "17"],
        ["r", "18"],
        ["s", "19"],
        ["t", "20"],
        ["u", "21"],
        ["v", "22"],
        ["w", "23"],
        ["x", "24"],
        ["y", "25"],
        ["z", "26"]
    ];
    stringDes = stringDes.toLowerCase();
    matrizReglas.forEach(([letra, codigo]) => {
        stringDes = stringDes.split(codigo).join(letra);
    });
    return stringDes;
}

// Función para manejar el botón de encriptar
function bnEncriptar() {
    try {
        const txtEncriptado = encriptar(areaTexto.value);
        mensaje.value = txtEncriptado;
    } catch (error) {
        console.error("Error al encriptar:", error);
    }
}

// Función para manejar el botón de desencriptar
function bnDesencriptar() {
    try {
        const txtDesencriptado = desencriptar(areaTexto.value);
        mensaje.value = txtDesencriptado;
    } catch (error) {
        console.error("Error al desencriptar:", error);
    }
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            alert("Texto copiado");
        })
        .catch(err => {
            console.error("Error al copiar:", err);
        });
}