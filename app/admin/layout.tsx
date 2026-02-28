import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // このファイルは /admin ルートグループの共通レイアウトです。
  // 現在、app/admin/page.tsx が自身の完全なレイアウトを定義しているため、
  // このレイアウトコンポーネントは子要素をそのままレンダリングします。
  return <>{children}</>;
}