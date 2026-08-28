import { useState } from "react";
import { NavLink } from "react-router"
import './css/button.css'


interface ButtonProps {
    className: string;
    routeName: string;
    routeDestination: string;
    active?: boolean;
    fnCloseBurgerIcon: () => void;
}

export const Button = ({ className, routeName, routeDestination, active, fnCloseBurgerIcon }: ButtonProps) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);

    return (
        <NavLink to={routeDestination} viewTransition>
            <button className={`button menu-option ${className} ${isPressed && active ? 'button-unactive' : ''}`}
                onMouseDown={() => setIsPressed(true)} onClick={fnCloseBurgerIcon}
            >
                {routeName}
            </button>
        </NavLink>
    )
}