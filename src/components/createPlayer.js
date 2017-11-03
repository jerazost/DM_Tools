 /* The create player sequence is a series of components
	Generated like a form, with things like starting inventory
	depending on the state of the player (Class/Race)
 */

 //The player choose from the 5E SRD Races
 //Certain races have subraces.
 const RacePrompt = () => (
 	<div>
 		
 	</div>
 	)

 //The player chooses from the base SRD Classes
 //The class handler also handles leveling up.
 //Multiple components may be needed for all the classes
 const ClassLevelPrompt = () => (
 	<div>
 		
 	</div>
 	)

//Player chooses to roll for or point buy their ability scores
//REQUIRES: Race + Class and Level 
 const AbilityScorePrompt = () => (
 	<div>

 	</div>
 	)

 //Cool UI Element Opportunity
 //User is shown a Law / Chaos Grid
 //User then selects an SRD background and Languages
 const BackgroundPrompt = () => (
 	<div>
 		
 	</div>
 	)

//EquipmentPrompt
//Player chooses weapons and armor + starting equipment
const EquipmentPrompt = () => (
	<div>

	</div>
	)



