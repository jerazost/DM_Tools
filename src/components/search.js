import React from 'react';
import {MonsterResultCard, MonsterSearchResult} from './search/monster';
import {SpellResultCard, SpellSearchResult} from './search/spell';

const MONSTER = 0;
const SPELL = 1;
const MAGIC_ITEM = 2;

const MagicItemResultCard = (props) => (
	<div id="resultCard">
		<div className="stat-block">
			<div className="creature-heading">
				<h1>{props.name}</h1>
			</div>
			<svg height="5" width="100%" className="tapered-rule">
			    <polyline points="0,0 400,2.5 0,5"></polyline>
			</svg>
			<div className="actions">
				<h3>Description</h3>
				<p>{props.content || props.table.entries}</p>
			</div>
		</div>
	</div>
	)

const MagicItemSearchResult = (props) => (
	<div className="search__results__result" id={props.id} onClick={props.handleResultClick}>
		<h3 id={props.id}>{props.name}</h3>
	</div>
	)

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		const monData = require('../data/monsters.json');
		const spellData = require('../data/spells.json');
		const itemData = require('../data/5esrd.json')["Magic Items"];
		const test = require('../data/5esrd.json');
		console.log(test);
		const itemList = [];
		for (let item in itemData){
			itemList.push({name: item, ...itemData[item]});
		}
		this.state = {
			searchQuery: '',
			searchType: MONSTER,
			monsters: monData,
			visibleMonsters: monData.map((mon,id) => ({...mon, id: id})),
			selectedMonster: '',
			spells: spellData,
			visibleSpells: spellData.map((spell,id) => ({...spell, id: id})),
			selectedSpell: '',
			magicItems: itemList,
			visibleMagicItems: itemList.map((item, id) => ({...item, id: id})),
			selectedMagicItem: ''
		};
	};

	handleTextChange = (e) => {
		const searchQuery = e.target.value;
		switch(this.state.searchType){
			case MONSTER:
				this.setState({
					visibleMonsters: this.state.monsters.map((mon, id) => ({...mon, id: id})).filter(monster => {
						const textMatch = monster.name.toLowerCase().includes(searchQuery.toLowerCase());
						return textMatch;
					})
				});
				break;
			case SPELL:
				this.setState({
					visibleSpells: this.state.spells.map((spell, id) => ({...spell, id: id})).filter(spell => {
						const textMatch = spell.name.toLowerCase().includes(searchQuery.toLowerCase());
						return textMatch;
					})
				});
				break;
			case MAGIC_ITEM:
				this.setState({
					visibleMagicItems: this.state.magicItems.map((item, id) => ({...item, id: id})).filter(item => {
						const textMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
						return textMatch;
					})
				});	
				break;		
			default: 
				return undefined;


		}
		
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
				console.log(this.state.selectedMonster);
				break;
			case SPELL:
				this.setState({selectedSpell: this.state.spells[e.target.id]});
				console.log(this.state.selectedSpell);
				break;
			case MAGIC_ITEM:
				this.setState({selectedMagicItem: this.state.magicItems[e.target.id]})
				console.log(this.state.selectedMagicItem);
				break;
			default:
				return undefined;
		}
		
	};

	render () {
		return(
			<div className="searchPage">
				<div className="search">
					<div className="search__head">
						<div className="search__head__types">
							<div className=
							{this.state.searchType === MONSTER ? "search__head__types--active" : ''}
							onClick={this.typeToMonster}
							>Monsters</div>
							<div className=
							{this.state.searchType === SPELL ? "search__head__types--active" : ''}
							onClick={this.typeToSpell}>Spells</div>
							<div className=
							{this.state.searchType === MAGIC_ITEM ? "search__head__types--active": ''}
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
				  <MonsterResultCard {...this.state.selectedMonster} />}
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
 
export default SearchForm;