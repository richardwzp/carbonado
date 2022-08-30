import React from 'react';
import Grid from '@mui/material/Grid';
// import CommonButton from "../../component/common/CommonButton";
import Button from '@mui/material/Button'

const Authentication = () => {
    const buttonStyle = {
        fontSize: 20,
        fontWeight: 700,
        backgroundColor: "blue",
        '&:hover': {
            backgroundColor: "yellow"
        }
    }
    const pageStyle = {
    backgroundColor: "blue"
    }

    return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Grid item xs={8} sx={pageStyle}>
	this is an authentication page.
	<Button variant="outlined" sx={buttonStyle}>Text</Button>
    </Grid>);

};



export default Authentication;

