import React from 'react';
import "@fontsource/abril-fatface";
import Typography from "@mui/material/Typography";
const Greeting = ({children}: any) => {
const homeStyle = {
    fontFamily: "Abril Fatface",
    fontSize: 20,
    color: "white",

}
   return (
      <Typography sx={homeStyle}>{children}</Typography>
   )
}


export default Greeting