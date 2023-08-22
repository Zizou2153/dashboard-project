import React from "react";
import Sidebar from "./Sidebar";
import { styled } from "styled-components";

const Layout = () => {
	return (
		<Root>
			<Sidebar />
			<Content>The content is going to be here</Content>
		</Root>
	);
};

export default Layout;

const Root = styled.div`
	display: flex;
	height: 100vh;
`;

const Content = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;
