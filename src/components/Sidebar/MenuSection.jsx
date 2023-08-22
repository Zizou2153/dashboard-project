import React from "react";
import { styled } from "styled-components";
import MenuItem from "./MenuItem";

const MenuSection = ({ title, menus = [] }) => {
	return (
		<div>
			<Title>{title}</Title>
			<MenuArea>
				{menus.map((menu) => (
					<MenuItem
						key={menu.link}
						icon={menu.icon}
						name={menu.name}
						link={menu.link}
					/>
				))}
			</MenuArea>
		</div>
	);
};

export default MenuSection;

const Title = styled.h4`
	text-transform: uppercase;
`;

const MenuArea = styled.div``;
