import React from "react";
import Link from "next/link";

function BlogPage() {
  return (
    <div>
      <h1>ブログページ</h1>
      <Link href={"/"}>ホームに戻る</Link>
    </div>
  );
}

export default BlogPage;
