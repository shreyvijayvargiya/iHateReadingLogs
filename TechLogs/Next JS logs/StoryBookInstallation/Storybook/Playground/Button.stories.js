import React from 'react';
import { CustomButton } from '../Components';
import { storiesOf } from '@storybook/react';
import { Grid } from '@material-ui/core';

export const DefaultButton =  ({ name, color }) => { return ( <CustomButton name={name} color={color} /> )};

const Buttons = () => {
    const buttonTypes = ['primary', 'secondary', 'default']
    return(
        <Grid container spacing={2}>
            {buttonTypes.map(item => {
                return (
                    <Grid item lg={4} md={4} sm={4}>
                        <CustomButton fullWidth name={`Custom ${item} Button`} color={item} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

storiesOf('Components', module).add('Default Button', () => <CustomButton name="Default Button" />);
storiesOf('Components', module).add('Primary Button', () => <CustomButton name="Default Button" color="primary" />);
storiesOf('Components', module).add('Secondary Button', () => <CustomButton name="Secondary Button" color="secondary" />);
storiesOf('Components', module).add('All Buttons', () => <Buttons />);