import { PropsWithChildren } from "react";

type BentoLayoutProps = PropsWithChildren;

const BentoLayout = ({ children }: BentoLayoutProps) => {
  return (
    <>
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {children}
        </div>
      </main>
    </>
  );
};

export default BentoLayout;
