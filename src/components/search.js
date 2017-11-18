import React from 'react';
import {connect} from 'react-redux';
import {MonsterResultCard, MonsterSearchResult} from './search/monster';
import {SpellResultCard, SpellSearchResult} from './search/spell';
import {MagicItemResultCard, MagicItemSearchResult} from './search/magicItem';
import {updateReference} from '../actions/reference';
import {addCombatEntity} from '../actions/combat';

const MONSTER = 0;
const SPELL = 1;
const MAGIC_ITEM = 2;

const uuidv4 = require('uuid/v4');

const mapStateToProps = state => {
	return {
		reference: state.reference,
		customMonsters: state.customMonsters
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateReference: reference => {
			dispatch(updateReference(reference));
		},
		addEntity: entity => {
			dispatch(addCombatEntity(entity));
		}
	}
}

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = props.reference;
	};

	updateVisible = (type, searchQuery) => {
		let list = [...this.state[type]];
		const top = [];
		const bottom = [];


		list.forEach(e => {
			if( e.name.toLowerCase().startsWith(searchQuery.toLowerCase())){
				top.push(e);
			}else if(e.name.toLowerCase().includes(searchQuery.toLowerCase())){
				bottom.push(e);
			}
		});

		list = [...top, ...bottom];
		
		switch(type) {
			case 'monsters': 
				this.setState({
					visibleMonsters: list
				}, () => {this.props.updateReference(this.state)});
			break;
			case 'spells': 
				this.setState({
					visibleSpells: list
				}, () => {this.props.updateReference(this.state)});
			break;
			case 'magicItems': 
				this.setState({
					visibleMagicItems: list
				}, () => {this.props.updateReference(this.state)});
			break;
			default: 
				return null;
		}
	
	};

	handleTextChange = (e) => {
		const searchQuery = e.target.value;
		this.setState({searchQuery}, () => {this.props.updateReference(this.state)});
		switch(this.state.searchType){
			case MONSTER:
				this.updateVisible("monsters", searchQuery);
				break;
			case SPELL:
				this.updateVisible("spells", searchQuery);
				break;
			case MAGIC_ITEM:
				this.updateVisible("magicItems", searchQuery);
				break;		
			default: 
				return undefined;
		}
	};
	typeToMonster = (e) => {
		this.setState({searchType: MONSTER});
	};
	typeToSpell = (e) => {
		this.setState({searchType: SPELL});
	};
	typeToMagicItem = (e) => {
		this.setState({searchType: MAGIC_ITEM});
	};

	handleResultClick = (e) => {
		e.stopPropagation();
		const index = e.target.dataset.index;
		console.log(index);
		switch (this.state.searchType) {
			case MONSTER:
				this.setState({selectedMonster: this.state.visibleMonsters[index]},
				 () => {this.props.updateReference(this.state)});
				break;
			case SPELL:
				this.setState({selectedSpell: this.state.visibleSpells[index]},
				 () => {this.props.updateReference(this.state)});

				break;
			case MAGIC_ITEM:
				this.setState({selectedMagicItem: this.state.visibleMagicItems[index]},
				 () => {this.props.updateReference(this.state)})
				break;
			default:
				return undefined;
		}
	};
	handleAddEntity = (e) => {
		const entity = {...this.state.selectedMonster};
		entity.uid = uuidv4();
		this.props.addEntity(entity);
	}

	render () {
		return(
			<div className="searchPage">
				<div className="search">
					<div className="search__head">
						<div className="search__head__types">
							<div className=
							{this.state.searchType === MONSTER ? 
								"search__head__types--active" : ''}
							onClick={this.typeToMonster}
							>Monsters</div>
							<div className=
							{this.state.searchType === SPELL ? 
								"search__head__types--active" : ''}
							onClick={this.typeToSpell}>Spells</div>
							<div className=
							{this.state.searchType === MAGIC_ITEM ? 
								"search__head__types--active": ''}
							onClick={this.typeToMagicItem}>Items</div>
						</div>
						<input 
						type="text"
						placeholder="Search"
						className="search__head__query"
						value={this.state.searchQuery}
						onChange={this.handleTextChange}
						autofocus
						/>
					</div>
					<div className="search__results" onClick={this.handleResultClick}>
					{ this.state.searchType === MONSTER 
						&& this.state.visibleMonsters.map((monster, i) => 
								<MonsterSearchResult 
								key={i} index={i}
								{...monster}/>
							)
					}
					{ this.state.searchType === SPELL 
						&& this.state.visibleSpells.map((spell, i) => 
								<SpellSearchResult
								key={i} index={i}
								{...spell}/>
							)
					}
					{this.state.searchType === MAGIC_ITEM 
						&& this.state.visibleMagicItems.map((item, i) => 
								<MagicItemSearchResult
								key={i} index={i}
								{...item}/>
							)
					}
					</div>
				</div>
				<div className="resultDisplay">
				{this.state.searchType === MONSTER &&
				 this.state.selectedMonster &&
				  <MonsterResultCard {...this.state.selectedMonster} add={this.handleAddEntity}/>}
				{this.state.searchType === SPELL &&
				 this.state.selectedSpell &&
				  <SpellResultCard {...this.state.selectedSpell} />}
				{this.state.searchType === MAGIC_ITEM &&
				 this.state.selectedMagicItem &&
				  <MagicItemResultCard {...this.state.selectedMagicItem} />}
				</div>
			</div>
			
			)
	}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);