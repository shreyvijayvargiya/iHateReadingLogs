import React from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Title, Divider } from 'react-native-paper';
import SingleItem from './SingleItem';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';


const AppComponent = ({ users }) => {
    const [posts, setPost] = React.useState([]);
    const [activeData, setActiveData] = React.useState([]);
    const [scrollIndex, setScrollIndex] = React.useState(1);

    const fetchPosts = async() => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${scrollIndex}`);
        setActiveData(response.data.slice(0, 10));
        setPost(response.data);
    }
    React.useEffect(() => {
        fetchPosts();
    }, [ ]);

    const fetchNextItems = async() => {
        if(scrollIndex <= 9){
            setScrollIndex(scrollIndex + 1);
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${scrollIndex + 1}`);
            const newArray = [ ...activeData, ...response.data];
            setActiveData(newArray);
        }else {
            return
        }
    };


    return (
        <View style={styles.root}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Title style={styles.heading}>Todo List</Title>
            </View>
            <FlatList 
                data={activeData}
                style={styles.list}
                ItemSeparatorComponent={() => <Divider />}
                keyExtractor={item => item.id }
                initialNumToRender={10}
                onEndReachedThreshold={0.7}
                onEndReached={() => fetchNextItems()}
                ListFooterComponent={scrollIndex <= 10 && scrollIndex >= 1 && <Text>Loading</Text> }
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <SingleItem title={item.title} />}
            />
            <View style={styles.footer}>
                <Footer />
            </View>
        </View>
    )
};
export default AppComponent;

const styles = StyleSheet.create({
    list: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height *0.86,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 0,
    },
    root: {
        marginBottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    heading: {
        textAlign: 'center',
        marginTop: 24
    },
    header: {
        padding: 10,
        backgroundColor: '#FDA085',
        width: Dimensions.get('window').width
    },
})