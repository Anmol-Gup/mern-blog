import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"

const Comments = () => {
    const {name} = useParams()
    
    useEffect(()=>{
        fetch(`http://localhost:3000/getcomments/${name}`)
        .then(response=>response.json())
        .then(data=>{
            setComments(data)
        })
        .catch(error=>console.error(error.message))
    },[])
    
    const [user, setName] = useState('')
    const [message, setMessage] = useState('')
    const userInput=useRef('')
    const messageInput=useRef('')
    const [comments,setComments]=useState([])

    const handleName = (e) => {
        userInput.current.focus()
        setName(e.target.value)
    }
    
    const handleComment = (e) => {
        messageInput.current.focus()
        setMessage(e.target.value)
    }
    
    const addComment = () => {
        
        fetch(`http://localhost:3000/addcomment/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name,user,message})
        })
        .then(response=>response.text())
        .then(data=>{
            userInput.current.value=''
            messageInput.current.value=''
            setComments([...comments,{user,message}])
        })
        .catch(error=>console.error(error.message))

    }

    return (<div className="container comment_section mb-5">
        <h3>Comments</h3>
        {
            (comments.length===1)?(<p>No comments</p>):comments.map((comment,index)=>{
                return(<div className="user_comment" key={index}>
                    <p className="fw-bold" style={{color:"#265073"}}>{comment.user}</p>
                    <p>{comment.message}</p>
                </div>)
            })
        }
        <h3>Add Comment</h3>
        <div className="comments">
            <div className="mb-3">
                <input type="text" className="form-control" ref={userInput} id="formGroupExampleInput" onChange={handleName} placeholder="Enter your name" />
         
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" ref={messageInput} placeholder="Leave a comment here" onChange={handleComment} id="floatingTextarea2" style={{ "height": "10rem" }}></textarea>
            </div>
            <div className="col-12 ">
                <button type="submit" onClick={addComment} className="btn btn-primary">Add</button>
            </div>
        </div>
    </div>)
}

export default Comments