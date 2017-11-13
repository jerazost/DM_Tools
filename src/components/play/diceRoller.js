import React from 'react';

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

const DiceRoller = (props) => (
	<div className="dice">
		<h3>Dice Roller</h3>
		<div className="diceRoller">	
			<div className="diceRoller__buttons">
				{[4, 6, 8, 10, 12, 20].map((v, i) => 
					<DieRow {...props} key={i} die={v} />
				)}
			</div>
			<History rolls={props.rolls}/>
		</div>
	</div>
	)

export default DiceRoller;