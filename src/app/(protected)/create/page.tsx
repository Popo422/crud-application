"use client";

import Header from "@/app/components/Header";
import SelectAutocomplete from "@/app/components/SelectAutoComplete";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

const Create = () => {
  const session = useSession();
  if (!session) {
    redirect("/login");
  }

  const [record, setRecord] = useState({
    firstName: "",
    lastName: "",
    country: "",
    accountType: "",
    username: "",
    email: "",
    contactNumber: "",
    image: "",
    userId: "",
  });
  return (
    <div className="w-full h-full flex flex-col items-center ">
      <Header />
      <form className="form-control w-full max-w-xs pt-5">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Country</span>
          </label>
          <SelectAutocomplete
            label="Status"
            options={[
              { value: "India", label: "India" },
              { value: "USA", label: "USA" },
            ]}
            value={record.country}
            onChange={(value) => {
              setRecord({ ...record, country: value });
            }}
            isSearchable
            isClearable
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Account Type</span>
          </label>
          <SelectAutocomplete
            label="Status"
            options={[
              { value: "Admin", label: "Admin" },
              { value: "User", label: "User" },
            ]}
            value={record.accountType}
            onChange={(value) => {
              setRecord({ ...record, accountType: value });
            }}
            isSearchable
            isClearable
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setRecord({ ...record, username: e.target.value })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) =>
              setRecord({ ...record, firstName: e.target.value })
            }
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setRecord({ ...record, lastName: e.target.value })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setRecord({ ...record, email: e.target.value })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Contact Number</span>
          </label>
          <input
            type="text"
            placeholder="Contact Number"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) =>
              setRecord({ ...record, contactNumber: e.target.value })
            }
          />
        </div>
        {/* photo upload */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            placeholder="Photo"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setRecord({ ...record, image: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
