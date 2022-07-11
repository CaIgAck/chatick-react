import "./MessagesLayout.scss"
import PreViewDialog from "../PreViewDialog/PreViewDialog.jsx";
import Dialog from "../Dialog/Dialog";
import {dialogList} from "../../helpers/testDialog";
import {messageList} from "../../helpers/testMessage";


function MessagesLayout() {
    return (
        <div className="layout">
            <div className="content">
                <div className="messages-layout">
                    <div className="messages-layout__header">
                        <div className="messages-layout__header-title">
                            Сообщения
                        </div>
                    </div>
                    <div className="messages-layout__container">
                        <PreViewDialog dialogList={dialogList} />
                        <Dialog messageList={messageList} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessagesLayout
