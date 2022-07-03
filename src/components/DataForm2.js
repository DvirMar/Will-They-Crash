import classes from './DataForm.css'
import React, { useState} from 'react';

const DataForm2 = ({setRes}) =>{

    const [enteredDistance,setEnteredDistance] = useState('');
    const [enterdSpeedCar1,setEnteredSpeedCar1] = useState('');
    const [enteredReaction1,setReaction1] = useState('');
    const [enterdSpeedCar2,setEnteredSpeedCar2] = useState('');
    const [enteredReaction2,setReaction2] = useState('');

    const [enteredDistanceIsValid,setEnteredDistanceIsValid] = useState(false);
    const [enterdSpeedCar1IsValid,setEnteredSpeedCar1IsValid] = useState(false);
    const [enteredReaction1IsValid,setReaction1IsValid] = useState(false);
    const [enterdSpeedCar2IsValid,setEnteredSpeedCar2IsValid] = useState(false);
    const [enteredReaction2IsValid,setReaction2IsValid] = useState(false);

    const [enteredDistanceIsTouched,setEnteredDistanceIsTouched] = useState(false);
    const [enterdSpeedCar1IsTouched,setEnteredSpeedCar1IsTouched] = useState(false);
    const [enteredReaction1IsTouched,setReaction1IsTouched] = useState(false);
    const [enterdSpeedCar2IsTouched,setEnteredSpeedCar2IsTouched] = useState(false);
    const [enteredReaction2IsTouched,setReaction2IsTouched] = useState(false);
    

    const distanceInputChangeHandler = event =>{
        setEnteredDistance(event.target.value);
        setEnteredDistanceIsValid(true);

    }

    const speedCar1InputHandler = event =>{
        setEnteredSpeedCar1(event.target.value);
        setEnteredSpeedCar1IsValid(true);
    }

    const reaction1InputHandler = event =>{
        setReaction1(event.target.value);
        setReaction1IsValid(true);
    }

    const speedCar2InputHandler = event =>{
        setEnteredSpeedCar2(event.target.value);
        setEnteredSpeedCar2IsValid(true);
    }

    const reaction2InputHandler = event =>{
        setReaction2(event.target.value);
        setReaction2IsValid(true);
    }

    const distanceInputBlurHandler = event =>{
        setEnteredDistanceIsTouched(true);

        if(enteredDistance<0){
            setEnteredDistanceIsValid(false);
            return;
        }

    }

    const speedCar1InputBlurHandler = event =>{
        setEnteredSpeedCar1IsTouched(true);

        if(enterdSpeedCar1<0 || enterdSpeedCar1>250){
            setEnteredSpeedCar1IsValid(false);
            return;
        }
    
    }

    const reaction1InputBlurHandler = event =>{
        setReaction1IsTouched(true);

        if(enteredReaction1>1.5 || enteredReaction1<0.15){
            setReaction1IsValid(false);
            return;
        }
    }

    const speedCar2InputBlurHandler = event =>{
        setEnteredSpeedCar2IsTouched(true);

        if(enterdSpeedCar2<0 || enterdSpeedCar2>250){
            setEnteredSpeedCar2IsValid(false);
            return;
        }
    }

    const reaction2InputBlurHandler = event =>{
        setReaction2IsTouched(true);

        if(enteredReaction2>1.5 || enteredReaction2<0.15){
            setReaction2IsValid(false);
            return;
        }    
    
    }
    
    

    const formSubmitHandler = (event) => {
        event.preventDefault();

    setEnteredDistanceIsTouched(true);
    setEnteredSpeedCar1IsTouched(true);
    setReaction1IsTouched(true);
    setEnteredSpeedCar2IsTouched(true);
    setReaction2IsTouched(true);

    if(enteredDistance<0){
        setEnteredDistanceIsValid(false);
        return;
    }

    if(enterdSpeedCar1<0 || enterdSpeedCar1>250){
        setEnteredSpeedCar1IsValid(false);
        return;
    }

    if(enteredReaction1>1.5 || enteredReaction1<0.15){
        setReaction1IsValid(false);
        return;
    }

    if(enterdSpeedCar2<0 || enterdSpeedCar2>250){
        setEnteredSpeedCar2IsValid(false);
        return;
    }

    if(enteredReaction2>1.5 || enteredReaction2<0.15){
        setReaction2IsValid(false);
        return;
    }    



        console.log(enteredDistance);
        console.log(enterdSpeedCar1);
        console.log(enteredReaction1);
        console.log(enterdSpeedCar2);
        console.log(enteredReaction2);

        
        setEnteredDistance('');
        setEnteredSpeedCar1('');
        setReaction1('');
        setEnteredSpeedCar2('');
        setReaction2('');

        let distanceMet= enteredDistance*1000;
        let speedMet1= enterdSpeedCar1/3.6;
        let speedMet2= enterdSpeedCar2/3.6;
        


        let result = speedMet1*enteredReaction1 + speedMet1*speedMet1/24 + 
                     speedMet2*enteredReaction2 + speedMet2*speedMet2/24 - distanceMet; 
        setRes(result);

    }

    const distanceInputIsInvalid = !enteredDistanceIsValid && enteredDistanceIsTouched;
    const speedCar1InputIsInvalid = !enterdSpeedCar1IsValid && enterdSpeedCar1IsTouched;
    const reaction1InputIsInvalid = !enteredReaction1IsValid && enteredReaction1IsTouched;
    const speedCar2InputIsInvalid = !enterdSpeedCar2IsValid && enterdSpeedCar2IsTouched;
    const reaction2InputIsInvalid = !enteredReaction2IsValid && enteredReaction2IsTouched; 

    const distanceClasses = distanceInputIsInvalid ? 'addbutton invalid' : 'addbutton';
    const speedCar1Classes = speedCar1InputIsInvalid ? 'addbutton invalid' : 'addbutton';
    const reaction1Classes = reaction1InputIsInvalid ? 'addbutton invalid' : 'addbutton';
    const speedCar2Classes = speedCar2InputIsInvalid ? 'addbutton invalid' : 'addbutton';
    const reaction2Classes = reaction2InputIsInvalid ? 'addbutton invalid' : 'addbutton';

    function refreshPage() {
        window.location.reload(false);
      }

    return( 
        <form onSubmit = {formSubmitHandler}>
            <div className = 'bound'>
                <div className = {distanceClasses}>
                    <label> Distance (Km) </label>
                    <input 
                    type = 'number'
                    onChange = {distanceInputChangeHandler}
                    onBlur = {distanceInputBlurHandler}
                    value = {enteredDistance}
                    />
                    {distanceInputIsInvalid && <p>the distance must be positive number</p>}
                </div>
                <div className = {speedCar1Classes}>
                    <label> First car speed (Km/h) </label>
                    <input
                     type = 'number'
                     onChange = {speedCar1InputHandler}
                     onBlur = {speedCar1InputBlurHandler}
                     value = {enterdSpeedCar1}
                     />
                      {speedCar1InputIsInvalid && <p>the speed must be positive number and under 250</p>}
                </div>
                <div className = {reaction1Classes}>
                    <label> First driver reaction time (Sec) </label>
                    <input 
                    type = 'number' 
                    step='any'
                    onChange = {reaction1InputHandler}
                    onBlur = {reaction1InputBlurHandler}
                    value = {enteredReaction1}
                    />
                     {reaction1InputIsInvalid && <p>the reaction time must be between 0.15 and 1.5</p>}
                </div>
                <div className = {speedCar2Classes}>
                    <label> Second car speed (Km/h)</label>
                    <input
                     type = 'number'
                     onChange = {speedCar2InputHandler}
                     onBlur = {speedCar2InputBlurHandler}
                     value = {enterdSpeedCar2}
                     />
                      {speedCar2InputIsInvalid && <p>the speed must be positive number and under 250</p>}
                </div>
                <div className = {reaction2Classes}>
                    <label> Second driver reaction time (Sec) </label>
                    <input 
                    type = 'number' 
                    step='any'
                    onChange = {reaction2InputHandler}
                    onBlur = {reaction2InputBlurHandler}
                    value = {enteredReaction2}
                    />
                     {reaction2InputIsInvalid && <p>the reaction time must be between 0.15 and 1.5</p>}
                </div>
                <div className = 'checkcrash'>
                    <button type ='submit'>Check crash</button>
                    <button onClick={refreshPage} >New Check</button>
                </div>
            </div>
        </form>
    )

}

export default DataForm2;