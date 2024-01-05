import React from 'react';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';

const NewzealandSteps = () => {
  const steps = [
    {
      title: 'Step 1',
      description: 'On Boarding on the portal',
      icon: <FaCheckCircle />,
      completed: true,
    },
    {
      title: 'Step 2',
      description: 'Fill the application form',
      hasForm: true,
      icon: <FaCheckCircle />,
      completed: true,
    },
    {
      title: 'Step 3',
      description: 'Uploading the required documents',
      hasForm: true,
      icon: <FaCheckCircle />,
      completed: true,
    },
    {
      title: 'Step 4',
      description: 'Document verification by the admin',
      hasForm: false,
      icon: <FaRegCircle />,
      completed: false,
    },
    {
      title: 'Step 5',
      description: 'Report Preparation Stage',
      hasForm: false,
      icon: <FaRegCircle />,
      completed: false,
    },
    {
      title: 'Step 6',
      description: 'CV Revision Stage',
      hasForm: true,
      icon: <FaRegCircle />,
      completed: false,
    },
    {
      title: 'Step 9',
      description: 'Job Offer Stage',
      hasForm: false,
      icon: <FaRegCircle />,
      completed: false,
    },
    {
      title: 'Step 10',
      description: 'Visa Application Stage',
      hasForm: false,
      icon: <FaRegCircle />,
      completed: false,
    },
  ];

  return (
    <div className="flex flex-wrap">
      {steps.map((step, index) => (
        <div key={index} className={`p-4 border rounded-lg m-2 ${step.completed ? 'border-primary-blue' : 'border-primary-gold'}`}>
          <div className="flex items-center">
            <div className="text-2xl mr-2">{step.icon}</div>
            <div>
              <h4 className="text-lg font-bold">{step.title}</h4>
              <p>{step.description}</p>
              {step.hasForm && (
                <p
                className='text-gray-400 cursor-default text-sm'
                >
                  Fill the form
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewzealandSteps;