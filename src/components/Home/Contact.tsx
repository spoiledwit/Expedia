import { motion } from 'framer-motion';
import { PiAirplaneTakeoffFill } from 'react-icons/pi';
import { IoDocumentText } from 'react-icons/io5';
import Button from '../Button';
import AssessmentForm from '../AssessmentForm';

const Contact = () => {
  return (
    <motion.div
      className="w-full flex flex-col lg:flex-row gap-20 lg:gap-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start pt-5 px-4 lg:px-28 xl:px-40 bg-white dark:bg-gray-800">
        <motion.p className="text-yellow-500 mt-16" animate={{ scale: 1.2 }} transition={{ duration: 1 }}>
          WHY CHOOSE EXPEDIA?
        </motion.p>
        <motion.p className='text-sky-900 text-4xl my-10 font-medium' animate={{ scale: 1.1 }} transition={{ duration: 1 }}>
          Countless Benefits & Easy Processing
        </motion.p>
        <motion.p className='mb-6' animate={{ x: 10 }} transition={{ duration: 1 }}>
          You choose <strong> Expedia Visa Services </strong> because immigration rules and dynamic, Complicated to apply, and its difficult to deal with the migration department and you need to increase the success rate Expedia will help you to get that easily.
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
                Since 2018 Expedia Visa Services immigration success rate is 97 percent. So you don’t need to worry about that.
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
                Sometimes it is difficult for the student or people which document is required and when. Expedia will help you to manage that.
              </p>
            </div>
          </div>
        </div>
        <motion.div className='mt-12' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button text="Contact Us" onClick={() => {}} />
        </motion.div>
      </div>

      <div className=' lg:rounded-l-3xl bg-sky-950 lg:shadow-2xl shadow-gray-500 flex flex-col justify-center items-start px-20 lg:px-16 xl:px-28 gap-12 py-20 space-y-4'>
        <motion.h1 className='text-4xl text-white font-medium' animate={{ scale: 1.2 }} transition={{ duration: 1 }}>
          Apply Now For Free Assessment
        </motion.h1>
        <AssessmentForm onSubmit={(props) => {console.log(Object.values(props))}} />
      </div>
    </motion.div>
  );
};

export default Contact;
