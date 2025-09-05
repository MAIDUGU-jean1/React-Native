import {View } from 'react-native'

const Spacer = ({ height = 40, width = "100%", ...props}) => {
    return (
        <View style={{ height, width }} {...props} />
    ); 
}

export default Spacer;
