import './css/buttonIcon.css';

interface IButtonIcon {
    href: string;
    text: string;
    icon: React.JSX.Element;
}

export const ButtonIcon = ({ href, text, icon }: IButtonIcon) => {
    return (
        <div className='document-button-container'>
            <a href={href} target='_blank' rel='noopener noreferrer' className="document-link">
                <div className='document-icon'>
                    {icon}
                </div>

                <span className='document-text'>
                    {text}
                </span>
            </a>
        </div>
    )
}