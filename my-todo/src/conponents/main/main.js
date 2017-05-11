import React from 'react';

class Main extends React.Component{
    render(){
        var liStr = this.props.list.map((e,i) =>{
            return (
                <li className={e.type?"completed":''} key={i}><div className="view"><input type="checkbox" onChange={this.changeType.bind(this,e)} className="toggle" value="on"/><label>{e.name}</label><button className="destroy" onClick={this.deleteItem.bind(this,e)}></button></div></li>
            )
        })
        return(
            <div className="main">
                <ul className="todo-list">
                {liStr}
                </ul>
            </div>
        )
    }
    deleteItem(deleteVal){
        let {deleteDate} = this.props;
        deleteDate(deleteVal);
    }
    changeType(changeVal){
        let {changeType} = this.props;
        changeType(changeVal);
    }
}
export default Main;