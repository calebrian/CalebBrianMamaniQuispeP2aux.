function transformarATipos(arr) {
    const tiposDeDatos = [];

    for (const elemento of arr) {
        tiposDeDatos.push(typeof elemento);
    }

    return tiposDeDatos;
}