import { useState } from "react";
import { Alert } from "react-native";
import { saveLaptopRest } from "../rest_client/laptops";

export const useSaveLaptop = (onSuccess) => {
    const [marca, setMarca] = useState();
    const [procesador, setProcesador] = useState();
    const [ram, setRam] = useState();
    const [disco, setDisco] = useState();

    const showMessage = () => {
        Alert.alert("ÉXITO", "Latpop guardada.");
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

    return {
        marca,
        procesador,
        ram,
        disco,
        setMarca,
        setProcesador,
        setRam,
        setDisco,
        saveLaptop
    }
}