import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <h1>タイトルロゴ</h1>
      <nav>
        <ul>
          <li>ホーム</li>
          <li>サービス一覧</li>
          <li>おすすめ記事</li>
          <li>資料請求</li>
        </ul>
      </nav>
      <h3>書き方事例集</h3>
      <p>↓画面遷移方法</p>
      <Link href={"/profilePage"} legacyBehavior>
        <a>プロフィール画面に遷移</a>
      </Link>
      <p>↓画像挿入方法</p>
      <Image
        src={"/vercel.svg"}
        alt={"テストアイコン"}
        width={100}
        height={100}
      />
      <p>&copy;2021 WEBCAMP MEDIA</p>
    </footer>
  );
}

export default Footer;
