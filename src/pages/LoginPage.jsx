import {
	Box,
	Button,
	CardContent,
	Container as MuiContainer,
	Typography,
} from "@material-ui/core";

import { styled } from "@material-ui/styles";
import { useVK } from "../services/VK";

const Container = styled(MuiContainer)({ marginTop: "10px" });
const Center = ({ children }) => (
	<Box display="flex" flexDiraction="row" justifyContent="center" margin={2}>
		{children}
	</Box>
);

export default function LoginPage(porps) {
	const { login } = useVK();
	return (
		<Container>
			<CardContent>
				<Center>
					<Typography variant="p">
						For authenticating through vk application just click to
						button below. =)
					</Typography>
				</Center>
				<Center>
					<Button variant="contained" onClick={login}>
						VK login
					</Button>
				</Center>
			</CardContent>
		</Container>
	);
}
