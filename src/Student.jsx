import React from 'react';

const Student = ({ student }) => {
  const { id, age, grade, name, passed } = student;

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-5">
        <h2 className="text-2xl font-semibold tracking-tight">{name}</h2>
        <p className="mt-1 text-sm opacity-90">Student Profile</p>
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3">
          <span className="text-sm text-gray-500">ID</span>
          <span className="font-medium text-gray-900">{id}</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3">
          <span className="text-sm text-gray-500">Age</span>
          <span className="font-medium text-gray-900">{age}</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3">
          <span className="text-sm text-gray-500">Grade</span>
          <span className="font-medium text-gray-900">{grade}</span>
        </div>
      </div>

      <div className="p-5 border-t border-gray-200">
        <span className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${passed ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
          {passed ? 'Passed' : 'Not Passed'}
        </span>
      </div>
    </div>
  );
};

export default Student;