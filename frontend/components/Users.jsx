import { useEffect, useState } from "react"
 import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const[filter, setFilter] = useState("");

    useEffect(() => {
         axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
            .then(response => {
            setUsers(response.data.user) 
        });
    }, [filter])

    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2 border-1 rounded-lg">
            <input onChange={(e) => {
                setFilter(e.target.value);
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </>
}

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center sm:space-x-0 mt-4">
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 bg-black text-white flex justify-center items-center mr-2 text-xl">
          {user.firstname[0]}
        </div>
        <div className="font-semibold">
          {user.firstname} {user.lastname}
        </div>
      </div>

      <div className="flex justify-end sm:justify-center mt-2 sm:mt-0">
        <Button
          onClick={() => {
            navigate("/send?id=" + user?._id + "&name=" + user?.firstname);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
