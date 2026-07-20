type SectionHeadingProps = {
  name: string;
};

function SectionHeading({ name }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-center gap-4 md:mb-12">
      <h2 className="whitespace-nowrap text-3xl font-semibold tracking-tight">
        {name}
      </h2>
    </div>
  );
}

export default SectionHeading;
