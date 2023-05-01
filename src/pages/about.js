import React from 'react';
import Nav from '../components/Nav';

import mole from '../media/molecules.png';
import Lock from '../components/icons/lock';
import Accuracy from '../components/icons/accuracy';
import Education from '../components/icons/education';
import Exploration from '../components/icons/exploration';
import Goal from '../components/icons/goal';
import Transparency from '../components/icons/transparency';
const About = () => {
return (
	<div
	// style={{
	// 	display: 'flex',
	// 	justifyContent: 'Centre',
	// }}
	>
		
		<div className="container m-auto grid grid-flow-row grid-cols-1 items-start">
				<div className="flex flex-col items-center justify-center mb-10">
						<h1 className='text-6xl font-bold mt-5 mb-2'>Our Philosophy</h1>
							<p className='text-sm leading-8 w-96'>Science relies on reproducibility and validation of ideas.
					Through transparency & accessability, we seek to enable & facilitate
					this intrinsic characteristic of science.</p>
					</div>	
				</div>

				<div className="container m-auto grid grid-cols-3 gap-6 items-start">
				<div className="flex flex-col items-center justify-center">
				
			<Lock />
			
<h3 className='text-5xl font-bold mb-4'>Accessibility</h3>
<p className='text-sm leading-8'>Accessability is a founding philosophy of BIOS. Based on the accute realization that we learn the same information to become educated & skilled enough to participate, explore and gain experienced in a field; it becomes apparant that accessability to information for all levels is key to advancement. We strive to be a single access point & reference resource for students, the public, and scientists.</p>

			
				</div>
				<div className="flex flex-col items-center justify-center">
			<Education />		
				
				<h3 className='text-5xl font-bold mb-4'>Education</h3>
			  <p className='text-sm leading-8'>Education is paramount to us at BIOS. Education
and access to information is an inherent factor
in the social mobility and economic stability
of a society. We put this into practice, providing
an up-to-date structured resource for a relatively complete reference knowledgebase anyone
will be able to have access to
and navigate — with the help of Starlink.</p>
				</div>
				<div className="flex flex-col items-center justify-center">
	
				<Exploration />		

			  	<h3 className='text-5xl font-bold mb-4'>
				  Exploration
				</h3>
				<p className='text-sm leading-8'>At BIOS we believe that exploration is at the heart
of success, without the ability to explore
there are no accidents and therefore no discoveries. We want to provide that ability to explore
to everyone regardless of social, economic,
or academic standing.</p>
				</div>
			
				<div className="flex flex-col items-center justify-center mt-16">
			<Transparency />		

				<h3 className='text-5xl font-bold mb-4'>
Transparency</h3>
				<p className='text-sm leading-8'>Being open about our sources and ownership and rights of research is integral to the process of creating this knowledgebase and was part of the inspiration behind BIOS. We believe that if we make this information accessible, we should ensure credit and responsibility is given to those who did the work and published the discoveries, therefore this acknowledgement system is built directly into our app with the use of OrciDs.</p>
				</div>


				<div className="flex flex-col items-center justify-center mt-16">
			<Accuracy />		

				<h3 className='text-5xl font-bold mb-4'>
					Accuracy
					</h3>
				<p className='text-sm leading-8'>Accuracy of information is critical to us at BIOS as without it we would have no purpose. All scientific data relies on how accurate a theory is… or isn’t. Our goal is to provide all of our users, no matter the experience level or use case, with the most accurate information availble pertaining to their requests. We want our users to also be able to see the edge of their subfield or find the edge quickly. People deserve a resource that emphasizes accuracy & reliablity without fail — BIOS seeks to be this resource.</p>
			</div>


				<div className="flex flex-col items-center justify-center mt-16">
			<Goal />		

					<h3 className='text-5xl font-bold mb-4'>Goal</h3>
					<p className='text-sm leading-8'>Our goal at BIOS is to provide access to information. We do not believe, as scientists & educators that we should take the role of dictating this information — instead we seek to be a platform for the information itself. We not only will provide conflicting theories where publications dispute claims and theories, but will also provide the ability for users to discuss current canon with new theories.</p>
			</div>
		</div>
			
		<div className="container-fluid m-auto grid grid-cols-2 justify-start">

			<div className="flex flex-col justify-start">
				<img src={mole} />
			</div>

			<div className="flex flex-col items-center justify-center content-center">
				<div className=''>

<p className='text-sm leading-8 w-9/12'>
At BIOS, our mission is to bring biology into the digital age to create a world where everyone has the same reference for known information in a field—Biology. BIOS is an ambitious plan  to create a user friendly intuitive knowledge-base that enables anyone,  anywhere, to access, navigate and interact visually with any concept, data or other information. The BIOS team, though small has expertise in big data, several fields of biology, and software development. The BIOS team understands the current problems the field has and is actively working to develop solutions.
</p>
<p className='text-sm leading-8 w-9/12'>BIOS strives to set a new standard not only for the field of biology and life science education, but for all of society.</p>
				</div>
			</div>

		</div>
			
			
			{/* End */}
			</div>
	);
};

export default About;
