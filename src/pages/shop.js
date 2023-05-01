import React from 'react';
import Headroom from 'react-headroom';
import Nav from '../components/Nav';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TextField } from '@mui/material';
import Slider from '@mui/material/Slider';
import ModelLicense from '../components/ModelLicense';



const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    fontSize:12,
    margin: 0
  },
  Checkbox: {
    fontSize:12,
    margin:0,
    padding:0
  },
  //style for font size
  resize:{
    fontSize:12,
    height: 14
  },
}
function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

function Shopy(props) {

  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };


  return (
    <section className="flex flex-col relative grow mt-[175px] mx-0 mb-0">
      <div className="flex flex-col relative grow mt-4 mx-0 mb-0">
        <div className="md:my-0 md:mx-1 xxs:flex-wrap xxs:justify-start xxs:content-start xxs:gap-y-4 xxs:gap-x-4 flex justify-evenly items-start gap-x-2 relative my-0 mx-2.5">
          <div className="xxs:flex-[0_0_calc(1/1_*_100%_-_0px_/_1)] xxs:min-w-[unset] flex flex-col relative shrink-0 basis-[219px] min-w-[219px]">
            <div className="flex flex-col relative grow">
              <div className="flex flex-col relative">
                <div className="flex flex-col bg-[rgb(40,40,69)] rounded-[3px] outline outline-[rgb(147,147,218)] outline-1 outline-offset-[-1px] relative grow">
                  <div
                    style={{ '--src': `url(${require('../media/c4830e5a4f1e2aa073077127cc4dfe18.png')})` }}
                    className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat w-[19px] h-[19px] absolute top-[7px] right-[-27px]"
                  />
                  <px-grid track-style="flex-grow: 1;" x="12fr 23px 241fr" y="4px minmax(0px, max-content) 7px">
                   <TextField size='small' style={{'height': '20px'}} />
                  </px-grid>
                </div>
              </div>

              <div className="flex flex-col relative mt-2.5 mx-0 mb-0">
                <div className="flex flex-col bg-[rgba(255,255,255,0.047)] rounded-[3px] outline outline-[rgb(80,80,131)] outline-1 outline-offset-[-1px] relative grow">
                  <div className="flex flex-col w-[51.81%] relative mt-[3px] mr-[43.48%] mb-0 ml-[4.71%]">
                    <div className="flex flex-col relative">
                      <h5 className="lg:text-[12px] lg:text-left font-light text-[16px] leading-tight font-Poppins text-white tracking-[0px] relative grow">
                        Filter
                      </h5>
                      <div
                        style={{ '--src': `url(${require('../media/0c35bd28898cd3f54305958ed1bb4187.png')})` }}
                        className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat w-2.5 h-2.5 absolute top-[7px] left-[43px]"
                      />
                    </div>

                    <div className="flex flex-col relative mt-[5px] mx-0 mb-0">
                      <div className="font-semibold text-xs font-Poppins text-white tracking-[0px] relative">
                        Model Quality
                      </div>

                      <div className="flex items-center relative mt-[5px] mx-0 mb-0">
                        <div className="flex flex-col relative basis-[25px]">
                          <img
                            src={require('../media/5e2db7a4bc6f18e6c185caafcaba52aa.png')}
                            alt="alt text"
                            className="w-[25px] h-auto aspect-[1.09] align-top object-cover object-[center_center] relative min-w-[25px] mt-1 mx-0 mb-0"
                          />
                        </div>
                        <div className="flex flex-col relative basis-[31px]">
                          <img
                            src={require('../media/05f1cd58e8748c7863555bb83432be79.png')}
                            alt="alt text"
                            className="w-[25px] h-auto aspect-[1.09] align-top object-cover object-[center_center] relative min-w-[25px] mt-1 mr-0 mb-0 ml-1.5"
                          />
                        </div>
                        <div className="flex flex-col relative basis-[25px]">
                          <img
                            src={require('../media/4edba33240d12272de369d3b97e36e30.png')}
                            alt="alt text"
                            className="w-[19px] h-auto aspect-[0.76] align-top object-cover object-[center_center] relative min-w-[19px] mt-0.5 mr-0 mb-0 ml-1.5"
                          />
                        </div>
                        <div className="flex flex-col relative basis-[31px]">
                          <img
                            src={require('../media/083ac1d0ec0263c56d671b9ab97fe7d2.png')}
                            alt="alt text"
                            className="w-[25px] h-auto aspect-[1] align-top object-cover object-[center_center] relative min-w-[25px] mt-0.5 mr-0 mb-0 ml-1.5"
                          />
                        </div>
                        <div className="flex flex-col relative basis-[31px]">
                          <img
                            src={require('../media/1c6cc92d108b24c2855679c10beebbc3.png')}
                            alt="alt text"
                            className="w-[25px] h-auto aspect-[1] align-top object-cover object-[center_center] relative min-w-[25px] mt-0.5 mr-0 mb-0 ml-1.5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold text-xs font-Poppins text-white">
                      Price ($)
                    </div>

                    <div className="w-35">
                      
                          <Slider
                          getAriaLabel={() => 'Price Range'}
                          value={value1}
                          onChange={handleChange1}
                          valueLabelDisplay="auto"
                          getAriaValueText={valuetext}
                          disableSwap
                          InputProps={{
                            classes: {
                              input: styles.resize,
                            },
                          }}
                          className={styles.textField}
                        />
                      
                    </div>
                  </div>

                  <div className="lg:mt-[3px] lg:mx-2 lg:mb-0 xs:mt-[3px] xs:mx-1 xs:mb-0 flex flex-col relative mt-[3px] mr-3 mb-0 ml-[13px]">
                    <div className="flex flex-col relative grow">
                      <div className="font-semibold text-xs font-Poppins text-white tracking-[0px] relative">
                        Common Names
                      </div>
                     
                      <TextField size="small"
                        id="commonnames"
                        label=""
                        placeholder=""
                        multiline
                        rows={3}
                        />
                    </div>
                  </div>

                  <div className="lg:mt-4 lg:mx-2 lg:mb-0 xs:mt-4 xs:mx-1 xs:mb-0 flex flex-col relative mt-4 mx-[13px] mb-0">
                    <div className="flex flex-col relative grow">
                      <div className="font-semibold text-xs font-Poppins text-white tracking-[0px] relative">
                        Model Formats
                      </div>
                      <div className="flex flex-col relative" >
                        
                          <div className='formPanel' style={{maxHeight: 100, overflow: 'auto'}}>
                          <FormGroup InputProps={{
                            classes: {
                              input: styles.Checkbox,
                            },
                          }}
                          className={styles.textField}>
                            <FormControlLabel control={<Checkbox size='small' 
                            InputProps={{
                              classes: {
                                input: styles.Checkbox,
                              },
                            }}
                            className={styles.textField}
                            />} label="3DS" />

                            <FormControlLabel control={<Checkbox size='small'
                            InputProps={{
                              classes: {
                                input: styles.Checkbox,
                              },
                            }}
                            className={styles.Checkbox}
                               />} label="Wavefront Obj" />

                            <FormControlLabel control={<Checkbox size='small' 
                            InputProps={{
                              classes: {
                                input: styles.Checkbox,
                              },
                            }}
                            className={styles.Checkbox}
                            />} label="FBX" />

<FormControlLabel control={<Checkbox size='small' 
                            InputProps={{
                              classes: {
                                input: styles.Checkbox,
                              },
                            }}
                            className={styles.Checkbox}
                            />} label="MAX" />

<FormControlLabel control={<Checkbox size='small' 
                            InputProps={{
                              classes: {
                                input: styles.Checkbox,
                              },
                            }}
                            className={styles.Checkbox}
                            />} label="DAE" />
<FormControlLabel control={<Checkbox size='small' 
                            InputProps={{
                              classes: {
                                input: styles.Checkbox,
                              },
                            }}
                            className={styles.Checkbox}
                            />} label="gLTF" />

<FormControlLabel control={<Checkbox size='small' 
                            InputProps={{
                              classes: {
                                input: styles.Checkbox,
                              },
                            }}
                            className={styles.Checkbox}
                            />} label="GLB" />

<FormControlLabel control={<Checkbox size='small' 
                            InputProps={{
                              classes: {
                                input: styles.Checkbox,
                              },
                            }}
                            className={styles.Checkbox}
                            />} label="STL" />

                          </FormGroup>
                          </div>



                      </div>
                    </div>
                  </div>

                  <div className="lg:mt-4 lg:mx-2 lg:mb-0 xs:mt-4 xs:mx-1 xs:mb-0 flex flex-col relative mt-4 mr-3 mb-0 ml-[13px]">
                    <div className="flex flex-col relative grow">
                      <div className="flex flex-col relative z-[1]">
                        <div className="flex flex-col relative grow">
                          <div className="font-semibold text-xs font-Poppins text-white tracking-[0px] relative">
                            Model License Type
                          </div>
                          
                        </div>
                      </div>
                      <div className="flex flex-col relative">
                      <div className="flex flex-col relative" >
                          

                          <ModelLicense/>
                               
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:mt-[18px] lg:mx-2 lg:mb-0 xs:mt-[18px] xs:mx-1 xs:mb-0 flex flex-col relative mt-[18px] mr-3 mb-0 ml-[13px]">
                    <div className="flex flex-col relative grow">
                      <div className="font-semibold text-xs font-Poppins text-white tracking-[0px] relative">
                        Bioprocess
                      </div>
                      <ModelLicense/>
                     
                    </div>
                  </div>

                  <div className="lg:mt-4 lg:mx-2 lg:mb-[29px] xs:mt-4 xs:mx-1 xs:mb-[29px] flex flex-col relative mt-4 mr-3 mb-[29px] ml-[13px]">
                    <div className="flex flex-col relative grow">
                      <div className="font-semibold text-xs font-Poppins text-white tracking-[0px] relative">
                        Animated
                      </div>

                      <div className="flex flex-col rounded-sm outline outline-[rgb(80,80,131)] outline-[0.5px] outline-offset-[-0.5px] relative mt-px mx-0 mb-0">
                        <ModelLicense/>
                        <div className="flex flex-col w-[63.35%] relative grow mt-1 mr-[34.66%] mb-[22px] ml-[1.99%]">


                         
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xxs:flex-[0_0_calc(1/1_*_100%_-_0px_/_1)] xxs:min-w-[unset] flex flex-col relative shrink-0 basis-[267px] min-w-[267px]">
            <div className="flex flex-col relative grow mt-[43px] mx-0 mb-[578px]">
              <div className="flex flex-col relative">
                <img
                  src={require('../media/efde50be8f8808e65c9457b86146fb3e.png')}
                  alt="alt text"
                  className="rounded-[3.5px_3.5px_0px_0px] outline outline-[rgb(80,80,131)] outline-1 outline-offset-[-1px] w-full h-auto aspect-[1.4] align-top object-cover object-[center_center] relative"
                />
              </div>

              <div className="flex flex-col rounded-[0px_0px_3.5px_3.5px] outline outline-[rgb(80,80,131)] outline-1 outline-offset-[-1px] relative mt-0.5 mx-0 mb-0">
                <div className="flex flex-col relative grow mt-1 mr-[5px] mb-[3px] ml-1.5">
                  <div className="flex items-center relative">
                    <h5 className="lg:text-[12px] lg:text-left font-medium text-[16px] leading-[1.12] font-Poppins text-white tracking-[0px] relative shrink-0 basis-auto min-w-[56px] mt-0 mx-0 mb-px">
                      Pigeon
                    </h5>
                    <div className="basis-[11px]" />
                    <div className="flex flex-col relative basis-2.5">
                      <img
                        src={require('../media/c32a4e7041172ca85763f255937c5ea5.png')}
                        alt="alt text"
                        className="w-2.5 h-auto aspect-[1] align-top object-cover object-[center_center] relative min-w-[10px] mt-[5px] mx-0 mb-1"
                      />
                    </div>
                    <div className="flex flex-col relative shrink-0 basis-6 min-w-[24px]">
                      <div className="flex items-center justify-center font-light text-[10px] leading-none font-Poppins text-white text-center tracking-[0px] relative grow mt-[5px] mr-0 mb-0.5 ml-0.5">
                        1620
                      </div>
                    </div>
                    <div className="basis-[54px]" />
                    <div className="flex flex-col relative basis-[114px]">
                      <img
                        src={require('../media/17623a363656fcb87e925be37d23eadf.png')}
                        alt="alt text"
                        className="w-[114px] h-auto aspect-[6.33] align-top object-cover object-[center_center] relative min-w-[114px] mt-px mx-0 mb-0"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col relative">
                    <div className="flex items-center relative">
                      <div className="flex flex-col relative basis-[13px]">
                        <img
                          src={require('../media/944779908714ad82607f5d794da8231b.png')}
                          alt="alt text"
                          className="w-[13px] h-auto aspect-[1] align-top object-cover object-[center_center] relative min-w-[13px] mt-[3px] mx-0 mb-0"
                        />
                      </div>
                      <div className="flex flex-col relative shrink-0 basis-[74px] min-w-[74px]">
                        <div className="font-normal text-[9.5px] leading-[1.26] font-Poppins text-white tracking-[0px] relative grow mt-1 mr-0 mb-0 ml-1">
                          creator_name
                        </div>
                      </div>
                      <div className="basis-[126px]" />
                      <div className="font-normal text-xs font-AbhayaLibre text-white tracking-[0px] relative shrink-0 basis-auto min-w-[44px]">
                        $1200.00
                      </div>
                    </div>

                    <div className="flex items-center relative mt-0.5 mx-0 mb-0">
                      <p className="font-light text-[10px] leading-[1.2] font-Poppins text-white tracking-[0px] relative grow basis-[218px]">
                        This text is sample text. This is where a short description of the model will be. I think this
                        should provide sufficient space
                      </p>
                      <div className="flex flex-col relative basis-[51px]">
                        <div className="flex flex-col relative grow mt-3.5 mr-0 mb-0 ml-1">
                          <div className="font-[275] text-[7px] leading-[1.42] font-Poppins text-white tracking-[0px] relative">
                            License Types
                          </div>
                          <div className="flex flex-col relative">
                            <img
                              src={require('../media/00a50fa5697c07d5c1de12329f275278.png')}
                              alt="alt text"
                              className="w-11 h-auto aspect-[3.67] align-top object-cover object-[center_center] relative min-w-[44px] mt-0 mr-px mb-0 ml-0.5"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col relative mt-[637px] mx-0 mb-0">
          <div className="flex items-center w-[17.22%] relative my-0 mx-auto">
            
            
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Shop(props) {
  return (
    <React.Fragment>
      {/* <Headroom tag="header" className="page-header">
        <nav className="max:show">
          <Nav />
        </nav>
      </Headroom> */}

      <main className="product flex flex-col bg-[rgb(27,28,48)] pt-[undefinedpx] pr-[undefinedpx] pb-[undefinedpx] pl-[undefinedpx] relative overflow-hidden">
        <div className="flex flex-col relative">{Shopy(props)}</div>
      </main>
    </React.Fragment>
  );
}
