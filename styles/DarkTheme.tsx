/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const darkTheme = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    display: {
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: '#24273e',
        paddingHorizontal: 15,
        paddingVertical: 20,
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
    display_secondary: {
        width: '100%',
        paddingVertical: 15,
    },
    display_secondary_text: {
        color: '#fff',
        textAlign: 'right',
        fontSize: 18,
        fontWeight: 'bold',
    },
    display_primary: {
        width: '100%',
        paddingVertical: 15,
    },
    display_primary_text: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    buttons: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#151a30',
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
    },
    clearButton: {
        // backgroundColor: 'orange',
    },
    buttonNormalText: {
        color: '#fff',
    },
    buttonOperator: {
        backgroundColor: '#24273e',
    },
    buttonOperatorText: {
        color: '#fff',
    },
    buttonEquals: {
        backgroundColor: '#30da06',
    },
    buttonEqualsText: {
        color: '#fff',
    },
});

export default darkTheme;
