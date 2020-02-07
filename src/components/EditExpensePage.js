import React from "react";

const EditExpensePage= (props) =>  {
    console.log(props);
    return (
        <div>
            <p>editing the expense with the ID of {props.match.params.id} </p>
        </div>
    );
}

export default EditExpensePage