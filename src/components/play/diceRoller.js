import React from 'react';
import {connect} from 'react-redux';
import {updateDiceRolls} from '../../actions/play';
const mapStateToProps = (state) => ({
	rolls: state.rolls 
});

const mapDispatchToProps = (dispatch) => ({
	storeDice: rolls => {dispatch(updateDiceRolls(rolls))}
});

const History = (props) => (
	<div className="diceRoller__history">
		{props.rolls.map((r, i) => <p key={i}>{r}</p>)}
	</div>
	)

const DieRow = ({die, handleRoll}) => (
	<div className="diceRoller__buttons__button">
		<button onClick={handleRoll} data-die={die}>d{die}</button>
	</div>
	)

class DiceRoller extends React.Component {
	constructor(props){
		super(props);
		this.maxSize = 6;
		this.state = {
			rolls: [...props.rolls]
		}
	}
	handleRoll = e => {
		const die = e.target.dataset.die;
		const roll = Math.ceil(Math.random() * die);
		let rolls = [...this.state.rolls];
		if(rolls.length > this.maxSize) {
			rolls = rolls.slice(-1 * this.maxSize, rolls.length  )
		}
		this.setState({rolls: [...rolls, roll]}, () => {this.props.storeDice(this.state.rolls)});
	}
	render() {
		return(
			<div className="dice">
				<h3>Dice Roller</h3>
				<div className="diceRoller">	
					<History rolls={this.state.rolls}/>
					<div className="diceRoller__buttons">
						{[4, 6, 8, 10, 12, 20].map((v, i) => 
							<DieRow handleRoll={this.handleRoll} key={i} die={v} />
						)}
					</div>
				</div>
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceRoller);