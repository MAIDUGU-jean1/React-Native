import {View } from 'react-native'

const Spacer = ({height = "100%", width = 16, ...props}) => {
    return (
        <View style={{ height, width }} {...props} />
    ); 
}

export default Spacer;
