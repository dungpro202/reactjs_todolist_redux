import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

function TaskForm(props) {

    const [jobs, setJobs] = useState({
        id: '',
        name: '',
        status: false,
    });

    useEffect(() => {
        if (props.itemEditing&&props.itemEditing.id!==null) {
            setJobs({
                id: props.itemEditing.id,
                name: props.itemEditing.name,
                status: props.itemEditing.status,
            })
        } else {
            console.log('123')
        }
    }, [props.itemEditing]);


    const onExitForm = () => {
        props.onCloseForm();
    }

    const onChange = (event) => {
        let target = event.target
        let name = target.name
        let value = target.value
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }

        setJobs({ ...jobs, [name]: value })
    }

    const onSave = (event) => {
        event.preventDefault();
        props.onSaveTask(jobs);
        onClear();
        onExitForm();
    }

    const onClear = () => {
        console.log('onClear')
        setJobs({name: '', status: '' })
    }

    if (!props.isDisplayForm) return '';

    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    <span
                        className="fas fa-times-circle text-right"
                        onClick={onExitForm}
                    ></span>{jobs.id? 'Cập Nhật Công Việc':'Thêm Công Việc'  }</h3>
            </div>
            <div className="panel-body">
                <form onSubmit={onSave}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input
                            type="text"
                            className="form-control"
                            name='name'
                            value={jobs.name}
                            onChange={onChange}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select
                        className="form-control"
                        required="required"
                        name='status'
                        value={jobs.status}
                        onChange={onChange}
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br />
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Lưu Lại</button>&nbsp;
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={onClear}
                        >Hủy Bỏ</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
       
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
