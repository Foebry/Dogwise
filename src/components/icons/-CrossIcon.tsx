const CrossIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = 20 }) => {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height={width} width={width} xmlns="http://www.w3.org/2000/svg">
      <title>Cross Icon</title>
      <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
    </svg>
  );
};

export default CrossIcon;
