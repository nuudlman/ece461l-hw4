import { Stack } from "@mui/material";

export default function Projects({children}) {
    return (
        <>
            <h1>Projects</h1>
            <Stack padding={1} spacing={1}>
                {children}
            </Stack>
        </>
    )
};