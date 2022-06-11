import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import { useSelector, useDispatch } from 'react-redux';
import {setMenuStatus , getMenuStatus} from '../features/menu/menuSlice'


export default function Section(props) {
	const menuStatus = useSelector(getMenuStatus);

	return (
		<Wrapper bg={props.bgImage} open={menuStatus}>
			<ModelName>
				<Fade bottom delay={300}>
					<h1>{props.title}</h1>
				</Fade>
				<Fade bottom delay={1000} duration={700}>
				<p>{props.tagline}</p>
				</Fade>
			</ModelName>

			<CTA>
				<ButtonGroup>
				<Fade left bottom delay={1000} duration={1500} distance={"15px"}>
					<LeftBtn>{props.leftBtn}</LeftBtn>
					</Fade>
					<Fade right bottom delay={1000} duration={1500} distance={"15px"}>
					{props.rightBtn && <RightBtn>{props.rightBtn}</RightBtn>}
					</Fade>
				</ButtonGroup>

				{props.arrow && <Arrow src="images/down-arrow.svg" />}


			</CTA>

		</Wrapper>
	)
}


const Wrapper = styled.section`
	background-image: url(images/${props => props.bg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 100vh;
	width: 100vw;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	filter: contrast(${props => props.open ? 0.7 : '1.0'}) brightness(${props => props.open ? 0.7 : '1.0'});
`
const ModelName = styled.div`
	padding-top: 15vh;
	h1{
		font-size: 3rem;
	}
`
const ButtonGroup = styled.div`
	padding-bottom: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;
	@media all and (max-width: 600px){
		flex-direction: column;
	}
`
const CTA = styled.div``

const LeftBtn = styled.button`
	background-color: rgba(23,26,32,0.8);
	height: 40px;
	width: 256px;
	color: #fff;
	border: none;
	border-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;
	margin: 8px;
`
const RightBtn = styled(LeftBtn)`
		background-color: #fff;
		color: #000;
`
const Arrow = styled.img`
	height: 40px;
	margin-bottom: 20px;
	animation: bounce infinite 2s;
`

