import axios from "axios";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-xl border-1 bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ishant@gmail.com"
            label={"Email"}
          />
          <InputBox
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*****"
            label={"Password"}
            type="password"
          />
          
          <div className="pt-4">
            <Button
              onClick={async () => {
                if (!email || !password) {
                  alert("Please fill in both fields.");
                  return;
                }
                try {
                  const response = await axios.post(
                    "http://localhost:3000/api/v1/user/signin",
                    {
                      email,
                      password,
                    }
                  );

                  if (response.data.token) {
                    localStorage.setItem("token", response.data.token); 
                    setTimeout(() => {
                      navigate("/dashboard");
                    }, 500);
                  } else {
                    alert("Failed to sign in. Please try again.");
                  }
                } catch (error) {
                  console.error(
                    "Error during signin:",
                    error.response?.data?.message || error.message
                  );
                  alert(
                    error.response?.data?.message ||
                      "An error occurred while signing in."
                  );
                }
              }}
              label={"Sign in"}
            />
          </div>

          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  );
};
