import { Button } from "@mui/material";

export default function PageTitle({ title }){
    return(
        <div className="space-y-2 m-10">
            <h1 className="text-2xl lg:text-4xl font medium font-bold">
                { title }
            </h1>
        </div>
    );
}