import React from 'react';
import Logo from '../media/BIOS_symbol 1.svg';

const Account = () => {
return (
	<div
	// style={{
	// 	display: 'flex',
	// 	justifyContent: 'Centre',
	// }}
	>
	<div className="container-fluid">
           
		<h3>My Account</h3>
            <div className='flex flex-row'>
                <div className='flex flex-col basis-1/2'>

            <div className='grid grid-flow-col grid-cols-4'>
				<img src={Logo} className='rounded w-12' />
                <div className='grid grid-cols-1 grid-flow-row'>
                    <p className='sml'>username</p>
                    <p className='sml'>Full Name</p>
                </div>
                    <span className='bg-yellow-500 rounded-full flex justify-center items-center sml p-1'>Tag 1</span>
                    <span className='bg-yellow-500 rounded-full flex justify-center items-center sml p-1'>Tag Unique</span>
                    <p className='text-sm'>Field Of Study - Microbiology</p>
                </div>
			<div className='flex flex-row'>
        
				<p className='text-sm'>You will investigate biological concepts including the chemical basis of life, cell structure and function, metabolism, reproduction, genetics, evolution, biological diversity and classification, plant structure and function, animal structure and function and ecology.</p>
			</div>

			<div className='flex flex-row'>
			<div className='flex flex-col col-2'>
				<p>Views</p>
				<p>Comments</p>
			</div>
			<div className='flex flex-col col-2'>
				<p>Downloads</p>
				<p>Published</p>
				Social Links
			</div>
			</div>
			

		</div>
			


				<div className='basis-1/2 flex flex-col'>
				<h3>Showcase</h3>

				</div>
			</div>
			</div>
			{/* End */}
			</div>




);
};

export default Account;
