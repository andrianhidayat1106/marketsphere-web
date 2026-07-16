import {
  CheckCircle2,
  ChevronRight,
  Clock,
  Package,
  Receipt,
} from "lucide-react";
import Card from "../../../../components/common/Card.jsx";
import { Link } from "react-router-dom";

export default function RecentOrders({ recentOrders }) {
  return (
    <Card>
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-50 rounded-xl text-orange-500">
            <Package size={20} />
          </div>
          <h2 className="font-bold text-lg text-slate-900">Recent Orders</h2>
        </div>
        <Link
          to={"/profile/orders"}
          className="text-sm font-bold text-[#00aa5b] hover:underline flex items-center gap-1"
        >
          View All <ChevronRight size={16} />
        </Link>
      </div>

      <div className="space-y-6">
        {recentOrders.map((order) => (
          <div
            key={order.id}
            className="flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
          >
            <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={order.image}
                alt={order.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow min-w-0">
              <h4 className="font-bold text-slate-900 truncate mb-1">
                {order.name}
              </h4>
              <p className="text-xs text-slate-400 font-semibold mb-3">
                Order #{order.id} • {order.date}
              </p>
              <div className="flex items-center gap-2">
                {order.status === "SHIPPED" ? (
                  <span className="flex items-center gap-1 text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg uppercase tracking-wider">
                    <Clock size={10} /> Shipped
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg uppercase tracking-wider">
                    <CheckCircle2 size={10} /> Delivered
                  </span>
                )}
              </div>
            </div>
            <div className="text-right flex flex-col items-end gap-3">
              <p className="text-lg font-black text-slate-900">{order.price}</p>
              <button
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                  order.status === "SHIPPED"
                    ? "border-2 border-[#00aa5b] text-[#00aa5b] hover:bg-[#00aa5b] hover:text-white"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {order.status === "SHIPPED" ? "Track" : "Buy Again"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
