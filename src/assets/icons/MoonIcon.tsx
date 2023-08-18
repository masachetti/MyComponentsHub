const MoonIcon = ({ size = 18, color = "currentColor", ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.375 22.5A10.875 10.875 0 0 1 1.5 11.625c0-4.406 2.531-8.357 6.45-10.063a.75.75 0 0 1 .988.988c-.45 1.033-.688 2.356-.688 3.825 0 5.17 4.206 9.375 9.375 9.375 1.47 0 2.792-.238 3.826-.688a.751.751 0 0 1 .987.988c-1.706 3.919-5.657 6.45-10.063 6.45Z" />
  </svg>
);

export default MoonIcon;
