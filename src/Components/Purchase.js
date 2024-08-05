import React from 'react';

const Purchase = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg min-h-[80vh]">
      <h2 className="text-2xl font-bold mb-4">Your Purchase History</h2>
      
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left border-b">Product</th>
            <th className="py-2 px-4 text-left border-b">Price</th>
            <th className="py-2 px-4 text-left border-b">Purchase Date</th>
            <th className="py-2 px-4 text-left border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">Practical Web Application Security</td>
            <td className="py-2 px-4 border-b">$1</td>
            <td className="py-2 px-4 border-b">May 03, 2023 14:25</td>
            <td className="py-2 px-4 border-b">
              <button className="text-blue-500 hover:underline">
                View Receipt
              </button>
            </td>
          </tr>
          {/* Add more rows here if needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Purchase;
