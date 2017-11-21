import React from 'react';
const classes = require('../../../data/classes.json');
console.log(classes);

const CheckboxCard = props => (
	<div>
		{props.list.map((l, i) => 
			<div key={i}>
				<input id={l} type="checkbox"/>
				<label for={l}>{l}</label>
			</div>
		)}
	</div>
)

const ClassCardPreview = props => (
	<div className="classCard" data-class={props.name}>
		<h2>{props.name}</h2>
		<img
		src={`./media/${props.name}.svg`}
		className="classCard__icon"
		alt="Class Icon"
		/>
	</div>
 )


class ChooseClass extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			activeClass: "Barbarian"
		}
		this.classList = Object.keys(classes);
	};

	render() {
		return (
		<div>
			<h1>Choose Class</h1>
			<div className="classes">
				<div className="classes__col">
					<button onClick={this.props.handleBack}>Back</button>
				</div>
				<div className="classes__col">
				{this.classList.map((n, i) => 
					<ClassCardPreview {...classes[n]} key={i}/>
				)}
				</div>
				<div className="classes__col">
					
				</div>
				<div className="classes__col">
					
				</div>
			</div>
		</div>
		)
	}
} 
export default ChooseClass;