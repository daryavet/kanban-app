import React from 'react';
import {LIST_TYPES} from '../../config'
import css from './footer.module.scss'

function Footer(props) {
	const {tasks} = props
	return (
		<footer className={css.footer}>
			<div className={css.classNums}>
				<div>Active tasks:
					{' ' + tasks.filter(task => task.status === LIST_TYPES.BACKLOG).length}
				</div>
				<div>Finished tasks:
					{' ' + tasks.filter(task => task.status === LIST_TYPES.FINISHED).length}
				</div>
			</div>
			<div className={css.user}>
				Kanban board by
				Daria Vetlugina, 2023
			</div>
		</footer>
	)
}

export default Footer