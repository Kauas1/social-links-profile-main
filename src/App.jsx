import jessica from "../assets/images/avatar-jessica.jpeg"
const App = () => {
  return(
    <>
    <div className="container"> 
      <div className="icon"><img src={jessica} alt="" className="jess"/>
      </div>
      <div className="nome">
        <h2>Jessica Randall</h2>
      </div>
      <div className="location">
        <p>Lodon, United Kingdom</p>
      </div>
      <div className="text">
        <p>"Front-end developer and avide reader"</p>
      </div>
      <div className="diretorios">
        <a href="#" className="href"><button className="botao">GitHub</button></a>
        <a href="#" className="href"><button className="botao">Frontend Mentor</button></a>
        <a href="#" className="href"><button className="botao">Linkedin</button></a>
        <a href="#" className="href"><button className="botao">Twitter</button></a>
        <a href="#" className="href"><button className="botao">Instagram</button></a>
      </div>
    </div>

   
    </>
  )
}
export default App;
