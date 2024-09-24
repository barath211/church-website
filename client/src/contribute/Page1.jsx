import React, { useState } from 'react';

const Page1 = () => {
  const [copySuccess, setCopySuccess] = useState({
    accountHolderName: false,
    accountNumber: false,
    ifscCode: false,
    bankName: false,
    name: false,
    gpayNumber: false
  });

  const handleCopy = (id) => {
    const textToCopy = document.getElementById(id).value;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopySuccess(prev => ({ ...prev, [id]: true }));
        setTimeout(() => setCopySuccess(prev => ({ ...prev, [id]: false })), 2000); // Reset success message after 2 seconds
      })
      .catch(() => setCopySuccess(prev => ({ ...prev, [id]: false })));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Church Contribution and Biblical Perspective
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Church contribution is a fundamental aspect of Christian stewardship and community involvement. It encompasses various forms of giving, including financial donations volunteering time and talents, and offering support to those in need. In the Christian faith, contributing to the church is not merely a financial obligation but a spiritual act of worship and obedience to God's teachings. It reflects a commitment to the church's mission and the broader community it serves.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Biblical teachings emphasize the importance of generosity and cheerful giving. One of the most cited verses on this topic is found in 2 Corinthians 9:7, which states, "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." This verse underscores the voluntary nature of giving and encourages believers to give with joy and sincerity, rather than out of obligation.
          </p>

          {/* Centered Title for Account Transfer */}
          <h3 className="text-2xl font-semibold text-gray-800 text-center mt-8 mb-4">
            BANK TRANSFER
          </h3>

          {/* Account Holder Name Section */}
          <div className="flex items-center mb-4">
            <label htmlFor="account-holder-name" className="text-gray-700 dark:text-gray-300 mr-4">Account Holder Name:</label>
            <input
              id="account-holder-name"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-grow"
              value="Bethel icrm charitable and Religious Trust"
              disabled
              readOnly
            />
            <button
              onClick={() => handleCopy('account-holder-name')}
              className="ml-4 text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center"
            >
              <span id="default-message">{copySuccess.accountHolderName ? 'Copied!' : 'Copy'}</span>
              <span id="success-message" className={`inline-flex items-center ${copySuccess.accountHolderName ? 'block' : 'hidden'}`}>
                <svg className="w-3 h-3 text-white me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
                Copied!
              </span>
            </button>
          </div>

          {/* Account Number Section */}
          <div className="flex items-center mb-4">
            <label htmlFor="bank-account" className="text-gray-700 dark:text-gray-300 mr-4">Account Number:</label>
            <input
              id="bank-account"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-grow"
              value="271601000006624"
              disabled
              readOnly
            />
            <button
              onClick={() => handleCopy('bank-account')}
              className="ml-4 text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center"
            >
              <span id="default-message">{copySuccess.accountNumber ? 'Copied!' : 'Copy'}</span>
              <span id="success-message" className={`inline-flex items-center ${copySuccess.accountNumber ? 'block' : 'hidden'}`}>
                <svg className="w-3 h-3 text-white me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
                Copied!
              </span>
            </button>
          </div>

          {/* IFSC Code Section */}
          <div className="flex items-center mb-4">
            <label htmlFor="ifsc-code" className="text-gray-700 dark:text-gray-300 mr-4">IFSC Code:</label>
            <input
              id="ifsc-code"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-grow"
              value="IOBA0002716"
              disabled
              readOnly
            />
            <button
              onClick={() => handleCopy('ifsc-code')}
              className="ml-4 text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center"
            >
              <span id="default-message">{copySuccess.ifscCode ? 'Copied!' : 'Copy'}</span>
              <span id="success-message" className={`inline-flex items-center ${copySuccess.ifscCode ? 'block' : 'hidden'}`}>
                <svg className="w-3 h-3 text-white me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
                Copied!
              </span>
            </button>
          </div>

          {/* Bank Name Section */}
          <div className="flex items-center mb-4">
            <label htmlFor="bank-name" className="text-gray-700 dark:text-gray-300 mr-4">Bank Name:</label>
            <input
              id="bank-name"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-grow"
              value="Indian Overseas Bank"
              disabled
              readOnly
            />
            <button
              onClick={() => handleCopy('bank-name')}
              className="ml-4 text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center"
            >
              <span id="default-message">{copySuccess.bankName ? 'Copied!' : 'Copy'}</span>
              <span id="success-message" className={`inline-flex items-center ${copySuccess.bankName ? 'block' : 'hidden'}`}>
                <svg className="w-3 h-3 text-white me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
                Copied!
              </span>
            </button>
          </div>

          {/* Google Pay Section */}
          <h3 className="text-2xl font-semibold text-gray-800 text-center mt-8 mb-4">
            GOOGLE PAY
          </h3>
          {/* Name Section */}
          <div className="flex items-center mb-4">
            <label htmlFor="name" className="text-gray-700 dark:text-gray-300 mr-4">Name:</label>
            <input
              id="name"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-grow"
              value="DANIEL C"
              disabled
              readOnly
            />
            <button
              onClick={() => handleCopy('name')}
              className="ml-4 text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center"
            >
              <span id="default-message">{copySuccess.name ? 'Copied!' : 'Copy'}</span>
              <span id="success-message" className={`inline-flex items-center ${copySuccess.name ? 'block' : 'hidden'}`}>
                <svg className="w-3 h-3 text-white me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
                Copied!
              </span>
            </button>
          </div>

          {/* Gpay Number Section */}
          <div className="flex items-center mb-4">
            <label htmlFor="gpay-number" className="text-gray-700 dark:text-gray-300 mr-4">Gpay Number</label>
            <input
              id="gpay-number"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-grow"
              value="9585893958"
              disabled
              readOnly
            />
            <button
              onClick={() => handleCopy('gpay-number')}
              className="ml-4 text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center"
            >
              <span id="default-message">{copySuccess.gpayNumber ? 'Copied!' : 'Copy'}</span>
              <span id="success-message" className={`inline-flex items-center ${copySuccess.gpayNumber ? 'block' : 'hidden'}`}>
                <svg className="w-3 h-3 text-white me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
                Copied!
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page1;
