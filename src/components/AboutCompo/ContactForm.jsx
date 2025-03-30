import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Query:', query);
    // Clear form fields after submission
    setName('');
    setEmail('');
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-4/6 px-4 py-7 rounded-xl bg-slate-700 shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Full Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder='Enter your full name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="query" className="block text-sm font-medium text-white">
          Query:
        </label>
        <textarea
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          rows={3}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ContactForm;