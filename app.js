import ProductManager from "./manager/ProductManager.js";

const manager = new Products ('./files/Productos.json');

const env = async () => {
    const usuarios = await manager.getUsers();
    console.log(usuarios);
    
    const user = {
        nombre: 'Ignacio',
        apellido: 'Bruno',
        edad: 33,
        curso: 'Backend'
    };

    await manager.createUsers(user);

    const usersResult = await manager.getUsers();
    console.log(usersResult);
}

env();