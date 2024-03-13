export default function Todo({task, isDone}){
    return(
        <li> {isDone==='true' ? 'finished' : 'work on'} : {task}</li>
    )
}