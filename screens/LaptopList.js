import { View, StyleSheet, Text, FlatList } from "react-native"
import { useLaptop } from "../hooks/useLaptop";
import { LaptopItem } from "./LaptopItem";
import { Button, FAB } from "@rneui/base";

export const LaptopList = ({navigation}) => {
    const { data, loadLaptops } = useLaptop();
    return (
        <View style={styles.container}>
            <Text>LISTA DE LAPTOPS</Text>
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <LaptopItem item={item} />}
            />
            <FAB
                title="+"
                placement="right"
                onPress={()=> navigation.navigate('LaptopFormNav')}
            />
            <Button
                title="Consultar"
                onPress={loadLaptops}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 15
    },
});
