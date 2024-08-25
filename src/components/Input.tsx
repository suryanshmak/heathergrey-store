export const Input = ({ value, setValue, ...props }: any) => {
  return (
    <div className="border border-gray-300 p-3">
      <input
        className="h-full w-full outline-none text-black placeholder:text-slate-500"
        {...props}
      />
    </div>
  );
};
