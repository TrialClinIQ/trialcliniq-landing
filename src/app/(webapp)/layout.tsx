export default function WebAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col">
      {/* Add webapp-specific layout elements here (sidebar, nav, etc.) */}
      {children}
    </div>
  );
}
