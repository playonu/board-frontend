import { useState } from "react";

function Header() {
  const [loginInfo, setLoginInfo] = useState<boolean>(true);
  return (
    <nav className="bg-black flex justify-end">
      {loginInfo ? (
        <>
          <div style={{ color: "white", fontSize: "18px", marginRight: "3px" }}>
            아이디
          </div>
          <div>
            <button
              className="rounded-[2px]"
              style={{ color: "white", fontSize: "18px", margin: "3px" }}
            >
              로그아웃
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            className="rounded-[2px]"
            style={{ color: "white", fontSize: "18px", margin: "3px" }}
          >
            로그인
          </button>
        </>
      )}
    </nav>
  );
}

export default Header;
