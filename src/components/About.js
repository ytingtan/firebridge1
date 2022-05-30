import React from 'react';
import cards from '../img/3.jpg'
import people from '../img/4.jpg'

function About() {
    return (
        <>
        <div class="col-10 d-flex w-100 h-100 p-3 mx-auto flex-column mt-4 text-center" id="about">
		<main class="px-5">
			<h1>YOUR ONESTOP PLATFORM FOR EVERYTHING BRIDGE</h1>
			
		</main>
        <div class="container">
		<div class="row my-5">
			<div class="col-md-6 my-6">
				<img src={cards} alt="Cards" class="w-100" />
				<h4 class="my-6">
					Analysis
				</h4>
				<h6 class="my-6">
					View analysis of past gameplays from Bridge Base Online. Compare statistics with optimal gameplay from the inbuilt algorithm.
				</h6>
			</div>
			<div class="col-md-6 my-6">
				<img src={people} alt="People" class="w-100" />
				<h4 class="my-6" text-center>
					Forum
				</h4>
				<h6 class="my-6" text-center>
					Join a community of Bridge players. Discuss boards with each other and poll on best decision to make in various Bridge situations.
				</h6>
			</div>
		</div>
	    </div>
	    </div>
        </>
    );
}

export default About;