import UserTable from "../Components/UserTable.jsx";

const UserDetails = () => {
    return (
        <div className='flex-[4_4_0] mr-auto border-r border-gray-700 bg-black min-h-screen'>
            <h1>User Details</h1>
            <UserTable/>
        </div>
    );
};

export default UserDetails;