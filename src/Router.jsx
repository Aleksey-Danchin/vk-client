import { Switch, Route } from "react-router-dom";
import { useVK } from "./services/VK";
import { MainPage, LoginPage } from "./pages";

export default function Router(props) {
	const { authenticated } = useVK();

	if (!authenticated) {
		return <LoginPage />;
	}

	return (
		<Switch>
			<Route component={MainPage} />
		</Switch>
	);
}
