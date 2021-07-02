import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

function App(props) {
   
    var { isDisplayForm } = props;

    const onToggleForm = () => {
        if (props.itemEditing && props.itemEditing.id !== '') {
            // props.onOpenForm();
        } else {
            props.onToggleForm()
        }
        props.onClearTask({
            id: '',
            name: '',
            status: false
        });
    }

    return (
        <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr />
            </div>
            <div className="row">
                <div className={isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                    {/* FORM */}
                    <TaskForm />
                </div>
                <div className={isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={onToggleForm}
                    >
                        <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                    </button>&nbsp;
                    {/* SEARCH-SORT */}
                    <TaskControl/>
                    {/* LIST */}
                    <div className="row mt-15">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <TaskList></TaskList>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        // chuyen func thanh props cua component va dispatch action
        onToggleForm: () => {
            dispatch(actions.toggleForm())
        },
        onClearTask: (task) => {
            dispatch(actions.editTask(task))
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        },

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
