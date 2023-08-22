import React from "react";
import { styled } from "styled-components";
import SidebarLogo from "./SidebarLogo";
import SidebarTopMenu from "./SidebarTopMenu";
import SidebarBottomMenu from "./SidebarBottomMenu";

const Sidebar = () => {
	return (
		<Root>
			<SidebarLogo />
			<MainMenuArea>
				<SidebarTopMenu />
			</MainMenuArea>
			<SidebarBottomMenu />
		</Root>
	);
};

export default Sidebar;

const Root = styled.div`
	width: 300px;
	border-right: 1px solid #e0e0e0;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const MainMenuArea = styled.div`
	flex: 1;
`;
