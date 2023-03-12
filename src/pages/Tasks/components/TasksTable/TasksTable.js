//import { useContext } from 'react';
import { useSelector } from 'react-redux';
// import { TasksContext } from '../../../Contexts/TasksContext';
import TaskRow from './TaskRow';
import style from './TasksTable.module.css';

const TasksTable = () => {

	// const { tasksData } = useContext(TasksContext);
	const tasksData = useSelector(state => state.tasks);

	return (
		<div className={ style['tasks-table-container'] }>
			<table className={ style['tasks-table'] }>
				<thead>
					<tr>
						<th>Statut :</th>
						<th>Titre :</th>
						<th>Description :</th>
						<th>Créé à :</th>
						<th>Temps :</th>
						<th>Actions :</th>
					</tr>
				</thead>
				<tbody>
					{
						tasksData && tasksData.tasks && tasksData.tasks.map((task, index) => (
							<TaskRow key={ task.createdAt - index } task={ task } index={ index } />
						))
					}
				</tbody>
			</table>
		</div>
	);
};

export default TasksTable;