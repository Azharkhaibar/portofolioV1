import React, { useEffect } from "react";
import TagCloud from 'TagCloud';
import '../components/design/textsphere.css';
import { Box } from "@chakra-ui/react";

const TextSphere: React.FC = () => {
    useEffect(() => {
        const container = document.querySelector(".tagscloud"); 
        const Texts = [
            "Chakra UI",
            "Flask",
            "Python",
            "Typescript",
            "Firebase",
            "SCSS",
            "Golang",
            "Express",
            "Nodejs",
            "C++",
            "Figma",
            "Canva",
            "MySQL",
            "MongoDB",
            "Next.js",
            "React Native",
            "Bootstrap",
            "GIT"
        ];

       
        const options = {
            radius: 300,
            maxSpeed: "normal" as "normal" | "slow" | "fast", 
            initSpeed: "normal" as "normal" | "slow" | "fast", 
            keep: true,
        };

        if (container instanceof HTMLElement) {
            TagCloud([container], Texts, options);
        }
        return () => {
        };
    }, []);

    return (
        <Box m="auto">
            <div className="text-sphere">
                http://localhost:5173/
            </div>
        </Box>
    );
};

export default TextSphere;
