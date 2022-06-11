import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {setMenuStatus , getMenuStatus} from '../features/menu/menuSlice'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
export default function Header(){
	const menuStatus = useSelector(getMenuStatus);
	const dispatch = useDispatch();

	// const [menuStatus, setMenuStatus] = useState(false);

	return(
		<Menu>
			<LeftMenu>
				<img src="images/logo.svg" alt="logo" />
			</LeftMenu>
			<CenterMenu>
				<ul>
					<li><a href="">Model S</a></li>
					<li>
						<a href="">Model 3</a>
					</li>
					<li>
						<a href="">Model X</a>
					</li>
					<li>
						<a href="">Model Y</a>
					</li>
					<li>
						<a href="">Solar Roof</a>
					</li>
					<li>
						<a href="">Solar Panels</a>
					</li>
				</ul>
			</CenterMenu>
			<RightMenu>
				<ul>
					<li><a href="">Shop</a></li>
					<li><a href="">Account</a></li>
					<OpenSlidingMenu onClick = {() => 
						dispatch(setMenuStatus())
						}>Menu</OpenSlidingMenu>
				</ul>
			</RightMenu>
			
			<SlidingMenu open = {menuStatus} >
				<CloseWrapper>
					<CrossIcon onClick = {() => 
					dispatch(setMenuStatus())
					}/>
				</CloseWrapper>
				<li><a href="">Model S</a></li>
				<li><a href="">Model 3</a></li>
				<li><a href="">Model X</a></li>
				<li><a href="">Model Y</a></li>
				<li><a href="">Solar Roof</a></li>
				<li><a href="">Solar Panel</a></li>
				<li><a href="">Existing Inventory</a></li>
				<li><a href="">Used Inventory</a></li>
				<li><a href="">Trade In</a></li>
				<li><a href="">Test Drive</a></li>
				<li><a href="">Powerwall</a></li>
				<li><a href="">Commercial Energy</a></li>
			</SlidingMenu>
			

		</Menu>
	)
}
const Menu = styled.div`
	position: fixed;
	width: 100%;
	height: 60px;
	padding-left: 2rem;
	padding-right: 2rem;
	display: flex;
	justify-content:space-between;
	align-items: center;
	z-index: 10;
	ul{
		display: flex;
	}
	li{
		list-style: none;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
	}
	a{
		color: #000;
		font-weight: 600;
	}
`
const LeftMenu = styled.div``
const CenterMenu = styled.div`
	@media all and (max-width: 992px){
		display: none;
	}
`
const RightMenu = styled.div`
	@media all and (max-width: 992px){
		li{
			display: none;
		}
	}
`

const OpenSlidingMenu = styled.button`
	background: none;
	border: none;
	font-weight: bold;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	cursor: pointer;
`

const SlidingMenu = styled.ul`
	position: fixed;
	background: #fff;
	width: 300px;
	right: ${props => props.open ? 0 : '-300px'};
	opacity: ${props => props.open ? 1.0 : '0'};
	transition: all 0.5s ease-in-out;
	top: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	padding: 50px 20px 20px 40px;
	z-index: 99;
	li{
		padding: 10px 0;
	}
`
const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`
const CrossIcon = styled(CloseIcon)`
	cursor: pointer;
`