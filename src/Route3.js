import React from "react"

function Route3(props) {
    return (
        <div>
            Route3
            {props.match.params.username}
        </div>
    )
}

export default Route3