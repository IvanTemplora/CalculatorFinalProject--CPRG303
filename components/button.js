import { TouchableOpacity } from "react-native"

export default function Button({numb, handleNumberInput}){
    return(
        <TouchableOpacity 
			style={styles.button} 
			onPress={() => handleNumberInput(numb)} 
		> 
			<Text style={styles.buttonText}>{numb}</Text> 
		</TouchableOpacity> 
    )
}

const styles = StyleSheet.create({ 
    button: { 
		flex: 1, 
		borderRadius: 50, 
		alignItems: 'center', 
		justifyContent: 'center', 
		backgroundColor: '#fff', 
		elevation: 3, 
		margin: 2, 
		padding: 15, 
	}, 
    buttonText: { 
		fontSize: 34, 
		color: '#333', 
	}, 
})