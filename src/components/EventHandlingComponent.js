import { useState , useEffect } from "react";

export default function EventHandlingComponent () {
    const [userName , setUserName] = useState('Prajwal')

    function handelUserName (e) {
        setUserName(e.target.value);
    }

    return (
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" value={userName} onChange = { handelUserName} /></dd>
            </dl>
            <h3>Hello!! {userName} </h3>
        </div>
    )
}