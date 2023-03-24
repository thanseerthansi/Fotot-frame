import React, { useEffect, useState } from 'react'
// import * as filestack from 'filestack-js';
import * as filestack from "filestack-js";
import { RxCross2 } from "react-icons/rx";
import { FaUpload } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Mainframe() {
  const [uploaded_images, setuploaded_images] = useState([]);
  var client = filestack.init("AVVeQEjIOS36URjpO3geuz");
  useEffect(() => {
    Upload_Product_Image()
    window.scrollTo(0, 0);
  }, [])
  console.log("uploadedimage", uploaded_images)
  const Upload_Product_Image = () => {
    const options = {
      fromSources: ["local_file_system", "instagram", "facebook"],
      accept: ["image/*"],
      transformations: {
        crop: {
          aspectRatio: 4 / 4,
          force: true,
        },
      },
      maxFiles: 10,
      minFiles: 1,
      uploadInBackground: false,
      onUploadDone: (res) => {

        if (res.filesUploaded.length !== 0) {
          var newArray = [...uploaded_images];
          res.filesUploaded.forEach((element) => {
            newArray.push(element.url);
          });
          setuploaded_images(newArray);
        }
      },
    };

    client.picker(options).open();
  };
  const removeimage =(k)=>{
    let imagelist = uploaded_images
    imagelist.splice(k)
    console.log("imagelist",imagelist)
    setuploaded_images(()=>[...imagelist])
  }
  return (
    <div>
      <div className=''>
        <div className='row '>
          <div className='col-12 col-md-8 col-lg-8'>
        <div className=' photocard_style '  >
        <div className="card-body minibackgound "  >   
        <div className='row col-12'>
          {uploaded_images.map((itm,k)=>(
            <div key={k} className='col-6 col-md-4 '>
            <div className="mt-2 item">
              <figure >
              <img src="/assets/img/photos/black-frame.png" alt="example"  style={{width:"100%"}} /> 
              <img src={itm} alt="img" className='minimage' style={{width:"94%"}} />             
                <button onClick={()=>removeimage(k)} className="item-cart"><RxCross2 className='mt-1'/> remove</button>
              </figure>
            </div>
            </div>
          ))}
        
        <div className='col-6 col-md-4'>
        <div className="mt-2 item ">
        
          <div className='text-center upload_card ' >
            <div className='' onClick={()=>Upload_Product_Image()}>
            <FaUpload size={50} color={"black"} />
          <h6>upload images</h6>
            </div>
          </div>
        </div>
        </div>
        </div > 
        

        {/* <img src="\assets\img\photos\collage-622.jpg" width={150} height={150} alt="img" /> */}
       </div>       
        </div> 
        </div>
        <div className=' col-12 col-md-4 col-lg-4'>
        <div className='p-2 my-5' >
          <h3 className="my-4 ">Mini Frames</h3>
          <div className="table-responsive p-3">
            <table className="table table-order">
              <tbody>
             
                  <td className="ps-0"><strong className="text-dark">Papper</strong></td><br/>              
                  <div class="switch-field">
                    <input type="radio" id="radio-one" name="switch-one" value="MATTE" checked/>
                    <label for="radio-one">MATTE</label>
                    <input type="radio" id="radio-two" name="switch-one" value="GLOSS" />
                    <label for="radio-two">GLOSS</label>
                  </div><br/>
                
                
{/*                
                  <td className="ps-0"><strong className="text-dark">Frame Material</strong></td><br/>
                
                  <div class="switch-field">
                    <input type="radio" id="radio-one" name="switch-two" value="Classic look" checked/>
                    <label for="radio-one">CLASSIC LOOK</label>
                    <input type="radio" id="radio-two" name="switch-two" value="Modern Look" />
                    <label for="radio-two">MODERN LOOK</label>
                  </div> */}
                  
                
                
                <tr>
                  <td className="ps-0"><strong className="text-dark">Shipping</strong></td>
                  <td className="pe-0 text-end">
                    <p className="price">$10</p>
                  </td>
                </tr>
                <tr>
                  <td className="ps-0"><strong className="text-dark">Grand Total</strong></td>
                  <td className="pe-0 text-end">
                    <p className="price text-dark fw-bold">$152.79</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="#" className="btn btn-primary rounded w-100 mt-4">Proceed to Checkout</a>

          </div>
        </div>
        </div>       
      </div>
    </div>
  )
}
