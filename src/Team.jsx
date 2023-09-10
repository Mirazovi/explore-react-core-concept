import { useState } from "react"

export default function AddTeam (){
    const [Team,setTeam] = useState(11);
    const handleTeamAdd = () =>{
        const newTeam = Team + 1;
        setTeam(newTeam);
    }
    const handleTeamReduce = () =>{
        const newReduce = Team - 1;
        setTeam(newReduce);
    }
    const TeamStyle = {
        border: "2px solid purple",
        margin:"10px",
        padding : "10px",
        borderRadius: "10px"

    }
    return(
        <div style={TeamStyle}>
            <h2>Players : {Team}</h2>
            <button onClick={handleTeamAdd}>add</button>
            <button onClick={handleTeamReduce}>Reduce</button>
        </div>
    )
}