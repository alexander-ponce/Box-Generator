import React from 'react'

const DisplayBox = (props) => {
    // using the getter that were passed from my parent (App.js) component
    const { colorArray } = props;
  
    /* 
      Used to display the values held in state - 
        the colorArray will update when the form is submitted 
      When state is updated, it will cause this component to re-render this content
    */
    return (
      <div>
        { colorArray.map((box, index) => (
            <div key={index} style={{ 
                display: "inline-block",
                margin: "10px",
                height: box.size, 
                width: box.size, 
                backgroundColor: box.color
                }}>
            </div>
          ))
        }
      </div>
    );
  }

export default DisplayBox;