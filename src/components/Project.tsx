import { Paper, Box, Stack, Button } from "@mui/material";
import HardwareSet from "./HardwareSet";

export default function Project(props: {name: string, users?: string[], hardware: number[]}) {
    let users;
    if (props.users != undefined)
        users = <ul>{props.users.map((user) => (<li>{user}</li>))}</ul>;
    else
        users = "No Users";

    return (
        <>
            <Paper>
                <Stack direction="row" spacing={2} padding={2}>
                    <Stack padding={2} maxWidth='sm'>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><h3>{props.name}</h3></Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{users}</Box>
                    </Stack>
                    <Stack spacing={2}>{props.hardware.map((val, idx) => (<HardwareSet id={idx} capacity={val} />))}</Stack>
                    <Button variant="contained">Join</Button>
                </Stack>
            </Paper>
        </>
    );
};