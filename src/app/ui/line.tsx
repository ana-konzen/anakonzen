export default function Line({ length = 100 }: { length?: number }) {
  return <div style={{ width: length }} className={` h-[1px] mb-1 bg-foreground`} />;
}
