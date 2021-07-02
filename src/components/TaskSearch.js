import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

function TaskSearch(props) {

    const [keyword, setKeywords] = useState('')

    const onChange=(e) => {
        var target = e.target;
        var value = target.value;
        setKeywords(value)
    }

    const onSearch=()=>{
        props.onSearch(keyword) // dispatch searchTAsk
    }

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                    name="keyword"
                    value={keyword}
                    onChange={onChange}

                />
                <span className="input-group-btn">
                    <button 
                    className="btn btn-primary" 
                    type="button"
                    onClick={onSearch}
                    >
                        <span className="fa fa-search mr-5"></span>Tìm
                    </button>
                </span>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        // chuyen func thanh props cua component va dispatch action
        onSearch: (keyword) => {
            dispatch(actions.searchTask(keyword))
        },
        
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskSearch);