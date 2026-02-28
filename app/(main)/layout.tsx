import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palette AI",
  description: "Next Generation UI",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* html, bodyタグを削除し、divに変更。スタイルは維持 */
    <div style={{ backgroundColor: '#F0F2F5' }} className="fixed inset-0 overflow-hidden touch-none">
      {children}
    </div>
  );
}
