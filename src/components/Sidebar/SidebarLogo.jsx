import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const StyledSidebarLogo = styled.div`
	margin: 10px;
`;

const SidebarLogo = () => {
	return (
		<StyledSidebarLogo>
			<FontAwesomeIcon icon={faWindows} size="3x" />
		</StyledSidebarLogo>
	);
};

export default SidebarLogo;
