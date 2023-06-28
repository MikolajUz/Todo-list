import './style.css';
import {toDoItem} from './todoCreate.js';
import { project } from './projects';
import {loadMain,viewProject} from './ui';
import { formatDistance, subDays } from 'date-fns'



//console.log(new Date);
//const task=toDoItem('silk','robimy lapy', Date(),'important','','unchecked');
//const task2=toDoItem('IT','checklist',Date(),'unimport','','checked');

//const project1=project(task);
loadMain();
//project(task2);

//console.log(project());

//console.log(task.checklist);
