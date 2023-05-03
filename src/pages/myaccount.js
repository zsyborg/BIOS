import React from 'react';
import mole from '../media/molecules.png';
const Account = () => {
return (
	<div
	// style={{
	// 	display: 'flex',
	// 	justifyContent: 'Centre',
	// }}
	>
	<div className="container-fluid">
            <div className='grid grid-flow-row'>
					<h3>My Account</h3>
                <div className='basis-1/2 grid grid-flow-col'>
		
            <div className='grid grid-flow-row'>
                <div className='grid grid-flow-col grid-cols-6'>
      
				<img src='../media/BIOS_line 1.png' className='rounded' />
						<p>username</p>
						<p>Full Name</p>
						<span className='bg-yellow-500 rounded-md text-xs m-1 p-2'>Tag 1</span>
						<span className='bg-yellow-500 rounded-md text-xs m-1 p-2'>Tag Unique</span>
					
						<p className='text-sm'>Field Of Study - Microbiology</p>
				</div>
			<div className='grid grid-flow-row'>
        
				<p className='text-sm'>You will investigate biological concepts including the chemical basis of life, cell structure and function, metabolism, reproduction, genetics, evolution, biological diversity and classification, plant structure and function, animal structure and function and ecology.</p>
			</div>

			<div className='grid grid-flow-row'>
			<div className='grid grid-flow-col grid-cols-2'>
				<p>Views</p>
				<p>Comments</p>
			</div>
			<div className='grid grid-flow-col grid-cols-2'>
				<p>Downloads</p>
				<p>Published</p>
				Social Links
			</div>
			</div>
			


	</div>


				
				
				
		
			


			
			</div>

				<div className='basis-1/2 grid grid-flow-col'>
				<h3>Showcase</h3>

				</div>
			</div>
			</div>
			{/* End */}
			</div>




);
};

export default Account;
