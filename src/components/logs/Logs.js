import React, { useState, useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

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
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs Remaining</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

export default Logs;
