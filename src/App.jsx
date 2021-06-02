import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import { useCallback } from "react";
import { useHistory } from "react-router";
import Router from "./Router";
import { useVK } from "./services/VK";

function App() {
	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<MainLable />
					<LoginLogoutButton />
				</Toolbar>
			</AppBar>
			<Router />
		</>
	);
}

export default App;

function LoginLogoutButton(props) {
	const { authenticated, logout } = useVK();
	const history = useHistory();

	const toLoginPage = useCallback(() => history.push("/"), [history]);

	if (authenticated) {
		return (
			<Button color="inherit" onClick={logout}>
				Logout
			</Button>
		);
	}

	return (
		<Button color="inherit" onClick={toLoginPage}>
			Login
		</Button>
	);
}

function MainLable(props) {
	const { authenticated, user } = useVK();

	if (authenticated) {
		return (
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				{user.first_name} {user.last_name}
			</Typography>
		);
	}

	return (
		<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
			VK client
		</Typography>
	);
}
