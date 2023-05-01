import React from 'react';
import Button from '@mui/material/Button';
import Transparency from '../components/icons/transparency';
import education from '../media/education.png';
import platform from '../media/platform.png';
import explore from '../media/explore.png';
import community from '../media/community.png';
const Hbout = () => {
return (
	<div
	// style={{
	// 	display: 'flex',
	// 	justifyContent: 'Centre',
	// }}
	>
         <div className="container mx-auto">
            <div className='columns-1 flex flex-row justify-center text-center'>
              <h2 style={{"fontSize":"4vw"}}>
                Science Animation at your Fingertips
              </h2>
            </div>
      </div>
		<div className="container">
          <div className="columns-6">
            </div>
            <div className="flex flex-row items-center mb-20">
              
              <div className="basis-1/2 items-end text-right gap-3 pr-8">
              <h2 className='text-5xl mb-4'>BIOS is a platform<br/> for the Life Sciences</h2>
              <p className='text-sm leading-8'>By creating a unique platform for accurate 3d models, and a powerful comprehensive database we are able to create interactive reference model that contains all known & accessible information about that entity enabling omnidirectional exploration.</p>
                
                
              </div>

              <div className="basis-1/2">
                 <img src={platform} className="Home 1" alt="logo" />
              </div>


            </div>
    
            <div className="flex flex-row items-center justify-center mb-20">
              <div className='basis-1/2'>
                <h2 className='text-5xl mb-10 font-bold'>BIOS in Education</h2>
                <p className='text-sm leading-8'>The BIOS Education feature allows science educators to modularly plug
and play with individual biological concepts when building their syllabi,
whilst providing students a single resource for learning and evaluation
in school & exploring biology to their hearts content.</p>
              </div>
              </div>

                
              <div class="flex flex-row items-center justify-evenly mb-32">
              

              <div className="basis-1/2 justify-start">
                
                 <img src={education} className="Home 1" alt="logo" />
              </div>

              <div className="basis-1/3">
                <p className='text-sm text-left leading-7'>As a digital platform that allows for real-time tracking of progress, performance & various other metrics BIOS can replace normal testing methods/practices.
Users learned experience in a concept will be correlated with several user metrics, quizzes, challenge activities, along with other evaluation methods which will provide better data and insight than the few dozen datapoints currently collected over a students class year.</p>
              </div>


            </div>
              <div class="flex flex-row items-center justify-center mb-32">
              

              <div className="basis-1/2 justify-start">
                 <img src={community} alt="Community" />
              </div>

              <div className="basis-1/2">
              <h2 className='text-5xl mb-10 font-bold text-left'>We Love Our Science Community</h2>
                <p className='text-sm text-left leading-7'>We also strive to give scientists more recognition & increase their social presence. To do this a citation field in the UI will change based on what is selected by the user, it will display data on the concept’s publication(s), authors w/pictures, discovery date & pub. date, organizations involved, & funding. This provides a degree of transparency & recognition in the scientific community that has never before existed.</p>
              </div>


            </div>
            <div className="container mx-auto">
            <div class="flex flex-row items-center justify-center mb-5">
              <div className="basis-1/2">
                <h2 className='font-bold' style={{"fontSize":"4vw"}}>
                    Striving to Increase Education and Ideation             
                </h2>
              </div>
              </div>
            <div className='flex flex-row justify-center text-center'>
              <div className="basis-1/3">
              <p className='text-sm leading-10 mb-10'>
              Increasing the surface area to volume of research/info ratio
to increase partcipation in greater and higher level discourse
to drive innovation utilizing idealogical friction.
              </p>
            </div>
            </div>
      </div>


              <div class="flex flex-row items-center justify-center">
            
              <div className="basis-1/3 justify-start">
                 <img src={explore} className="Home 1" alt="logo" />
              </div>

              <div className="basis-1/2">
                <h2>Ready to Explore?</h2>
                <p>Sign up for closed BETA</p>
                <Button variant="contained" className='bg-blue-700 w-1/2'>Sign Up</Button>
              </div>


            </div>

          </div>
			</div>
	);
};

export default Hbout;
