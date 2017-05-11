import React from 'react';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            input:""
        }
    }
    render() {
        return (
            <div className="header">
                <h1>todos</h1>
                <input className="new-todo" placeholder="请输入内容" value={this.state.input} onInput={this.enterInput.bind(this)} onKeyDown={this.keyDownSubmit.bind(this)}/>
            </div>
        );
    }
    enterInput(ev){
       this.setState({
            input:ev.target.value
        })
    }
    keyDownSubmit(ev){
        if(ev.keyCode === 13 && this.state.input.trim()){
            this.props.updateDate(this.state.input);
            this.setState({input:""});
        }
    }
}
export default Header;