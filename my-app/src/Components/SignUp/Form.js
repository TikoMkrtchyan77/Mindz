import React, { useState } from "react";
import SignUp from "./SignUp";
import SignUpFormSucces from "./SingUpFormSuccess";

export default function Form() {
    const [formIsSumbitted, setFormIsSumbitted] = useState(false)
    const sumbitForm = () => {
        setFormIsSumbitted(true)
    }
    return (
        <div>
            {!formIsSumbitted ? <SignUp sumbitForm={sumbitForm} /> : <SignUpFormSucces />}
        </div>

    )
}