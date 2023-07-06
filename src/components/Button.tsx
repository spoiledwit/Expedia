
interface ButtonProps {
    text: string
    onClick: () => void
}

const Button:React.FC<ButtonProps> = ({
    text,
    onClick
}) => {
  return (
    <button className= {`bg-sky-950 hover:text-yellow-400 text-white px-10 h-14 rounded-md text-lg font-poppins`} onClick={onClick}>{text}</button>
  )
}

export default Button