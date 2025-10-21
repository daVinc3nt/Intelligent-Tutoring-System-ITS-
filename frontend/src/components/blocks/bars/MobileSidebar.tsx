import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Home,
  Users,
  Settings,
  BookOpen,
  FileText,
  BarChart3,
  UserPlus,
  MessageSquare,
  User,
  CreditCard,
  Command,
  LogOut,
  Star,
  Building2
} from "lucide-react";
import { LogoIcon } from "../../icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image";
import { useSidebar } from "@/context/SidebarContext";
import { useEffect } from "react";
import { ThemeSelector } from "@/components/widgets/ThemeSwitcher/ThemeSelector";
import { useSession } from "@/context/Sessioncontext";

export default function MobileSidebar() {
  const { isOpen, setIsOpen } = useSidebar();
  const pathname = usePathname();
  const { session } = useSession(); // Fetch session data
  const navigationLinks = [
    { title: "Home", route: "/dashboard/home", icon: <Home size={18} /> },
    { title: "Student Management", route: "/dashboard/student-management", icon: <Users size={18} /> },
    { title: "Courses", route: "/dashboard/courses", icon: <BookOpen size={18} /> },
    { title: "Documents", route: "/dashboard/documents", icon: <FileText size={18} /> },
    { title: "Performance", route: "/dashboard/performance", icon: <BarChart3 size={18} /> },
    { title: "Contacts", route: "/dashboard/contacts", icon: <Users size={18} /> },
    { title: "Settings", route: "/dashboard/settings", icon: <Settings size={18} /> },
  ];

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden block fixed inset-0 bg-black bg-opacity-80 z-40 h-screen w-screen"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "lg:hidden flex w-64 fixed z-40 inset-y-0 left-0 bg-background Q overflow-y-auto border-r p-4 flex-col transition-transform duration-300",
          {
            "translate-x-0": isOpen,
            "-translate-x-full": !isOpen,
          }
        )}
      >
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-6 w-full justify-between">
          <div className="flex items-center gap-2 text-primary">
            <LogoIcon className="p-2 border rounded-md w-fit h-fit" />
            <span className=" font-bold text-lg">Acme</span>
          </div>
          
        </div>

        {/* Navigation */}
        <nav className="space-y-1 mb-6 w-full">
          {navigationLinks.map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className={clsx(
                "flex items-center gap-3 rounded px-2 py-2 hover:bg-accent",
                {
                  "bg-accent font-bold": pathname === link.route,
                }
              )}
            >
              {link.icon}
              <span className="text-sm font-medium">{link.title}</span>
            </Link>
          ))}
        </nav>

        {/* Favorites */}
        <div className="mb-6 w-full">
          <p className="text-sm font-semibold text-muted-foreground mb-3">
            Favorites
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex hover:cursor-pointer items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent hover:text-foreground transition-colors">
              <Star size={18} className="shrink-0" />
              <span className="text-sm font-medium">Starred Items</span>
            </div>
            <div className="flex hover:cursor-pointer items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent hover:text-foreground transition-colors">
              <Building2 size={18} className="shrink-0" />
              <span className="text-sm font-medium">Organizations</span>
            </div>
          </div>
        </div>
        
        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Actions */}
        <div className="border-t pt-4 flex flex-col gap-1 w-full">
          <button className="rounded-lg flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-2 transition-colors">
            <UserPlus size={18} className="shrink-0" />
            <span>Invite member</span>
          </button>
          <button className="rounded-lg flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-2 transition-colors">
            <MessageSquare size={18} className="shrink-0" />
            <span>Feedback</span>
          </button>
  
          <Popover>
            <PopoverTrigger asChild>
              <button className="rounded-lg flex items-center gap-3 text-sm hover:bg-accent px-3 py-2 transition-colors w-full">
                <div className="w-[20px] h-[20px] relative shrink-0">
                  <Image
                    className="rounded-full object-cover"
                    alt="User"
                    src={session?.avaUrl || "/user.jpg"}
                    fill
                  />
                </div>
                <span className="text-left truncate flex-1">
                  {session?.name || "Guest"}
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0 bg-background rounded-lg shadow-lg border" align="end">
              {/* User Info Header */}
              <div className="p-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 relative shrink-0">
                    <Image
                      className="rounded-full object-cover"
                      alt="User"
                      src={session?.avaUrl || "/user.jpg"}
                      fill
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate">{session?.name || "Guest"}</div>
                    <div className="text-xs text-muted-foreground truncate">{session?.email || "No email"}</div>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-2 space-y-1">
                <button className="flex items-center gap-3 w-full text-sm hover:bg-accent px-3 py-2 rounded-md transition-colors">
                  <User size={16} />
                  <span className="flex-1 text-left">Profile</span>
                  <span className="text-xs text-muted-foreground">⇧P</span>
                </button>
                <button className="flex items-center gap-3 w-full text-sm hover:bg-accent px-3 py-2 rounded-md transition-colors">
                  <CreditCard size={16} />
                  <span className="flex-1 text-left">Billing</span>
                  <span className="text-xs text-muted-foreground">⇧B</span>
                </button>
                <button className="flex items-center gap-3 w-full text-sm hover:bg-accent px-3 py-2 rounded-md transition-colors">
                  <Command size={16} />
                  <span className="flex-1 text-left">Command Menu</span>
                  <span className="text-xs text-muted-foreground">⌘K</span>
                </button>
                <div className="flex items-center gap-3 w-full text-sm px-3 py-2">
                  <Settings size={16} />
                  <span className="flex-1 text-left">Theme</span>
                  <ThemeSelector />
                </div>
              </div>

              {/* Logout */}
              <div className="p-2 border-t">
                <button className="flex items-center gap-3 w-full text-sm hover:bg-accent px-3 py-2 rounded-md transition-colors text-red-600 hover:text-red-700">
                  <LogOut size={16} />
                  <span className="flex-1 text-left">Log out</span>
                  <span className="text-xs text-muted-foreground">⇧L</span>
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </aside>
    </>
  );
}
