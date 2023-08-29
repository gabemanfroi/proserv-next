import { ContactItemIcon } from "@/components/Home/Sections/Contact/Contact.item.icon";
import { ContactItemDescription } from "@/components/Home/Sections/Contact/Contact.item.description";

export const ContactItemRoot = ({ icon: IconComponent, children, color }) => {
  return <div className="flex items-center gap-2 ">{children}</div>;
};

export const ContactItem = {
  Root: ContactItemRoot,
  Icon: ContactItemIcon,
  Description: ContactItemDescription,
};
