import React from 'react'
import Section from './Section'
import Header from './Header'

export default function Home(){
	return(
		<>
			<Header></Header>
			<Section 
				title="Model 3"
				tagline="Order Online for touchless delivery"
				bgImage = "model-3.jpg"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
				arrow = {true}
			/>
			<Section 
				title="Model Y"
				tagline="Order Online for touchless delivery"
				bgImage = "model-y.jpg"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
			/>
			<Section 
				title="Model S"
				tagline="Order Online for touchless delivery"
				bgImage = "model-s.jpg"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
			/>
			<Section 
				title="Model X"
				tagline="Order Online for touchless delivery"
				bgImage = "model-x.jpg"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
			/>
			<Section 
				title="Solar Panels"
				tagline="Lower Cost Solar Panels in India"
				bgImage = "solar-panel.jpg"
				leftBtn="Order Now"
				rightBtn="Learn More"
			/>
			<Section 
				title="Solar Roof"
				tagline="Produce Clean Energy from your roof"
				bgImage = "solar-roof.jpg"
				leftBtn="Order Now"
				rightBtn="Learn More"
			/>
			<Section 
				title="Accessories"
				bgImage = "accessories.jpg"
				leftBtn="Order Now"
			/>			
		</>
	)
}