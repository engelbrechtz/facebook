const HeaderIcon = ({ Icon, active }) => {
  return (
    <div className="cursor-pointer sm:h-14 md:hover:bg-gray-50 flex items-center rounded-xl active:border-b-2 active:border-blue-500 group">
      <Icon
        className={`h-5 text-gray-500 md:px-10 group-hover:text-blue-500 text-center sm:h-7 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
};

export default HeaderIcon;
