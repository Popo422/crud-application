"use client";
import { signOut, useSession } from "next-auth/react";
import { BiMenu, BiUser } from "react-icons/bi";
import User from "./User";
import { redirect } from "next/navigation";

const Header = () => {
  const session = useSession();
  const { data: sessionData } = session;

  return (
    <div className="w-full bg-base-100 flex justify-between p-4 items-center">
      {sessionData ? (
        <User session={sessionData} />
      ) : (
        <button
          type="submit"
          className=" btn btn-neutral"
          onClick={() => {
            redirect("/login");
          }}
        >
          Sign In
        </button>
      )}
      <span>Crud App</span>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">
          <BiMenu size={22} />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <button
              type="submit"
              className="w-full btn btn-neutral"
              onClick={async () => {
                signOut({ callbackUrl: "/login" });
              }}
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
