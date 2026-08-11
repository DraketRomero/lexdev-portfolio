import { useState } from "react";
import { NavLink } from "react-router"
import './css/button.css'


interface ButtonProps {
    className: string;
    routeName: string;
    routeDestination: string;
    active?: boolean;
}

export const Button = ({ className, routeName, routeDestination, active }: ButtonProps) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);

    return (
        <div className="button-container">
            <NavLink to={routeDestination}>
                <button className={`button menu-option ${className} ${isPressed && active ? 'button-unactive' : ''}`}
                    onMouseDown={() => setIsPressed(true)}
                >
                    {routeName}
                </button>
            </NavLink>
        </div>
    )
}