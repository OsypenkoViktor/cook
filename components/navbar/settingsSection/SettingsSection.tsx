import Button from "@/components/simpleComponents/button/Button";
import Tooltip from "@/components/simpleComponents/tooltip/Tooltip";
import { GearIcon, PersonIcon } from "@radix-ui/react-icons";

export default function SettingSection() {
  return (
    <div className="inline-flex border-l border-border mr-4">
      <Tooltip message="Common settings">
        <Button type="icon" size="small" className="mx-2">
          <GearIcon />
        </Button>
      </Tooltip>
      <Tooltip message="Profile">
        <Button type="icon" size="small" className="mx-2">
          <PersonIcon />
        </Button>
      </Tooltip>
    </div>
  );
}
