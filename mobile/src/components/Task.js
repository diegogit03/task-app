import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import moment from 'moment';
import 'moment/locale/pt-br';

import commonStyles from '../commonStyles';

export default props => {

	const doneOrNotStyle = props.doneAt != null ?
		{ textDecorationLine: 'line-through' } : {};

	const date = props.doneAt ? props.doneAt : props.estimatedAt;
	const formattedDate = moment(date).locale('pt-br')
		.format('ddd, D [de] MMMM');

	return (
		<View style={styles.container}>
			<View style={styles.checkContainer}>
				{getCheckView(props.doneAt)}
			</View>
			<View>
				<Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
				<Text style={styles.date}>{formattedDate}</Text>
			</View>
		</View>
	);
}

function getCheckView(doneAt) {
	if (doneAt != null) {
		return (
			<View style={styles.done}>
				<FontAwesome name="check" size={20}
					color='#FFF'/>
			</View>
		);
	} else {
		return (
			<View style={styles.pending}></View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#AAA',
		alignItems: 'center',
		paddingVertical: 10
	},
	checkContainer: {
		width: '20%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	pending: {
		height: 25,
		width: 25,
		borderRadius: 13,
		borderWidth: 1,
		borderColor: '#555'
	},
	done: {
		height: 25,
		width: 25,
		borderRadius: 13,
		backgroundColor: '#4D7031',
		alignItems: 'center',
		justifyContent: 'center'
	},
	desc: {
		color: commonStyles.colors.mainText
	},
	date: {
		color: commonStyles.colors.subText
	}
});
