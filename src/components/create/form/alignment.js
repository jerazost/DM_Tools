import React from 'react';
export const AlignmentChart = (props) => (
	<div className="alignment form__col">
		{!!props.curAlignment && <h3 className="alignmentHeader">{props.curAlignment}</h3>}
		<div className="alignmentChart" onClick={props.handleAlignment}>
			<div className="alignmentChart__col">
				<div className=
				{"alignmentChart__square " + 
				(props.curAlignment === "Lawful Good" ? 
					"alignmentChart__square--active": '')} data-value="Lawful Good">
					<h1>LG</h1>
				</div>
				<div className={"alignmentChart__square " + 
				(props.curAlignment === "Lawful Neutral" ? 
					"alignmentChart__square--active": '')} data-value="Lawful Neutral">
					<h1>LN</h1>
				</div>
				<div className={"alignmentChart__square " + 
				(props.curAlignment === "Lawful Evil" ? 
					"alignmentChart__square--active": '')} data-value="Lawful Evil">
					<h1>LE</h1>
				</div>
			</div>
			<div className="alignmentChart__col">
				<div className={"alignmentChart__square " + 
				(props.curAlignment === "Neutral Good" ? 
					"alignmentChart__square--active": '')} data-value="Neutral Good">
					<h1>NG</h1>
				</div>
				<div className={"alignmentChart__square " + 
				(props.curAlignment === "True Neutral" ? 
					"alignmentChart__square--active": '')} data-value="True Neutral">
					<h1>TN</h1>
				</div>
				<div className={"alignmentChart__square " + 
				(props.curAlignment === "Neutral Evil" ? 
					"alignmentChart__square--active": '')} data-value="Neutral Evil">
					<h1>NE</h1>
				</div>
			</div>
			<div className="alignmentChart__col">
				<div className={"alignmentChart__square " + 
				(props.curAlignment === "Chaotic Good" ? 
					"alignmentChart__square--active": '')} data-value="Chaotic Good">
					<h1>CG</h1>
				</div>
				<div className={"alignmentChart__square " + 
				(props.curAlignment === "Chaotic Neutral" ? 
					"alignmentChart__square--active": '')} data-value="Chaotic Neutral">
					<h1>CN</h1>
				</div>
				<div className={"alignmentChart__square " + 
				(props.curAlignment === "Chaotic Evil" ? 
					"alignmentChart__square--active": '')} data-value="Chaotic Evil">
					<h1>CE</h1>
				</div>
			</div>
		</div>
	</div>
	)
