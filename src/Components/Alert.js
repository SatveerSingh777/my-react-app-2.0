import React from 'react'

export default function Alert(props) {
    function capitlize (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    return (

        props.alert&&
        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitlize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}
