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

const mapStateToProps = state => {
	return {
		reference: state.reference
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
		this.setState({
					visibleMonsters: 
					this.state[type].map((el, id) => 
						({...el, id: id})).filter(el => {
							const textMatch = el.name.toLowerCase().includes(searchQuery.toLowerCase());
							return textMatch;
						}, () => {this.props.updateReference(this.state)})
				});
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
		switch (this.state.searchType) {
			case MONSTER:
				this.setState({selectedMonster: this.state.monsters[e.target.id]},
				 () => {this.props.updateReference(this.state)});
				break;
			case SPELL:
				this.setState({selectedSpell: this.state.spells[e.target.id]},
				 () => {this.props.updateReference(this.state)});

				break;
			case MAGIC_ITEM:
				this.setState({selectedMagicItem: this.state.magicItems[e.target.id]},
				 () => {this.props.updateReference(this.state)})
				break;
			default:
				return undefined;
		}
	};
	handleAddEntity = (e) => {
		console.log(this.state.selectedMonster);
		this.props.addEntity(this.state.selectedMonster);
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
						/>
					</div>
					<div className="search__results">
					{ this.state.searchType === MONSTER 
						&& this.state.visibleMonsters.map((monster, i) => {
									return (
										<MonsterSearchResult 
										key={i} id={monster.id}
										handleResultClick={this.handleResultClick}
										{...monster}/>
									)
								})
					}
					{this.state.searchType === SPELL 
						&& this.state.visibleSpells.map((spell, i) => {
									return (
										<SpellSearchResult
										key={i} id={spell.id}
										handleResultClick={this.handleResultClick}
										{...spell}/>
									)
								})
					}
					{this.state.searchType === MAGIC_ITEM 
						&& this.state.visibleMagicItems.map((item, i) => {
									return (
										<MagicItemSearchResult
										key={i} id={item.id}
										handleResultClick={this.handleResultClick}
										{...item}/>
									)
								})
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