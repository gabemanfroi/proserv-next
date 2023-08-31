export const ContactItemIcon = ({ children, icon: IconComponent, color }) => {
  return <IconComponent size={36} color={color ?? "rgb(251, 191, 36)"} />;
};
