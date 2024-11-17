import Link from "next/link";
import { getAllUsers } from "../_helpers/api";

export default async function Users() {
  const users = await getAllUsers();

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
        Users
      </h1>
      <Link className="font-bold text-indigo-600 mb-6 text-center" href="/users/add">Add User</Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <Link href={`/users/edit/${user.id}`}>
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-indigo-700">
                {user.name}
              </h2>
              <p className="text-gray-600">
                <strong>ID:</strong> {user.id}
              </p>
              <p className="text-gray-600">
                <strong>Age:</strong> {user.age}
              </p>
              <p className="text-gray-600">
                <strong>Salary:</strong> ${user.salary.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}