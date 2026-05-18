const Badge = ({ item, uppercase, dark }: { item: string; uppercase?: boolean; dark?: boolean }) => {
  return (
    <span
      key={item}
      className={`${uppercase ? "uppercase" : "first-letter:uppercase"} ${dark ? "bg-Gray/20" : "bg-Gray/40"} min-w-max rounded-md px-2 py-1 text-13 tracking-tighter`}
    >
      {item}
    </span>
  );
};

export default Badge;
