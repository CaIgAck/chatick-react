import './dialog.scss'
import Message from "../Message/Message";
function Dialog(props) {
    const list = props.messageList
    const messageList = list.map((message, index) => {
        return <Message message={message} key={index} />
    })
    return (
        <div className="dialog-container">
            {messageList}
        </div>
    )
}

export default Dialog
