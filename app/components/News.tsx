import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import { ArticleCard } from "./index"

interface NewsProps{};

const styles = StyleSheet.create({
    Container: {
        marginHorizontal: 25,
        marginTop: 30
    },
    TitleText: {
        color: "#001489",
        fontSize: 30,
        fontWeight: "800"
    },
    subTitleText: {
        color: "#999999",
        fontSize: 23,
        fontWeight: "200"
    }
});


const News: React.FC<NewsProps> = () => {
    return (
        <>
        <View style={styles.Container}>
            <Text style={styles.TitleText}>{"News"}</Text>
            <Text style={styles.subTitleText}>{"Gli ultimi articoli"}</Text>
        </View>
        <ScrollView horizontal>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </ScrollView>
        </>
    );
};

export default News;
