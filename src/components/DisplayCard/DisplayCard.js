import './DisplayCard.css';


const DisplayCard = (props) =>{
    const {
        post,
        todo,
        user,
        request
    } = props;


    const showPosts = () =>{
        // console.log(post)
        return(
            <div className='card'>
                <p>{`Post ${post.id} by User ${post.userId}`}</p>
                <p>{ post.title}</p>
                <p>{ post.body}</p>
            </div>
        )
    }
    const showTodos = () =>{
        // console.log(todo)
        return(
            <div className='card'>
                <p>{`Todo ${todo.id} by User ${todo.userId}`}</p>
                <p>{ todo.title}</p>
                <p>{ `Completion Status: ${todo.completed}`}</p>
            </div>
        )    
    }
    const showUsers = () =>{
        // console.log(user)
        return(
            <div className='card'>
                <p>{`id: ${user.id}`}</p>
                <p>{`name: ${user.name}`}</p>
                <p>{`userName: ${user.userName}`}</p>
                <p>{`email: ${user.email}`}</p>

            </div>
        )       
    }

    return(
        <div>
            {request === 1 && showPosts()}
            {request === 2 && showTodos()}
            {request === 3 && showUsers()}

        </div>
    )

}

export default DisplayCard;