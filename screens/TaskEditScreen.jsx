import { Text, StyleSheet, View } from 'react-native';
import TaskEdit from '../components/TaskEdit';

export default function TaskEditScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.taskContainer}>
                <Text style={styles.title}>Editar Tarefa</Text>
                <TaskEdit />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    taskContainer: {
        paddingTop: 32,
        backgroundColor: "lightblue",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,
    },
})
