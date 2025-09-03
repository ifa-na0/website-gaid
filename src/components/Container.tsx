export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6">{children}</div>
  );
}
