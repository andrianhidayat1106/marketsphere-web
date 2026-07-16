import { MapPin, Plus } from "lucide-react";
import Card from "../../../../components/common/Card.jsx";
import { Link } from "react-router-dom";
import Button from "../../../../components/common/Button.jsx";
import { useState } from "react";
import CardAddress from "./CardAddress.jsx";
export default function SavedAddress({ addresses }) {
  const [defaultAddress, setDefaultAddress] = useState(1);

  return (
    <Card>
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-xl text-blue-500">
            <MapPin size={20} />
          </div>
          <h2 className="font-bold text-lg text-slate-900">Saved Addresses</h2>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="blue">
            <span>Set Default</span>
          </Button>
          <Link to={"/profile/address/new"}>
            <Button>
              <Plus size={18} />
              <span>Add New</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {addresses.map((addr) => (
          <CardAddress address={addr}></CardAddress>
        ))}
      </div>
    </Card>
  );
}
