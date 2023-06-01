'use client'


interface ButtonProps {
    label: string;
    disabled?: boolean;
    children?: React.ReactNode
    className?: string
}

const Button: React.FC<ButtonProps> = ({ label, disabled, children, className }) => {
  return (
    <button  disabled={disabled} className={`text-center py-2 px-5 mx-5 bg-white rounded-lg ${className}`}>
      {children}
      {label}
    </button>
  )
};

export default Button;
