import React from 'react';
import { Routes, Route } from 'react-router'
import Board from '../app-board/Board'
import TaskDetail from '../app-task-detail/TaskDetail'
import css from './Main.module.scss'

const Main = (props) => {
	return (
		<main className={css.main}>
			<Routes>
				<Route path='/' element={<Board {...props} />} />
				<Route path='tasks/:taskId' element={<TaskDetail {...props} />} />
			</Routes>
		</main>
	)
}

export default Main