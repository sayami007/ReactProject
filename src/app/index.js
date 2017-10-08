import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component{
	render(){
		return(
			<div>
				<div id="header"></div>
				<div className="container">
					<div className="column">
						<InboxPane/>
					</div>
					<div className="column">
						<InboxPane/>
					</div>
					<div className="column">
						
					</div>
				</div>
			</div>	
	)};
};

class InboxPane extends React.Component{
	render(){
		return(
			<div>
				<h1>Inbox</h1>
				<table border="1">
					<thead>
						<tr>
							<th>ChatReceived</th>
							<th>Name</th>
							<th>status</th>
						</tr>
					</thead>
					<tbody>
						<InboxItem/>
					</tbody>
				</table>
			</div>
		)};
};

 class InboxItem extends React.Component{
	 render(){
		 return(
			 <tr>
				 <td>5pm</td>
				 <td>Rami loves pizza</td>
				 <td>Confirmed</td>
			 </tr>
		 )
	 }
 }
ReactDOM.render(<App />, 
	document.getElementById('app')
)