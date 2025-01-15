import { useState } from "react";
import { Alert } from "react-native";
import { saveLaptopRest, updateLaptopRest } from "../rest_client/laptops";

export const useSaveLaptop = (onSuccess, laptop = null) => {
    const [marca, setMarca] = useState(laptop?.marca || "");
    const [procesador, setProcesador] = useState(laptop?.procesador || "");
    const [ram, setRam] = useState(laptop?.memoria || "");
    const [disco, setDisco] = useState(laptop?.disco || "");

    const showMessage = () => {
        Alert.alert("ÉXITO", laptop ? "Laptop Actualizada" : "Latpop guardada.");
    }

    const saveLaptop = async () => {
        if (!marca || !procesador, !ram, !disco) {
            Alert.alert("ERROR", "Todos los campos son obligatorios.");
            return
        }

        try {
            saveLaptopRest({ marca, procesador, ram, disco }, showMessage);
            if (onSuccess) onSuccess();

        } catch (error) {
            Alert.alert("Error", "Hubo un problema al guardar la laptop.");
        }
    };

    const updateLaptop = async () => {
        try {
            updateLaptopRest(
                { id: laptop.id, marca, procesador, ram, disco },
                showMessage
            );
            if (onSuccess) {
                onSuccess();
            }
        } catch (error) {
            Alert.alert("Error", "Hubo un problema al actualizar la laptop.");
        }
    }

    return {
        marca,
        procesador,
        ram,
        disco,
        setMarca,
        setProcesador,
        setRam,
        setDisco,
        saveLaptop,
        updateLaptop
    }
}