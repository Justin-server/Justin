interface UserData {
  name: string;
  age: string;
  contact: string;
}

interface UserDataDisplayProps {
  users: UserData[];
}

export function UserDataDisplay({ users }: UserDataDisplayProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">提交的用户信息</h2>
      {users.length === 0 ? (
        <p>还没有用户提交信息。</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">名字</th>
              <th className="border border-gray-300 px-4 py-2">年龄</th>
              <th className="border border-gray-300 px-4 py-2">联系方式</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.age}</td>
                <td className="border border-gray-300 px-4 py-2">{user.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

