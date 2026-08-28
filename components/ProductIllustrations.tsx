import Image from "next/image";

function ProductPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative flex h-40 items-center justify-center overflow-hidden" aria-hidden="true">
      <Image src={src} alt={alt} width={600} height={600} className="h-full w-full object-contain transition duration-500 group-hover:scale-105" />
    </div>
  );
}

export function PosMini() {
  return <ProductPhoto src="/images/products/pos-terminal-real.png" alt="" />;
}

export function TerminalMini() {
  return <ProductPhoto src="/images/products/card-reader.png" alt="" />;
}

export function AccountingMini() {
  return <ProductPhoto src="/images/products/accounting-dashboard.png" alt="" />;
}

export function ServiceMini() {
  return <ProductPhoto src="/images/products/service-support.png" alt="" />;
}

export function ReportingMini() {
  return <ProductPhoto src="/images/products/reporting-dashboard.png" alt="" />;
}
