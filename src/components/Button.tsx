
interface ButtonProps {
    text: string
    onClick: () => void
}

const Button:React.FC<ButtonProps> = ({
    text,
    onClick
}) => {
  return (
    <button className= {`bg-sky-950 hover:text-yellow-400 mr-10 text-white px-6 w-[260px] h-[57px] rounded-md text-[18px] font-poppins`} onClick={onClick}>{text}</button>
  )
}

export default Button