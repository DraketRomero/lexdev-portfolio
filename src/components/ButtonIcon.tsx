import './css/buttonIcon.css';

interface IButtonIcon {
    href: string;
    text: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const ButtonIcon = ({ href, text, Icon }: IButtonIcon) => {
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