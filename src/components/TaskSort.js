import { connect } from 'react-redux';
import * as actions from './../actions/index';

function TaskSort(props) {

    const onClickSort = (sortBy, sortValue) => {
        props.onSort({
            by: sortBy,
            value: sortValue
        })
    }
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp <span className="fa fa-sort ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li
                        onClick={() => onClickSort('name', 1)}
                    >
                        <a href='/#' role="button"
                            className={props.sort.by === 'name' & props.sort.value === 1 ? 'sort_selected' : ''}>
                            <span className="fa fa-sort-alpha-asc pr-5">
                                Tên A-Z
                            </span>
                        </a>
                    </li>
                    <li
                        onClick={() => onClickSort('name', -1)}

                    >
                        <a href='/#' role="button"
                            className={props.sort.by === 'name' & props.sort.value === -1 ? 'sort_selected' : ''}
                        >

                            <span className="fa fa-sort-alpha-asc pr-5">
                                Tên Z-A
                            </span>
                        </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li
                        onClick={() => onClickSort('status', 1)}
                    >
                        <a href='/#' role="button"
                            className={props.sort.by === 'status' & props.sort.value === 1 ? 'sort_selected' : ''}
                        >
                            Trạng Thái Kích Hoạt</a>
                    </li>
                    <li
                        onClick={() => onClickSort('status', -1)}
                    >
                        <a href='/#' role="button"
                            className={props.sort.by === 'status' & props.sort.value === -1 ? 'sort_selected' : ''}
                        >
                            Trạng Thái Ẩn</a>
                    </li>
                </ul>
            </div>
        </div>

    );
}

const mapStateToProps = state => {
    //action tra ve
    return {
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        // chuyen func thanh props cua component va dispatch action
        onSort: (sort) => {
            dispatch(actions.sortTask(sort))
        },

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskSort);