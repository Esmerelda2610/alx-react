import logo from "./holberton-logo.jpg";
import "./App.css";
import { getFooterCopy } from "../../../task_0/dashboard/src/utils";

function App() {
	return (
		<div className="App">
		    <div className="App-header">
		        <img src={logo} className="App-logo" alt="logo" />
		        <h1>School dashboard</h1>
	    	</div>
		    <div className="App-body">
				<p>Login to access the full dashnoard</p>
				<form>
					<label htmlFor="email">Email:</label>
					<br />
					<input type="email" name="email" id="email" />
					<br />
					<label htmlFor="password">Password:</label>
					<br />
					<input type="password" name="password" id="password" />
					<br />
					<input type="submit" value="OK" />
				</form>
		    </div>
			<div className="App-footer">
				Copyright {getFullYear()} - {getFooterCopy()}
			</div>
		</div>
	);
}

export default App;
