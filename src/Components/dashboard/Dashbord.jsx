import React from "react";
import { LuUsersRound } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import { FaRegHandshake } from "react-icons/fa";
import map_image from "../../assets/map_image.jpg";
import { FaChartPie } from "react-icons/fa";
import style from "./Dashbord.module.css";

const Dashboard = () => {
  return (
    <div style={{ background: "#eaeaea", padding: "20px", width: "100%" }}>
      <h2>Dashboard</h2>

      {/* Top Stats Boxes */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {[
          {
            title: "Visitors",
            value: "1,294",
            color: "#f39c12",
            figre: LuUsersRound,
          },
          {
            title: "Sales",
            value: "$1,345",
            color: "#27ae60",
            figre: VscGraph,
          },
          {
            title: "Subscribers",
            value: "1303",
            color: "#e74c3c",
            figre: FaRegHandshake,
          },
          {
            title: "Orders",
            value: "576",
            color: "#2980b9",
            figre: CiDeliveryTruck,
          },
        ].map((stat) => (
          <div
            key={stat.title}
            className={style.card_hover}
            style={{
              background: stat.color,
              color: "#fff",
              flex: 1,
              padding: "20px",
              border: "2px solid rgb(198 193 186)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div className="card_image" style={{ alignContent: "center" }}>
                <stat.figre
                  style={{ width: "41px", height: "39px" }}
                ></stat.figre>
              </div>

              <div className="card_content">
                <h4>{stat.title}</h4>
                <p style={{ fontSize: "20px", margin: 0 }}>{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Task and Map */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {/* Task Progress */}
        <div
          style={{
            background: "#fff",
            flex: 1,
            padding: "20px",
            boxShadow: "#b8b5b5 0px 0px 10px 2px",
          }}
        >
          <h4>Task</h4>
          <p>Complete</p>
          <hr></hr>

          <div
            style={{
              width: "130px",
              height: " 130px",
              borderRadius: "50%",
              border: "5px solid #3498db",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "18px",
              margin: "10px auto",
              boxShadow: "#b8b5b5 0px 0px 10px 2px",
            }}
          >
            80%
          </div>
        </div>

        {/* Placeholder for Map */}
        <div
          style={{
            background: "#fff",
            flex: 2,
            padding: "20px",
            boxShadow: "#b8b5b5 0px 0px 10px 2px",
          }}
        >
          <h4>World Map</h4>

          <p style={{ opacity: "0.8" }}>Map of the distribution of users</p>
          <hr style={{ marginTop: "0px" }}></hr>
          <div
            style={{
              height: "150px",
              padding: "0px 60px",
            }}
          >
            <img
              src={map_image}
              alt="img error"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Balance and Statistics */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div
          style={{
            background: "#fff",
            flex: 1,
            padding: "20px",
            boxShadow: "#b8b5b5 0px 0px 10px 2px",
          }}
        >
          <h4 style={{ fontSize: "20px", opacity: "0.8" }}>My Balance</h4>
          <p style={{ fontSize: "40px" }}>$3,018</p>
        </div>
        <div
          style={{
            background: "#fff",
            flex: 2,
            padding: "20px",
            boxShadow: "#b8b5b5 0px 0px 10px 2px",
          }}
        >
          <h4>Statistics</h4>
          <div className="Statistics" style={{ display: "flex" }}>
            <div className="statistics left">
              <FaChartPie
                style={{ color: "orange", height: "68px", width: "130px" }}
              ></FaChartPie>
            </div>
            <div>
              <p style={{ fontSize: "20px" }}>
                Number:<br></br> 150GB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
