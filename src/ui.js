import { project } from "./projects";
import { toDoItem } from "./todoCreate";
import { format, parseISO, differenceInDays } from 'date-fns';


var projectArray=[];

const loadMain = () =>{
    const container=document.getElementById('content');
    const top=document.createElement('div');
    const sidebar=document.createElement('div');
    const main=document.createElement('div');
    const addButton=document.createElement('div');
    
    top.classList.add('top');
    sidebar.classList.add('sidebar');
    main.classList.add('main');
    addButton.classList.add('button')
    addButton.textContent='Add project'
    addButton.addEventListener('click',addProject);
    top.textContent='ToDo App';

    container.appendChild(top);
    container.appendChild(sidebar);
    container.appendChild(main);
    sidebar.appendChild(addButton)
    
    if(JSON.parse(localStorage.getItem('projectArray'))!=null){
        projectArray=JSON.parse(localStorage.getItem('projectArray'));
        console.log(projectArray);
        projectArray.forEach(elem=>{
            
    
        const sidebar=document.querySelector('div.sidebar');
        const newProj=document.createElement('div');
        
        newProj.classList.add('button');
        newProj.textContent='project';
        
        sidebar.appendChild(newProj);
        newProj.id=elem.array[1];
        console.log('wczytuje local');
        newProj.addEventListener('click',e=>{
        viewProject(elem);
    
        })
        
        });
        
    }
    

}






const addProject = () =>{
    const sidebar=document.querySelector('div.sidebar');
    const newProj=document.createElement('div');
    newProj.classList.add('button');
    newProj.textContent='project';
    sidebar.appendChild(newProj);
    projectArray.push(project());

    newProj.id=projectArray.length-1;
    
    projectArray[newProj.id].array.push('tytul');
    projectArray[newProj.id].array.push(newProj.id);
    //addTodo(projectArray[newProj.id].array,toDoItem('test2',newProj.id));
    addTodo(projectArray[newProj.id].array,toDoItem());
    newProj.addEventListener('click',e=>{
    viewProject(projectArray[newProj.id]);
    
    });

}

const addTodo = (array, toDo) =>{
    array.push(toDo);
    return {array};
}

const editToDo = () =>{
    document.querySelectorAll('input').forEach(elem=>elem.disabled=false)
    
}


const updateToDo = (index) => {
    console.log('updatetoDOpre')
    console.log(projectArray)

    projectArray[index]=[];
    projectArray[index]=project();
    
    projectArray[index].array[0]=document.querySelector('input.title').value;
    projectArray[index].array[1]=index;

    let toDos=document.querySelectorAll('div.container');
    toDos.forEach(elem=>{
        let item=elem.querySelectorAll('input');
        addTodo(projectArray[index].array,toDoItem(item[0].value,item[1].value,item[2].value));
    })

    //localStorage.setItem('projectArray', JSON.stringify(projectArray))
    //console.log('projectArray');
    //console.log(projectArray);

    //console.log('storage');
    //console.log(JSON.parse(localStorage.getItem('projectArray')));
    console.log('updatetoDOpre')
    console.log(projectArray)
    
    
}


const viewProject = (project) =>{

    console.log('vieproject');
    console.log(project);
    const main=document.querySelector('div.main');
    main.childNodes.forEach(elem=>elem.remove());

    const newProj=document.createElement('div');
    newProj.classList.add('project');
    newProj.id='viewProject'+project.array[1];
    main.appendChild(newProj);

    const title=document.createElement('input');
    title.value=project.array[0];
    title.classList.add('title');
    newProj.appendChild(title);

    project.array.forEach(elem=>{
        if(typeof(elem)!=='string'){
            let container=document.createElement('div');
            container.classList.add('container');
            newProj.appendChild(container);
            
            let item=document.createElement('input');
            container.appendChild(item);
            item.value=elem.title;

            let item2=document.createElement('input');
            container.appendChild(item2);
            item2.value=elem.descrip;

            let item3=document.createElement('input');
            item3.type='date';
            item3.value=elem.dueDate;
            container.appendChild(item3);
            
            let delButton=document.createElement('span')
            container.appendChild(delButton);
            delButton.classList.add('material-symbols-outlined');
            delButton.textContent='delete';
            delButton.addEventListener('click',e=>{
                container.remove();
                updateToDo(project.array[1]);
                });
            

        }
        document.querySelectorAll('input').forEach(elem=>elem.disabled=true);

    });

        let buttonSection=document.createElement('div');
        buttonSection.classList.add('projButtons')
        newProj.appendChild(buttonSection);


        let editProjectButton=document.createElement('span')
        buttonSection.appendChild(editProjectButton);
        editProjectButton.classList.add('material-symbols-outlined');
        editProjectButton.textContent='edit';
        editProjectButton.addEventListener('click',editToDo);

        let delProjectButton=document.createElement('span')
        buttonSection.appendChild(delProjectButton);
        delProjectButton.classList.add('material-symbols-outlined');
        delProjectButton.textContent='delete';
        delProjectButton.addEventListener('click',e=>{
            document.getElementById(project.array[1]).remove();
            document.getElementById('viewProject'+project.array[1]).remove();
            projectArray.splice([project.array[1]],1);

        });

        let addToDoButton=document.createElement('span')
        buttonSection.appendChild(addToDoButton);
        addToDoButton.classList.add('material-symbols-outlined');
        addToDoButton.textContent='Add';
        addToDoButton.addEventListener('click',e=>{
            
            updateToDo(project.array[1]);
            addTodo(projectArray[newProj.id.slice(-1)].array,toDoItem());
            viewProject(projectArray[newProj.id.slice(-1)]);
            editToDo();
        });

        let saveButton=document.createElement('span')
        buttonSection.appendChild(saveButton);
        saveButton.classList.add('material-symbols-outlined');
        saveButton.textContent='save';
        saveButton.addEventListener('click',e=>{

        updateToDo(project.array[1]);
        document.querySelectorAll('input').forEach(elem=>elem.disabled=true);
        localStorage.setItem('projectArray', JSON.stringify(projectArray));
        console.log('projectArray');
        console.log(projectArray);

        console.log('storage');
        console.log(JSON.parse(localStorage.getItem('projectArray')));

        projectArray.forEach(elem=>{
            
    
            const sidebar=document.querySelector('div.sidebar');
            sidebar.childNodes.forEach(elem2=>{
                if(elem2.textContent!=='Add project')elem2.remove()
            })
            const newProj=document.createElement('div');
            
            newProj.classList.add('button');
            newProj.textContent='project';
            
            sidebar.appendChild(newProj);
            newProj.id=elem.array[1];
            console.log('przelowanie butona');
            newProj.addEventListener('click',e=>{
            viewProject(elem);
        
            })
            
            });



        })



}






export {loadMain,viewProject};