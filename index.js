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
function Page()
{
    return (
        <div>
            <Navbar />
            <Middle />
        </div>
    )
}
ReactDOM.render(<Page/>, document.getElementById("root"));