import React from "react";
import Link from "next/link";

function ProfilePage() {
  return (
    <div>
      <h1>ここはスタッフ紹介です</h1>
      <Link href={"/"}>ホームに戻る</Link>
    </div>
  );
}

export default ProfilePage;
