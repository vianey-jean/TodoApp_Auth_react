import { useState } from "react";
import { useDispatch } from 'react-redux';
import { parseSecondsToHMS } from '../../../../utils/time';
// import { TasksContext } from "../../../Contexts/TasksContext";
import { removeTask, toggleTaskIsDone } from '../../../../store/TasksSlice';
import Button from "../../../../composant/UI/Button/Button";
import Modal from "../../../../composant/UI/Modal/Modal";
import TaskForm from "../TaskForm";
import TaskTimer from "../TaskTimer/TaskTimer";

const TaskRow = ({ task, index }) => {

	// eslint-disable-next-line no-undef
	const [ isEditTaskModalOpen, setIsEditTaskModalOpen ] = useState(false);
	// eslint-disable-next-line no-undef
	const [ isTimerModalOpen, setIsTimerModalOpen ] = useState(false);
	
	// const { removeTask, toggleTaskIsDone } = useContext(TasksContext);
	const dispatch = useDispatch();

	const handleDeleteTask = () => {
		dispatch(removeTask(index));
	}

	const handleChangeStatus = (event) => {
		const value = event.target.checked;
		dispatch(toggleTaskIsDone({ taskIndex: index, isDone: value }));
	}

	return (
		<>
			<tr>
				<td>
					<input type="checkbox" checked={ task.isDone } onChange={ handleChangeStatus } />
				</td>
				<td>
					{ task.title }
				</td>
				<td>
					{ task.description }
				</td>
				<td>
					{ new Date(task.createdAt).toLocaleDateString() }
				</td>
				<td>
					{ task.time && parseSecondsToHMS(task.time) }
				</td>
				<td style={{ display: 'flex', gap: 4, justifyContent: 'end' }}>
					<Button onClick={ () => setIsTimerModalOpen(true) }>Lancer le chrono</Button>
					<Button variant="danger" onClick={ handleDeleteTask }>Supprimer</Button>
					<Button onClick={ () => setIsEditTaskModalOpen(true) }>Modifier</Button>
				</td>
			</tr>
			<Modal isOpen={ isEditTaskModalOpen } setIsOpen={ setIsEditTaskModalOpen } title={ task.title }>
				<TaskForm closeModal={() => setIsEditTaskModalOpen(false) } value={{ title: task.title, description: task.description }} index={ index } />
			</Modal>
			<Modal isOpen={ isTimerModalOpen } setIsOpen={ setIsTimerModalOpen } title={ task.title }>
				<TaskTimer index={ index } onCloseModal={ () => setIsTimerModalOpen(false) } />
			</Modal>
		</>
	)
};

export default TaskRow;