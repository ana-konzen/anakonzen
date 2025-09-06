export default function Line({ length = 100, ver = false }: { length?: number; ver?: boolean }) {
  return (
    <div style={{ width: ver ? 1 : length, height: ver ? length : 1 }} className={` mb-1 bg-foreground`} />
  );
}
