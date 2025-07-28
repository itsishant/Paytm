import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Signup = () => {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-xl border-1 bg-white w-80 text-center p-4 h-max px-4">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your infromation to create an account"}/>
            <InputBox className onChange={(e) => {
                setFirstName(e.target.value);
            }
            } placeholder="John" label={"First Name"} />
            <InputBox onChange={
                (e) => {
                    setLastName(e.target.value);
                }
            } placeholder="Doe" label={"Last Name"} />
            <InputBox onChange={
                (e) => {
                    setEmail(e.target.value);
                }
            } placeholder="email" label={"Email"} />
            <InputBox onChange={
                (e) => {
                    setPassword(e.target.value)
                }
            } placeholder="*****" label={"Password"} />
            <div className="pt-4">
          <Button 
          onClick={async () => {
  if (!email || !firstName || !lastName || !password) {
    alert("Please fill in all the fields.");
    return;
  }

  try {
    const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
      email,
      firstname: firstName,
      lastname: lastName,
      password,
    });
    console.log(response);
    localStorage.setItem("token", response.data.token);
    setTimeout(() => {
        navigate("/dashboard");
    },500)
  } catch (err) {
    alert("Signup failed. Please try again.");
  }
}}

        label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                </div>
            </div>
        </div>
    )
}
