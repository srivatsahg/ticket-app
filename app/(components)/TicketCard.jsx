import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-green-700 hover:bg-green-600 rounded-md shadow-lg p-4 m-4 space-y-4">
      <div className="flex mb-3">
        <PriorityDisplay></PriorityDisplay>
        <div className="ml-auto">
          <DeleteBlock></DeleteBlock>
        </div>
      </div>
      <h4 className="text-white">Title</h4>
      <hr className="border-gray-700 mb-2"></hr>
      <p className="text-gray-200">
        This is a sample description for the ticket.
      </p>
      <ProgressDisplay></ProgressDisplay>
      <StatusDisplay></StatusDisplay>
    </div>
  );
};

export default TicketCard;
