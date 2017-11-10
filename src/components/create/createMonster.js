import React from 'react';
import {connect} from 'react-redux';
import {AlignmentChart} from './form/alignment';
import {FormSize, FormMonsterType, FormName} from './form/formMisc';
import AbilityScores from './form/abilityScores';
import Actions from './form/actions';
import {editMonster, addCustomMonster} from '../../actions/monster';


const mapStateToProps = state => {
	return {
		monster: state.monsterCreate
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onMonsterEdit: monster => {
			dispatch(editMonster(monster));
		},
		onMonsterSubmit: monster => {
			dispatch(addCustomMonster(monster));
		}
	}
}

class CreateMonsterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			...props.monster
		};
	};

	handleName = e => {
		e.preventDefault();
		this.setState({name: e.target.value}, () => {
			this.props.onMonsterEdit(this.state);
		});
		
	};

	handleType = e => {
		e.preventDefault();
		this.setState({type: e.target.value}, () => {
			this.props.onMonsterEdit(this.state);
		})	
	};

	handleSize = e => {
		e.preventDefault();
		this.setState({size: e.target.value}, () => {
			this.props.onMonsterEdit(this.state);
		});
	};
	handleAlignment = e => {
		e.preventDefault();
		e.stopPropagation();
		let alignment = e.target.dataset.value;
		if( alignment === undefined){
			alignment = e.target.parentNode.dataset.value;
		}
		this.setState({alignment}, () => {
			this.props.onMonsterEdit(this.state);
		});
	};
	handleRating = e => {
		e.preventDefault();
		this.setState({challenge_rating: e.target.value}, () => {
			this.props.onMonsterEdit(this.state);
		});
	};
	handleAbilityScores = scores => {
		this.setState({...scores}, () => {
			this.props.onMonsterEdit(this.state);
		});
	};
	handleArmorClass = e => {
		this.setState({armor_class: e.target.value} , () => {
			this.props.onMonsterEdit(this.state);
		});
	};
	handleActions = actions => {
		this.setState({actions: [...actions]}, () => {
			this.props.onMonsterEdit(this.state);
		});
	};
	handleSubmit = e => {
		this.props.onMonsterSubmit(this.state);
	};
	render() {
		return (
			<div className="createMonsterForm form">	
    				<FormName name={this.state.name} handleName={this.handleName}/>
    				<AbilityScores handleAbilityScores={this.handleAbilityScores}/>
    				<div className="form__row">
    					<AlignmentChart curAlignment={this.state.alignment} handleAlignment={this.handleAlignment}/>
    					<div className="form__col">
    						<h2>Armor Class</h2>
    						<input type="number" 
    						size="2" value={this.state.armor_class || 10}
    						onChange={this.handleArmorClass}
    						></input>
    						<h2>Size</h2>
    						<FormSize size={this.state.size || ''}handleSize={this.handleSize}/>
							<h2>Type</h2>
							<FormMonsterType type={this.state.type || ''} handleType={this.handleType}/>
							<h2>Challenge Rating</h2>
    				<input onChange={this.handleRating} value={this.state.challenge_rating}type="number" max="30" min="0"></input>
    					</div>
    					<Actions handleActions={this.handleActions}/>
    				</div>
    				<div className="form__row">
    					<button className="createSubmit" onClick={this.handleSubmit}>Create Monster</button>
    				</div>
    				
			</div>)
	}
} 

export default connect(mapStateToProps,mapDispatchToProps)(CreateMonsterForm);