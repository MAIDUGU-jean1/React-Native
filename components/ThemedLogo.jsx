import {Image, useColorScheme} from 'react-native'
/// importing the images 
import DarkLogo from '../assets/DarkLogo.png'
import LightLogo from '../assets/icon.png'

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

    return (
        <Image source={logo} {...props} />
    );
}

export default ThemedLogo;
