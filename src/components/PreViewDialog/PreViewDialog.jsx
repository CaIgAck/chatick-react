import './PreViewDialog.scss'
function PreViewDialog(props) {
    const list = props.dialogList
    const dialogList = list.map((dialog,index) => {
        return <div className="preview-dialog" key={index}>
                    <div className="preview-dialog__user-name">{dialog.user.name}</div>
                </div>
    })

    return (
        <div className="preview-dialog__container">
            {dialogList}
        </div>

    )
}

export default PreViewDialog
