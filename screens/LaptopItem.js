import { ListItem } from "@rneui/base"

export const LaptopItem = ({ item }) => {
    return (
        <ListItem bottomDivider>
            <ListItem.Title>{item.marca} {item.procesador}</ListItem.Title>
            <ListItem.Subtitle>{item.memoria} {item.disco}</ListItem.Subtitle>
        </ListItem>
    )
}
