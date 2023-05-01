
import SelectType from './selectType';
import FormControl from '@mui/material/FormControl';
import './forms.css';
import '../App.css';
import AddIcon from '@mui/icons-material/Add';
import DropzoneAreaExample from './uploader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switcher from './Switch';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import UploadBtn from './uploadBtn';


function FileUpload3D() {


  return (
    
       <div className="container-fluid m-5">

            <div className='flex flex-row gap-4 w-full formPanel'>
                <div className='basis-1/3 flex-col p-3'>
                  <div className='flex flex-row justify-around'>
                    <div className='basis-1/2 flex-col text-left'>
                      <p className='text-sm'>content ID: </p>
                      <h3>Content Owner</h3>
                      
                      <p className='text-sm'>
                        username
                        </p>
                    </div>

                    <div className='basis-1/2 items-center'>
                      <div className='flex flex-row h-12 justify-center align-middle formPanel'>
                        <p className='rounded-full bg-teal-500 w-12 items-center align-middle justify-center flex'></p>
                        <p className='rounded-full bg-teal-500 w-12 items-center align-middle justify-center flex'></p>
                        <p className='rounded-full bg-teal-500 w-12 items-center align-middle justify-center flex'></p>
                        <p className='rounded-full bg-teal-500 w-12 items-center align-middle justify-center flex'></p>
                      </div>
                    </div>

                    
                  </div>
    <div className='flex flex-col text-left my-4'>
      1.
      <div className='bg-slate-600 p-4 rounded-lg'>
      <DropzoneAreaExample className='bg-blue-900' />
      </div>
      
    <p className='sml my-2 text-justify'> We support FBX, OBJ, Cinema 4D, Lightwave, Maya, Blender, and 3DS Max  files.
You may also upload an archive like .png, gif, ZIP, RAR, or 7z containing your textures, materials, & mesh.</p>
  </div>

  <div className='flex flex-col w-full my-4'>
    <div className='flex flex-row formPanel w-full'>
    <div className='basis-auto flex-col w-full p-3'>
      <p className='text-sm text-right'>Model: 0020</p>
    <p className='sml text-left'>stem_surface(2023v.2).png</p>
    
  <div className='flex flex-row w-full'>
  <div className='basis-11/12 grid-flow-col'>
    <p className='text-sm'>Select File Type</p>
        <SelectType name='Select File Type' />
        <SelectType name='Select Type'/>
    </div>
  <div className='grid grid-flow-row justify-center w-full'>

    <p className='text-sm'>Size: 20 MB</p>
    <SelectType/>
            <TextField
              id="filled-search"
              label="Rendering Software"
              type="search"
              variant="filled"
            />
            <TextField
              id="filled-search"
              label="Version"
              type="search"
              variant="filled"
            />
      
    <p className='text-sm'>Delete</p>

        </div>
      </div>
    </div>
  </div>
</div>
        <div className='grid grid-flow-row w-full text-left my-4 formPanel p-2'>
            <p className='text-sm mr-2'>
              <span className='text-lg'>2.</span> Image Reference Data Type(s)
            </p>
          <p className='text-sm mb-4'>Select type of imaging data used to model scene</p>
          <SelectType name='multi-select'/> 
        </div>
          <div className='grid grid-flow-row-dense text-left my-4 formPanel p-2'>
          <p className='text-sm'>
          <span className='text-lg'>3.</span> Image Reference Data & Citations
              <Switcher />
          </p>
          <div className='grid grid-flow-row grid-cols-3 justify-center items-center text-center my-4'>
          <TextField
                        id="filled-search"
                        label="Data Url"
                        type="search"
                        variant="filled"
                      />
                <p className='sml'>or</p>
                <UploadBtn style={{"padding":"20px"}} />
            </div>
                <p className='sml'>Why. how and where was data used. What methodology was used to integrate it </p>
        <SelectType />
                <AddIcon/>
        </div>

                {/* <div className='flex flex-row w-full'>
          
                  
                </div> */}
                

{/* First Section Ends */}
                </div>
                <div className='basis-1/3 flex-col justify-start text-left  my-4'>
                  <div className='formPanel p-3'>

                      <h3>4. Model Name</h3>
                <div className='flex flex-row justify-start'>

                      <p className='text-sm d-inline-block'>Common name of 3D model, scene, or animation</p>
                </div>
                <TextField
                        id="filled-search"
                        label="Material Name"
                        type="search"
                        variant="filled"
                      />
                  </div>
                  <div className='formPanel p-3 my-4'>

                <h3 className='mt-4'>5. Scientific Name</h3>
                <div className='flex flex-col'>
                      <p className='text-sm'>Input Binomial Nomenclature, Scientific Name, or Official Name </p>
                      <TextField
                        id="filled-search"
                        label="Version"
                        type="search"
                        variant="filled"
                      />
                </div>
                </div>
                

                <div className='flex flex-row justify-start formPanel p-3'>
                <div class="grid grid-rows-2 my-4">
                      <h2>Scene Info</h2>
                      <h3>8a. Scene Organization</h3>
                      <p className='mb-4 mt-0 text-sm d-inline-block'>Scene Organization Methodology & Description</p>
                      <TextField size="small"
                        id="pfp"
                        label="Scene Brief"
                        placeholder="Write here"
                        multiline
                        rows={3}
                        />
                      <div className='grid-col grid grid-cols-1 items-center justify-center'>

                        {/* <p className='text-sm'>and/or </p> */}
                        <UploadBtn/>
                      </div>
                  </div>
                </div>

                
                <div class="grid grid-rows-2 my-4 formPanel p-3">
                      
                      <h3>8b. UV Mapping</h3>
                      <p className='text-sm d-inline-block'>UV Description</p>
                      <SelectType name='select'/>
                      
                        <TextField
                        id="filled-search"
                        label="Description"
                        type="search"
                        variant="filled"
                        multiline
                        rows={3}
                      />
                        <UploadBtn />
                  </div>
                  <div class="grid grid-rows-1 my-4 formPanel p-3">
                      <h3 className='mb-3'>8c. Material(s)</h3>
                  <div class="grid grid-flow-col grid-cols-3 justify-around">
                      <TextField
                        id="filled-search"
                        label="Material Name"
                        type="search"
                        variant="filled"
                      />
                      <TextField
                        id="filled-search"
                        label="Description"
                        type="search"
                        variant="filled"
                      />
                      
                    <div class="grid grid-flow-row justify-end text-center">
                      <h5 className='text-sm'>Resolution</h5>
                  <div class="grid grid-cols-3 grid-flow-col text-center justify-start">

                      <TextField size="small" style = {{width: 35}}/>
                      x
                      <TextField size="small" style = {{width: 35}} />
                      </div>
                      <UploadBtn />
                      </div>
                    </div>
                      
                  </div>

                  <div class="grid grid-rows-1 my-4 formPanel p-3">
                      <h3>8d. Texture(s)</h3>
                  <div class="grid grid-cols-3 justify-center">
                      
                  <TextField
                        id="filled-search"
                        label="Texture Name"
                        type="search"
                        variant="filled"
                      />
                      <TextField
                        id="filled-search"
                        label="Material Name"
                        type="search"
                        variant="filled"
                      />
                      
                    <div class="grid grid-flow-row justify-end text-center">
                      <h5 className='text-sm'>Resolution</h5>
                  <div class="grid grid-cols-3 grid-flow-col text-center justify-center">

                      <TextField size="small" style = {{width: 35}}/>
                      x
                      <TextField size="small" style = {{width: 35}} />
                      </div>
                      <UploadBtn />

                      
                      </div>
                  </div>
                </div>
                
                  <div class="grid grid-rows-1 my-4 formPanel p-3">
                      <h3>11. Hardware Requirements</h3>
                      
                      <TextField
                        id="filled-search"
                        label="Description"
                        type="search"
                        variant="filled"
                      />
                 </div>
                  <div class="grid grid-rows-1 formPanel p-3">
                      <h3>12. Scene Description</h3>
                      <TextField size="small" label="Objective and/or Purpose of Scene/Model" multiline rows={5} />
                 </div>


{/* Second Section Ends */}
                </div>
                <div className='basis-1/3 flex-row text-left p-3  my-4'>
                    <div className='flex flex-col justify-start formPanel p-3'>
                          <h3>6. Scientific Collaboration</h3>
                          <p className='text-sm '>Models with research, lab, or organization collaboration must upload docs detailing purpose, roles, methodology, & references</p>
                    </div>
                    <div className='flex flex-col justify-start my-6 formPanel p-3'>
                          <h3 className='mb-3'>7. Collaborator(s)</h3>
                          <div className='grid grid-cols-3 grid-flow-col gap-3'>
                          <TextField
                            id="filled-search"
                            label="Name (person/org/username)"
                            type="search"
                            variant="filled"
                          />
                          <TextField
                            id="filled-search"
                            label="Email (institute pref.)"
                            type="search"
                            variant="filled"
                          />
                          <TextField
                            id="filled-search"
                            label="Social URL"
                            type="search"
                            variant="filled"
                          />
                            
                          </div>

                          <div className='grid grid-cols-3 grid-flow-col gap-3'>
                          <TextField
                            id="filled-search"
                            label="Sci Collab"
                            type="search"
                            variant="filled"
                          />
                          <TextField
                            id="filled-search"
                            label="Role"
                            type="search"
                            variant="filled"
                          />
                          <TextField
                            id="filled-search"
                            label="Collaboration Description (who, why, what, how)"
                            type="search"
                            variant="filled"
                          />
                         
                      </div>

                    </div>

                    <div className='grid grid-flow-row justify-startmb-3 my-4 formPanel p-3'>
                          <h3>9. AI used <Switcher /></h3>
                          <div className='grid grid-cols-2 grid-flow-col gap-3 items-center'>

                         <SelectType name='select use case'/>
                         <TextField
                            id="filled-search"
                            label="Model / Software Name"
                            type="search"
                            variant="filled"
                            size='small'
                          />
                          
                          </div>
                          <div className='grid grid-cols-2 grid-flow-col justify-center text-center mt-3 items-center'>
                          <TextField size="small"
                            id="pfp"
                            label="Description & Methodology"
                            multiline
                            rows={1}
                          />
                          <p className='sml'>and/or</p>
                            <Button variant="contained" component="label">
                          <UploadBtn/>
                          <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        </div>
                    </div>
                    <div className='grid grid-flow-row justify-start my-4 formPanel p-3'>
                          <h3>10. Rigging</h3>
                    <div className='grid grid-flow-col grid-cols-2 justify-start my-4 gap-3 align-middle items-center'>

                         

                         <SelectType/>
                         <TextField
                            id="filled-search"
                            label="Model / Software Name"
                            type="search"
                            variant="filled"
                            size='small'
                          />
                          
                          </div>
                          <div className='grid grid-cols-2 grid-flow-col items-center justify-center text-center'>
                          <TextField size="small"
                            id="pfp"
                            label="Description & Methodology"
                            multiline
                            rows={3}
                            type="search"
                            variant="filled"
                          />
                          <p className='text-sm'>
                          and/or
                            </p>
                            <UploadBtn />

                          </div>
                    </div>
                    <div className='flex flex-col justify-start my-4 formPanel p-3'>

                          <h3 className='mb-3'>11 a. Animation(s)</h3>
                          <div className='grid grid-cols-3 grid-flow-col gap-3 items-center '>

                          <TextField
                            id="filled-search"
                            label="Animation Name"
                            type="search"
                            variant="filled"
                            size='small'
                          />
                           <TextField
                            id="filled-search"
                            label="Total Frame"
                            type="search"
                            variant="filled"
                            size='small'
                          />
                           <TextField
                            id="filled-search"
                            label="FPS"
                            type="search"
                            variant="filled"
                            size='small'
                          />
                         
                          </div>

                          <div className='grid grid-cols-2 grid-flow-col my-3 items-center'>

                          <TextField
                            id="filled-search"
                            label="Duration"
                            type="search"
                            variant="filled"
                            size='small'
                          />
                          <p className='text-center sml'>and/or</p>
                          <UploadBtn />
                        
                    </div>
                          <TextField size="small"
                            id="pfp"
                            label="Animation Technology, Methodology, & Description"
                            multiline
                            rows={3}
                          />
                    </div>


                </div>
            </div>

<div className='grid grid-flow-row text-left m-4'>
      <h2>13. Licensing Selection</h2>
      <div className='grid grid-flow-col grid-cols-3 gap-4 p-3'>
        <div className='formPanel w-full p-3'>
          <h2>Editorial License</h2>
            <p className='text-sm'>You covenant, represent, and warrant that this is your original work and contains no intellectual property or other rights of any kind of which you are not the exclusive owner.</p>
        </div>    
        <div className='formPanel w-full p-3'>
          <h2>Standard License</h2>
            <p className='text-sm'>You covenant, represent, and warrant that this is your original work and contains no intellectual property or other rights of any kind of which you are not the exclusive owner.</p>
        </div>    
        <div className='formPanel w-full p-3'>
          <h2>Commercial License</h2>
            <p className='text-sm'>You covenant, represent, and warrant that this is your original work and contains no intellectual property or other rights of any kind of which you are not the exclusive owner.</p>
        </div>    
      </div>
</div>

<div className='grid grid-flow-row text-left my-4 border-double border-4 border-sky-500 m-4 p-4'>
<div className='border border-blue-900 p-4 grid grid-flow-col grid-cols-4 gap-4'>
      <div>
        <h2>
        <span className='text-lg'>14.</span> Product Preview</h2>
        <p className='text-sm'>Input Scene renders (minimum of 1080p) (81 PPI)) & videos (if animated) for marketplace display</p>
      </div>
      <div>
      
      <UploadBtn />

        <p className='text-sm my-3'>
          aspergillus_niger(2023v.2).png</p>
      </div>
      <div className='border-l-2 pl-3 border-blue-900'>
        <h2>15. Who can see?</h2>
        <p className='text-sm'>Private</p>
        <p className='text-sm'>Public</p>
      </div>
      <div className='border-l-2 pl-4 border-blue-800'>
        <h2>16. Availability</h2>
        <p className='text-sm'>Free</p>
        <p className='text-sm'>Paid</p>
        <TextField size="small" id="ver" variant="outlined" label="Price $" />
      </div>
      <div className='grid grid-flow-row'>
        <h4>Would you like to allow<br/> Biological Information OS Inc.<br/> to integrate your model <br/>in later platform features?</h4>
      <div className='grid grid-cols-3 justify-center grid-flow-col'>
          <p className='text-sm'>Yes</p>
          <p className='text-sm'>Ask Later</p>
          <p className='text-sm'>No</p>
      </div>
      </div>
</div>
</div>



        </div>
  );
}
export default FileUpload3D;
