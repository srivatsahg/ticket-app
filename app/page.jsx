import React from "react";
import TicketCard from "./(components)/TicketCard";
import PriorityDisplay from "./(components)/PriorityDisplay";

const Dashboard = () => {
  return (
    <div>
      <TicketCard></TicketCard>
      <PriorityDisplay></PriorityDisplay>
    </div>
  );
};

export default Dashboard;
