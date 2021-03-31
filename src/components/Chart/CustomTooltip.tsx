export const CustomTooltip = ({ active, payload, label } : any) => {
    if (active && payload && payload.length) {
      console.log(payload[0].value)
  
      return (
        <div className="custom-tooltip" style={{border: "2px solid black" , padding: "10px"}}>
          <p className="label"><b>Country: </b>{label} </p>
          <p className="intro"><b>Previous Salary : </b>${payload[0].value.toLocaleString('en-US')}</p>
          <p className="intro"><b>Current Salary : </b> ${payload[1].value.toLocaleString('en-US')}</p>
        </div>
      );
    }
  
    return null;
  };