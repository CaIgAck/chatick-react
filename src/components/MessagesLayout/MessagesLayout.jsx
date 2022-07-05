import "./MessagesLayout.scss"
import PreViewDialog from "../PreViewDialog/PreViewDialog.jsx";
import Dialog from "../Dialog/Dialog";

const dialogList = [
    {
        user: {
            name: 'Test'
        }
    },
    {
        user: {
            name: 'Test'
        }
    },
    {
        user: {
            name: 'Test'
        }
    },
    {
        user: {
            name: 'Test'
        }
    },
    {
        user: {
            name: 'Test'
        }
    },
    {
        user: {
            name: 'Test'
        }
    },
]

const messageList = [
    {
        textUser: "text",
        userId: "test"
    },
    {
        textUser: "text1",
        userId: "test1"
    },
    {
        textUser: "text2",
        userId: "test"
    },
    {
        textUser: "text3",
        userId: "test1"
    },
    {
        textUser: "text4",
        userId: "test"
    },
    {
        textUser: "text5",
        userId: "test1"
    },
    {
        textUser: "text6",
        userId: "test"
    },
]
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
