import { connect } from 'react-redux';
import * as actions from './../actions/index';

function TaskItem(props) {


    const onUpdateStatus = () => {
        props.onUpdateStatus(props.task.id)
    }

    const onDeleteItem = () => {
        props.onDeleteTask(props.task.id)
        props.onCloseForm()
    }

    const onEditItem = () => {
        props.onOpenForm();
        props.onEditTask(props.task);
    }

    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.task.name}</td>
            <td className="text-center">
                <span
                    className={props.task.status === true ? 'label label-success' : 'label label-danger'}
                    onClick={onUpdateStatus}>
                    {props.task.status === true ? 'Kích Hoạt' : 'Ẩn'}
                </span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning" onClick={onEditItem}>
                    <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger" onClick={onDeleteItem}>
                    <span className="fa fa-trash mr-5"></span>Xóa
                </button>
            </td>
        </tr>
    );
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id))
        },
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        },
        onEditTask:(task) => {
            dispatch(actions.editTask(task))
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
