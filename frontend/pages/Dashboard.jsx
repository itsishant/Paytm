import axios from "axios"
import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useState } from "react"
import { useEffect } from "react"


export const Dashboard = () => {
    const [firstBalance, setfirstBalance] = useState("");
    const token = localStorage.getItem("token");

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get("http://localhost:3000/api/v1/account/getBalance",{
            headers: {
                Authorization: "Bearer "+token
            }
        })
        .then(response => {
            setfirstBalance(response.data.balance)
        }) 
    },[])

    return(
        <div>
            <AppBar />
            <div className="m-12">
                <Balance value={firstBalance} />
                <Users />
            </div>
        </div> 
    )
}