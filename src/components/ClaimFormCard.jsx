import React from "react";

const ClaimFormCard = () => {
  return (
    <form
      className="p-8 rounded-xl shadow-md text-white"
      style={{ backgroundColor: "rgba(88, 105, 136, 0.9)" }}
    >
      <h2 className="text-4xl font-bold mb-8 text-white">Claim Form</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {/* Input fields */}
        <div className="relative">
          <input
            type="text"
            id="firstName"
            placeholder=" "
            className="peer w-full px-0.5 pt-8 pb-1 bg-transparent border-b border-gray-300 focus:outline-none focus:border-white text-white text-lg"
          />
          <label
            htmlFor="firstName"
            className="absolute left-0 top-1.5 text-gray-300 text-lg transition-all duration-200 transform scale-100 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-100"
          >
            First Name *
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="lastName"
            placeholder=" "
            className="peer w-full px-0.5 pt-8 pb-1 bg-transparent border-b border-gray-300 focus:outline-none focus:border-white text-white text-lg"
          />
          <label
            htmlFor="lastName"
            className="absolute left-0 top-1.5 text-gray-300 text-lg transition-all duration-200 transform scale-100 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-100"
          >
            Last Name *
          </label>
        </div>

        <div className="relative">
          <input
            type="tel" // Use type="tel" for phone numbers
            id="phoneNumber"
            placeholder=" "
            className="peer w-full px-0.5 pt-8 pb-1 bg-transparent border-b border-gray-300 focus:outline-none focus:border-white text-white text-lg"
          />
          <label
            htmlFor="phoneNumber"
            className="absolute left-0 top-1.5 text-gray-300 text-lg transition-all duration-200 transform scale-100 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-100"
          >
            Phone Number *
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            id="emailId"
            placeholder=" "
            className="peer w-full px-0.5 pt-8 pb-1 bg-transparent border-b border-gray-300 focus:outline-none focus:border-white text-white text-lg"
          />
          <label
            htmlFor="emailId"
            className="absolute left-0 top-1.5 text-gray-300 text-lg transition-all duration-200 transform scale-100 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-100"
          >
            Email ID *
          </label>
        </div>

        {/* Date of birth with calendar icon */}
        <div className="relative">
          <input
            type="date"
            id="dateOfBirth"
            placeholder=" "
            className="peer w-full px-0.5 pt-8 pb-1 bg-transparent border-b border-gray-300 focus:outline-none focus:border-white text-white text-lg appearance-none"
            onFocus={(e) => (e.target.type = "date")} // Ensures calendar icon appears on focus
            onBlur={(e) => {
              // Reverts to text if no date selected to show placeholder
              if (!e.target.value) e.target.type = "text";
            }}
          />
          <label
            htmlFor="dateOfBirth"
            className="absolute left-0 top-1.5 text-gray-300 text-lg transition-all duration-200 transform scale-100 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-100"
          >
            Date of birth *
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="jobTitle"
            placeholder=" "
            className="peer w-full px-0.5 pt-8 pb-1 bg-transparent border-b border-gray-300 focus:outline-none focus:border-white text-white text-lg"
          />
          <label
            htmlFor="jobTitle"
            className="absolute left-0 top-1.5 text-gray-300 text-lg transition-all duration-200 transform scale-100 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-100"
          >
            Job Title*
          </label>
        </div>

        {/* Date of Diagnosis with calendar icon */}
        <div className="relative">
          <input
            type="date"
            id="dateOfDiagnosis"
            placeholder=" "
            className="peer w-full px-0.5 pt-8 pb-1 bg-transparent border-b border-gray-300 focus:outline-none focus:border-white text-white text-lg appearance-none"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
          />
          <label
            htmlFor="dateOfDiagnosis"
            className="absolute left-0 top-1.5 text-gray-300 text-lg transition-all duration-200 transform scale-100 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-100"
          >
            Date of Diagnosis*
          </label>
        </div>

        {/* Type of Diagnosis with dropdown icon */}
        <div className="relative">
          <select
            id="typeOfDiagnosis"
            className="peer w-full px-0.5 pt-8 pb-1 bg-transparent border-b border-gray-300 focus:outline-none focus:border-white text-white text-lg appearance-none"
          >
            <option
              value=""
              disabled
              selected
              className="bg-[#586988] text-gray-300"
            >
              {/* This empty option with selected and disabled makes the placeholder visible */}
            </option>
            <option value="type1" className="bg-[#586988] text-white">
              Type 1
            </option>
            <option value="type2" className="bg-[#586988] text-white">
              Type 2
            </option>
            <option value="type3" className="bg-[#586988] text-white">
              Type 3
            </option>
          </select>
          <label
            htmlFor="typeOfDiagnosis"
            className="absolute left-0 top-1.5 text-gray-300 text-lg transition-all duration-200 transform scale-100 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-100"
          >
            Type of Diagnosis*
          </label>
        </div>
      </div>

      {/* Textarea for story */}
      <div className="relative mt-8">
        <textarea
          id="story"
          placeholder=" "
          className="peer w-full px-0.5 pt-8 pb-1 bg-transparent border-b border-gray-300 focus:outline-none focus:border-white text-white text-lg h-24 resize-none"
        />
        <label
          htmlFor="story"
          className="absolute left-0 top-1.5 text-gray-300 text-lg transition-all duration-200 transform scale-100 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-100"
        >
          Tell us your story (optional)
        </label>
      </div>

      {/* Checkboxes */}
      <div className="mt-8 text-sm space-y-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 w-5 h-5 accent-gray-300 border-gray-300 rounded"
          />
          <span className="text-gray-300">
            I agree to the{" "}
            <a href="#" className="underline text-white">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-white">
              disclaimer
            </a>{" "}
            and give my express written consent to be contacted regarding my
            case options. I understand that I may be contacted using automatic
            dialing equipment. Message and data rates may apply. My consent does
            not require purchase. This is Legal advertising.
          </span>
        </label>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 w-5 h-5 accent-gray-300 border-gray-300 rounded"
          />
          <span className="text-gray-300">
            Please check this box to verify you're a person.
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-10 bg-white text-[#345670] font-bold py-3.5 w-full rounded-full hover:bg-gray-100 transition-colors text-lg"
      >
        Start your claim now
      </button>
    </form>
  );
};

export default ClaimFormCard;
