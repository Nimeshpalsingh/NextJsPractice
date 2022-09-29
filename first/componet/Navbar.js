import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <div className="container">
        
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/About" ><a className="nav-link" >About</a></Link>
      </li>
      <li className="nav-item   ">
      <Link href="/Plotsland" ><a className="nav-link" >Plotsland</a></Link>

      

       
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
 
  </div>
</nav>


</div>





    </div>
  )
}

export default Navbar