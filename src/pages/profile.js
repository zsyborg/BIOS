import React from 'react';
import BootstrapContainer from 'react-bootstrap/Container';
import BootstrapRow from 'react-bootstrap/Row';
import BootstrapCol from 'react-bootstrap/Col';

const Prof = () => {
  return (
    <section className="flex flex-col relative grow min-h-[1876px]" style={{"backgroundColor":"#FEEECD"}}>
      <div className="flex flex-wrap items-start content-start gap-y-4 gap-x-4 relative grow mt-[27px] mx-[39px] mb-[1446px]">
        <div className="flex flex-wrap content-start gap-y-[7px] relative shrink-0 basis-[1097px] min-h-[42px]">
          <div className="flex flex-col relative">
            <h1 className="font-normal text-[rgb(40,40,69)] ">
              My Account
            </h1>
          </div>
          <div className="flex-[0_0_calc(0.11/1_*_100%_-_(1_-_0.11/1)_*_0px)] ml-[calc(0.88/1_*_100%_-_(1_-_0.88/1)_*_0px_+_0px)] flex flex-col relative">
            <h2 className="flex justify-center font-normal text-[24px] leading-[0.62] font-Poppins text-[rgb(116,116,183)] text-center tracking-[0px] relative grow">
              Showcase
            </h2>
          </div>
        </div>

        <BootstrapContainer as="div" fluid className="relative shrink-0 basis-[640px]">
          <BootstrapRow className="flex-start gx-3 gy-3" xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
            <BootstrapCol className="flex">
              <div className="flex flex-wrap content-start gap-y-[35px] relative grow min-h-[281px]">
                <div className="xxl-max:ml-0 xxl:ml-0 flex-[0_0_calc(1/1_*_100%_-_(1_-_1/1)_*_0px)] flex flex-col relative">
                  <div className="flex flex-col relative grow">
                    <div className="flex items-center relative mt-0 mr-0 mb-0 ml-px">
                      <div className="flex items-center relative basis-[190px] mt-0 mx-0 mb-3">
                        <div
                          style={{ '--src': `url(${require('../media/cdc23058edc90fe82c0c2adea370f8f0.png')})` }}
                          className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat rounded-[34.5px] outline outline-[rgb(92,100,124)] outline-1 outline-offset-[-1px] relative basis-[69px] min-h-[69px]"
                        />
                        <div className="flex flex-col relative basis-[121px]">
                          <div className="flex flex-col relative grow mt-0 mr-0 mb-[26px] ml-[7px]">
                            <h3 className="font-medium text-[22px] leading-[0.9] font-Poppins text-[rgb(40,40,69)] tracking-[0px] relative mt-0 mr-[19px] mb-0 ml-0">
                              bio_boy
                            </h3>
                            <h5 className="font-normal text-[16px] leading-[1.12] font-Poppins text-[rgb(40,40,69)] tracking-[0px] relative mt-[5px] mx-0 mb-0">
                              Thomas Haley
                            </h5>
                          </div>
                        </div>
                      </div>

                      <div className="basis-[66px]" />

                      <div className="flex items-center gap-x-[15px] relative basis-56 mt-[66px] mx-0 mb-0">
                        <h5 className="font-normal text-[16px] leading-[0.93] font-Poppins text-[rgb(40,40,69)] underline tracking-[0px] relative shrink-0 basis-auto min-w-[106px]">
                          Field of Study
                        </h5>
                        <h5 className="font-normal text-[16px] leading-[0.93] font-Poppins text-[rgb(40,40,69)] tracking-[0px] relative shrink-0 basis-auto min-w-[103px]">
                          Microbiology
                        </h5>
                      </div>

                      <div className="basis-[139px]" />
                      <div
                        style={{ '--src': `url(${require('../media/8300d151d71cb897a572a27c7a2e1855.png')})` }}
                        className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat relative overflow-hidden basis-5 min-h-[20px] mt-5 mx-0 mb-[41px]"
                      />
                    </div>

                    <h5 className="font-normal text-base font-Poppins text-[rgb(40,40,69)] tracking-[0px] relative mt-2.5 mx-0 mb-0">
                      You will investigate biological concepts including the chemical basis of life, cell structure and
                      function, metabolism, reproduction, genetics, evolution, biological diversity and classification,
                      plant structure and function, animal structure and function and ecology.
                    </h5>
                  </div>
                </div>
                <div className="xxl-max:ml-0 xxl:ml-0 flex-[0_0_calc(0.5/1_*_100%_-_(1_-_0.5/1)_*_0px)] flex flex-col relative">
                  <div className="flex flex-col relative grow">
                    <div className="flex items-center relative">
                      <h5 className="font-light text-[16px] leading-[0.93] font-Poppins text-[rgb(40,40,69)] tracking-[0px] relative shrink-0 basis-auto min-w-[46px]">
                        Views
                      </h5>
                      <div className="basis-[189px]" />
                      <h5 className="font-light text-[16px] leading-[0.93] font-Poppins text-[rgb(40,40,69)] tracking-[0px] relative shrink-0 basis-auto min-w-[90px]">
                        Comments
                      </h5>
                    </div>

                    <div className="flex items-center relative mt-[25px] mx-0 mb-0">
                      <h5 className="font-light text-[16px] leading-[0.93] font-Poppins text-[rgb(40,40,69)] tracking-[0px] relative shrink-0 basis-auto min-w-[89px]">
                        Downloads
                      </h5>
                      <div className="basis-[146px]" />
                      <h5 className="font-light text-[16px] leading-[0.93] font-Poppins text-[rgb(40,40,69)] tracking-[0px] relative shrink-0 basis-auto min-w-[77px]">
                        Published
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </BootstrapCol>
            <BootstrapCol className="flex">
              <div className="flex items-center relative grow">
                <div className="flex flex-col relative basis-[227px]">
                  <div className="flex items-center relative grow mt-0.5 mr-0 mb-px ml-[17px]">
                    <div className="flex flex-col relative overflow-hidden basis-[26px]">
                      <div className="flex flex-col relative">
                        <div
                          style={{ '--src': `url(${require('../media/916292d09706a5d94d388de1ec3f2469.png')})` }}
                          className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat w-6 h-6 relative min-w-[24px]"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col relative shrink-0 basis-[184px] min-w-[184px]">
                      <div className="font-normal text-[14px] leading-[1.21] font-Inter text-[rgb(40,40,69)] tracking-[0px] relative grow mt-[5px] mr-0 mb-1 ml-[3px]">
                        hhmi.com/brunabittencourt
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-[15px]" />
                <div
                  style={{ '--src': `url(${require('../media/eac13d043180b7f4accd5d99ab8d3464.png')})` }}
                  className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat relative overflow-hidden basis-[27px] min-h-[27px] my-px mx-0"
                />
                <div className="basis-[15px]" />
                <div
                  style={{ '--src': `url(${require('../media/f0743d1da50ef4bb3d094bb7daa4d84a.png')})` }}
                  className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat relative basis-[27px] min-h-[27px] my-px mx-0"
                />
                <div className="basis-[15px]" />

                <div className="flex flex-col relative basis-[27px] my-px mx-0">
                  <div
                    style={{ '--src': `url(${require('../media/15020fbcc57822f853b2c84493b7db40.png')})` }}
                    className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat w-[25px] h-[25px] relative overflow-hidden min-w-[25px] mt-px mr-0 mb-0 ml-px"
                  />
                </div>

                <div className="basis-[15px]" />

                <div className="flex flex-col relative overflow-hidden basis-8 my-px mx-0">
                  <div
                    style={{ '--src': `url(${require('../media/b789496c797f960fb118120f2948b836.png')})` }}
                    className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat w-[30px] h-[25px] relative min-w-[30px] mt-px mr-0 mb-0 ml-px"
                  />
                </div>

                <div className="basis-[15px]" />
                <div
                  style={{ '--src': `url(${require('../media/fb453a7b773e7ed2d1ae4dc8cf82c5d0.png')})` }}
                  className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat relative overflow-hidden basis-[27px] min-h-[29px]"
                />
                <div className="basis-[15px]" />

                <div className="flex flex-col relative overflow-hidden basis-[29px]">
                  <div className="flex flex-col w-[27px] h-[27px] relative min-w-[27px] mt-px mr-0 mb-0 ml-px">
                    <div className="flex flex-col w-[25px] h-[25px] relative min-w-[25px] mt-px mr-0 mb-0 ml-px">
                      <img
                        src={require('../media/6927cf8d94468e840d80a344c6fdd360.png')}
                        alt="alt text"
                        className="w-[25px] h-auto aspect-[1] align-top object-cover object-[center_center] relative min-w-[25px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="basis-[15px]" />
                <div className="flex flex-col relative basis-11">
                  <div
                    style={{ '--src': `url(${require('../media/4b1d31e03bc4d4092b90eca90a5793b2.png')})` }}
                    className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat relative grow min-h-[27px] mt-px mr-[17px] mb-px ml-0"
                  />
                </div>
              </div>
            </BootstrapCol>
          </BootstrapRow>
        </BootstrapContainer>
      </div>
    </section>
  );
}

export default Prof;
// export default function pfp(props) {
//   return (
//     <main className="untitled-page flex flex-col bg-[rgb(254,238,205)] pt-[undefinedpx] pr-[undefinedpx] pb-[undefinedpx] pl-[undefinedpx] relative overflow-hidden">
//       <div className="flex flex-col relative">{account(props)}</div>
//     </main>
//   );
// }
