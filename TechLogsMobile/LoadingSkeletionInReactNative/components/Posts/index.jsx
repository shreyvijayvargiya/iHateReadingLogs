import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Title, Divider, Paragraph, Button } from 'react-native-paper';
import SingleItem from './SingleItem';
import axios from 'axios';
import Footer from './Footer';
import SkeletonContent from 'react-native-skeleton-content';


const AppComponent = ({ users }) => {
    const [ posts, setPost] = React.useState([]);
    const [loader, setLoader] = React.useState(false);

    const fetchPosts = () => {
        setLoader(true);
        setTimeout(async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            setPost(response.data);
            setLoader(false)
        }, 2000)
    }
    React.useEffect(() => {
        fetchPosts();
    }, [ ]);
    
    const handleRefresh = () => {
       fetchPosts()
    };
    const loadingPost = new Array(10);
    return (
        <View style={styles.root}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Title style={styles.heading}>Todo List</Title>
            </View>
            <ScrollView>
                {loader ?
                    loadingPost.fill(10).map(item => {
                        return (
                            <SkeletonContent
                                containerStyle={{ flex: 1, width: 300 }}
                                isLoading={loader}
                                layout={[
                                    { 
                                        key: 'someId', 
                                        width: Dimensions.get('window').width *.97, 
                                        height: 60, 
                                        marginTop: 10, 
                                        marginBottom: 10,  
                                        marginRight: 4,
                                        marginLeft: 6
                                    },
                                ]}
                            />
                        )
                    })
                :
                    posts.map(item => <SingleItem key={item.id} title={item.title} />)
                }
            </ScrollView>
            <Button onPress={() => handleRefresh()}>Refresh</Button>
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