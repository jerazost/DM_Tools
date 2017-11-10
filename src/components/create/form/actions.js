import React from 'react';

const ActionPrompt = (props) => (
	<div data-index={props.index} className="actionPrompt">
		<input type="text" placeholder="Action Name" value={props.name} onChange={props.handleActionName}/>
		<input type="textArea" placeholder="Action Description" value={props.desc} onChange={props.handleActionDescription}/>
	</div>
	)

export default class Actions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {actions: []};
	}

	handleAddAction = e => {
		this.setState((prevState) => ({actions: [...prevState.actions, {name: '',desc: ''}]}));
	}
	handleActionName = e => {
		const index = e.target.parentNode.dataset.index;
		const name = e.target.value;
			console.log(index)
		this.setState((prevState => {
			const cp = [...prevState.actions];
			cp[index].name = name;
			return cp;
		}), () => {this.props.handleActions(this.state.actions)});
	};
	handleActionDesc = e => {
		const index = e.target.parentNode.dataset.index;
		const desc = e.target.value;
		console.log(index)
		this.setState((prevState => {
			const cp = [...prevState.actions];
			cp[index].desc = desc;
			return cp;
		}), () => {this.props.handleActions(this.state.actions)});
	};
	render() {
		const actions = [];
		this.state.actions.forEach((action, i) => {
			actions.push(<ActionPrompt key={i} index={i} handleActionName={this.handleActionName} handleActionDesc={this.handleActionDesc}name={action.name} desc={action.desc}/>);
		});
		return (
			<div className="form__col actionHeader">
				<h2>Add New Action</h2>
				<button onClick={this.handleAddAction}>+</button>
				<div id="actionReservoir">{actions}</div>
			</div>
		)
	}
}