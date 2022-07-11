import './dialog.scss'
import Message from "../Message/Message";
import FormInput from "../FormFields/FormInput";
function Dialog(props) {
    const list = props.messageList
    const messageList = list.map((message, index) => {
        return <Message message={message} key={index} />
    })
    return (
        <div className="dialog-container">
            {messageList}
            <div className="dialog-container__send-message-form">
                <FormInput />
            </div>
        </div>
    )
}

export default Dialog
