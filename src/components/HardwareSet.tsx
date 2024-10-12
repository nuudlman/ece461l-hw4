import { Button, Box, Paper, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function HardwareSet(props: {id: number, capacity: number}) {
    const [available, setAvailable] = useState(props.capacity);
    return (
        <>
            <Paper>
                <Stack direction="row" spacing={5} padding={1}>
                    <Box>
                        <strong>HWSet{props.id}</strong>: {available}/{props.capacity}
                    </Box>
                    <TextField label="Quantity"/>
                    <Button variant="contained">Check In</Button>
                    <Button variant="contained">Check Out</Button>
                </Stack>
            </Paper>
        </>
    )
};