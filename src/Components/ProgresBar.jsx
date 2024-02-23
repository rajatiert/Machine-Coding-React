import "../App.css"
const ProgressBar = ({value})=>{
 
    return <div className="progress-bar" style={{  background: `linear-gradient(to right, green ${value}%, white ${value}%)`}}>
              <spav style={{fontSize:"20px",color:`${value >= 50 ? "white" : "black"}`}}> {value}% </spav>
    </div>
}


export default ProgressBar