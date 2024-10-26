// UserDetails.js
import UserTable from "../Components/UserTable";

const UserDetails = () => {
    return (
        <div className='flex-[4_4_0] mr-auto border-r border-gray-700 bg-gray-800 min-h-screen p-6'>
            <h1 className="text-2xl font-bold text-gray-200 mb-4 text-center">
                Suspected User Details
            </h1>
            <UserTable />
        </div>
    );
};

export default UserDetails;
