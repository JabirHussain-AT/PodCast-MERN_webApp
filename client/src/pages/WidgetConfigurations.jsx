import React, { useState } from "react";
import axios from "axios";
import SecondNav from "../components/commonComponents/SecondNav";
import Loading from "../components/commonComponents/Loading";
import InputField from "../components/commonComponents/InputFiled";
import TabSwitch from "../components/commonComponents/TabSwitch";
import DisplaySettings from "../components/WidgetConfig/DisplaySettings";

const WidgetConfigurations = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [formData, setFormData] = useState({
    chatbotName: "",
    welcomeMessage: "",
    inputPlaceholder: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  //validation
  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value.length < 4) {
        newErrors[key] = "Minimum 4 characters required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Half-second delay
      const response = await axios.post("/api/submit", formData);
      console.log(response.data);
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle error (e.g., show an error message)
    } finally {
      setIsLoading(false);
    }
  };

  //spinning overlay
  const LoadingOverlay = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg">
        <Loading />
      </div>
    </div>
  );

  return (
    <div>
      {isLoading && <LoadingOverlay />}
      {/* nav */}
      <SecondNav
        projectName={"Sample Project"}
        pageName={"Widget Configuration"}
      />
      {/* head */}
      <div className="min-w-full">
        <h1 className="font-roboto font-bold text-3xl text-primary my-8">
          Configuration
        </h1>
      </div>

      {/* tabs */}
      <TabSwitch
        tabs={["General", "Display", "Advanced"]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Conditional rendering based on active tab */}
      {activeTab === "General" && (
        <form onSubmit={handleSubmit} className="mt-8">
          <InputField
            label="Chat bot Name"
            id="chatbotName"
            value={formData.chatbotName}
            onChange={handleInputChange}
            error={errors.chatbotName}
            helperText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod et dolore magna aliqua."
          />
          <InputField
            label="Welcome Message"
            id="welcomeMessage"
            value={formData.welcomeMessage}
            onChange={handleInputChange}
            error={errors.welcomeMessage}
          />
          <InputField
            label="Input Placeholder"
            id="inputPlaceholder"
            value={formData.inputPlaceholder}
            onChange={handleInputChange}
            error={errors.inputPlaceholder}
          />
          <button
            type="submit"
            className="bg-primary text-white font-roboto font-semibold py-2 px-4 rounded"
            disabled={isLoading}
          >
            {"Submit"}
          </button>
        </form>
      )}

      {activeTab === "Display" && <DisplaySettings />}
      {activeTab === "Advanced" && <h1 className="text-roboto text-primary">On Progress...</h1>}
    </div>
  );
};

export default WidgetConfigurations;
