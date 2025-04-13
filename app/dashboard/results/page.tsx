export default function Page() {
  let subjects = [
    { name: "Programming", ratio: 4, result: 16 },
    { name: "Database Management", ratio: 3, result: 18 },
    { name: "Network Security", ratio: 2, result: 14 },
    { name: "Web Development", ratio: 1, result: 19 },
  ];

  const totalRatio = subjects.reduce(
    (accumulator, subject) => accumulator + subject.ratio,
    0
  );
  const average =
    subjects.reduce(
      (accumulator, subject) => accumulator + subject.result * subject.ratio,
      0
    ) / totalRatio;

  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold mb-4">Semester 1</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-s-lg">
                Subject
              </th>
              <th scope="col" className="px-6 py-3">
                Ratio
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-lg">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.name} className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {subject.name}
                </th>
                <td className="px-6 py-4">{subject.ratio}</td>
                <td className="px-6 py-4">{subject.result}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
              <th scope="row" className="px-6 py-3 text-base">
                Average
              </th>
              <td className="px-6 py-3">{totalRatio}</td>
              <td className="px-6 py-3">{average.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <h1 className="text-xl font-bold mt-4 mb-4">Semester 2</h1>
    </div>
  );
}
