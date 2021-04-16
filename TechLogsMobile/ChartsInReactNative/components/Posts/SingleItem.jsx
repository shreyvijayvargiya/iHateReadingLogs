import React, { pure } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

class SingleItem extends React.PureComponent{
    render(){
        return (
            <Card elevation={0} style={styles.card}>
                <Card.Content>
                    <Paragraph>{this.props.title}</Paragraph>
                </Card.Content>
            </Card>
        );
    };
};
export default SingleItem;

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#BEBCBC',
    }
})