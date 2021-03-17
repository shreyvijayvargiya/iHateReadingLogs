import React from 'react';
import { Button } from '@material-ui/core';

const CustomButton = (props) => {
    return (
        <div>
            <Button
                variant="contained"
                color={props.color}
            >
                {props.name}
            </Button>
        </div>
    );
};
export default CustomButton;
