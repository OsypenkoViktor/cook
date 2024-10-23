import SettingSection from "./settingsSection/SettingsSection";

const Navbar = () => {
  return (
    <div className="h-12 w-screen bg-primary text-background flex justify-between items-center">
      <div className="text-lg px-2">Cook App</div>
      <SettingSection />
    </div>
  );
};

export default Navbar;
