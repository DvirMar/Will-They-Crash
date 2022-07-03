import React, { useState, useEffect } from "react";
import DataForm2 from "./components/DataForm2";
import Background from "./components/Background";
import "./App.css";
import YesForCrash from "./components/YesForCrash";
import NoForCrash from "./components/NoForCrash";



const App = () => {
  const [showCrash, setShowCrash] = useState(false);
  const [showNoCrash, setShowNoCrash] = useState(false);
  const [res,setRes] = useState(0);

  useEffect(()=>{
    if(res<0){
      setShowCrash(false);
      setShowNoCrash(true);
    }
    else if(res>0){
      setShowCrash(true);
      setShowNoCrash(false);
    }
    else{
    setShowNoCrash(false);
    setShowCrash(false);
  }
    console.log(res)
    
    },[res])

    
    
  return (
    <div className="working">
      <div className="first">
        <h1>Will They Crash!?</h1>      
        <DataForm2 setRes={setRes} />
      </div>
      <div className="second">
        <Background />
      </div>
      <div className="crashed">{showCrash && <YesForCrash />}</div>
      <div className="no-crashed">{showNoCrash && <NoForCrash />}</div>
    </div>
  );
};

export default App;
