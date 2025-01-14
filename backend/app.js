// 1. Importar expres despúes de instalar su dependecia
const express = require('express');
// 2. Setear express
const app = express();
// 3. Declarar Puerto que usaremos
const port = 3000;
// 4. Importar body-parsers después de instalar su dependencia
const bodyParser = require('body-parser');
// 5. Setear body-parser en el middleware para leer el body de una solicitud HTTP
app.use(bodyParser.json());

// Entidad
let laptops = [
    {
        id: 1,
        marca: "Dell",
        procesador: "Intel Core i5",
        memoria: "8 GB",
        disco: "256 GB SSD"
    },
    {
        id: 3,
        marca: "Asus",
        procesador: "Intel Core i9",
        memoria: "32 GB",
        disco: "1 TB"
    },
    {
        id: 4,
        marca: "Acer",
        procesador: "AMD Ryzen 5",
        memoria: "12 GB",
        disco: "512 GB SSD"
    },
    {
        id: 5,
        marca: "MSI",
        procesador: "Intel Core i7",
        memoria: "16 GB",
        disco: "2 TB"
    }
];

// Middleware
app.use("/laptops", (req, res, next) => {
    console.log("Ingresa a middleware");
    console.log("Headers: ", req.headers);
    console.log("Body: ", req.body);
    next();
});

// GET
// Obtener todos los laptops
app.get("/laptops", (req, res) => {
    res.json(laptops);
});

//GET
// Obtener un laptop por ID
app.get("/laptops/:idParam", (req, res) => {
    const id = parseInt(req.params.idParam); // Obtner el de params y parsearlo a int
    //Con find buscamos si el elemento existe devuelve true o false
    const laptop = laptops.find(l => l.id === id); // Luego devuelve un elemento del array si existe, sino undefined

    // Status visible desde POSTMAN 
    // Si existe respondemos con el objeto encontrado en formato JSON
    if (laptop) {
        res.json(laptop);
    } else {
        res.status(404).send({ message: "Laptop no encontrada" }); // Si no existe respondemos con status 404 not found y un message
    }
});

// POST
// Crear un nuevo laptop
app.post("/laptops", (req, res) => {
    const newLaptop = req.body; // Recuperamos lo que se encuentra en el body de la petició POST
    // Asignaremos un id basado en el último elemento de la lista
    // 1. Verifica si el array tiene elementos
    // 2. Si el array no está vació obtiene el último elemento del array
    // 3. Se obtiene el último id de ese elemento y se suma 1 
    // 4. si no existe elementos entonces el id será 1
    newLaptop.id = laptops.length ? laptops[laptops.length - 1].id + 1 : 1;
    // Dinámicamente guardamos ese elemento en el array con su nuevo id
    laptops.push(newLaptop);
    // Respondemos con un código de estado 201 (Created) y enviamos el objeto newLaptop al cliente en formato JSON.
    res.status(201).json(newLaptop);
});

// PUT
// Actualizar un laptop por ID
app.put("/laptops/:idParam", (req, res) => {
    const id = parseInt(req.params.idParam); // Recuperamos el id de params y lo parseamos a int
    // Buscamos el índice del elemento en el array cuyo id coincide con el valor dado
    // Si se encuentra, devuelve el índice; si no, devuelve -1
    const index = laptops.findIndex(l => l.id === id);

    // Si se encontró entonces continuamos
    if (index !== -1) {
        // Actualizamos el elemento en la posición index del array laptops
        // 1. Mantenemos las propiedades originales del objeto actual (laptops[index])
        // 2. Sobrescribimos esas propiedades con los datos enviados en req.body
        // 3. Garantizamos que el id no cambie al asignarlo explícitamente
        laptops[index] = { ...laptops[index], ...req.body, id };
        // Respondemos al cliente devolviendo el elemento modificado
        res.json(laptops[index]);
    } else {
        // Status visible desde POSTMAN
        // Caso contrario respondemos con status 404 Not Found y un mensaje
        res.status(404).send({ message: "Laptop no encontrada" });
    }
});

// DELETE
// Eliminar un laptop por ID
app.delete("/laptops/:idParam", (req, res) => {
    const id = parseInt(req.params.idParam); // Recuperamos el id de params y lo parseamos a int
    // Buscamos el índice del elemento en el array cuyo id coincide con el valor dado
    // Si se encuentra, devuelve el índice; si no, devuelve -1
    const index = laptops.findIndex(l => l.id === id);

    // Si se encontró un elemento continuamos
    if (index !== -1) {
        // Eliminamos un elemento del array laptops usando splice
        // 1. El primer argumento (index) indica la posición del elemento a eliminar
        // 2. El segundo argumento (1) especifica que se eliminará un solo elemento
        // 3. Modifica el array original eliminando el elemento en la posición dada
        laptops.splice(index, 1);
        res.status(204).send();
    } else {
        // Status visible desde POSTMAN
        // Caso contrario respondemos con status 404 Not Found y un mensaje
        res.status(404).send({ message: "Laptop no encontrada" });
    }
});

// Listener
app.listen(port, () => {
    console.log(`Servicio iniciado en el puerto ${port}`);
});