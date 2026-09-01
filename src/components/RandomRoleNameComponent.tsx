import { useEffect, useState } from "react";
import { useEmployContext } from "../context/context";

interface RandomRoleNameProps {
    classP: string;
    classS: string;
}

export const RandomRoleNameComponent = ({ classP, classS }: RandomRoleNameProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const [index, setIndex] = useState(0);

    const { roles } = useEmployContext();

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    const handleTransitionEnd = (e: React.TransitionEvent) => {
        if (e.propertyName === 'opacity' && !isVisible) {
            setIndex((prev) => (prev + 1) % roles.length);
            setIsVisible(true);
        }
    };

    return (
        <div>
            <p className={classP}>
                Senior
                <span
                    className={`${classS} ${isVisible ? '' : 'hidden'}`}
                    onTransitionEnd={handleTransitionEnd}>{`${roles[index]} `}
                </span>
                Engineer
            </p>
        </div>
    )
}