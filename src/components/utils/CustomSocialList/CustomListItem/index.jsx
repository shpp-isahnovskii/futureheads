const CustomListItem = ({ href, className, onMouseEnter, onMouseLeave }) => {
  return (
    <>
      <li
        className="w-5 transition-all hover:text-2xl"
        onMouseEnter={() => {
          onMouseEnter();
        }}
        onMouseLeave={() => {
          onMouseLeave();
        }}
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          <span className={className} />
        </a>
      </li>
    </>
  );
};

export default CustomListItem;
