import React from 'react';
import {MonsterResultCard, MonsterSearchResult} from './search/monster';

const MONSTER = 0;
const SPELL = 1;
const MAGIC_ITEM = 2;


const SpellSearchResult = (props) => (
	<div className="search__results__result" id={props.id} onClick={props.handleResultClick}>
		<h3 id={props.id}>{props.name}</h3>
		<p id={props.id}>{props.level} {props.school}</p>
	</div>
	)

const SpellResultCard = (props) => (
	<div id="resultCard">
		<h1> {props.name} </h1>
        <p> {props.desc} </p>
        <p> Range: {props.range} </p>
        <p> Duration: {props.duration} </p>
	</div>
	)

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		const monData = require('../data/monsters.json')
		const spellData = require('../data/spells.json')
		this.state = {
			searchQuery: '',
			searchType: MONSTER,
			monsters: monData,
			visibleMonsters: monData.map((mon,id) => ({...mon,id: id})),
			selectedMonster: '',
			spells: spellData,
			visibleSpells: spellData.map((spell, id) => ({...spell, id: id})),
			selectedSpell: ''
		};
	};

	handleTextChange = (e) => {
		const searchQuery = e.target.value;
		this.setState({
			visibleMonsters: this.state.monsters.filter(monster => {
				const textMatch = monster.name.toLowerCase().includes(searchQuery.toLowerCase());
				return textMatch;
			})
		});
		console.log(this.state.visibleMonsters.length)
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
		switch (this.state.searchType){
			case MONSTER:
				this.setState({selectedMonster: this.state.monsters[e.target.id]});
				break;
			case SPELL:
				this.setState({selectedSpell: this.state.spells[e.target.id]});
				break;
			default:
				return undefined;

		}
		
		console.log(e.target.id);
	};

	render () {
		return(
			<div className="searchPage">
				<div className="search">
					<div className="search__head">
						<div className="search__head__types">
							<div className=
							{this.state.searchType === MONSTER && "search__head__types--active"}
							onClick={this.typeToMonster}
							>Monsters</div>
							<div className=
							{this.state.searchType === SPELL && "search__head__types--active"}
							onClick={this.typeToSpell}>Spells</div>
							<div className=
							{this.state.searchType === MAGIC_ITEM && "search__head__types--active"}
							onClick={this.typeToMagicItem}>Items</div>
						</div>
						<input 
						type="text"
						placeholder="Search"
						className="search__head__query"
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
					</div>
				</div>
				<div className="resultDisplay">

				{this.state.searchType === MONSTER &&
				 this.state.selectedMonster &&
				  <MonsterResultCard {...this.state.selectedMonster} />}
				{this.state.searchType === SPELL &&
				 this.state.selectedSpell &&
				  <SpellResultCard {...this.state.selectedSpell} />}

				</div>
			</div>
			
			)
	}
}
 
export default SearchForm;