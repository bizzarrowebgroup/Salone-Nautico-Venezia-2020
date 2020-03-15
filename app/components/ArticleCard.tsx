import * as React from "react";
import { View, StyleSheet, ImageSourcePropType, Image, Text } from "react-native";

interface ArticleProps{
    imageBg?: ImageSourcePropType;
    title?: string;
    date?: string;
}

const styles = StyleSheet.create({
    article: {
        width: 250,
        backgroundColor: "white",
        marginVertical: 25,
        marginHorizontal: 25,
        // borderRadius: 10
    },
    image: {
        width: "100%",
        height: 157,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10
    },
    title: {
        marginVertical: 10,
        marginLeft: 10,
        marginRight: 18,
        fontSize: 15,
        fontWeight: "800",
        color: "#001489"
    },
    data: {
        color: "#999999",
        fontSize: 10,
        fontWeight: "300",
        marginLeft: 10,
        marginBottom: 10
    },
    shadow: {
        elevation: 1,
        shadowColor: "black",
        shadowOffset: { width:0,height:0} ,
        shadowRadius: 8,
        shadowOpacity: .2
    }
})


const ArticleCard: React.FC<ArticleProps> = ({
    imageBg,
    title,
    date
}) => {
    return (
        <View style={[styles.article,styles.shadow]}>
            <Image source={imageBg} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.data}>{date}</Text>
        </View>
    );
};

ArticleCard.defaultProps = {
    imageBg: { uri:"https://picsum.photos/1500/750" },
    title: "Montagna e mare legati dai due sport più iconici",
    date: "03.03.2020"
}

export default ArticleCard;
