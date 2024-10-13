import { Paper, Box, Stack, Button } from "@mui/material";
import { useState } from "react";
import HardwareSet from "./HardwareSet";


export default function Project(props: {name: string, users?: string[], hardware: number[]}) {
    const [users, setUsers] = useState(props.users == undefined ? [] : props.users)
    const [joined, setJoined] = useState(false);

    const renderUsers = () => {
        if (users.length < 1)
            return "No Users";

        return <ul>{users.map((user) => (<li>{user}</li>))}</ul>;
    };

    return (
        <>
            <Paper>
                <Stack direction="row" spacing={2} padding={2}>
                    <Stack padding={2} maxWidth='100%' width='250px'>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><h3>{props.name}</h3></Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{renderUsers()}</Box>
                    </Stack>
                    <Stack spacing={2}>{props.hardware.map((val, idx) => (<HardwareSet id={idx} capacity={val} />))}</Stack>
                    <Button variant="contained" onClick={() => {
                        if (!joined){
                            setUsers(prevUsers => [...prevUsers, navigator.userAgent]);
                            setJoined(true);
                        } else {
                            setUsers(prevUsers => prevUsers.filter((user) => user !== navigator.userAgent));
                            setJoined(false);
                        }
                    }}>{joined ? "Leave" : "Join"}</Button>
                </Stack>
            </Paper>
        </>
    );
};