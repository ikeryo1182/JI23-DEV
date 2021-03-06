import React from "react";
import style from "./Header.module.scss";
import Link from "next/link";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import HeaderProps from "../../models/HeaderProps";

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { title, subTitle, linkProps, imgProps } = props;

  return (
    <header className={style.head}>
      <div className={style.logo}>
        <Link href="/" as={`/`}>
          <a>
            <img src="/logo.png" alt="ロゴ画像" />
          </a>
        </Link>
      </div>
      <div className="container">
        <div className={style.row}>
          <div className={style.titleArea}>
            <div className={style.icon}>
              <img {...imgProps} alt="ヘッダー画像" />
            </div>
            <div>
              <h2>{title}</h2>
              <h3 style={{ fontWeight: "normal" }}>{subTitle}</h3>
            </div>
          </div>
          <Link {...linkProps}>
            <IconButton
              size="medium"
              className={style.close}
              aria-label="閉じる"
            >
              <CloseIcon />
            </IconButton>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
