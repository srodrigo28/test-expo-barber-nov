import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCutSharp } from 'react-icons/io5'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function App(){
    return(
        <View style={styles.container}>
            {/* HEADER TOP */}
            <View style={styles.header}>
                <View style={styles.logo}>
                    <IoCutSharp style={styles.cutLogo} />
                    <Text style={styles.cutText}>TDW</Text>
                    <Text style={styles.cutText1}>BARBER</Text>
                </View>
                 <Pressable>
                    <GiHamburgerMenu size={30} color='white' />
                </Pressable>
            </View>

            {/* TITULO */}

            {/* PESQUISA */}

            {/* CATEGORIAS BUTTONS */}

            {/* VITRINE SCROLL */}
        </View>
    )
}

// iniciando estilizações
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'black',
    },
    header:{
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1d1d1d'
    },
    logo:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    cutLogo:{
        height: 30,
        width: 30,
        color: '#5511dd',
    },
    cutText:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#5511dd'
    },
    cutText1:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#cccccc'
    },
    btnHeader: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'black',
    },
})