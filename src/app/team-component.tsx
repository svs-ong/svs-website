import React from "react";
import {Stack, Typography} from "@mui/material";
import { Image } from "@/components/atomic/Image/Image";

interface data {
    description: string;
    imageUrl: string;
}

const mockData = [
    {
        description: "This is a description for card 1.",
        imageUrl: "https://via.placeholder.com/240",
    },
    {
        description: "This is a description for card 2.",
        imageUrl: "https://via.placeholder.com/240",
    },
];

const TeamCard: React.FC<data> = ({ description, imageUrl }) => {
    return (
        // <div className="profile-component">
        //     <div id="profile-component-image">
        //         <img src={imageUrl} />
        //     </div>
        //     <div id="profile-component-text">
        //         <p>
        //             {description}
        //         </p>
        //     </div>
        // </ div>
        <Stack>
            <Image src={imageUrl} alt="Image not found!" />
            <Typography variant='h5'>{description}</Typography>
        </Stack>
    );
}
export default TeamCard;