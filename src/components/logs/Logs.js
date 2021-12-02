import React, { useState, useEffect } from "react";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false); //argument "false" in the useState call is the default value of loading

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []); //commented line and empty array are to avoid errors

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs"); // don't need to add "localhost3000" to /logs since we set up a proxy
    const data = await res.json();

    setLogs(data);
    setLoading(false);

    if (loading) {
      console.log("test");
      return <h4>Loading....</h4>;
    }

    return (
      <ul className="collection-with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center">No Logs Remaining</p>
        ) : (
          logs.map((log) => <li>{log.message}</li>)
        )}
      </ul>
    );
  };

  return <div></div>;
};

export default Logs;
