import { createUser } from "@/app/_helpers/api";

export default function Add() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 text-gray-200 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h3 className="text-2xl font-semibold text-indigo-400 mb-6 text-center">
            Add User
          </h3>
          <form 
            action={createUser} 
            className="space-y-4"
            >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                className="w-full bg-gray-700 text-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                placeholder="Enter age"
                className="w-full bg-gray-700 text-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="salary"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Salary
              </label>
              <input
                type="number"
                name="salary"
                id="salary"
                placeholder="Enter salary"
                className="w-full bg-gray-700 text-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    );
}  