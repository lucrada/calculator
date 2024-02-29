/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const lightTheme = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    changeThemeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    themeIcon: {
        width: 20,
        height: 20,
    },
    display: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    display_secondary: {
        width: '100%',
        paddingVertical: 15,
    },
    display_secondary_text: {
        color: '#000',
        textAlign: 'right',
        fontSize: 18,
        fontWeight: 'bold',
    },
    display_primary: {
        width: '100%',
        paddingVertical: 15,
    },
    display_primary_text: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    buttons: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        paddingBottom: 30,
        paddingVertical: 40,
        paddingHorizontal: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 70,
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonNormal: {
        marginRight: 10,
        backgroundColor: '#f8f8f8',
    },
    clearButton: {
        // backgroundColor: 'orange',
    },
    buttonNormalText: {
        color: '#000',
    },
    buttonOperator: {
        backgroundColor: '#f1eff0',
    },
    buttonOperatorText: {
        color: '#30da06',
    },
    buttonEquals: {
        backgroundColor: '#30da06',
    },
    buttonEqualsText: {
        color: '#000',
    },
});

export default lightTheme;
