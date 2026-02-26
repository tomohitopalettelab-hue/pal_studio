import "./globals.css"; // ここで読み込むのが正解です
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palette AI",
  description: "Next Generation UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* どんなエラーが起きても背景色だけは強制する設定 */}
      <body style={{ backgroundColor: '#F0F2F5', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}