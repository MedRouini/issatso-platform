import ChatbotComponent from "../ui/chatbot";
import SideNav from "../ui/sidebar/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <ChatbotComponent />
      <div className="w-full min-h-screen bg-gray-50">{children}</div>
    </div>
  );
}
