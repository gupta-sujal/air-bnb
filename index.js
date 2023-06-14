function Navbar()
{
return (
    <nav className="navimage">
        <img src="download.png"/>
    </nav>
)
}
function Middle()
{
   return( <div>
        <img className="mesh" src="photo-mesh.jpg"></img>
        <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </div>
   )
}
function Card()
{
    return(
        <div class="card">
            <img src="katie-zaferes.jpg" className="card-photo"/>
            <div className="card--stats">
                <img src="star.png" />
                <span>    5.0   </span>
                <span>(6) • </span>
                <span> USA </span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>From $136 / person</p>  
              </div>
    )
}
function Page()
{
    return (
        <div>
            <Navbar />
            <Middle />
            <Card />
        </div>
    )
}
ReactDOM.render(<Page/>, document.getElementById("root"));