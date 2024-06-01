import React, { useEffect, useState } from "react";
import { getToken } from "../auth/auth";
import axios from "axios";

import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import OverViewCard from "../components/overviewCard/OverViewCard";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();
        const config = {
          headers: { Authorization: token },
        };
        const response = await axios.get("https://capfinproject.onrender.com/api/v1/user/dashboard", config);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <Sidebar />
      <Navbar />
      <section className='home'>
        <div style={{ marginTop: "100px" }}>
          <div className='overview_container'>
            {data && (
              <>
                <OverViewCard
                  icon={"fa fa-envelope-bulk"}
                  number={data.groups}
                  subtitle='Created Groups'
                />
                <OverViewCard
                  icon={"fa fa-envelope-circle-check"}
                  number={data.sents}
                  subtitle='Mails Sent'
                />
                <OverViewCard
                  icon={"fa fa-table"}
                  number={data.templates}
                  subtitle='Created Templates'
                />
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
