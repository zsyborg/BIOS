import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

import SelectType from './selectType';
import TextField from '@mui/material/TextField';
import uploadBtn from './icons/uploadBtn';
import './forms.css';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import UploadBtn from './uploadBtn';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function ScienticForm() {
  const [agreed, setAgreed] = useState(false)

  return (
    
       <div className="container-fluid">
            <div className='flex flex-row w-full gap-4'>
            <div className='basis-1/3 flex-col p-3'>
                  <div className='flex flex-row justify-around'>
                    <div className='basis-1/2 flex-col text-left'>
                      <p className='text-sm'>content ID: </p>
                      <h3>Content Owner</h3>
                      <p className='text-sm'>username</p>
                    </div>

                    <div className='basis-1/2 align-middle items-center'>
                      <div className='flex flex-row h-12 items-center align-middle gap-4'>
                        <p className='rounded-full bg-teal-500 p-5 d-inline-flex'>1</p>
                        <p className='rounded-full bg-teal-500 p-5 d-inline-flex'>1</p>
                        <p className='rounded-full bg-teal-500 p-5 d-inline-flex '>1</p>
                      </div>
                    </div>

                    
                  </div>
                      
          <div className='flex flex-row text-left'>
            <h3 className='text-left'>1. Model Biocomplexity</h3>
            </div>
                <div className='grid grid-flow-row text-left'>
                  <div className='grid grid-cols-2 grid-flow-col justify-around items-center'>

                   <p className='sml'> Select Primary Layer</p>
                   <SelectType/>
                   
                  </div>
                </div>
      <div className='grid grid-flow-row text-left'>
        <div className='grid grid-cols-2 grid-flow-col justify-around items-center'>
          <p className='sml'>Select Secondary Layer(s)</p>
              <SelectType/>
          </div>
        </div>

                  
                <div className='grid text-left grid-flow-row w-full my-5'>
                  <h3>
                    2.Bioprocess / Molecular Function
                  </h3>
                  <p className='sml'>Input GO ID, PUBMED ID, or other OBO Ontology vocabulary for name of process depicted</p>
                  <TextField size="small" />
                </div>
          
          {/* First Section Ends */}

                </div>
                <div className='basis-1/3 flex-col justify-start text-left'>
                      <h3>3. Model Biological Structures & Components</h3>
                      <p className='sml d-inline-block mb-3'>Input biological structures & components (primary then secondary layers) used to compose the scene</p>
                <div className='flex flex-row justify-around'>
                <div className='grid grid-cols-2 gap-1 grid-flow-row items-center justify-around'>
                      <TextField size='small' placeholder='Organism'/> <p className='sml my-3'>or <UploadBtn /></p>
                      <TextField size='small' placeholder='Community'/> <p className='sml my-3'>or <UploadBtn /></p>
                      <TextField size='small' placeholder='Organ System'/> <p className='my-3 sml'>or <UploadBtn /></p>
                      <TextField size='small' placeholder='Organ'/> <p className='sml my-3'>or <UploadBtn /></p>
                      <TextField size='small' placeholder='Tissue'/> <p className='sml my-3'>or <UploadBtn /></p>
                  </div>
                </div>
              

            

                
                
                  

                  
                

{/* Second Section Ends */}
                </div>



                <div className='basis-1/3 flex-row text-left'>
                          <h3>4. Published In</h3>
                    <div className='grid grid-cols-3 grid-flow-col gap-2 justify-start'>

                          <TextField id="ver" variant="outlined" size='small' label="Journal" className='my-3' />
                          <TextField id="ver" variant="outlined" size='small' label="Title" className='my-3' />
                          <TextField id="ver" variant="outlined" size='small' label="DOI" className='my-3' />
                         
                    </div>
                    <div className='flex mt-5 flex-col justify-start'>
                          <h3 className='mb-2'>5. Reference Database(s)</h3>
                          <div className='grid grid-flow-col'>
                          <SelectType />
                          </div>
                    </div>
                </div>
            </div>


   <div className="container-fluid">
      <div className='flex flex-row w-full'>
            <div className='basis-2/3 flex-col p-3 bg-blue-950 justify-start text-left'>
        <h3 className='my-2'>
            6. 3D Model Goal & Methodology Overview 
        </h3>
        <p className='sml mb-4'> (include any other text, questions, intuitions, etc. about the modelled process, structure, system, or  function to better contextualize or drive thought about your production.
        </p>
        <TextField
            id="pfp"
            placeholder=""
            multiline
            rows={3}
            fullWidth
        />
      
      </div>
    </div>
  </div>




        </div>
  );
}
export default ScienticForm;
