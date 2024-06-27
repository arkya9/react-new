function GetItem(alltodo) {
  console.log(alltodo);

  // Ensure alltodo and alltodo.todo are defined
  if (!alltodo || !Array.isArray(alltodo.todo)) {
    return <div>Data is not in the correct format.</div>;
  }

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>slno</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {alltodo.todo.length > 0 ? (
            alltodo.todo.map((item, index) => (
              <tr key={index}>
                <td>{item.msg}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No items</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default GetItem;
