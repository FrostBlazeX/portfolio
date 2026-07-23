function Container({ children }: { children: React.ReactNode }) {
  const className = "max-w-6xl mx-auto px-4";
  return <div className={className}>{children}</div>;
}
export default Container;
