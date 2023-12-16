import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

// スタイルクラスの定義
const Style = {
  HeaderContainerFixed: "sticky top-0 w-full bg-gray-300 dark:bg-gray-900 text-white z-50", // スクロールで隠れないヘッダーコンテナ
  HeaderContainer: "w-full bg-gray-300 dark:bg-gray-900 text-white", // 通常のヘッダーコンテナ
  HeaderInner: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto",
  LogoText: "text-2xl font-semibold m-4",
  MenuContainer: "flex flex-row",
  MenuPanelSwiped: "font-medium flex flex-col p-0 rounded-lg md:flex-row md:space-x-8",
  MenuPanelPopup:
    "absolute right-4 w-56 origin-top-right divide-y divide-gray-100 shadow-lg ring-1 ring-black/5 focus:outline-none",
  MenuPanelPopupWide: "absolute w-screen divide-y divide-gray-100 bg-gray-600",
  Menu: "block rounded-md px-4 py-2 text-base font-medium hover:text-blue-500",
  MenuButton: "inline-flex items-center m-4 w-10 h-10 justify-center text-sm rounded-lg hover:bg-gray-700",
};

// ナビゲーションアイテムの型定義
interface Navigation {
  name: string;
  href: string;
}

// ロゴコンポーネント
function Logo() {
  return (
    <a href="https://flowbite.com/" className={Style.LogoText}>
      CMG-ART
    </a>
  );
}

// ナビゲーションメニューコンポーネント
function Navigations({ navigations }: { navigations: Navigation[] }) {
  const pathname = usePathname();

  return (
    <>
      {navigations.map((item) => (
        // 現在のURLと一致する場合は青文字にする
        <a key={item.name} href={item.href} className={pathname === item.href ? "text-orange-500" : ""}>
          <div className={Style.Menu}>{item.name}</div>
        </a>
      ))}
    </>
  );
}

// シンプルなヘッダーコンポーネント
export function HeaderSimple({ navigations }: { navigations: Navigation[] }) {
  return (
    <div className={Style.HeaderContainerFixed}>
      <nav className={Style.HeaderInner}>
        <Logo />
        <div className={Style.MenuContainer}>
          <Navigations navigations={navigations} />
        </div>
      </nav>
    </div>
  );
}

// レスポンシブなヘッダーコンポーネント
export function HeaderResponsive({ navigations }: { navigations: Navigation[] }) {
  return (
    <div className={Style.HeaderContainerFixed}>
      <Disclosure as="nav" className={Style.HeaderInner}>
        <Logo />

        {/* スマホ&タブレット */}
        <div className="md:hidden">
          <Disclosure.Button className={Style.MenuButton}>
            <Bars3Icon className="block h-6 w-6" />
          </Disclosure.Button>
        </div>
        <div className="md:hidden w-full flex flex-row">
          <Disclosure.Panel as="ul" className={Style.MenuPanelPopupWide}>
            <Navigations navigations={navigations} />
          </Disclosure.Panel>
        </div>

        {/* PC */}
        <div className="hidden md:block">
          <div className={Style.MenuContainer}>
            <Navigations navigations={navigations} />
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

// サンプルのヘッダーコンポーネント
export default function HeaderExample() {
  const navigations = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Calendar", href: "/calendar" },
  ];

  return <HeaderResponsive navigations={navigations} />;
}
