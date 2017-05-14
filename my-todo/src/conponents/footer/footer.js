import React from 'react';
class Footer extends React.Component {
    clearFn(){
        this.props.clear();
    }
    render() {
        return (
            <footer className="footer">
                <span className="todo-count">
                    <span>共</span>
                    <strong>{this.props.data.length}</strong>
                    <span>条
                    </span>
                </span>
                <button className="clear-completed" onClick={this.clearFn.bind(this)}>Clear completed</button>
            </footer>
        )
    }
}
export default Footer;