const InfoIcon = ({ size = 18, color = "currentColor", ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 10.977a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0v-6Z" />
    <path d="M12 6.055a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default InfoIcon;
