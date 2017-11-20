import React from 'react';
const races = require('../../../data/5esrd.json')['Races'];
const raceList = [];
const dict = {}

//Formatting hard to parse JSON data from 5esrd
const parseAsteriskHeading = str => {
	if(!str || str[0] !== '*'){
		return str;
	}
	const key = str.match(/\*\*\*\w.*\*\*\*/g)[0];

	if(typeof key === 'string'){
		return key.replace(/\*/g, '');
	}
}

for (let race in races){
	let raceContent = races[race][race + ' Traits'].content;
	raceContent = raceContent.map(trait => {
		return {title: parseAsteriskHeading(trait), description: trait.replace(/\*\*\*\w.*\*\*\*/g, '')};
	})

	raceList.push({name: race, content: [...raceContent]});
	dict[race] = raceList.length - 1;
}

const RacePreview = props => (
	<div 
	className="races__raceCard races__raceCard--preview stat-block"
	data-race={props.name}>
		<h2 data-race={props.name}>{props.name}</h2>
		<img
		data-race={props.name}
		className="races__raceCard__icon"
		src={"./media/" + props.name + '.svg'}
		alt="Race Icon"
		/>
		<h3 data-race={props.name}>{props.content[0].title}</h3>
	</div>
)

const RaceCard = props => {
	const contentLeft = [], contentRight = [];
		props.content.forEach((content, i, r) => {
			if(i < r.length / 2) contentLeft.push(content);
			else contentRight.push(content);
		});
		return (
			<div className="races__raceCard stat-block wide races__raceCard--full">
				<div className="section-left">
					<h1>{props.name}</h1>
					<img
					className="races__raceCard__icon"
					src={"./media/" + props.name + '.svg'}
					alt="Race Icon"
					/>
					{contentLeft.map((content, i) => {
						return (
						<div key={i}>
							<h3>{content.title}</h3>
							
							<p>{content.description}</p>
						</div>
						)
					})}
				</div>
				<div className="section-right">
					{contentRight.map((content, i) => {
						return (
						<div key={i}>
							<h3>{content.title}</h3>
							<p>{content.description}</p>
						</div>
						)
					})}
				</div>
			</div>
		)
}

class ChooseRace extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeRace: "Dwarf"
		}

	}
	handleRaceChange = e => {
		const race = e.target.dataset.race;
		if(!!race) {
			this.setState({activeRace: race});
		}
	}
	render () {
		return (
		<div>
			<h1>Choose Race</h1>
			<div className="racePage">
				<div className="races" onClick={this.handleRaceChange}>
				{raceList.map((race, i) => (
					<RacePreview {...race} key={i}/>
				))}
				</div>
				<RaceCard {...raceList[dict[this.state.activeRace]]}/>
				<div>
					<button onClick={this.props.handleNext}>Next</button>
				</div>
			</div>
		</div>
		
		)
	}
}

export default ChooseRace;