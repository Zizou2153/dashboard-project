import React from "react";
import MenuSection from "./MenuSection";
/*import styled from "styled-components";*/

import {
	mdiViewDashboard,
	mdiPoll,
	mdiInformation,
	mdiWifi,
	mdiCheckAll,
	mdiShield,
	mdiSegment,
	mdiBrightness4,
} from "@mdi/js";

// Create a styled component for menuItems
/*const StyledMenuSection = styled.div`
	margin: 10px;
`;*/

const SidebarTopMenu = () => {
	return (
		<div>
			<MenuSection
				title="Analytics"
				menus={[
					{
						icon: mdiViewDashboard,
						name: "Dashboard",
						link: "/dashboard",
					},
					{
						icon: mdiPoll,
						name: "Performance",
						link: "/performance",
					},
				]}
			/>
			<MenuSection
				title="Content"
				menus={[
					{
						icon: mdiInformation,
						name: "Guides",
						link: "/guides",
					},
					{
						icon: mdiWifi,
						name: "Hotspots",
						link: "/hotspots",
					},
					{
						icon: mdiCheckAll,
						name: "Checklists",
						link: "/checklists",
					},
					{
						icon: mdiShield,
						name: "NPS",
						link: "/nps",
					},
				]}
			/>
			<MenuSection
				title="Customization"
				menus={[
					{
						icon: mdiSegment,
						name: "Segments",
						link: "/segments",
					},
					{
						icon: mdiBrightness4,
						name: "Themes",
						link: "/themes",
					},
				]}
			/>
		</div>
	);
};

export default SidebarTopMenu;
