import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from "react-router-dom"

export const Signin = () => {

  const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-xl border-1 bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="ishant@gmail.com" label={"Email"} />
        <InputBox placeholder="*****" label={"Password"} />
        <div className="pt-4">
          <Button onClick={() => {
           if (!Email || !Password) {
      alert("Please fill in both email and password.");
      return;
    }
    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  }} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}