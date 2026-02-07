import React, { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-600'}`}>
          {question}
        </span>
        <span className={`transform transition-transform duration-300 ml-4 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
           <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
           </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What can I learn on this e-skilling platform?",
      answer: "You can explore a wide range of courses including technical skills like coding, data science, and design, as well as soft skills and career-oriented programs designed to help you succeed in today's digital world."
    },
    {
      question: "What is the easiest way to prepare for job-oriented skills online?",
      answer: "Start by identifying your career goals, then choose a structured learning path. Our platform offers hands-on projects, expert-led sessions, and real-world scenarios to ensure you're job-ready efficiently."
    },
    {
      question: "Are online skill certificates valid for government or private jobs?",
      answer: "Yes, our certificates are recognized by many leading private companies and start-ups. While government job validity depends on specific notifications, our certifications significantly enhance your resume and showcase your commitment to professional development."
    },
    {
      question: "How can I improve my skills online for better job opportunities?",
      answer: "Consistency is key. Dedicate time each week to learn, practice with real-world projects available in our labs, and engage with our global community to stay updated with the latest industry trends and networking opportunities."
    },
    {
      question: "How do I get certified after completing an online course?",
      answer: "Once you complete all modules, watch the required lectures, and pass the final assessment with the minimum required score, you will automatically receive a verifiable digital certificate."
    }
  ];

  return (
    <section className="py-20 px-8 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Frequently Asked Questions</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 list-none">
          {faqs.map((faq, index) => (
             <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
