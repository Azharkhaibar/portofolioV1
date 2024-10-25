import React, { useEffect } from "react";
import TagCloud from 'TagCloud';
import '../components/design/textsphere.css';
import { Box } from "@chakra-ui/react";

const TextSphere: React.FC = () => {
    useEffect(() => {
        const container = document.querySelector(".tagscloud"); // Get the DOM element
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

        // Adjust the options to match the expected types
        const options = {
            radius: 300,
            maxSpeed: "normal" as "normal" | "slow" | "fast", // Explicitly set type
            initSpeed: "normal" as "normal" | "slow" | "fast", // Explicitly set type
            keep: true,
        };

        // Check if the container exists and is an HTMLElement
        if (container instanceof HTMLElement) {
            // Use an array for the container and an array for the texts
            TagCloud([container], Texts, options);
        }

        // Cleanup function
        return () => {
            // Optional cleanup code
        };
    }, []);

    return (
        <Box m="auto">
            <div className="text-sphere">
                <span className="tagscloud" role="img" aria-label="Tag cloud of technologies"></span>
            </div>
        </Box>
    );
};

export default TextSphere;
