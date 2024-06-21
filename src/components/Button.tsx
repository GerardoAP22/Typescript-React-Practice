interface Props {
    children: String;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    onClick: () => void;
}

const button = ({ children, color = 'primary', onClick }: Props) => {
    return (
        <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
    )
}

export default button