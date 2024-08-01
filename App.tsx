import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Modal, Text, View } from 'react-native';

import Scanner from './src/components/Scanner';

export default function App() {
	const [modalVisible, setModalVisible] = React.useState(false);

	return (
		<View style={styles.container}>
			<Modal visible={modalVisible} animationType='fade' onRequestClose={() => setModalVisible(false)}>
				<View style={styles.modal}>
					<Scanner />
					<Button title='Cancelar' onPress={() => setModalVisible(false)} />
				</View>
			</Modal>

			<StatusBar style="auto" />
			<Button title='Escanear' onPress={() => setModalVisible(true)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modal: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'lightgrey',
	}
});
