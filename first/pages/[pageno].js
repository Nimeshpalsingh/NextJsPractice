
// export async function getStaticPaths() {
//     return {
//       paths: [
//         // String variant:
//         '/blog/first-post',
//         // Object variant:
//         { params: { slug: 82} },
//       ],
//       fallback: true,
//     }
//   }



export async function getStaticProps(context) {
    const res = await fetch(`${Website}mycarddetails.php?card_id=`+82)
    const data = await res.json()
console.log(data);
    if (!data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
          // statusCode: 301
        },
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }


function pageno({data}) {
 

  return (
    <div>
        
       {data?.map((x,y)=>{ return(<div>
    <div className="row" key={y}>
      <div className="row">
        <div className="col">
          <Link to='/Plots&lands'><h5 className="text-start"><MdArrowBack size={35}/></h5></Link>
        </div>
        <div className="col">
          <h5 className="text-end"><FaShareAltSquare size={35}/></h5>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 m-auto">
        <Carousel  infiniteLoop={true} swipeable={true}>
          <div>
            <img src={`${Website}${x.imgpath}`} />
            <p className="legend">Property99acres</p>
          </div>
          <div>
            <img src="./assets/2.jpg" />
            <p className="legend">Property99acres</p>
          </div>
          <div>
            <img src="./assets/3.jpg" />
            <p className="legend">Property99acres</p>
          </div>
        </Carousel>
      </div>
    </div>
    <hr />
    
    <div className="row">
      <div className="col-6"> <h5> ₹ {x?.pricing}</h5></div>
      <div className="col-6">
        <h5 className="text-end"><AiOutlineHeart size={25}/></h5>
      </div>
    </div>
    <div className="row">
      <span><h5> {x.adtitle}</h5></span>
    </div>

    <div className="row">
      <div className="col-8">
        <span> <h6>{x.region} {x.city} {x.name} </h6></span>
      </div>

      <div className="col-4 g-0">
        <p className="text-end">{x.postdate}</p>
      </div>
    </div>
    <div className="row">
      <div className="row">
         <h5>Details</h5> </div>
      <div className="row">
        <table class="table">
          <tbody>
            <tr>
              <th>Type</th>
              <td>{x.utype}</td>
            </tr>
            <tr>
              <th>Listed BY</th>
              <td>{x.listedby}</td>
            </tr>
            <tr>
              <th>PLOT AREA</th>
              <td>{x.area}</td>
            </tr>
            <tr>
              <th>LENGHT</th>
              <td>{x.length}</td>
            </tr>

            <tr>
              <th>WIDTH</th>
              <td>{x.width}</td>
            </tr>
            <tr>
              <th>Facing</th>
              <td>{x.facing}</td>
            </tr>
            <tr>
              <th>Project Name</th>
              <td>{x.projectName}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="row">
      <div className="row">
        <h6>Description</h6>
      </div>
      <div className="row">
        <p>{x.des}</p>
        <hr />
      </div>

                    <div className="row mb-5">
        <div className="col-4 text-end"><FaRegUserCircle size={60}/></div>
        <div className="col-4  text-center">
          <div className="row"><h6 >{x.sname}</h6></div><div className="row"><h6>{x.semail}</h6></div>
          </div>
      </div>
    </div>

<div className="row  fixed-bottom">

<Button variant="contained">Mobile Number</Button>


</div>


  </div>) })}
        
        
        </div>
  )
}

export default pageno