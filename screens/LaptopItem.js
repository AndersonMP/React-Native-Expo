import { ListItem } from "@rneui/base"
import { TouchableHighlight } from "react-native"

export const LaptopItem = ({ item, navigation }) => {
    return (
        <TouchableHighlight
            onPress={() => {
                navigation.navigate('LaptopFormNav', { itemParam: item })
            }}
        >
            <ListItem bottomDivider>
                <ListItem.Title>{item.marca} {item.procesador}</ListItem.Title>
                <ListItem.Subtitle>{item.memoria} {item.disco}</ListItem.Subtitle>
            </ListItem>
        </TouchableHighlight>
    )
}
