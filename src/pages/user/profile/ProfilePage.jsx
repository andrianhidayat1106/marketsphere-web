import Navbar from "../../../components/layout/Navbar.jsx";
import Security from "./component/Security.jsx";
import ProfileInfo from "./component/ProfileInfo.jsx";
import SavedAddress from "./component/SavedAddress.jsx";
import Copyright from "../../../components/layout/Copyright.jsx";
import RecentOrders from "./component/RecentOrders.jsx";

const ProfilePage = () => {
  const addresses = [
    {
      id: 1,
      label: "Home",
      name: "Johnathan Doe",
      phone: "+65 9123 4567",
      address: "123 Orchard Road, #12-34\nSingapore 238881",
      isDefault: true,
    },
    {
      id: 2,
      label: "Office",
      name: "Johnathan Doe",
      phone: "+65 9123 4567",
      address: "8 Marina View, Asia Square Tower 1\nSingapore 018960",
      isDefault: false,
    },
  ];

  const recentOrders = [
    {
      id: "ORD-1092348",
      name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
      price: "$349.00",
      date: "2 days ago",
      status: "SHIPPED",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "ORD-1092110",
      name: "Minimalist Smartwatch Series 8",
      price: "$199.00",
      date: "1 week ago",
      status: "DELIVERED",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        {/* Navigation Bar */}
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
          <div className="flex gap-8">
            {/* Right Content Area */}
            <div className="flex-grow space-y-8">
              <div className="flex flex-col gap-1 mb-2">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                  My Account
                </h1>
                <p className="text-slate-500 font-medium">
                  Manage your personal information and security settings.
                </p>
              </div>

              {/* Profile & Security Grid */}
              <div className="grid grid-cols-12 gap-8">
                {/* Personal Profile Card */}
                <ProfileInfo />
                {/* Security Card */}
                <Security />
              </div>

              {/* Saved Addresses Section */}
              <SavedAddress addresses={addresses} />
              {/* Recent Orders Section */}
              <RecentOrders recentOrders={recentOrders} />
            </div>
          </div>
        </main>

        {/* Footer */}
      </div>
      <Copyright />
    </>
  );
};

export default ProfilePage;
