import React from 'react';
import SelectType from '../components/selectType';
function renderSection1(props) {
  return (
    <div>
   <div className="container-fluid m-5">

<div className='flex flex-row gap-4 w-full '>
    <div className='basis-2/3 flex-col p-3'>
      <div className='flex flex-row justify-around'>
        {/* <h4 className="font-normal text-[18px] leading-[0.66] font-Poppins text-white tracking-[0px] relative grow mt-[27px] mr-[155px] mb-0 ml-[725px]">
        publisher_username
        </h4> */}
        <img
          className="rounded-sm border-sky-800 border-2"
          src={require('../media/4ca238b3c705d02e84b84c9adfeeab4b.png')}
          alt="alt text"
          />
        
            </div>

            <div className="flex flex-col relative mx-0 mb-0">
                <div className="flex items-center relative">
                  <div className="flex flex-col relative basis-[134px]">
                    <h2 className="flex font-light text-[24px] leading-[1.16] font-Poppins text-white text-center tracking-[0px] w-[60.45%] relative mt-0 mr-[39.55%] mb-0 ml-0">
                      Pigeon
                    </h2>
                    <h3 className="flex italic font-light text-[20px] font-Poppins text-white text-center tracking-[0px] relative">
                      columba livia
                    </h3>
                  </div>

                  <div className="basis-[151px]" />

                  <div className="flex items-center relative basis-[211px] mt-px mx-0 mb-[26px]">
                    <div className="flex flex-col relative basis-[25px]">
                      <img
                        src={require('../media/c061dfdfc4240e24caf63863907849bc.png')}
                        alt="alt text"
                        className="w-[25px] h-auto aspect-[1] align-top object-cover object-[center_center] relative min-w-[25px]"
                      />
                    </div>
                    <div className="flex flex-col relative shrink-0 basis-9 min-w-[36px]">
                      <div className="flex items-center justify-center font-light text-[14px] leading-[0.85] font-Poppins text-white text-center tracking-[0px] relative grow mt-[7px] mr-0 mb-1.5 ml-1.5">
                        1620
                      </div>
                    </div>
                    <div className="basis-[17px]" />

                    <div
                      // style={{ '--src': `url(${require('../media/7f6347b1f5467b7d17aabd719f18bc48.png')})` }}
                      className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat relative basis-[21px] min-h-[11px] my-[7px] mx-0">
                      <img
                        src={require('../media/1b91e288e60570ef2e823f4d6ac34500.png')}
                        alt="alt text"
                        className="w-[3px] h-auto aspect-[1] align-top object-cover object-[center_center] relative min-w-[3px] mt-1 mr-0 mb-0 ml-[9px]"
                      />
                    </div>

                    <div className="flex flex-col relative shrink-0 basis-[37px] min-w-[37px]">
                      <div className="flex items-center justify-center font-light text-[14px] leading-[1.57] font-Poppins text-white text-center tracking-[0px] relative grow mt-0.5 mr-0 mb-px ml-[7px]">
                        1620
                      </div>
                    </div>
                    <div className="basis-[22px]" />
                    <div className="flex flex-col relative basis-[11px]">
                      <img
                        src={require('../media/428fd06637ebd26a43f41dd32dd224e5.png')}
                        alt="alt text"
                        className="w-[11px] h-auto aspect-[0.73] align-top object-cover object-[center_center] relative min-w-[11px] mt-1.5 mx-0 mb-1"
                      />
                    </div>
                    <div className="basis-3" />
                    <div className="flex items-center justify-center font-light text-[14px] leading-[1.57] font-Poppins text-white text-center tracking-[0px] relative shrink-0 basis-auto min-w-[30px] mt-0.5 mx-0 mb-px">
                      1620
                    </div>
                  </div>
                </div>

                <div className="flex flex-col relative mt-3 mr-0 mb-0 ml-px">
                  <div className="flex font-light text-[14px] leading-[1.57] font-Poppins text-white text-center tracking-[0px] w-[11.86%] relative mt-0">
                    Description
                  </div>
                  <p className="font-light text-[12px] leading-loose text-left font-Poppins text-white tracking-[0px] relative mt-[5px] mr-0 mb-0 ml-px">
                    You will investigate biological concepts including the chemical basis of life, cell structure and
                    function, metabolism, reproduction, genetics, evolution, biological diversity and classification,
                    plant structure and function, animal structure and function and ecology.
                  </p>
                  <p className="font-light text-[12px] leading-loose text-left font-Poppins text-white tracking-[0px] relative mt-5 mb-5">
                    You will investigate biological concepts including the chemical basis of life, cell structure and
                    function, metabolism, reproduction, genetics, evolution, biological diversity and classification,
                    plant structure and function, animal structure and function and ecology.
                  </p>
                  <h5 className="flex font-normal text-[16px] font-Poppins text-white text-left mb-10">
                    Imaging Reference Data Information
                  </h5>
                  <h5 className="flex font-normal text-[16px] font-Poppins text-white text-left mb-10">
                    Citations & other References
                  </h5>
                  <h5 className="flex font-normal text-[16px] font-Poppins text-white text-left mb-10">
                    UV Mapping
                  </h5>
                  <h5 className="flex font-normal text-[16px] font-Poppins text-white text-left mb-10">
                    Surface
                  </h5>
                  <h5 className="flex font-normal text-[16px] font-Poppins text-white text-left mb-10">
                    Rigging
                  </h5>
                  <h5 className="flex font-normal text-[16px] font-Poppins text-white text-left">
                    Animations
                  </h5>
                </div>
              </div>

          </div>

    <div className='basis-1/3 flex-col p-3'>


    <div className=" flex flex-col relative">
          <div className="flex flex-col relative grow">
            <div className="flex items-center gap-x-4 relative grow">
              <div className='formPanel'>
              <div className="flex flex-col relative basis-[350px] p-2">
                <div className="flex flex-col relative mt-0 mr-2.5 mb-0 ml-[9px]">
                  <div className="flex items-center gap-x-[5px] relative ">
                    <div className="flex items-center relative basis-[267px]">
                      <div className="flex flex-col relative basis-9">
                        <div className="flex items-center relative my-0 mx-[11px]">
                          <div className="flex flex-col relative basis-[5px]">
                            <img
                              src={require('../media/8a73a8bd129f51f34ad58d498bb1ad24.png')}
                              alt="alt text"
                              className="w-[5px] h-auto aspect-[0.45] align-top object-cover object-[center_center] relative min-w-[5px]"
                            />
                          </div>
                          <div className="flex flex-col relative basis-[7px]">
                            <img
                              src={require('../media/8a73a8bd129f51f34ad58d498bb1ad24.png')}
                              alt="alt text"
                              className="w-[5px] h-auto aspect-[0.45] align-top object-cover object-[center_center] relative min-w-[5px] mt-0 mr-0 mb-0 ml-0.5"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-center font-light text-[8px] leading-normal font-Poppins text-white text-center tracking-[0px] relative mt-px mx-0 mb-0">
                          Citations
                        </div>
                      </div>

                      <div className="basis-44" />
                      <div className="font-light text-[10px] leading-[1.2] font-Poppins text-white tracking-[0px] relative shrink-0 basis-auto min-w-[55px] mt-0.5 mx-0 mb-2.5">
                        Content ID:
                      </div>
                    </div>

                    <div className="font-medium text-[10px] leading-[1.2] font-Poppins text-white tracking-[0px] relative shrink-0 basis-auto min-w-[42px] mt-0.5 mx-0 mb-2.5">
                      A009301
                    </div>
                    <div
                      // style={{ '--src': `url(${require('../media/cd79a6aa88d2a403a1c8e2ab7db32906.png')})` }}
                      className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat relative overflow-hidden basis-3 min-h-[12px] mt-0.5 mx-0 mb-2.5"
                    />
                  </div>

                  <div className="flex flex-col w-[51.36%] relative mt-2.5 mr-[48.34%] mb-0">
                    <div className="flex flex-col relative mt-0 mr-2 mb-0 ml-0">
                      <div className="flex items-center justify-center font-bold text-[14px] leading-[1.57] font-Poppins text-white text-center tracking-[0px] relative">
                        Reference Information
                      </div>
                      <div className="flex items-center justify-center font-light text-[12px] leading-none font-Poppins text-white text-center tracking-[0px] w-[17.9%] relative mt-[5px] mr-[79.01%] mb-0 ml-[3.09%]">
                        Type
                      </div>
                    </div>

                    <div className="flex items-center justify-center font-bold text-[14px] leading-[1.57] font-Poppins text-white text-center tracking-[0px] relative mt-[29px] mx-0 mb-0">
                      Scientific Collaboration
                    </div>

                    <div className="flex flex-col w-[61.18%] relative mt-[25px] mr-[38.82%] mb-0 ml-0">
                      <div className="flex items-center justify-center font-bold text-[14px] leading-[1.57] font-Poppins text-white text-center tracking-[0px] relative">
                        Biocomplexity
                      </div>
                      <div className="flex items-center justify-center font-light text-[10px] leading-[1.4] font-Poppins text-white text-center tracking-[0px] w-[36.54%] relative mt-[5px] mr-[58.65%] mb-0 ml-[4.81%]">
                        Primary
                      </div>
                      <div className="flex items-center justify-center font-light text-[10px] leading-[1.4] font-Poppins text-white text-center tracking-[0px] w-[51.92%] relative mt-[15px] mr-[43.27%] mb-0 ml-[4.81%]">
                        Secondary
                      </div>
                    </div>

                    <div className="flex items-center justify-center font-bold text-[14px] leading-[1.57] font-Poppins text-white text-center tracking-[0px] w-[56.47%] relative mt-[26px] mr-[43.53%] mb-0 ml-0">
                      Bioprocesses
                    </div>
                  </div>
                </div>

                <div className="flex flex-col relative mt-[70px] mr-[15px] mb-0 ml-2.5">
                  <div className="flex flex-col w-[62.15%] relative mt-0 mr-[37.85%] mb-0 ml-0">
                    <h5 className="flex items-center justify-center font-bold text-[16px] leading-[1.37] font-Poppins text-white text-center tracking-[0px] relative mt-0 mr-4 mb-0 ml-0">
                      General Specifications
                    </h5>
                    <h5 className="flex items-center justify-center font-bold text-[16px] leading-[1.37] font-Poppins text-white text-center tracking-[0px] relative mt-[108px] mx-0 mb-0">
                      Hardware Requirements
                    </h5>
                  </div>

                  <div className="flex items-center relative mt-[41px] mx-0 mb-0">
                    <div className="flex flex-col relative basis-[78px] mt-0 mx-0 mb-px">
                      <h5 className="flex items-center justify-center font-light text-[16px] leading-[1.37] font-Poppins text-white text-center tracking-[0px] relative mt-0 mr-1 mb-0 ml-0">
                        Licensing
                      </h5>

                      <div className="flex flex-col bg-[rgba(255,255,255,0.098)] rounded-[3px] outline outline-[rgb(80,80,131)] outline-1 outline-offset-[-0.5px] relative mt-[3px] mx-0 mb-0">
                        <div className="flex items-center relative grow mt-[3px] mx-0 mb-0.5">
                      
                            <SelectType />
                 
                      </div>
                    </div>

                    <div className="basis-[5px]" />
                    <h5 className="flex items-center justify-center font-light text-[16px] leading-[1.37] font-Poppins text-white text-center tracking-[0px] relative shrink-0 basis-auto min-w-[81px] mt-6 mx-0 mb-0">
                      Download
                    </h5>
                  </div>
                </div>
                </div>
                <div className="flex flex-col w-[31.14%] relative mt-8 mr-[68.86%] mb-0 ml-0">
                  <h5 className="flex items-center justify-center font-light text-[16px] leading-[1.37] font-Poppins text-white text-center tracking-[0px] relative">
                    Collaborators
                  </h5>
                  <h5 className="flex items-center justify-center font-light text-[16px] leading-[1.37] font-Poppins text-white text-center tracking-[0px] relative mt-[61px] mr-[21px] mb-0 ml-0">
                    Publication
                  </h5>
                </div>
            </div>

                <div className="flex flex-col relative mt-3 mx-0 mb-0">
                  <div className="flex flex-col bg-[rgb(40,40,69)] rounded-2xl outline outline-[rgb(80,80,131)] outline-1 outline-offset-[-1px] relative">
                    <div className="flex flex-col relative grow mt-2 mr-[17px] mb-5 ml-[11px]">
                      <div className="flex flex-col relative mt-0 mr-3 mb-0 ml-0.5">
                        <div className="italic font-medium text-[12px] leading-loose font-Poppins text-[rgb(242,244,249)] underline tracking-[0px] relative">
                          The Equilibria of isomerase and...
                        </div>
                        <div className="font-normal text-[10px] leading-[1.6] font-Poppins text-[rgb(168,176,200)] tracking-[0px] relative">
                          J. Biol. Chem., 1943
                        </div>
                      </div>

                      <div className="flex items-center gap-x-[11px] relative mt-2 mx-0 mb-0">
                        <div className="flex flex-col relative basis-[92px]">
                          <img
                            src={require('../media/ff29258f9f3aa4f75ceedf0d3ef01984.png')}
                            alt="alt text"
                            className="rounded-[10px] w-full h-auto aspect-[0.68] align-top object-cover object-[center_center] relative"
                          />
                        </div>

                        <div className="flex flex-col relative basis-[219px] mt-0 mx-0 mb-1">
                          <div className="flex flex-col relative mt-0 mr-0.5 mb-0 ml-0">
                            <h5 className="flex items-center font-medium text-base font-Poppins text-white tracking-[0px] relative">
                              Otto Fritz Meyerhof
                            </h5>
                            <div className="font-normal text-[10px] leading-[1.6] font-Poppins text-[rgb(168,176,200)] tracking-[0px] relative">
                              Meyerhof Lab
                            </div>
                            <div className="font-normal text-[10px] leading-[1.6] font-Poppins text-[rgb(168,176,200)] tracking-[0px] relative">
                              University of Pennsylvania
                            </div>
                          </div>

                          <div className="flex flex-col relative mt-2 mx-0 mb-0">
                            <div className="flex items-center relative">
                              <div className="font-normal text-[12px] leading-[1.66] font-Poppins text-[rgb(168,176,200)] tracking-[0px] relative shrink-0 basis-auto min-w-[83px]">
                                Total Grants:  
                              </div>
                              <div className="ml-[-3px] flex flex-col relative shrink-0 basis-[7px] min-w-[7px]">
                                <div className="font-normal text-[12px] leading-[1.66] font-Poppins text-[rgb(242,244,249)] tracking-[0px] relative grow">
                                  ?
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center relative mt-1 mx-0 mb-0">
                              <div className="font-normal text-[12px] leading-[1.66] font-Poppins text-[rgb(168,176,200)] tracking-[0px] relative shrink-0 basis-auto min-w-[65px]">
                                Funded By:
                              </div>
                              <div className="flex flex-col relative basis-[27px]">
                                <img
                                  src={require('../media/332fae723220ccd1e314eefa63a12b84.png')}
                                  alt="alt text"
                                  className="rounded-[2.9700000286102295px] w-[19px] h-auto aspect-[1] align-top object-cover object-[center_center] relative min-w-[19px] mt-px mr-0 mb-0 ml-2"
                                />
                              </div>
                            </div>

                            <div className="flex items-center relative mt-1 mx-0 mb-0">
                              <div className="font-normal text-[12px] leading-[1.66] font-Poppins text-[rgb(168,176,200)] tracking-[0px] relative shrink-0 basis-auto min-w-[78px]">
                                Partnerships:
                              </div>
                              <div className="flex flex-col relative shrink-0 basis-[141px] min-w-[141px]">
                                <div className="font-normal text-[12px] leading-[1.66] font-Poppins text-[rgb(242,244,249)] tracking-[0px] relative grow mt-0 mr-0 mb-0 ml-1">
                                  Rockefeller Foundation
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-[-204px] flex flex-col relative">
                    <div className="flex flex-col bg-[rgb(147,147,218)] rounded-lg w-[30%] relative grow mt-0 mr-[2.29%] mb-0 ml-[67.71%]">
                      <h5 className="flex items-center justify-center font-medium text-base font-Poppins text-white text-center tracking-[0px] relative grow mt-[7px] mx-[5px] mb-[9px]">
                        abstract
                      </h5>
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
</div>


    
  );
}

export default function Model(props) {
  return (
    <div>
     

      {renderSection1(props)}
    
      {/* <div className='basis-1/2 flex-col p-3'>
        <div className="flex flex-col">{renderSection2(props)}</div>
      </div> */}
    
    </div>
  );
}
