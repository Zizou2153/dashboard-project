import React from "react";
import { styled } from "styled-components";
import Icon from "@mdi/react";

const MenuItem = ({ icon, name, link }) => {
	const currentPath = window.location.pathname;
	const isCurrent = currentPath === link;
	return (
		<Root href={link} className={isCurrent ? "active" : ""}>
			<IconWrapper>
				<Icon path={icon} title={name} size={0.5} />
			</IconWrapper>
			{name}
		</Root>
	);
};

export default MenuItem;

const IconWrapper = styled.div`
	width: 25px;
	height: 25px;
	background: #e0e0e0;
	border-radius: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Root = styled.a`
	padding: 12px;
	display: flex;
	align-items: center;
	gap: 12px;
	cursor: pointer;
	color: #191717;
	text-decoration: none;
	margin-left: 12px;
	margin-right: 12px;
	&:hover {
		background: rgba(0, 0, 0, 0.025);
		border-radius: 10px;
	}
	&.active {
		color: blue;
		margin-right: 0;
		border-right: 3px solid blue;
	}
`;
