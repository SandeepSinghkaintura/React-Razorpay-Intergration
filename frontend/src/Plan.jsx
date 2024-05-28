import img1 from './assets/tick.png';

function Plan({ amount , checkoutHandler}) {
  return (
    <>
      <div className="container-fluid plan h-100">
      <h1 className="main_heading pt-4 ">
                The Plan
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatibus eius sed iste quia deleniti, quaerat quisquam accusamus odito.</p>
        <div className="container pt-5">
            <div className="row gx-0 align-items-center justify-content-center">
               
                <div className="col-md-4">
                <div className="plan_col1 plan_col2">
                        <h5>DISCOVER</h5>
                        <h1 className='pt-4'>$99<span> /Per Month</span></h1>
                        <div className="plan_details ">
                        <p><img src={img1}  alt=''/>5 Classes Per Month</p>
                        <p><img src={img1} alt='' />5 Classes Per Month</p>
                    </div>
                    <button className='btn_choose' onClick={() => checkoutHandler(amount)}>Choose Plan</button>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Plan