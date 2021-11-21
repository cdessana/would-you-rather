import { Component } from "react";
import PropTypes from 'prop-types'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

class TabPanel extends Component {

    static propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    }

      
    render(){

        const { children, value, index, ...other } = this.props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                <Box sx={{ p: 3 }}>
                    {/* <Typography>{children}</Typography> */}
                    {children}
                </Box>
                )}
            </div>
            );
    }
    
}

export default TabPanel


  

