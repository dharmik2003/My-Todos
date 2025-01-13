import React from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/actions/login";
import { AppRouter } from "@/contants/AppRoutes";

const Header = ({ userName }: { userName: string }) => {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await logout();

    if (response.success) {
      router.push(AppRouter.Login);
    } else {
      alert(response.message);
    }
  };

  const getTimeGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const greeting = getTimeGreeting();

  //date formated
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const currentDate: Date = new Date();
  const formattedDate: string = formatDate(currentDate);

  return (
    <header className="max-w-4xl mx-auto  mt-5 bg-white  rounded-lg shadow-md   min-h-[72px] py-4 px-6">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 ">
          <div className="text-lg text-gray-400">{`${greeting} ${userName}`}</div>
          <div className="text-lg text-gray-400">{`${formattedDate}`}</div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
