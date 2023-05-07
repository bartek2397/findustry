'use client'


interface ButtonProps {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean;
    children: React.ReactNode
    className?: string
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, children, className }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`text-center py-2 px-5 mx-5 bg-white rounded-lg ${className}`}>
      {children}
      {label}
    </button>
  )
};

export default Button;
