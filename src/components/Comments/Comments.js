import React, { useEffect, useState } from "react";
import './Comments.css';
import Button from '../button/Button';
import { getComments, sendComment } from "../../services/CommentService";

const Comments = () => {

    const [userName, setUserName] = useState('');
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState('');
    const [registeredComments, setRegisteredComments] = useState('');
    const [showOldComments, setShowOldComments] = useState(false);

    useEffect(() => {
        getComments()
            .then(res => res.json()).then((res) => {
                setRegisteredComments(res)
            })
    }, [])
    // console.log(registeredComments)

    const registerComment = (userName, comment) => {
        const validation = validate();
        if (validation) {
            sendComment(userName, comment)
                .then((response) => response.json())
            // .then((responseJson) => console.log(responseJson));
            setUserName('');
            setComment('');
            setMessage('');
        }
    }

    function userNameHandler(e) {
        setUserName(e.target.value)
    }
    function commentHandler(e) {
        setComment(e.target.value)
    }

    function validate() {
        if (userName === '') {
            setMessage('نام کاربری خالی است')
            return false
        } else if (comment === '') {
            setMessage('نظر خود را وارد کنید')
            return false
        }
        return true
    }

    function showOldCommentsHandler() {
        setShowOldComments(!showOldComments)
    }

    return (
        <div className="comments-container">
            <span className="validate-message">{message}</span>
            <h3>ثبت دیدگاه</h3>
            <input className="user-name" type="text" name="userName" placeholder="نام کاربری" value={userName} onChange={userNameHandler} />
            <input className="comment" type="text" name="comment" placeholder="نظر خود را وارد کنید" value={comment} onChange={commentHandler} />
            <div>
                <Button btnStyle='comment-btn' clicked={() => registerComment(userName, comment)} >ثبت</Button>
                <div onClick={showOldCommentsHandler}>
                    دیدگاه
                    <div className="comments-number">{registeredComments?.length}   </div>
                </div>
            </div>
            <div style={{ display: showOldComments ? 'block' : 'none' }} className="registered-comments">
                {
                    registeredComments?.length &&
                    registeredComments?.map((item) => {
                        return <div className="old-comment" key={item.id}>
                            <div>{item.commentUserName}</div>
                            <div>{item.commentText}</div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Comments;