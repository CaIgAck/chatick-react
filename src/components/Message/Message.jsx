import "./Message.scss"
function Message(props) {
    const userName = 'test'
    return (
        <div className={props.message.userId === userName ? 'message-right' : 'message-left'}>
            {props.message.userId}<br/>
            {props.message.textUser}
        </div>
    )
}

export default Message
