import { Button, Input } from "@rneui/base";
import { View, StyleSheet, Alert } from "react-native"
import { useSaveLaptop } from "../hooks/useSaveLaptop";

export const LaptopForm = ({ navigation }) => {
    const { marca, procesador, ram, disco, setMarca, setProcesador, setRam, setDisco, saveLaptop } = useSaveLaptop(() => navigation.goBack());
    return (
        <View style={styles.container}>
            <Input
                value={marca}
                placeholder="Marca"
                onChangeText={setMarca}
            />
            <Input
                value={procesador}
                placeholder="Procesador"
                onChangeText={setProcesador}
            />
            <Input
                value={ram}
                placeholder="RAM"
                onChangeText={setRam}
            />
            <Input
                value={disco}
                placeholder="Disco"
                onChangeText={setDisco}
            />
            <Button
                title="GUARDAR"
                onPress={saveLaptop}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    }
});