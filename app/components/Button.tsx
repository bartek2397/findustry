'use client'


interface ButtonProps {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean;

}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`text-center py-2 px-5 mx-5 bg-white rounded-lg `}>
      {label}
    </button>
  )
};

export default Button;
