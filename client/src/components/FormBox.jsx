import React, { useState } from 'react'

const FormBox = (props) => {
  // using the getter and setter that were passed from my parent (App.js) component
  const { colorArray, setColorArray } = props;

  // created state that can only be seen by this component
  //    this is the state to keep track of the text box input value
  const [ color, setColor] = useState('');
  const [ size, setSize] = useState(50);
  const [colorError, setColorError] = useState("");

  
  const submitHandler = (e) => {
    //    used code below to prevent the browser from refreshing the page
    e.preventDefault();

    setColorArray(color);
    if(color.length < 1) {
            setColorError("Color is required!");
        } else if(color.length < 3) {
            setColorError("Color must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setColorError("");
        }

    // used to add a new color to the boxArray WITHOUT losing what is already in there
    //    we need to create a new array and spread out the current values first
    //    then we add the new color as the last element in the array
    setColorArray( [ 
      ...colorArray, 
      { 
        color: color,
        // added the px to the string so it can update the style correctly
        size: size + "px",
      }
      ] );
    setColor("");
    setSize(50);

  }
  return (
    <div className="container">
        <form className="mt-4" onSubmit={ submitHandler} style={{ margin: "25px" }}>
            <label htmlFor="color" className="mx-2">Color</label>
            <input 
            type="text" 
            className="col-2 mb-3" 
            name="color"
            value={ color }
            onChange={ (e) => setColor(e.target.value)} />
             {
                    colorError ?
                    <p>{ colorError }</p> :
                    ''
                }
            {/* // Commented out, now trying to submit validation through submit handle */}
            {/* {color.length < 3 && color.length > 0 ? (
            <p>Color must be at least 3 characters</p>
          ) : null} */}
          <div>

            <label className="mx-2">Width and Height in Pixels</label>
            <input 
            type="text" 
            name="size"
            value={size}
            onChange={ (e) => setSize(e.target.value) }
          />
            </div>
            <button className="btn btn-info col-1 mx-2 mt-3 " type="submit" >Add</button>
            {/* Tried experimenting with disabled button if requirements were not met, */}
          {/* {
            colorError ?
            <button className="btn btn-info col-1 mx-2 mt-3 " type="submit" disabled >Add</button> :
            <button className="btn btn-info col-1 mx-2 mt-3 " type="submit" >Add</button>
          } */}
        </form>

    </div>
  )
}

export default FormBox