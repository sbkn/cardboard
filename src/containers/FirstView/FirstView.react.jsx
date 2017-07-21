import React from "react";
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn
} from 'material-ui/Table';
import DisplayCounter from "../ConnectedCounter/ConnectedCounter.react.jsx";
import SecondComponent from "../ConnectedButton/ConnectedButton.react.jsx";

const FirstView = () => (
	<div>
		<DisplayCounter/>
		<SecondComponent/>
		<Table>
			<TableHeader>
				<TableRow>
					<TableHeaderColumn>Hole</TableHeaderColumn>
					<TableHeaderColumn>Player 1</TableHeaderColumn>
					<TableHeaderColumn>Player 2</TableHeaderColumn>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableRowColumn>1</TableRowColumn>
					<TableRowColumn>John Smith</TableRowColumn>
					<TableRowColumn>Employed</TableRowColumn>
				</TableRow>
				<TableRow>
					<TableRowColumn>2</TableRowColumn>
					<TableRowColumn>Randal White</TableRowColumn>
					<TableRowColumn>Unemployed</TableRowColumn>
				</TableRow>
				<TableRow>
					<TableRowColumn>3</TableRowColumn>
					<TableRowColumn>Stephanie Sanders</TableRowColumn>
					<TableRowColumn>Employed</TableRowColumn>
				</TableRow>
				<TableRow>
					<TableRowColumn>4</TableRowColumn>
					<TableRowColumn>Steve Brown</TableRowColumn>
					<TableRowColumn>Employed</TableRowColumn>
				</TableRow>
				<TableRow>
					<TableRowColumn>5</TableRowColumn>
					<TableRowColumn>Christopher Nolan</TableRowColumn>
					<TableRowColumn>Unemployed</TableRowColumn>
				</TableRow>
			</TableBody>
		</Table>
	</div>
);

export default FirstView;

