import './App.css';
import React,{useState} from "react";
import checkStress from './algoritm';
import { useFormik } from "formik"

function check(sleep, sport, work, headache, lacrimation,result)
{
    if(lacrimation==true)
    {
        if(headache=true){
            result="You cannot use VR today, but take a breake."
        }
        else{
            if(sleep<5)
            {
                result="You cannot use VR today, but take a breake."
            }if(sleep>5||sleep<8)
            {
                if(sport>30)
                {
                    if(work<4)
                    {
                        result="If you want, you can use VR for 20 min."
                    }else if(work>4)
                    {
                        result="You could use VR for 15 min, but better will be try to rest without technology."
                    }
                }else{
                    result="It will be better for you not use a VR today."
                }
            }
        }
    }else{
        if(headache=true){
            result="You cannot use VR today, but take a breake."
        }

    }
    return result
}

function App() {

  const [headache,setHeadache]=useState(false);
  const [lacrimation,setLacrimation]=useState(false);
  const [sport,setSport]=useState(0);
  const [work,setWork]=useState(0.0);
  const [sleep,setSleep]=useState(0.0);
  const [result,setRestult]=useState("");
  var result2="Now, I don't know the answer"


  const formik=useFormik({
    initialValues:{
      sleep1: sleep,
      work1: work,
      sport1: sport,
      headache1: headache,
      lacrimation1: lacrimation,
    },

  onSubmit: (values) =>{
    result=check(sleep,sport,work,headache,lacrimation,result)
  }
  });


  const myStyle = {
    color: "white",
    backgroundColor: "#80BFFF",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };

  const formStyle = {
    color: "white",
    backgroundColor: "#a482e8",
    padding: "10px",
    MinWidth: "200px",
    fontFamily: "Sans-Serif"
  };


  return (
    <div className="App" >
      <form onSubmit={formik.handleSubmit}>
      <h1 style={myStyle}>Check your stress</h1>
      <form style={formStyle}>
      <label>How long did you sleep?</label><br></br>
      <input type='range' min='0' max='14' step='0.5' onChange={(e)=>setSleep(e.target.value)} value={sleep} /><br></br>
      <label>{sleep}</label>
      </form>
      <br></br>
      <form style={myStyle}>
      <label>How long did you do sport? Time enter in minute.</label><br></br>
      <input type='range' min='0' max='200' step='1' value={sport} onChange={(e)=>setSport(e.target.value)} /><br></br>
      <label>{sport}</label><br></br>
      </form>
      <br></br>
      <form style={formStyle}>
      <label>How long are you working? Time enter in hour.</label><br></br>
      <input type='range' min='0' max='12' step='0.25' value={work} onChange={(e)=>setWork(e.target.value)} /><br></br>
      <label>{work}</label><br></br>
      </form>
      <br></br>
      <form style={myStyle}>
      <label>Have you got a headache?</label><br></br>
      <input type="radio" name="headache" value="Yes" onChange={e=>setHeadache(e.target.value)} />Yes
      <input type="radio" name="headache" value="No" onChange={e=>setHeadache(e.target.value)} />No <br></br>
      </form>
      <br></br>
      <form style={formStyle}>
      <label>Have you got a lacrimation?</label><br></br>
      <input type="radio" name="lacrimation" value="Yes" onChange={e=>setLacrimation(e.target.value)} />Yes
      <input type="radio" name="lacrimation" value="No" onChange={e=>setLacrimation(e.target.value)} />No <br></br>
      </form >
      <br></br>
      <button onClick={() => result2=check(sleep,sport,work,headache,lacrimation,result2)} style={{backgroundColor: "#695ae8", color: "white",  width: "100px", height: "40px"}}>Check</button>
      <br></br>
      <label>Your stress:</label><br></br><br></br>
      <label style={myStyle}>{result2}</label>
      </form>
    </div>

  );

}

export default App;
