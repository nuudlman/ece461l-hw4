import { Button, Paper, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function HardwareSet(props: {id: number, capacity: number}) {
    const [available, setAvailable] = useState(props.capacity);
    return (
        <>
            <Paper>
                <Stack direction="row" spacing={5} padding={1}>
                    <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <strong>HWSet{props.id}</strong>
                        <div>{available}/{props.capacity}</div> 
                    </Stack>
                    <TextField label="Quantity" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
                    <Button variant="contained">Check In</Button>
                    <Button variant="contained">Check Out</Button>
                </Stack>
            </Paper>
        </>
    )
};