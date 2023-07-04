import { motion } from 'framer-motion';
import { PiAirplaneTakeoffFill } from 'react-icons/pi';
import { IoDocumentText } from 'react-icons/io5';
import Button from '../Button';

const Contact = () => {
  return (
    <motion.div
      className="flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-[60%] h-[100vh] flex flex-col pt-5 px-40 bg-white dark:bg-gray-800">
        <motion.p className="text-yellow-500 mt-16" animate={{ scale: 1.2 }} transition={{ duration: 1 }}>
          WHY CHOOSE EXPEDIA?
        </motion.p>
        <motion.p className='text-sky-900 text-4xl my-10 font-medium' animate={{ scale: 1.1 }} transition={{ duration: 1 }}>
          Countless Benefits & Easy Processing
        </motion.p>
        <motion.p className='mb-6' animate={{ x: 10 }} transition={{ duration: 1 }}>
          You choose <strong> Expedia Visa Services </strong> because immigration rules and dynamic, Complicated to apply, and its difficult to deal with the migration department and you need to increase the success rate Imperium will help you to get that easily.
        </motion.p>
        <div className='space-y-4 mb-8'>
          <div className='flex space-x-2 items-center'>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}
            className='h-[100px] w-[200px] mr-2 border-2 border-yellow-500 flex justify-center items-center'
            >
              <PiAirplaneTakeoffFill size={50} className='text-yellow-500' />
            </motion.div>
            <div>
              <p className='font-semibold'>
                Legal Immigration Success
              </p>
              <p>
                Since 2018 Imperium Visa Services immigration success rate is 97 percent. So you don’t need to worry about that.
              </p>
            </div>
          </div>
          <div className='flex space-x-2 items-center'>
            <div
            className='
            mr-2 border-2 h-[100px] w-[230px] border-yellow-500 flex justify-center items-center
            '
            >
              <IoDocumentText size={50} className='text-yellow-500' />
            </div>
            <div>
              <p className='font-semibold'>
                Required Documents Support
              </p>
              <p>
                Sometimes it is difficult for the student or people which document is required and when. Imperium will help you to manage that.
              </p>
            </div>
          </div>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button text="Contact Us" onClick={() => {}} />
        </motion.div>
      </div>

      <div className='h-[100vh] bg-sky-950 flex flex-col justify-center items-start p-40 space-y-4'>
        <motion.h1 className='text-4xl text-white font-medium' animate={{ scale: 1.2 }} transition={{ duration: 1 }}>
          Apply Now For Free Assessment
        </motion.h1>
        <div className='w-full max-w-lg space-y-2'>
          <Input label="Name" />
          <Input label="Phone" />
          <Input label="Email" />
          <Input label="Job Title" />
          <Input label="Education" />
          <Select label="Country" options={["Pakistan", "India", "Bangladesh"]} />
          <Select label="Visa Service" options={["Study Visa", "Work Visa", "Visit Visa"]} />
        </div>
      </div>
    </motion.div>
  );
};

interface InputProps {
  label: string
}

const Input:React.FC<InputProps> = ({ label }) => (
  <div className='flex flex-col'>
    <label className='text-white'>{label}</label>
    <input className='border border-white rounded-md h-10 pl-2 bg-transparent text-white' />
  </div>
);

interface SelectProps {
  label: string,
  options: string[]
}

const Select:React.FC<SelectProps> = ({ label, options }) => (
  <div className='flex flex-col'>
    <label className='text-white'>{label}</label>
    <select className='border border-white rounded-md h-10 pl-2 bg-transparent text-white'>
      {options.map((option) => (
        <option key={option} className='text-black'>{option}</option>
      ))}
    </select>
  </div>
);

export default Contact;
