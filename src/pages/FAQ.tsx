import React from 'react';

const FAQ: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div className="border-b py-2">
          <h3 className="font-semibold">How do I access the assessments?</h3>
          <p className="text-gray-600">You can access assessments after logging in and enrolling in a course.</p>
        </div>
        <div className="border-b py-2">
           <h3 className="font-semibold">Is there a certification?</h3>
           <p className="text-gray-600">Yes, upon completion of a course, you will receive a certificate.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
